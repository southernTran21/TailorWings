import {
    updateFetchedProducts,
    updateActiveFilter,
    updateActiveFilterType,
} from "actions";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import {
    getFirstDefaultProducts,
    getFirstProductsInCategory,
} from "services/ShoppingStoreFunction";
import ShoppingStoreDesktop from "./ShoppingStoreDesktop";
import ShoppingStoreMobile from "./ShoppingStoreMobile";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { history } from "services/CommonParameter";
import { useRef } from "react";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

const PRODUCT_PER_VIEW = 9;

function ShoppingStore(props) {
    const dispatch = useDispatch();
    const { match } = props;

    useEffect(() => {
        /*---------------*/
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        /*---------------*/
        initGA();
        logPageView();
        /*---------------*/
        handleUpdateData();
        /*---------------*/
        // const unlisten = history.listen((location) => {

        // });
        /*---------------*/
        // return () => {
        //     unlisten();
        // }
    }, [match]);

    /*********************************
     *  Description: to handle update data when pathname is changed
     *
     *
     *  Call by: useEffect
     */
    function handleUpdateData() {
        /*---------------*/
        const type = history.location.search
        ? history.location.search.match(/t=(.*)\b/)
        : null;
        /*---------------*/
        if (!type) return;
        /*---------------*/
        let filter = match.params.id;
        /*---------------*/
        const action_updateActiveFilterType = updateActiveFilterType(type[1]);
        const action_updateActiveFilter = updateActiveFilter(filter);
        /*---------------*/
        switch (type[1]) {
            /*---------------*/
            case "cat":
                /*---------------*/
                if (!filter) return;
                /*---------------*/
                filter = filter.replace(/-/gi, "");
                /*---------------*/
                if (filter === "all") {
                    getFirstDefaultProducts(PRODUCT_PER_VIEW).then(
                        (result) => {
                            if (result) {
                                const isFull = result.length < PRODUCT_PER_VIEW ? true : false;
                                const action_updateFetchedProducts = updateFetchedProducts(
                                    result, isFull
                                );
                                dispatch(action_updateFetchedProducts);
                            }
                        }
                    );
                } else {
                    getFirstProductsInCategory(PRODUCT_PER_VIEW, filter).then(
                        (result) => {
                            if (result) {
                                const isFull = result.length < PRODUCT_PER_VIEW ? true : false;
                                const action_updateFetchedProducts = updateFetchedProducts(
                                    result, isFull
                                );
                                dispatch(action_updateFetchedProducts);
                            }
                        }
                    );
                }
                /*---------------*/
                dispatch(action_updateActiveFilterType);
                /*---------------*/
                dispatch(action_updateActiveFilter);
                /*---------------*/
                break;
            /*---------------*/
            case "col":
                // do this later. Remember to add collection ID to each products
                /*---------------*/
                dispatch(action_updateActiveFilterType);
                /*---------------*/
                dispatch(action_updateActiveFilter);
                /*---------------*/
                break;

            default:
                break;
        }
    }
    /************_END_****************/

    return (
        <div>
            {/* <button
                onClick={() => {
                    if (products.length > 0) {
                        getMoreDefaultProducts(
                            products[products.length - 1].productID,
                            PRODUCT_PER_VIEW
                        ).then((result) => {
                            if (result) {
                                let updatedProducts = [...products];
                                updatedProducts = updatedProducts.concat(
                                    result
                                );
                                const action_updateFetchedProducts = updateFetchedProducts(
                                    updatedProducts
                                );
                                dispatch(action_updateFetchedProducts);
                            }
                        });
                    }
                }}
            >
                GET MORE
            </button>
            <ul>
                {products.map((product, index) => {
                    return <li key={index}>{product.productID}</li>;
                })}
            </ul> */}
            <Media queries={{ small: { maxWidth: 750 } }}>
                {(matches) =>
                    matches.small ? (
                        <ShoppingStoreMobile />
                    ) : (
                        <ShoppingStoreDesktop />
                    )
                }
            </Media>
        </div>
    );
}

export default ShoppingStore;
