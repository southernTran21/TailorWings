import React from "react";
import PropTypes from "prop-types";
import ProductImages from "components/Pages/Size/ProductImages";

ProductImagesContainer.propTypes = {};

function ProductImagesContainer(props) {
    return (
        <div className="l-size__product-images">
            <ProductImages />
        </div>
    );
}

export default ProductImagesContainer;
