import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import AdminImageUploadStatus from "./UploadStatus";

function AdminContentSection() {
    /*--------------*/
    const selectedPattern = useSelector((state) => state.admin.selectedPattern);
    const selectedProduct = useSelector((state) => state.admin.selectedProduct);
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
                <AdminImageUploadStatus type={option} currentImage={selectedPattern.image}/>
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
                <AdminImageUploadStatus type={option} currentImage={selectedProduct.image}/>
                <AdminImageUploadStatus type={option} currentImage={selectedProduct.image}/>
                <AdminImageUploadStatus type={option} currentImage={selectedProduct.image}/>
            </div>
        );
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    if (!selectedPattern || !selectedProduct) return <Fragment />;
    return (
        <div className="c-admin-image-upload-content">
            <div className="c-admin-image-upload-content__title">
                <span>
                    {option === "pattern"
                        ? selectedPattern.id
                        : option === "product"
                        ? selectedProduct.id
                        : ""}
                </span>
            </div>
            {option === "pattern" ? (
                imageUploadStatusForPattern()
            ) : option === "product" ? (
                imageUploadStatusForProduct()
            ) : (
                <Fragment />
            )}
        </div>
    );
}

export default AdminContentSection;
