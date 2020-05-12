/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./FabricsAdjustment.scss";
import { uploadImage, setDocument } from "../../../services/Fundamental";
import { Upload, Icon, Modal, Button, Radio, message, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";

let isLoading = false;
const { Option } = Select;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}
export class FabricsAdjustment extends Component {
    state = {
        previewVisible: false,
        previewImage: "",
        fileList: [],
        fabricID: "",
        inputDisble: false,
        isImageChanged: false,
        isUpdate: false,
        currentFabric: {
            id: "",
            image: [],
            name: "",
            price: 0,
            quantity: 0,
            supplier: "",
            type: "",
            unit: "",
            typeName: "",
            origin: "",
            description: "",
        },
    };

    componentDidMount() {
        this._isMounted = true;
        const { fabrics } = this.props;
        let { fabricID, fileList } = this.state;
        if (
            window.location.pathname === "/admin/fabric-edit" &&
            fabrics.length > 0
        ) {
            let currentFabricID = window.location.hasOwnProperty("search")
                ? window.location.search.match(/id=(.*)\b/)[1]
                : fabricID;
            let currentFabric = {
                ...fabrics.find((fabric) => {
                    return fabric.id === currentFabricID;
                }),
            };
            if (currentFabric != null) {
                let imageName = currentFabric.image.map((url) => {
                    let path = url.match(/\o\/(.*)\?\b/)[1];
                    path = this.decode_utf8(path);
                    let name = path.split("/")[2];
                    return name;
                });
                fileList = currentFabric.image.map((element, index) => {
                    if (element != null && element !== "") {
                        return {
                            uid: index,
                            name: imageName[index],
                            status: "done",
                            url: element,
                            old: true,
                        };
                    } else {
                        return element;
                    }
                });
                if (this._isMounted) {
                    this.setState({
                        inputDisble: true,
                        fabricID: currentFabricID,
                        currentFabric,
                        previewImage: currentFabric.image,
                        fileList,
                    });
                }
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    decode_utf8 = (s) => {
        return decodeURIComponent(s);
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleImageChange = ({ fileList }) => {
        fileList.forEach((file) => {
            if (!file.hasOwnProperty("old")) {
                file.old = false;
            }
        });
        this.setState({
            fileList,
            isImageChanged: true,
            isUpdate: true,
        });
    };

    onTextChange = (e) => {
        let { currentFabric } = this.state;
        let value = e.target.value;
        let id = e.target.id;
        switch (id) {
            case "price":
                value = Number(value);
                break;
            case "quantity":
                value = Number(value);
                break;
            case "id":
                if (value != null && value !== "") {
                    currentFabric.type = value.split("")[0];
                }
                break;

            default:
                break;
        }
        currentFabric[id] = value;
        this.setState({
            currentFabric,
            isUpdate: true,
        });
    };

    onTypeNameChange = (value) => {
        let updateFabric = { ...this.state.currentFabric };
        if (!value) return;

        updateFabric.typeName = value;
        this.setState({
            currentFabric: updateFabric,
            isUpdate: true,
        });
    };

    onOriginChange = (value) => {
        let updateFabric = { ...this.state.currentFabric };
        if (!value) return;

        updateFabric.origin = value;
        this.setState({
            currentFabric: updateFabric,
            isUpdate: true,
        });
    };

    onUnitChange = (e) => {
        let { currentFabric } = this.state;
        currentFabric.unit = e.target.value;
        this.setState({
            currentFabric,
            isUpdate: true,
        });
    };

    onDescriptionChange = (e) => {
        let updateFabric = { ...this.state.currentFabric };
        let value = e.target.value;
        if (value != null) {
            updateFabric.description = value;
            this.setState({
                currentFabric: updateFabric,
                isUpdate: true,
            });
        }
    };

    onSaveHandling = () => {
        isLoading = true;
        this.setState({
            isLoading: true,
        });
        const { isUpdate } = this.state;
        if (isUpdate) {
            switch (window.location.pathname) {
                case "/admin/fabric-add":
                    this.addHandling();
                    break;
                case "/admin/fabric-edit":
                    this.updateHandling();
                    break;
                default:
                    break;
            }
        } else {
            message.warning("Vui lòng thay đổi nội dung!");
            isLoading = false;
        }
    };

    addHandling = () => {
        isLoading = true;
        let { currentFabric, fileList, isImageChanged } = this.state;
        const { fabrics } = this.props;
        if (
            currentFabric.id !== "" &&
            fabrics.find((fabric) => fabric.id === currentFabric.id) == null
        ) {
            if (fileList.length === 2) {
                if (isImageChanged) {
                    Promise.all([
                        uploadImage(
                            "image/fabrics/",
                            fileList[0].originFileObj
                        ),
                        uploadImage(
                            "image/fabrics/",
                            fileList[1].originFileObj
                        ),
                    ])
                        .then((downloadURLList) => {
                            currentFabric.image = downloadURLList;
                            setDocument(
                                "fabrics",
                                currentFabric,
                                currentFabric.id
                            ).then(() => {
                                isLoading = false;
                                window.history.back();
                            });
                        })
                        .catch(() => (isLoading = false));
                } else {
                    setDocument("fabrics", currentFabric, currentFabric.id)
                        .then(() => {
                            isLoading = false;
                            window.history.back();
                        })
                        .catch(() => (isLoading = false));
                }
            } else if (fileList.length === 0) {
                setDocument("fabrics", currentFabric, currentFabric.id)
                    .then(() => {
                        isLoading = false;
                        window.history.back();
                    })
                    .catch(() => (isLoading = false));
            } else {
                message.error("Yêu cầu có 2 hình ảnh được chọn!");
                isLoading = false;
            }
        } else {
            message.error(
                "FabricID không được trống hoặc trùng với các mẫu hiện tại!"
            );
            isLoading = false;
        }
    };

    updateHandling = () => {
        isLoading = true;
        let { currentFabric, fileList, isImageChanged } = this.state;
        const { fabrics } = this.props;
        if (fileList.length === 2) {
            if (isImageChanged) {
                let indexesOfChanged = [];
                fileList.forEach((file, index) => {
                    if (!file.old) {
                        indexesOfChanged.push(index);
                    }
                });
                let promiseFunctionArray = indexesOfChanged.map((index, i) => {
                    return uploadImage(
                        "image/fabrics/",
                        fileList[index].originFileObj
                    );
                });
                Promise.all([...promiseFunctionArray])
                    .then((downloadURLList) => {
                        indexesOfChanged.forEach((index, i) => {
                            currentFabric.image[index] = downloadURLList[i];
                        });
                        setDocument(
                            "fabrics",
                            currentFabric,
                            currentFabric.id
                        ).then(() => {
                            isLoading = false;
                            window.history.back();
                        });
                    })
                    .catch(() => (isLoading = false));
            } else {
                setDocument("fabrics", currentFabric, currentFabric.id)
                    .then(() => {
                        isLoading = false;
                        window.history.back();
                    })
                    .catch(() => (isLoading = false));
            }
        } else if (fileList.length === 0) {
            setDocument("fabrics", currentFabric, currentFabric.id)
                .then(() => {
                    isLoading = false;
                    window.history.back();
                })
                .catch(() => (isLoading = false));
        } else {
            message.error("Vui lòng chọn 2 hình ảnh!");
            isLoading = false;
        }
    };

    render() {
        const {
            previewVisible,
            previewImage,
            fileList,
            currentFabric,
            inputDisble,
        } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        console.table(currentFabric);
        return (
            <div className="pageFabricsAdjustment">
                <div className="headerPageFabrics d-flex flex-row justify-content-between align-items-center">
                    <h2
                        className="d-flex justify-content-start"
                        style={{ margin: 0 }}
                    >
                        {this.props.title}
                    </h2>
                    <Button
                        className="buttonAddFabrics d-flex align-items-center"
                        loading={isLoading}
                        onClick={this.onSaveHandling}
                    >
                        Save
                    </Button>
                </div>

                <div className="fabricsAdjustment">
                    <div className="inputContentHeader d-flex flex-row justify-content-between align-items-center">
                        <div className="clearfix d-flex justify-content-start">
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleImageChange}
                            >
                                {fileList.length >= 2 ? null : uploadButton}
                            </Upload>
                            <Modal
                                visible={previewVisible}
                                footer={null}
                                onCancel={this.handleCancel}
                            >
                                <img
                                    alt="example"
                                    style={{ width: "100%" }}
                                    src={previewImage}
                                />
                            </Modal>
                        </div>
                        <div className="inputNameFabrics d-flex justify-content-end">
                            <p className="d-flex flex-row align-items-center">
                                Fabrics Name
                            </p>
                            <div className="inputName d-flex flex-row align-items-center">
                                <input
                                    id="name"
                                    className="form-control"
                                    type="text"
                                    placeholder="Tên mẫu vãi"
                                    value={currentFabric.name}
                                    onChange={this.onTextChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="inputContentBody d-flex">
                        <div className="col-6">
                            <div className="inputFabricsID d-flex">
                                <p className="d-flex flex-row align-items-center">
                                    Fabrics ID
                                </p>
                                <div className="inputID d-flex flex-row align-items-center">
                                    <input
                                        disabled={inputDisble}
                                        id="id"
                                        className="form-control"
                                        type="text"
                                        placeholder="Mã vãi"
                                        value={currentFabric.id}
                                        onChange={this.onTextChange}
                                    />
                                </div>
                            </div>

                            <div className="inputSupplier d-flex">
                                <p className="d-flex flex-row align-items-center">
                                    Supplier
                                </p>
                                <div className="d-flex flex-row align-items-center">
                                    <input
                                        id="supplier"
                                        className="form-control"
                                        type="text"
                                        placeholder="Tên nhà thiết kế"
                                        value={currentFabric.supplier}
                                        onChange={this.onTextChange}
                                    />
                                </div>
                            </div>

                            <div className="inputPrice d-flex">
                                <p className="d-flex flex-row align-items-center">
                                    Price
                                </p>
                                <div className="d-flex flex-row align-items-center">
                                    <input
                                        id="price"
                                        className="form-control"
                                        type="text"
                                        placeholder="Giá vải"
                                        value={currentFabric.price}
                                        onChange={this.onTextChange}
                                    />
                                </div>
                            </div>
                            <div className="inputFabricType d-flex">
                                <p className="d-flex flex-row align-items-center">
                                    Type Name
                                </p>
                                <Select
                                    value={currentFabric.typeName}
                                    style={{ width: 120 }}
                                    onChange={this.onTypeNameChange}
                                    allowClear
                                >
                                    <Option value="Voan">Voan</Option>
                                    <Option value="Kaki">Kaki</Option>
                                    <Option value="Lụa">Lụa</Option>
                                </Select>
                            </div>
                            <div className="inputOrigin d-flex">
                                <p className="d-flex flex-row align-items-center">
                                    Origin
                                </p>
                                <Select
                                    value={currentFabric.origin}
                                    style={{ width: 120 }}
                                    onChange={this.onOriginChange}
                                    allowClear
                                >
                                    <Option value="Việt Nam">Việt Nam</Option>
                                    <Option value="Hàn Quốc">Hàn Quốc</Option>
                                    <Option value="Thái Lan">Thái Lan</Option>
                                </Select>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="inputType d-flex">
                                <p className="d-flex flex-row align-items-center">
                                    Type
                                </p>
                                <div className="d-flex flex-row align-items-center">
                                    <input
                                        id="type"
                                        disabled={true}
                                        className="form-control"
                                        type="text"
                                        placeholder="Loại vải ( thay đổi dựa vào FabricID )"
                                        value={currentFabric.type}
                                    />
                                </div>
                            </div>
                            <div className="inputQuantity d-flex">
                                <p className="d-flex flex-row align-items-center">
                                    Quantity
                                </p>
                                <div className="d-flex flex-row align-items-center">
                                    <input
                                        id="quantity"
                                        className="form-control"
                                        type="text"
                                        placeholder="Số lượng vải"
                                        value={currentFabric.quantity}
                                        onChange={this.onTextChange}
                                    />
                                </div>
                            </div>
                            <div className="inputUnit d-flex">
                                <p className="d-flex flex-row align-items-center">
                                    Unit
                                </p>
                                <Radio.Group
                                    name="radiogroup"
                                    onChange={this.onUnitChange}
                                    value={currentFabric.unit}
                                    className="d-flex flex-row align-items-center"
                                >
                                    <Radio value="m">M</Radio>
                                    <Radio value="kg">Kg</Radio>
                                </Radio.Group>
                            </div>
                            <div className="inputDescription">
                                <TextArea
                                    id="description"
                                    defaultValue={currentFabric.description}
                                    value={currentFabric.description}
                                    onChange={this.onDescriptionChange}
                                    placeholder="Description"
                                    autoSize={{ minRows: 10, maxRows: 10 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FabricsAdjustment;
