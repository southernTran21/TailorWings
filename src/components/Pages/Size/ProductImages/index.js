import React from "react";
import PropTypes from "prop-types";
import ButtonConfirm from "components/Button/Confirm";
import ReactImageAppear from "react-image-appear";
import loader from "assets/Image/image-loader.gif";

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
                    <ReactImageAppear
                        src={props.images[0] || ""}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
                </div>
                <div className="c-size-product-images__item">
                    <ReactImageAppear
                        src={props.images[1] || ""}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
                </div>
                <div className="c-size-product-images__item">
                    <ReactImageAppear
                        src={props.images[2] || ""}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
                </div>
                <div className="c-size-product-images__item">
                    <ReactImageAppear
                        src={props.images[3] || ""}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
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
