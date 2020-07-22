import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

HomeTopProducts.propTypes = {};

function HomeTopProducts(props) {
    return (
        <div className="c-home-top-products">
            <h2 className="c-home-top-products__title">Sản Phẩm Nổi Bật</h2>
            <div className="c-home-top-products__list">
                <ProductItem />
            </div>
        </div>
    );
}

export default HomeTopProducts;
