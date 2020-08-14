import CategoryItem from "components/Pages/Home/Categories/CategoryItem";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function HomeCategories() {
    /*--------------*/
    const designNumber = useSelector((state) => state.home.designNumber);
    /*--------------*/

    if (!designNumber) return <Fragment />;
    return (
        <ul className="c-category-list">
            {designNumber.map((category, index) => {
                return <CategoryItem category={category} key={index} />;
            })}
        </ul>
    );
}

export default HomeCategories;
