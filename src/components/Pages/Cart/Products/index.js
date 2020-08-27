import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

Products.propTypes = {};

const test = new Array(4).fill("a");

function Products(props) {
    return (
        <div className="c-cart-products">
            <h2 className="c-cart-products__title">4 Sản Phẩm</h2>
            <ul className="c-cart-products__list">
                {test.map((result, index) => {
                    return <ProductItem key={index} />;
                })}
            </ul>
        </div>
    );
}

export default Products;
