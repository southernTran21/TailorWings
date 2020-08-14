import React from "react";
import PropTypes from "prop-types";
import ButtonConfirm from "components/Button/Confirm";

ProductImages.propTypes = {};

function ProductImages(props) {
    return (
        <div className="c-size-product-images">
            <div className="c-size-product-images__list">
                <div className="c-size-product-images__item">
                    <img src="https://picsum.photos/640/800" alt="image" />
                </div>
                <div className="c-size-product-images__item">
                    <img src="https://picsum.photos/640/800" alt="image" />
                </div>
                <div className="c-size-product-images__item">
                    <img src="https://picsum.photos/640/800" alt="image" />
                </div>
                <div className="c-size-product-images__item">
                    <img src="https://picsum.photos/640/800" alt="image" />
                </div>
            </div>
            <div className="c-size-product-images__confirm">
                <ButtonConfirm text="thêm vào giỏ hàng" padding="1.5rem 5rem" />
            </div>
        </div>
    );
}

export default ProductImages;
