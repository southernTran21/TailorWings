import React, { useEffect, Fragment } from "react";
import BodyImageContainer from "./BodyImage";
import InfoContainer from "./Info";
import NavbarContainer from "./Navbar";
import OptionContentContainer from "./OptionContent";
import OptionsContainer from "./Options";
import ProductImagesContainer from "./ProductImages";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchVisibilityCondition } from "services/Firebase API/basic";
import { updateSelectedProduct } from "actions";

function SizeContainer() {
    /*--------------*/
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    /*--------------*/
    let productID = null;
    if (window.location.search.match(/id=(.*)\b/)) {
        productID = window.location.search.match(/id=(.*)\b/)[1] || null;
    }
    /*--------------*/
    const selectedProduct = useSelector(
        (state) => state.selection.selectedProduct
    );
    /*--------------*/
    if (!productID) {
        return <Redirect to="/" />;
    }
    /*--------------*/
    if (!selectedProduct)
        return (
            <Redirect
                to={{ pathname: "/selection", search: `?id=${productID}` }}
            />
        );
    return (
        <div className="l-size">
            <NavbarContainer />
            <BodyImageContainer />
            <OptionsContainer />
            <OptionContentContainer />
            <InfoContainer />
            <ProductImagesContainer />
        </div>
    );
}

export default SizeContainer;
