import { updateAdminImageList, updateImageSelectionModalStatus } from "actions";
import checkMark from "assets/Icon/checkmark-circle-2.svg";
import classNames from "classnames";
import ListLoader from "components/Loader/List";
import firebase from "firebase/app";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDocument } from "services/FirebaseAPI/basic";

function AdminImageSelectionModal() {
    /*--------------*/
    const isImageSelectionModalOpen = useSelector(
        (state) => state.admin.isImageSelectionModalOpen
    );
    const imageRef = useSelector((state) => state.admin.imageRef);
    const imageList = useSelector((state) => state.admin.imageList);
    const option = useSelector((state) => state.admin.option);
    const selectedPattern = useSelector((state) => state.admin.selectedPattern);
    const selectedProduct = useSelector((state) => state.admin.selectedProduct);
    /*--------------*/
    const [imageSize, setImageSize] = useState("");
    const [uploadURL, setUploadURL] = useState("");
    const [imageSelectedStatus, setImageSelectedStatus] = useState(false);
    const [currentSelectedItem, setCurrentSelectedItem] = useState(null);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        switch (option) {
            case "pattern":
                setCurrentSelectedItem(selectedPattern);
                break;
            case "product":
                setCurrentSelectedItem(selectedProduct);
                break;
            default:
                setCurrentSelectedItem(null);
                break;
        }
        /*--------------*/
    }, [selectedPattern, selectedProduct]);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (imageRef) {
            var storageRef = firebase.storage().ref();
            var listRef = storageRef.child(imageRef);
            /*--------------*/
            let imageSize = imageRef.split("/");
            setImageSize(imageSize[imageSize.length - 1]);
            /*--------------*/
            listRef
                .listAll()
                .then(function (res) {
                    let itemRef = res.items.find((ref) => {
                        if (ref.name.split("-")[0] === currentSelectedItem.id) {
                            return ref;
                        }
                    });
                    /*--------------*/
                    if (itemRef) {
                        itemRef.getDownloadURL().then((result) => {
                            const action_updateAdminImageList = updateAdminImageList(
                                [result]
                            );
                            dispatch(action_updateAdminImageList);
                        });
                    } else {
                        const action_updateAdminImageList = updateAdminImageList(
                            []
                        );
                        dispatch(action_updateAdminImageList);
                    }
                    // let metaData = itemRef.getMetadata();
                    // console.log("metaData :>> ", metaData);
                    // });
                    /*--------------*/
                })
                .catch(function (error) {
                    console.log("error :>> ", error);
                });
        }
        /*--------------*/
    }, [currentSelectedItem, imageRef]);
    /*********************************
     *  Description: handle click on bg to close
     *
     *
     *  Call by:
     */
    function onBackgroundClick(e) {
        if (
            e.target.className.includes("c-admin-image-selection-modal--open")
        ) {
            const action_updateImageSelectionModalStatus = updateImageSelectionModalStatus();
            dispatch(action_updateImageSelectionModalStatus);
        }
    }
    /************_END_****************/
    /*********************************
     *  Description: handle close button clicked
     *
     *
     *  Call by:
     */
    function onClose() {
        setImageSelectedStatus(false);
        /*--------------*/
        const action_updateImageSelectionModalStatus = updateImageSelectionModalStatus();
        dispatch(action_updateImageSelectionModalStatus);
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description:
     *
     *
     *  Call by:
     */
    function onImageSelect(e) {
        /*--------------*/
        if (imageSelectedStatus) {
            setUploadURL("");
        } else {
            setUploadURL(e.target.src);
        }
        /*--------------*/
        setImageSelectedStatus(!imageSelectedStatus);
    }
    /************_END_****************/
    /*********************************
     *  Description: handle upload image link to database
     *
     *
     *  Call by:
     */
    function onUpload() {
        /*--------------*/
        switch (option) {
            case "pattern":
                let updatedImage =
                    !currentSelectedItem.image ||
                    currentSelectedItem.image === ""
                        ? {}
                        : { ...currentSelectedItem.image };
                updatedImage[`size${imageSize}`] = uploadURL;
                console.log('updatedImage :>> ', updatedImage);
                /*--------------*/
                updateDocument(
                    "testPatterns",
                    currentSelectedItem.id,
                    "image",
                    updatedImage
                ).then(() => {
                    /*--------------*/
                    const action_updateImageSelectionModalStatus = updateImageSelectionModalStatus();
                    dispatch(action_updateImageSelectionModalStatus);
                    /*--------------*/
                });
                /*--------------*/
                break;
            case "product":
                break;
            default:
                break;
        }
        /*--------------*/
    }
    /************_END_****************/
    if (!currentSelectedItem) {
        return (
            <div
                className={classNames("c-admin-image-selection-modal", {
                    "c-admin-image-selection-modal--open": isImageSelectionModalOpen,
                })}
                onClick={onBackgroundClick}
            >
                <div className="c-admin-image-selection-modal__content">
                    <div className="c-admin-image-selection-modal__header">
                        <span>Đang xử lý...</span>
                        <i
                            className="fas fa-times-circle"
                            onClick={onClose}
                        ></i>
                    </div>
                    <ListLoader />
                </div>
            </div>
        );
    }
    return (
        <div
            className={classNames("c-admin-image-selection-modal", {
                "c-admin-image-selection-modal--open": isImageSelectionModalOpen,
            })}
            onClick={onBackgroundClick}
        >
            <div className="c-admin-image-selection-modal__content">
                <div className="c-admin-image-selection-modal__header">
                    <span>
                        {currentSelectedItem.id} ({imageSize})
                    </span>
                    <i className="fas fa-times-circle" onClick={onClose}></i>
                </div>
                <div className="c-admin-image-selection-modal__list">
                    {imageList.map((image, index) => {
                        let param = false;
                        return (
                            <div
                                key={index}
                                className="c-admin-image-selection-modal__item"
                            >
                                <img
                                    src={image}
                                    alt={image}
                                    onClick={onImageSelect}
                                />
                                <img
                                    className={classNames(
                                        "c-admin-image-selection-modal__check-mark",
                                        {
                                            "c-admin-image-selection-modal__check-mark--active": imageSelectedStatus,
                                        }
                                    )}
                                    src={checkMark}
                                    alt="check-mark-icon"
                                />
                            </div>
                        );
                    })}
                </div>
                <button
                    className="c-admin-image-selection-modal__confirm"
                    onClick={onUpload}
                >
                    Upload
                </button>
            </div>
        </div>
    );
}

export default AdminImageSelectionModal;
