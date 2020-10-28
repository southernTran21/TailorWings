import React, { useState } from "react";
import IconSearch from "../../../../assets/Icon/icon-search.svg";
import IconUpload from "../../../../assets/Icon/icon-upload.svg";
import XLSX from "xlsx";
import { make_cols } from "./MakeColumns";
import { SheetJSFT } from "./type";
import AdminPatternTable from "./UploadTable";
import { message } from "antd";
import { setDocument } from "services/FirebaseAPI/basic";
import ListLoader from "components/Loader/List";

const TABLE_HEADERS = [
    {
        id: "pattern",
        headers: ["id", "name", "price", "idPatternCollection", "discount"],
    },
    {
        id: "design",
        headers: [
            "id",
            "name",
            "description",
            "fabricTypeList",
            "designPrice",
            "idCategory",
            "idCollection",
            "complexity",
            "processPrice",
            "patternList",
            "usedFabric",
            "idDesigner",
            "metaTitle",
            "metaDescription",
            "keywords",
            "idBodyShape",
            "idCharacter",
            "discount",
        ],
    },
    {
        id: "fabricType",
        headers: [
            "id",
            "name",
            "idSuggestProject",
            "description",
            "feature",
            "breadth",
            "inventory",
            "price",
            "origin",
            "supplier",
            "metaData",
            "metaDescription",
            "keywords",
            "discount",
        ],
    },
];

