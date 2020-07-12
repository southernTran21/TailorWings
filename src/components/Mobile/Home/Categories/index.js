import React from "react";
import PropTypes from "prop-types";
import { CATEGORY_ARRAY } from "constants/Mobile/Home/HomeConstantMobile";
import CategoriesItem from "./CategoriesItem";

Categories.propTypes = {};

function Categories(props) {
    return (
        <ul className="m-categories__list">
            {CATEGORY_ARRAY.map((category, index) => {
                return <CategoriesItem category={category} key={index} />;
            }) || ""}
        </ul>
    );
}

export default Categories;
