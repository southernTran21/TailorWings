import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "services/CommonParameter";
import NavBarWeb from "../../../components/NavBar/NavBarWeb/index";
import Categories from "./Categories";
import ProductList from "./Content";
import "./ShoppingStore.scss";
// Import image
import tatca from "../../../assets/imageShoppingStore/tat ca.svg";
import damom from "../../../assets/imageShoppingStore/dam om.svg";
import damsuong from "../../../assets/imageShoppingStore/dam suong.svg";
import damxoe from "../../../assets/imageShoppingStore/dam xoe.svg";
import { getMoreDefaultProducts, getMoreProductsInCategory } from "services/ShoppingStoreFunction";
import { updateFetchedProducts } from "actions";

const CATEGORIES = [
    {
        id: "all",
        image: tatca,
        name: "TẤT CẢ",
    },
    {
        id: "dam-om",
        image: damom,
        name: "ĐẦM ÔM",
    },
    {
        id: "dam-xoe",
        image: damxoe,
        name: "ĐẦM XÒE",
    },
    {
        id: "dam-suong",
        image: damsuong,
        name: "ĐẦM SUÔNG",
    },
];

const PRODUCT_PER_VIEW = 9;

function ShoppingStoreDesktop() {
    const dispatch = useDispatch();
    /*---------------*/
    const products = useSelector(
        (state) => state.shoppingStoreReducer.products
    );
    const activeFilter = useSelector((state) => state.shoppingStoreReducer.activeFilter);
    const activeFilterType = useSelector(
        (state) => state.shoppingStoreReducer.activeFilterType
    );
    /*---------------*/
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [activeStatus, setActiveStatus] = useState(
        new Array(CATEGORIES.length).fill(false)
    );
    /*---------------*/
    useEffect(() => {
        /*---------------*/
        const activeIndex =
            CATEGORIES.findIndex((category) => {
                return category.id === activeFilter;
            }) || 0;
        const newActiveStatus = [...activeStatus];
        newActiveStatus.fill(false);
        newActiveStatus[activeIndex] = true;
        setActiveStatus(newActiveStatus);
        /*---------------*/
    }, [activeFilter]);

    /*********************************
     *  Description: get more products for rendering
     *
     *
     *  Call by:
     */
    function getMoreProducts() {
        switch (activeFilterType) {
            /*---------------*/
            case "cat":
                /*---------------*/
                if (!activeFilter) return;
                /*---------------*/
                const modifiedFilter = activeFilter.replace(/-/gi, "");
                /*---------------*/
                if (modifiedFilter === "all") {
                    getMoreDefaultProducts(products[products.length - 1].productID,PRODUCT_PER_VIEW).then(
                        (result) => {
                            if (result) {
                                const isFull = result.length < PRODUCT_PER_VIEW === 0 ? true : false;
                                let updatedProducts = [...products];
                                updatedProducts = updatedProducts.concat(
                                    result
                                );
                                const action_updateFetchedProducts = updateFetchedProducts(
                                    updatedProducts, isFull
                                );
                                dispatch(action_updateFetchedProducts);
                            }
                        }
                    );
                } else {
                    getMoreProductsInCategory(products[products.length - 1].productID,PRODUCT_PER_VIEW, modifiedFilter).then(
                        (result) => {
                            if (result) {
                                const isFull = result.length < PRODUCT_PER_VIEW ? true : false;
                                let updatedProducts = [...products];
                                updatedProducts = updatedProducts.concat(
                                    result
                                );
                                const action_updateFetchedProducts = updateFetchedProducts(
                                    updatedProducts, isFull
                                );
                                dispatch(action_updateFetchedProducts);
                            }
                        }
                    );
                }
                break;
            /*---------------*/
            case "col":
                // do this later. Remember to add collection ID to each products
                break;

            default:
                break;
        }
    }
    /************_END_****************/

    return (
        <div
            className={classNames({ fixed_top: isSideBarOpen })}
            style={{ width: "100%" }}
        >
            <NavBarWeb
                history={history}
                sideBarChange={setIsSideBarOpen}
                isSideBarOpen={isSideBarOpen}
            />
            <div className="shoppingStore_wrapper">
                <Categories
                    categories={CATEGORIES}
                    activeStatus={activeStatus}
                />
                <div className="filterContent d-flex justify-content-between">
                    {/* <Filter /> */}
                    <ProductList
                        renderProducts={products}
                        getMoreProducts={getMoreProducts}
                    />
                </div>
            </div>
        </div>
    );
}

export default ShoppingStoreDesktop;
