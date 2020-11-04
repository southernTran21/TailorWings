import ButtonCTA from "components/Button/CTA";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import loader from "assets/Image/image-loader.gif";
import ReactImageAppear from "react-image-appear";

CategoryItem.propTypes = {
    category: PropTypes.object,
};
CategoryItem.defaultProps = {
    category: null,
};

function CategoryItem(props) {
    if (!props.category) return <div className="c-category-item" />;

    const { name, image, designNumber, id } = props.category;
    return (
        <Link
            to={{
                pathname: "/designs",
                search: `?cat=${id}`,
            }}
        >
            <li className="c-category-item">
                <div className="c-category-item__info">
                    <h2 className="c-category-item__title">
                        {name || "Tailor Wings"}
                    </h2>
                    <span className="c-category-item__design-number">
                        {designNumber || 0} Thiết Kế
                    </span>
                    <div className="c-category-item__button">
                        <ButtonCTA text="XEM THÊM" />
                    </div>
                </div>
                <div className="c-category-item__image">
                    <ReactImageAppear
                        src={image || ""} 
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
                </div>
            </li>
        </Link>
    );
}

export default CategoryItem;
