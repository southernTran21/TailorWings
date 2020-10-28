import {
    updateImageSelectionOption,
    updateSelectedPatternImageUpload,
    updateSelectedProductImageUpload
} from "actions";
import IconSearch from "assets/Icon/icon-search.svg";
import classNames from "classnames";
import ListLoader from "components/Loader/List";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminSelectionSection() {
    const dispatch = useDispatch();
    /*--------------*/
    const patterns = useSelector((state) => state.admin.patterns);
    const products = useSelector((state) => state.admin.products);
    const selectedPattern = useSelector((state) => state.admin.selectedPattern);
    const selectedProduct = useSelector((state) => state.admin.selectedProduct);
    const option = useSelector((state) => state.admin.option);
    /*--------------*/
    /*********************************
     *  Description: handle option change
     *
     *
     *  Call by:
     */
    function onOptionChange(newOption) {
        /*--------------*/
        const action_updateImageSelectionOption = updateImageSelectionOption(newOption);
        dispatch(action_updateImageSelectionOption);
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description: handle select a pattern
     *
     *
     *  Call by:
     */
    function onSelectedPatternChange(selectedPattern) {
        /*--------------*/
        const action_updateSelectedPatternImageUpload = updateSelectedPatternImageUpload(
            selectedPattern
        );
        dispatch(action_updateSelectedPatternImageUpload);
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description: handle select a product
     *
     *
     *  Call by:
     */
    function onSelectedProductChange(selectedProduct) {
        /*--------------*/
        const action_updateSelectedProductImageUpload = updateSelectedProductImageUpload(
            selectedProduct
        );
        dispatch(action_updateSelectedProductImageUpload);
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description: handle render for pattern option
     *
     *
     *  Call by:
     */
    function patternListRender() {
        return (
            <div className="c-admin-image-upload-selection__list">
                {patterns.map((pattern, index) => {
                    let statusClass = "";
                    /*--------------*/
                    if (pattern.image !== "") {
                        statusClass =
                            "c-admin-image-upload-selection__item--fullfilled";
                    }
                    /*--------------*/
                    if (selectedPattern) {
                        if (selectedPattern.id === pattern.id) {
                            statusClass =
                                "c-admin-image-upload-selection__item--selected";
                        }
                    }
                    return (
                        <div
                            key={index}
                            className={`c-admin-image-upload-selection__item ${statusClass}`}
                            onClick={() => onSelectedPatternChange(pattern)}
                        >
                            <span>{pattern.id}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
    /************_END_****************/
    /*********************************
     *  Description: handle render for product option
     *
     *
     *  Call by:
     */
    function productListRender() {
        return (
            <div className="c-admin-image-upload-selection__list">
                {products.map((product, index) => {
                    let statusClass = "";
                    /*--------------*/
                    if (product.image !== "") {
                        statusClass =
                            "c-admin-image-upload-selection__item--fullfilled";
                    }
                    /*--------------*/
                    if (selectedProduct) {
                        if (selectedProduct.id === product.id) {
                            statusClass =
                                "c-admin-image-upload-selection__item--selected";
                        }
                    }
                    return (
                        <div
                            key={index}
                            className={`c-admin-image-upload-selection__item ${statusClass}`}
                            onClick={() => onSelectedProductChange(product)}
                        >
                            <span>{product.id}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
    /************_END_****************/
    /*--------------*/
    if (!patterns || !products) return <ListLoader />;
    return (
        <div className="c-admin-image-upload-selection">
            <div className="c-admin-image-upload-selection__option">
                <button
                    className={classNames(
                        "c-admin-image-upload-selection__button",
                        {
                            "c-admin-image-upload-selection__button--active":
                                option === "product",
                        }
                    )}
                    onClick={() => onOptionChange("product")}
                >
                    Product
                </button>
                <button
                    className={classNames(
                        "c-admin-image-upload-selection__button",
                        {
                            "c-admin-image-upload-selection__button--active":
                                option === "pattern",
                        }
                    )}
                    onClick={() => onOptionChange("pattern")}
                >
                    Pattern
                </button>
            </div>
            <div className="c-admin-image-upload-selection__search">
                <img src={IconSearch} alt="search-icon" />
                <input type="text" placeholder="Nhập vào mã sản phẩm..." />
            </div>
            {option === "pattern" ? (
                patternListRender()
            ) : option === "product" ? (
                productListRender()
            ) : (
                <Fragment />
            )}
        </div>
    );
}

export default AdminSelectionSection;
