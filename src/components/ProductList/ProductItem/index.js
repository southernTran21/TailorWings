import React, { Fragment } from "react";
import PropTypes from "prop-types";
import loader from "assets/Image/image-loader.gif";
import ReactImageAppear from "react-image-appear";
import { Link } from "react-router-dom";

ProductItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
};

ProductItem.defaultProps = {
    image: null,
    name: null,
    id: null,
};

function ProductItem(props) {
    const { image, name, id } = props;
    if (!name || !id) return <Fragment />;
    return (
        <Link
            to={{
                pathname: "/selection",
                search: `?id=${id}`,
            }}
        >
            <li className="c-product-list-item">
                <div className="c-product-list-item__image">
                    <ReactImageAppear
                        src={image}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
                </div>
                <span className="c-product-list-item__name">{name}</span>
                <span className="c-product-list-item__designed-by">
                    Thiết kế bởi
                </span>
                <span className="c-product-list-item__designer">
                    Tailor Wings
                </span>
            </li>
        </Link>
    );
}

export default ProductItem;
