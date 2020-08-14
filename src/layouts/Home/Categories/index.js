import HomeCategories from "components/Pages/Home/Categories";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoriesDesignNumber } from "../../../actions/index";
import DamOm from "../../../assets/Image/category-dam-om.png";
import DamSuong from "../../../assets/Image/category-dam-suong.png";
import DamXoe from "../../../assets/Image/category-dam-xoe.png";

function CategoriesContainer() {
    /*--------------*/
    const products = useSelector((state) => state.common.products);
    /*--------------*/
    const dispatch = useDispatch();

    useEffect(() => {
        /*--------------*/
        let designNumber = [
            {
                name: "Đầm Xoè",
                catID: "damxoe",
                number: 0,
                image: DamXoe,
            },
            {
                name: "Đầm Suông",
                catID: "damsuong",
                number: 0,
                image: DamSuong,
            },
            {
                name: "Đầm Ôm",
                catID: "damom",
                number: 0,
                image: DamOm,
            },
        ];
        if (products.length > 0) {
            designNumber.forEach((item, index) => {
                let number = products.filter((product) => {
                    if (product.default && product.catID === item.catID)
                        return product;
                }).length;
                designNumber[index].number = number;
            });
            /*--------------*/
            const action_updateCategoriesDesignNumber = updateCategoriesDesignNumber(
                designNumber
            );
            dispatch(action_updateCategoriesDesignNumber);
            /*--------------*/
        }
    }, [products]);

    return (
        <section className="l-home__categories">
            <HomeCategories />
        </section>
    );
}

export default CategoriesContainer;
