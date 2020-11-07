import { DESIGNS, PATTERNS, PRODUCTS } from "../../../../../constants";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import AdminImageUploadStatus from "./UploadStatus";
import { message } from "antd";
import firebase from "firebase/app";
import { updateDocument } from "services/FirebaseAPI/basic";

function AdminContentSection() {
    /*--------------*/
    const selectedPattern = useSelector((state) => state.admin.selectedPattern);
    const selectedProduct = useSelector((state) => state.admin.selectedProduct);
    const selectedDesign = useSelector((state) => state.admin.selectedDesign);
    const option = useSelector((state) => state.admin.option);
    /*--------------*/
    /*********************************
     *  Description: handle render for image upload status pattern
     *
     *
     *  Call by:
     */
    function imageUploadStatusForPattern() {
        /*--------------*/
        return (
            <div className="c-admin-image-upload-content__image-update">
                <AdminImageUploadStatus
                    type={option}
                    currentImage={
                        selectedPattern ? selectedPattern.image.normal : ""
                    }
                    imageID="normal"
                    handleImageUpload={handleImageUpload}
                />
                <AdminImageUploadStatus
                    type={option}
                    currentImage={
                        selectedPattern ? selectedPattern.image.mockup : ""
                    }
                    imageID="mockup"
                    handleImageUpload={handleImageUpload}
                />
            </div>
        );
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description: handle render for image upload status product
     *
     *
     *  Call by:
     */
    function imageUploadStatusForProduct() {
        /*--------------*/
        return (
            <div className="c-admin-image-upload-content__image-update">
                <AdminImageUploadStatus
                    type={option}
                    currentImage={
                        selectedProduct ? selectedProduct.image.T : ""
                    }
                    imageID="T"
                    handleImageUpload={handleImageUpload}
                />
                <AdminImageUploadStatus
                    type={option}
                    currentImage={
                        selectedProduct ? selectedProduct.image.S : ""
                    }
                    imageID="S"
                    handleImageUpload={handleImageUpload}
                />
                <AdminImageUploadStatus
                    type={option}
                    currentImage={
                        selectedProduct ? selectedProduct.image.C : ""
                    }
                    imageID="C"
                    handleImageUpload={handleImageUpload}
                />
            </div>
        );
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description: handle render for image upload status product
     *
     *
     *  Call by:
     */
    function imageUploadStatusForDesign() {
        /*--------------*/
        return (
            <div className="c-admin-image-upload-content__image-update">
                <AdminImageUploadStatus
                    type={option}
                    currentImage={selectedDesign ? selectedDesign.image.T : ""}
                    imageID="T"
                    handleImageUpload={handleImageUpload}
                />
                <AdminImageUploadStatus
                    type={option}
                    currentImage={selectedDesign ? selectedDesign.image.S : ""}
                    imageID="S"
                    handleImageUpload={handleImageUpload}
                />
                <AdminImageUploadStatus
                    type={option}
                    currentImage={selectedDesign ? selectedDesign.image.C : ""}
                    imageID="C"
                    handleImageUpload={handleImageUpload}
                />
            </div>
        );
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description:
     *
     *
     *  Call by:
     */
    function handleImageUpload(collection, imageID) {
        /*--------------*/
        let clearedCollection = collection.split(" ").join("");
        let clearedImageID = imageID.split(" ").join("");
        /*--------------*/
        switch (clearedCollection) {
            /*--------------*/
            case PATTERNS:
                if (selectedPattern) {
                    /*--------------*/
                    let imageRef = `image/patterns/${clearedImageID}`;
                    /*--------------*/
                    var storageRef = firebase.storage().ref();
                    var listRef = storageRef.child(imageRef);
                    /*--------------*/
                    listRef
                        .listAll()
                        .then(function (res) {
                            let itemRef = res.items.find((ref) => {
                                /*--------------*/
                                let nameSplitArray = ref.name.split("-");
                                let id = nameSplitArray[0];
                                let idFolder = nameSplitArray[
                                    nameSplitArray.length - 1
                                ].split(".")[0];
                                /*--------------*/
                                if (
                                    id === selectedPattern.id &&
                                    idFolder === clearedImageID
                                ) {
                                    return ref;
                                } else {
                                    return null;
                                }
                            });
                            /*--------------*/
                            if (itemRef) {
                                itemRef
                                    .getDownloadURL()
                                    .then((result) => {
                                        /*--------------*/
                                        if (result) {
                                            /*--------------*/
                                            let uploadImage = {
                                                ...selectedPattern.image,
                                                [clearedImageID]: result,
                                            };
                                            /*--------------*/
                                            updateDocument(
                                                PATTERNS,
                                                selectedPattern.id,
                                                "image",
                                                uploadImage
                                            )
                                                .then(() => {
                                                    /*--------------*/
                                                    message.success(
                                                        "Success! Kym is the best"
                                                    );
                                                    /*--------------*/
                                                })
                                                .catch((error) => {
                                                    console.log(
                                                        "error :>> ",
                                                        error
                                                    );
                                                    message.error(
                                                        "Lỗi: upload ảnh!"
                                                    );
                                                });
                                            /*--------------*/
                                        }
                                        /*--------------*/
                                    })
                                    .catch((error) => {
                                        console.log("error :>> ", error);
                                        message.error(
                                            "Lỗi: lấy link hình ảnh!"
                                        );
                                    });
                            } else {
                                /*--------------*/
                                message.error("Lỗi: không tìm thấy hình ảnh!");
                                /*--------------*/
                            }
                            /*--------------*/
                        })
                        .catch(function (error) {
                            console.log("error :>> ", error);
                        });
                } else {
                    message.error("Vải được chọn lỗi!");
                }
                break;
            /*--------------*/
            case PRODUCTS:
                if (selectedProduct) {
                    /*--------------*/
                    let imageRef = `image/products/${selectedProduct.idDesign}/${clearedImageID}`;
                    /*--------------*/
                    var storageRef = firebase.storage().ref();
                    var listRef = storageRef.child(imageRef);
                    /*--------------*/
                    listRef
                        .listAll()
                        .then(function (res) {
                            let itemRef = res.items.find((ref) => {
                                /*--------------*/
                                let nameSplitArray = ref.name.split("-");
                                let id = nameSplitArray[0];
                                let idFolder = nameSplitArray[
                                    nameSplitArray.length - 1
                                ].split(".")[0];
                                /*--------------*/
                                if (
                                    id.toLowerCase() ===
                                        selectedProduct.id.toLowerCase() &&
                                    idFolder.toLowerCase() ===
                                        clearedImageID.toLowerCase()
                                ) {
                                    return ref;
                                } else {
                                    return null;
                                }
                            });
                            /*--------------*/
                            if (itemRef) {
                                itemRef
                                    .getDownloadURL()
                                    .then((result) => {
                                        /*--------------*/
                                        if (result) {
                                            /*--------------*/
                                            let uploadImage = {
                                                ...selectedProduct.image,
                                                [clearedImageID]: result,
                                            };
                                            /*--------------*/
                                            updateDocument(
                                                PRODUCTS,
                                                selectedProduct.id,
                                                "image",
                                                uploadImage
                                            )
                                                .then(() => {
                                                    /*--------------*/
                                                    message.success(
                                                        "Success! Kym is the best"
                                                    );
                                                    /*--------------*/
                                                })
                                                .catch((error) => {
                                                    console.log(
                                                        "error :>> ",
                                                        error
                                                    );
                                                    message.error(
                                                        "Lỗi: upload ảnh!"
                                                    );
                                                });
                                            /*--------------*/
                                        }
                                        /*--------------*/
                                    })
                                    .catch((error) => {
                                        console.log("error :>> ", error);
                                        message.error(
                                            "Lỗi: lấy link hình ảnh!"
                                        );
                                    });
                            } else {
                                /*--------------*/
                                message.error("Lỗi: không tìm thấy hình ảnh!");
                                /*--------------*/
                            }
                            /*--------------*/
                        })
                        .catch(function (error) {
                            console.log("error :>> ", error);
                        });
                } else {
                    message.error("Vải được chọn lỗi!");
                }
                break;
            /*--------------*/
            case DESIGNS:
                if (selectedDesign) {
                    /*--------------*/
                    let imageRef = `image/designs/${selectedDesign.id}/${clearedImageID}`;
                    /*--------------*/
                    var storageRef = firebase.storage().ref();
                    var listRef = storageRef.child(imageRef);
                    /*--------------*/
                    listRef
                        .listAll()
                        .then(function (res) {
                            let itemRef = res.items.find((ref) => {
                                /*--------------*/
                                let nameSplitArray = ref.name.split("-");
                                let id = nameSplitArray[0];
                                let idFolder = nameSplitArray[
                                    nameSplitArray.length - 1
                                ].split(".")[0];
                                /*--------------*/
                                if (
                                    id.toLowerCase() ===
                                        selectedDesign.id.toLowerCase() &&
                                    idFolder.toLowerCase() ===
                                        "o" + clearedImageID.toLowerCase()
                                ) {
                                    return ref;
                                } else {
                                    return null;
                                }
                            });
                            /*--------------*/
                            if (itemRef) {
                                itemRef
                                    .getDownloadURL()
                                    .then((result) => {
                                        /*--------------*/
                                        if (result) {
                                            /*--------------*/
                                            let uploadImage = {
                                                ...selectedDesign.image,
                                                [clearedImageID]: result,
                                            };
                                            /*--------------*/
                                            updateDocument(
                                                DESIGNS,
                                                selectedDesign.id,
                                                "image",
                                                uploadImage
                                            )
                                                .then(() => {
                                                    /*--------------*/
                                                    message.success(
                                                        "Success! Kym is the best"
                                                    );
                                                    /*--------------*/
                                                })
                                                .catch((error) => {
                                                    console.log(
                                                        "error :>> ",
                                                        error
                                                    );
                                                    message.error(
                                                        "Lỗi: upload ảnh!"
                                                    );
                                                });
                                            /*--------------*/
                                        }
                                        /*--------------*/
                                    })
                                    .catch((error) => {
                                        console.log("error :>> ", error);
                                        message.error(
                                            "Lỗi: lấy link hình ảnh!"
                                        );
                                    });
                            } else {
                                /*--------------*/
                                message.error("Lỗi: không tìm thấy hình ảnh!");
                                /*--------------*/
                            }
                            /*--------------*/
                        })
                        .catch(function (error) {
                            console.log("error :>> ", error);
                        });
                } else {
                    message.error("Vải được chọn lỗi!");
                }
                break;
            /*--------------*/
            default:
                break;
        }
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description:
     *
     *
     *  Call by:
     */
    function renderHandling() {
        /*--------------*/
        let render = <Fragment />;
        /*--------------*/
        switch (option) {
            case "pattern":
                render = imageUploadStatusForPattern();
                break;
            case "product":
                render = imageUploadStatusForProduct();
                break;
            case "design":
                render = imageUploadStatusForDesign();
                break;

            default:
                render = <Fragment />;
                break;
        }
        /*--------------*/
        return render;
    }
    /************_END_****************/
    /*--------------*/
    if (!selectedPattern || !selectedProduct || !selectedDesign)
        return <Fragment />;
    return (
        <div className="c-admin-image-upload-content">
            <div className="c-admin-image-upload-content__title">
                <span>
                    {option === "pattern"
                        ? selectedPattern.id
                        : option === "product"
                        ? selectedProduct.id
                        : option === "design"
                        ? selectedDesign.id
                        : ""}
                </span>
            </div>
            {renderHandling()}
        </div>
    );
}

export default AdminContentSection;
