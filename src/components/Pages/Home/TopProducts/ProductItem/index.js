import React from "react";
import PropTypes from "prop-types";

ProductItem.propTypes = {};

function ProductItem(props) {
    return (
        <div className="c-product-item">
            <div className="c-product-item__image">
                <img src="" alt="" />
            </div>
            <span className="c-product-item__designed-by">Thiết kế bởi</span>
            <span className="c-product-item__designer-name">Đông Đông</span>
            <div className="c-product-item__fabric-number">
                <span>17 Mẫu Vải</span>
            </div>
        </div>
    );
}

export default ProductItem;
