import loader from "assets/Image/image-loader.gif";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ReactImageAppear from "react-image-appear";
import { Link } from "react-router-dom";

DesignItem.propTypes = {
    product: PropTypes.object,
};

DesignItem.defaultProps = {
    product: null,
};

function DesignItem(props) {
    /*--------------*/
    const {
        image,
        relatedProducts,
        id,
    } = props.product;
    /*--------------*/

    if (!props.product) return <Fragment />;
    return (
        <Link
            to={{
                pathname: "/selection",
                search: `?id=${id}`,
            }}
        >
            <li className="c-design-item">
                <div className="c-design-item__image">
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
                <span className="c-design-item__designed-by">Thiết kế bởi</span>
                <span className="c-design-item__designer-name">
                    TailorWings
                </span>
                <div className="c-design-item__fabric-number">
                    <span>{relatedProducts} Mẫu Vải</span>
                </div>
            </li>
        </Link>
    );
}

export default DesignItem;
