import React, { Fragment } from "react";
import PropTypes from "prop-types";
import checkMarkIcon from "assets/Icon/check-circle.svg";
import cloudUploadIcon from "assets/Icon/cloud-upload.svg";
import { useDispatch } from "react-redux";
import { updateImageRef, updateImageSelectionModalStatus } from "actions";

AdminImageUploadStatus.propTypes = {
    currentImage: PropTypes.object,
    type: PropTypes.string,
};

AdminImageUploadStatus.defaultProps = {
    currentImage: "",
    type: null,
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
                    {imageUnuploadedTag("150x150")}
                    {imageUnuploadedTag("300x300")}
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <div className="c-admin-image-upload-status__image">
                        <img
                            src={
                                props.currentImage.size150x150 ||
                                props.currentImage.size300x300
                            }
                            alt="image-upload"
                        />
                    </div>
                    {props.currentImage.size150x150
                        ? imageUploadedTag("150x150")
                        : imageUnuploadedTag("150x150")}
                    {props.currentImage.size300x300
                        ? imageUploadedTag("300x300")
                        : imageUnuploadedTag("300x300")}
                </Fragment>
            );
        }
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    const imageUploadedTag = (name) => {
        return (
            <div className="c-admin-image-upload-status__uploaded">
                <span>{name}</span>
                <img src={checkMarkIcon} alt="check-mark-icon" />
            </div>
        );
    };
    const imageUnuploadedTag = (name) => {
        return (
            <div
                className="c-admin-image-upload-status__unuploaded"
                onClick={() => onImageSelectionModalChange(name)}
            >
                <span>{name}</span>
                <img src={cloudUploadIcon} alt="cloud-upload-icon" />
            </div>
        );
    };
    /*--------------*/
    /*********************************
     *  Description: handle image selection modal status
     *
     *
     *  Call by:
     */
    function onImageSelectionModalChange(name) {
        let imageRef = `image/test/${props.type}/${name}`;
        /*--------------*/
        const action_updateImageRef = updateImageRef(imageRef);
        dispatch(action_updateImageRef);
        /*--------------*/
        const action_updateImageSelectionModalStatus = updateImageSelectionModalStatus();
        dispatch(action_updateImageSelectionModalStatus);
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    if (!props.type) return <Fragment />;
    return (
        <div className="c-admin-image-upload-status">
            {props.type === "pattern" ? uploadStatusForPattern() : <Fragment />}
        </div>
    );
}

export default AdminImageUploadStatus;
