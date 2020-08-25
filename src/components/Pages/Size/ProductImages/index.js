import React from "react";
import PropTypes from "prop-types";
import ButtonConfirm from "components/Button/Confirm";

ProductImages.propTypes = {
    images: PropTypes.array,
    onAddToCart: PropTypes.func,
};

ProductImages.defaultProps = {
    images: [],
    onAddToCart: null,
};

function ProductImages(props) {
    return (
        <div className="c-size-product-images">
            <div className="c-size-product-images__list">
                <div className="c-size-product-images__item">
                    <img src={props.images[0] || ""} alt="image" />
                </div>
                <div className="c-size-product-images__item">
                    <img src={props.images[1] || ""} alt="image" />
                </div>
                <div className="c-size-product-images__item">
                    <img src={props.images[2] || ""} alt="image" />
                </div>
                <div className="c-size-product-images__item">
                    <img src={props.images[3] || ""} alt="image" />
                </div>
            </div>
            <div className="c-size-product-images__confirm">
                <ButtonConfirm
                    text="thêm vào giỏ hàng"
                    padding="1.5rem 5rem"
                    onConfirm={props.onAddToCart}
                />
            </div>
        </div>
    );
}

export default ProductImages;
