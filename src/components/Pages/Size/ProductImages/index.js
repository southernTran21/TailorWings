import React from "react";
import PropTypes from "prop-types";
import ButtonConfirm from "components/Button/Confirm";
import ReactImageAppear from "react-image-appear";
import loader from "assets/Image/image-loader.gif";

ProductImages.propTypes = {
    images: PropTypes.object,
    onAddToCart: PropTypes.func,
};

ProductImages.defaultProps = {
    images: null,
    onAddToCart: null,
};

function ProductImages(props) {
    /*--------------*/
    if (!props.images)
        return (
            <div className="c-size-product-images">
                <div className="c-size-product-images__list"></div>
                <div className="c-size-product-images__confirm">
                    <ButtonConfirm
                        text="thêm vào giỏ hàng"
                        padding="1.5rem 5rem"
                        onConfirm={props.onAddToCart}
                    />
                </div>
            </div>
        );
    /*--------------*/
    return (
        <div className="c-size-product-images">
            <div className="c-size-product-images__list">
                <div className="c-size-product-images__item">
                    <ReactImageAppear
                        src={props.images.T || ""}
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
                        src={props.images.S || ""}
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
                        src={props.images.C || ""}
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
                        src={props.images.pattern || ""}
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
