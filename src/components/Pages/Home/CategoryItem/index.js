import ButtonCTA from "components/Button/CTA";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Skeleton } from "antd";

CategoryItem.propTypes = {
    category: PropTypes.object,
};
CategoryItem.defaultProps = {
    category: null,
};

function CategoryItem(props) {
    if (!props.category) return <div className="category-item" />;

    const { name, image, number } = props.category;
    return (
        <div className="category-item">
            <div className="category-item__info">
                <h2 className="category-item__title">
                    {name || "Tailor Wings"}
                </h2>
                <span className="category-item__design-number">
                    {number || 0} Thiết Kế
                </span>
                <div className="category-item__button">
                    <ButtonCTA text="XEM THÊM" />
                </div>
            </div>
            <div className="category-item__image">
                <img src={image || ""} alt={name || ""} />
            </div>
        </div>
    );
}

export default CategoryItem;
