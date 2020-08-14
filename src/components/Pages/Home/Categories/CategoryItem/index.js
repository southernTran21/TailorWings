import ButtonCTA from "components/Button/CTA";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

CategoryItem.propTypes = {
    category: PropTypes.object,
};
CategoryItem.defaultProps = {
    category: null,
};

function CategoryItem(props) {
    if (!props.category) return <div className="c-category-item" />;

    const { name, image, number, catID } = props.category;
    return (
        <Link
            to={{
                pathname: "/designs",
                search: `?cat=${catID}`,
            }}
        >
            <li className="c-category-item">
                <div className="c-category-item__info">
                    <h2 className="c-category-item__title">
                        {name || "Tailor Wings"}
                    </h2>
                    <span className="c-category-item__design-number">
                        {number || 0} Thiết Kế
                    </span>
                    <div className="c-category-item__button">
                        <ButtonCTA text="XEM THÊM" />
                    </div>
                </div>
                <div className="c-category-item__image">
                    <img src={image || ""} alt={name || ""} />
                </div>
            </li>
        </Link>
    );
}

export default CategoryItem;
