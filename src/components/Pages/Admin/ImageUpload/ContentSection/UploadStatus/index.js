import React, { Fragment } from "react";
import PropTypes from "prop-types";
import checkMarkIcon from "assets/Icon/check-circle.svg";
import cloudUploadIcon from "assets/Icon/cloud-upload.svg";
import { useDispatch } from "react-redux";
import { updateImageRef, updateImageSelectionModalStatus } from "actions";
import { DESIGNS, PATTERNS, PRODUCTS } from "../../../../../../constants";

AdminImageUploadStatus.propTypes = {
    currentImage: PropTypes.object,
    type: PropTypes.string,
    imageID: PropTypes.string,
    handleImageUpload: PropTypes.func,
};

AdminImageUploadStatus.defaultProps = {
    currentImage: "",
    type: null,
    imageID: null,
    handleImageUpload: null,
};

function AdminImageUploadStatus(props) {
    const dispatch = useDispatch();
    /*--------------*/
    /*********************************
     *  Description: handle render upload status for pattern
     *
     *
     *  Call by:
     */
    function uploadStatusForPattern() {
        /*--------------*/
        if (props.currentImage === "") {
            return (
                <Fragment>
                    <div className="c-admin-image-upload-status__image"></div>
                    {imageUnuploadedTag(props.imageID)}
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <div className="c-admin-image-upload-status__image">
                        <img src={props.currentImage} alt="image-upload" />
                    </div>
                    {props.currentImage
                        ? imageUploadedTag(props.imageID)
                        : imageUnuploadedTag(props.imageID)}
                </Fragment>
            );
        }
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description: handle render upload status for pattern
     *
     *
     *  Call by:
     */
    function uploadStatusForProduct() {
        /*--------------*/
        if (props.currentImage === "") {
            return (
                <Fragment>
                    <div className="c-admin-image-upload-status__image"></div>
                    {imageUnuploadedTag(props.imageID)}
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <div className="c-admin-image-upload-status__image">
                        <img src={props.currentImage} alt="image-upload" />
                    </div>
                    {props.currentImage
                        ? imageUploadedTag(props.imageID)
                        : imageUnuploadedTag(props.imageID)}
                </Fragment>
            );
        }
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description: handle render upload status for pattern
     *
     *
     *  Call by:
     */
    function uploadStatusForDesign() {
        /*--------------*/
        if (props.currentImage === "") {
            return (
                <Fragment>
                    <div className="c-admin-image-upload-status__image"></div>
                    {imageUnuploadedTag(props.imageID)}
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <div className="c-admin-image-upload-status__image">
                        <img src={props.currentImage} alt="image-upload" />
                    </div>
                    {props.currentImage
                        ? imageUploadedTag(props.imageID)
                        : imageUnuploadedTag(props.imageID)}
                </Fragment>
            );
        }
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    const imageUploadedTag = (imageID) => {
        return (
            <div className="c-admin-image-upload-status__uploaded">
                <span>{imageID}</span>
                <img src={checkMarkIcon} alt="check-mark-icon" />
            </div>
        );
    };
    const imageUnuploadedTag = (imageID) => {
        return (
            <div
                className="c-admin-image-upload-status__unuploaded"
                onClick={() => onRequestUploadImage(imageID)}
            >
                <span>{imageID}</span>
                <img src={cloudUploadIcon} alt="cloud-upload-icon" />
            </div>
        );
    };
    /*--------------*/
    /*********************************
     *  Description: handle request upload image
     *
     *
     *  Call by:
     */
    function onRequestUploadImage(imageID) {
        /*--------------*/
        switch (props.type) {
            case "pattern":
                props.handleImageUpload(PATTERNS, imageID);
                break;

            case "product":
                props.handleImageUpload(PRODUCTS, imageID);
                break;

            case "design":
                props.handleImageUpload(DESIGNS, imageID);
                break;

            default:
                break;
        }
        /*--------------*/
    }
    /************_END_****************/
    // /*********************************
    //  *  Description: handle image selection modal status
    //  *
    //  *
    //  *  Call by:
    //  */
    // function onImageSelectionModalChange(name) {
    //     let imageRef = `image/test/${props.type}/${name}`;
    //     /*--------------*/
    //     const action_updateImageRef = updateImageRef(imageRef);
    //     dispatch(action_updateImageRef);
    //     /*--------------*/
    //     const action_updateImageSelectionModalStatus = updateImageSelectionModalStatus();
    //     dispatch(action_updateImageSelectionModalStatus);
    //     /*--------------*/
    // }
    // /************_END_****************/
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
        switch (props.type) {
            case "pattern":
                render = uploadStatusForPattern();
                break;
            case "product":
                render = uploadStatusForProduct();
                break;
            case "design":
                render = uploadStatusForDesign();
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
    if (!props.type || !props.imageID || !props.handleImageUpload)
        return <Fragment />;
    return (
        <div className="c-admin-image-upload-status">{renderHandling()}</div>
    );
}

export default AdminImageUploadStatus;
