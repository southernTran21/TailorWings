import React, { Fragment } from "react";
import PropTypes from "prop-types";
import loader from "assets/Image/image-loader.gif";
import ReactImageAppear from "react-image-appear";

ProductCard.propTypes = {
    info: PropTypes.object,
};

ProductCard.defaultProps = {
    info: null,
};

function ProductCard(props) {
    if (!props.info) return <Fragment />;
    const { image, name, price, size, bodyMetric } = props.info;
    return (
        <div className="c-product-card">
            <div className="c-product-card__image">
                <ReactImageAppear
                    src={typeof image === "object" ? image.T : ""}
                    animationDuration="1s"
                    loader={loader}
                    loaderStyle={{ backgroundColor: "transparent" }}
                    placeholderStyle={{
                        backgroundColor: "transparent",
                    }}
                />
                {/* <img src={image[0]} alt="tailorwings-product-image" /> */}
            </div>
            <div className="c-product-card__info">
                <span className="c-product-card__name">{name}</span>
                <span className="c-product-card__price">{price}đ</span>
                <span className="c-product-card__size">SIZE: {size}</span>
                <span className="c-product-card__metric">
                    {" "}
                    {bodyMetric.chest} / {bodyMetric.hip} / {bodyMetric.waist}
                </span>
            </div>
        </div>
    );
}

export default ProductCard;
