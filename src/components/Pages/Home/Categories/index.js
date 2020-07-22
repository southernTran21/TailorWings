import CategoryItem from "components/Pages/Home/Categories/CategoryItem";
import React from "react";
import DamOm from "../../../../assets/Image/category-dam-om.png";
import DamSuong from "../../../../assets/Image/category-dam-suong.png";
import DamXoe from "../../../../assets/Image/category-dam-xoe.png";

const CATEGORIES = [
    {
        name: "Đầm Xoè",
        number: 320,
        image: DamXoe,
    },
    {
        name: "Đầm Suông",
        number: 320,
        image: DamSuong,
    },
    {
        name: "Đầm Ôm",
        number: 320,
        image: DamOm,
    },
];

function HomeCategories(props) {
    return (
        <ul className="c-category-list">
            {CATEGORIES.map((category, index) => {
                return <CategoryItem category={category} key={index} />;
            })}
        </ul>
    );
}

export default HomeCategories;
