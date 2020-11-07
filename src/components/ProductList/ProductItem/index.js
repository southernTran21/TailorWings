import React, { Fragment } from "react";
import PropTypes from "prop-types";
import loader from "assets/Image/image-loader.gif";
import ReactImageAppear from "react-image-appear";
import { Link } from "react-router-dom";

ProductItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    isLink: PropTypes.bool,
    onItemClick: PropTypes.func,
};

ProductItem.defaultProps = {
    image: null,
    name: null,
    id: null,
    isLink: false,
    onItemClick: () => console.log("Handle item click"),
};

function ProductItem(props) {
    const { image, name, id } = props;
    if (!name || !id) return <Fragment />;
    if (props.isLink) {
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
                            src={image.T || ""}
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
    } else {
        return (
            <a>
                <li
                    className="c-product-list-item"
                    onClick={
                        props.onItemClick
                            ? () =>
                                  props.onItemClick(
                                      props.image,
                                      props.id,
                                      props.name
                                  )
                            : () => console.log("funciton null")
                    }
                >
                    <div className="c-product-list-item__image">
                        <ReactImageAppear
                            src={image.T || ""}
                            animationDuration="1s"
                            loader={loader}
                            loaderStyle={{ backgroundColor: "transparent" }}
                            placeholderStyle={{
                                backgroundColor: "transparent",
                            }}
                        />
                    </div>
                    <span className="c-product-list-item__name">{name.toLowerCase()}</span>
                    <span className="c-product-list-item__designed-by">
                        Thiết kế bởi
                    </span>
                    <span className="c-product-list-item__designer">
                        Tailor Wings
                    </span>
                </li>
            </a>
        );
    }
}

export default ProductItem;