function AdminDataUpload() {
    /*--------------*/
    // const [file, setFile] = useState({});
    const [data, setData] = useState(null);
    const [cols, setCols] = useState([]);
    const [uploadPattern, setUploadPattern] = useState([]);
    const [uploadFabricType, setUploadFabricType] = useState([]);
    const [uploadDesign, setUploadDesign] = useState([]);
    const [uploadProduct, setUploadProduct] = useState([]);
    const [dataType, setDataType] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    /*--------------*/
    /*********************************
     *  Description: on choosen file change
     *
     *
     *  Call by:
     */
    function onFileChange(e) {
        let files = e.target.files;
        if (files && files[0]) {
            files = files[0];
            /*--------------*/
            const reader = new FileReader();
            const rABS = !!reader.readAsBinaryString;
            reader.onload = (e) => {
                const bstr = e.target.result;
                const wb = XLSX.read(bstr, {
                    type: rABS ? "binary" : "array",
                    bookVBA: true,
                });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                setData(data.length > 0 ? data : null);
                setCols(make_cols(ws["!ref"]));
                updateUploadData(data);
            };

            if (rABS) {
                reader.readAsBinaryString(files);
            } else {
                reader.readAsArrayBuffer(files);
            }
            /*--------------*/
        }
    }
    /************_END_****************/
    /*********************************
     *  Description: prepare data for upload
     *
     *
     *  Call by:
     */
    function updateUploadData(data) {
        /*--------------*/
        switch (data[0].excelType) {
            case "pattern":
                const uploadPattern =
                    data.map((param) => {
                        const {
                            id,
                            name,
                            price,
                            idPatternCollection,
                            discount,
                        } = param;
                        /*--------------*/
                        return {
                            id: id ? id.split(" ").join("") : "",
                            name: name || "",
                            image: "",
                            price: price || "",
                            idPatternCollection: idPatternCollection || "",
                            discount: discount || "",
                            visibleStatus: true,
                        };
                    }) || [];
                if (uploadPattern.length > 0) {
                    setUploadPattern(uploadPattern);
                }
                setDataType("pattern");
                break;
            case "fabricType":
                const uploadFabricType = data.map((param) => {
                    const {
                        id,
                        name,
                        idSuggestProject,
                        description,
                        feature,
                        breadth,
                        inventory,
                        price,
                        origin,
                        supplier,
                        metaData,
                        metaDescription,
                        keywords,
                        discount,
                    } = param;
                    /*--------------*/
                    return {
                        id: id ? id.split(" ").join("") : "",
                        name: name || "",
                        idSuggestProject: idSuggestProject || "",
                        description: description || "",
                        feature: feature || "",
                        breadth: breadth || "",
                        inventory: inventory || "",
                        price: price || "",
                        origin: origin || "",
                        supplier: supplier || "",
                        metaData: metaData || "",
                        metaDescription: metaDescription || "",
                        keywords: keywords || "",
                        discount: discount || "",
                        visibleStatus: true,
                    };
                });
                if (uploadFabricType.length > 0) {
                    setUploadFabricType(uploadFabricType);
                }
                setDataType("fabricType");
                break;
            case "design":
                /*--------------*/
                const uploadDesign = data.map((param) => {
                    const {
                        id,
                        name,
                        description,
                        designPrice,
                        processPrice,
                        patternList,
                        usedFabric,
                        complexity,
                        metaTitle,
                        metaDescription,
                        keywords,
                        discount,
                    } = param;
                    /*--------------*/
                    return {
                        id: id ? id.split(" ").join("") : "",
                        image: "",
                        name: name || "",
                        description: description || "",
                        designPrice: designPrice || "",
                        processPrice: processPrice || "",
                        patternList: patternList || "",
                        usedFabric: usedFabric || "",
                        complexity: complexity || "",
                        metaTitle: metaTitle || "",
                        metaDescription: metaDescription || "",
                        keywords: keywords || "",
                        discount: discount || "",
                        visibleStatus: true,
                    };
                });
                /*--------------*/
                let uploadProduct = [];
                data.forEach((param) => {
                    const {
                        id,
                        discount,
                        idCategory,
                        idCollection,
                        idDesigner,
                        fabricTypeList,
                        idBodyShape,
                        idCharacter,
                        patternList,
                    } = param;
                    const patterns = patternList.split(",") || [];
                    patterns.forEach((pattern) => {
                        uploadProduct.push({
                            id:
                                id + pattern
                                    ? (id + pattern).split(" ").join("")
                                    : "",
                            image: "",
                            defaultStatus: false,
                            discount: discount || "",
                            visibleStatus: true,
                            idPattern: pattern || "",
                            idDesign: id ? id.split(" ").join("") : "",
                            idCategory: idCategory || "",
                            idCollection: idCollection || "",
                            idDesigner: idDesigner || "",
                            idFabricType: fabricTypeList || "",
                            idBodyShape: idBodyShape || "",
                            idCharacter: idCharacter || "",
                        });
                    });
                });
                /*--------------*/
                setUploadDesign(uploadDesign);
                setUploadProduct(uploadProduct);
                /*--------------*/
                setDataType("design");
                break;
            default:
                break;
        }
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description: handle confirm upload to database
     *
     *
     *  Call by:
     */
    function onConfirm() {
        /*--------------*/
        setIsLoading(true);
        /*--------------*/
        switch (dataType) {
            case "pattern":
                /*--------------*/
                if (uploadPattern.length > 0) {
                    /*--------------*/
                    let incorrectPriceFormat = [];
                    uploadPattern.forEach((pattern) => {
                        if (isNaN(pattern.price)) {
                            incorrectPriceFormat.push(pattern.id);
                        }
                    });
                    /*--------------*/
                    if (incorrectPriceFormat.length > 0) {
                        setIsLoading(false);
                        /*--------------*/
                        message.error(
                            `Giá tiền của ${incorrectPriceFormat.toString()} không được định dạng số`
                        );
                        /*--------------*/
                    } else {
                        const uploadPatternFunctions = uploadPattern.map(
                            (pattern) => {
                                return setDocument(
                                    "testPatterns",
                                    pattern,
                                    pattern.id
                                );
                            }
                        );
                        Promise.all(uploadPatternFunctions)
                            .then(() => {
                                setIsLoading(false);
                                message.success("Hoàn thành!");
                            })
                            .catch((error) => console.log("error :>> ", error));
                    }
                } else {
                    message.error("Không có mẫu vải hợp lệ!");
                }
                /*--------------*/
                break;

            case "fabricType":
                if (uploadFabricType.length > 0) {
                    /*--------------*/
                    let incorrectPriceFormat = [];
                    uploadFabricType.forEach((type) => {
                        if (isNaN(type.price)) {
                            incorrectPriceFormat.push(type.id);
                        }
                    });
                    /*--------------*/
                    if (incorrectPriceFormat.length > 0) {
                        setIsLoading(false);
                        /*--------------*/
                        message.error(
                            `Giá tiền của ${incorrectPriceFormat.toString()} không được định dạng số`
                        );
                        /*--------------*/
                    } else {
                        const uploadFabricTypeFunctions = uploadFabricType.map(
                            (type) => {
                                return setDocument(
                                    "testFabricType",
                                    type,
                                    type.id
                                );
                            }
                        );
                        Promise.all(uploadFabricTypeFunctions)
                            .then(() => {
                                setIsLoading(false);
                                message.success("Hoàn thành!");
                            })
                            .catch((error) => console.log("error :>> ", error));
                    }
                    /*--------------*/
                } else {
                    message.error("Không có loại vải hợp lệ!");
                }
                break;
            case "design":
                let uploadDesignFunctions = [];
                let uploadProductFunctions = [];
                /*--------------*/
                if (uploadDesign.length > 0) {
                    /*--------------*/
                    let incorrectPriceFormat = [];
                    let incorrectName = [];
                    let incorrectPatternList = [];
                    let incorrectUsedFabric = [];
                    uploadDesign.forEach((design) => {
                        /*--------------*/
                        if (
                            isNaN(design.designPrice) ||
                            isNaN(design.processPrice)
                        ) {
                            incorrectPriceFormat.push(design.id);
                        }
                        /*--------------*/
                        if (!design.name) {
                            incorrectName.push(design.id);
                        }
                        /*--------------*/
                        if (!design.patternList) {
                            incorrectPatternList.push(design.id);
                        }
                        /*--------------*/
                        if (isNaN(design.usedFabric)) {
                            incorrectUsedFabric.push(design.id);
                        }
                    });
                    /*--------------*/
                    if (
                        incorrectPriceFormat.length > 0 ||
                        incorrectName.length > 0 ||
                        incorrectPatternList.length > 0 ||
                        incorrectUsedFabric.length > 0
                    ) {
                        /*--------------*/
                        message.error({
                            content: (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <p>{`- Lỗi price: ${incorrectPriceFormat.toString()}`}</p>
                                    <p>{`- Lỗi name: ${incorrectName.toString()}`}</p>
                                    <p>{`- Lỗi patternList: ${incorrectPatternList.toString()}`}</p>
                                    <p>{`- Lỗi usedFabric: ${incorrectUsedFabric.toString()}`}</p>
                                </div>
                            ),
                        });
                    } else {
                        uploadDesignFunctions = uploadDesign.map((design) => {
                            return setDocument(
                                "testDesigns",
                                design,
                                design.id
                            );
                        });
                    }
                }
                /*--------------*/
                if (uploadProduct.length > 0) {
                    /*--------------*/
                    let emptyIdError = [];
                    /*--------------*/
                    uploadProduct.forEach((product) => {
                        const {
                            id,
                            idPattern,
                            idCategory,
                            idCollection,
                            idDesigner,
                            idFabricType,
                            idBodyShape,
                            idCharacter,
                        } = product;
                        /*--------------*/
                        if (
                            id === "" ||
                            idPattern === "" ||
                            idCategory === "" ||
                            idCollection === "" ||
                            idDesigner === "" ||
                            idFabricType === "" ||
                            idBodyShape === "" ||
                            idCharacter === ""
                        ) {
                            emptyIdError.push(product.idDesign);
                        }
                        /*--------------*/
                    });
                    /*--------------*/
                    if (emptyIdError.length > 0) {
                        /*--------------*/
                        message.error(
                            `-Lỗi id trống: ${emptyIdError.toString()}`
                        );
                    } else {
                        uploadProductFunctions = uploadProduct.map(
                            (product) => {
                                return setDocument(
                                    "testProducts",
                                    product,
                                    product.id
                                );
                            }
                        );
                    }
                }
                /*--------------*/
                if ( uploadProductFunctions.length > 0 ||  uploadDesignFunctions.length > 0) {
                    /*--------------*/
                    Promise.all(uploadDesignFunctions.concat(uploadDesignFunctions)).then(() => {
                        setIsLoading(false);
                        /*--------------*/
                        message.success("Hoàn thành");
                    }).catch((error) => {
                        setIsLoading(false);
                        /*--------------*/
                        message.error("Lỗi cập nhật cơ sổ dữ liệu");
                        console.log('error :>> ', error);
                    })
                } else {
                    setIsLoading(false);
                    /*--------------*/
                    message.error("Không có design để cập nhật!");
                }
                /*--------------*/

                break;
            default:
                break;
        }
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    let inputHeaders = [];
    if (data) {
        inputHeaders = TABLE_HEADERS.find(
            (header) => header.id === data[0].excelType
        );
    }
    /*--------------*/
    const inputData = data ? data : null;
    if (isLoading) return <ListLoader />;
    return (
        <div className="c-admin-data-upload">
            <div className="c-admin-data-upload__header">
                <div className="c-admin-data-upload--left">
                    <div className="c-admin-data-upload__search-box">
                        <img
                            src={IconSearch}
                            alt="search-icon"
                            className="c-admin-data-upload__icon-search"
                        />
                        <input
                            type="text"
                            placeholder="Bạn cần tìm gì?"
                            className="c-admin-data-upload__input-search"
                        />
                    </div>
                    <label className="c-admin-data-upload__button-upload">
                        Tải lên *.
                        <input
                            type="file"
                            id="file"
                            accept={SheetJSFT}
                            onChange={(e) => onFileChange(e)}
                        />
                        <img src={IconUpload} alt="upload-icon" />
                    </label>
                </div>
                <span
                    className="c-admin-data-upload__button-confirm"
                    onClick={onConfirm}
                >
                    Confirm
                </span>
            </div>
            <div className="c-admin-data-upload__table-wrapper">
                <AdminPatternTable
                    headers={inputHeaders.headers}
                    data={inputData}
                />
            </div>
        </div>
    );
}

export default AdminDataUpload;
