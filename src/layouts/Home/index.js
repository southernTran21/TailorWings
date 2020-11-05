import {
    updateCategories,
    updateCollections,
    updateDefaultProducts,
    updateTopProducts,
} from "actions";
import { BackTop } from "antd";
import Login from "components/Login";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchDefaultProducts,
    fetchVisible,
    fetchVisibleCondition,
} from "services/FirebaseAPI/basic";
import { PRODUCTS } from "../../constants";
import BannerContainer from "./Banner";
import CategoriesContainer from "./Categories";
import CollectionsContainer from "./Collections";
import FabricsContainer from "./Fabrics";
import IntroductionContainer from "./Introduction";
import NavbarContainer from "./Navbar";
import TailorRecruitmentContainer from "./TailorRecruitment";
import TopProductsContainer from "./TopProducts";
import VoucherContainer from "./AboutUs";
import ReactGA from "react-ga";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageViewGA = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

function HomeContainer() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    /*--------------*/
    const defaultProductsLength = useSelector(
        (state) => state.common.defaultProducts.length
    );
    const categoriesLength = useSelector(
        (state) => state.common.categories.length
    );
    const collectionsLength = useSelector(
        (state) => state.common.collections.length
    );
    const topProductsLength = useSelector(
        (state) => state.common.topProducts.length
    );
    // /*--------------*/
    const dispatch = useDispatch();
    // /*--------------*/
    const [fetchError, setFetchError] = useState(false);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        initGA();
        logPageViewGA();
        /*--------------*/
    }, []);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchCategories() {
            try {
                const fetchedCategories = await fetchVisible("categories");
                /*--------------*/
                if (fetchedCategories.length > 0) {
                    const action_updateCategories = updateCategories(
                        fetchedCategories
                    );
                    dispatch(action_updateCategories);
                }
                /*--------------*/
            } catch (error) {
                setFetchError(true);
                console.log("error.message :>> ", error.message);
            }
        }
        /*--------------*/
        async function _fetchCollections() {
            try {
                const fetchedCollections = await fetchVisible("collections");
                /*--------------*/
                if (fetchedCollections.length > 0) {
                    const action_updateCollections = updateCollections(
                        fetchedCollections
                    );
                    dispatch(action_updateCollections);
                }
                /*--------------*/
            } catch (error) {
                setFetchError(true);
                console.log("error.message :>> ", error.message);
            }
        }
        /*--------------*/
        async function _fetchDefaultProducts() {
            try {
                const fetchedDefaultProducts = await fetchDefaultProducts();
                /*--------------*/
                if (fetchedDefaultProducts.length > 0) {
                    const action_updateDefaultProducts = updateDefaultProducts(
                        fetchedDefaultProducts
                    );
                    dispatch(action_updateDefaultProducts);
                }
                /*--------------*/
            } catch (error) {
                setFetchError(true);
                console.log("error.message :>> ", error.message);
            }
        }
        /*--------------*/
        async function _fetchTopProducts() {
            try {
                const fetchedTopProducts = await fetchVisibleCondition(
                    PRODUCTS,
                    "topStatus",
                    true
                );
                /*--------------*/
                if (fetchedTopProducts.length > 0) {
                    const action_updateTopProducts = updateTopProducts(
                        fetchedTopProducts
                    );
                    dispatch(action_updateTopProducts);
                }
                /*--------------*/
            } catch (error) {
                setFetchError(true);
                console.log("error.message :>> ", error.message);
            }
        }
        /*--------------*/
        if (!fetchError) {
            /*--------------*/
            if (categoriesLength < 1) {
                _fetchCategories();
            }
            /*--------------*/
            if (collectionsLength < 1) {
                _fetchCollections();
            }
            /*--------------*/
            if (topProductsLength < 1) {
                _fetchTopProducts();
            }
            /*--------------*/
            if (defaultProductsLength < 1) {
                _fetchDefaultProducts();
            }
        }
        /*--------------*/
    }, []);

    return (
        <div className="l-home">
            <NavbarContainer />
            <BannerContainer />
            <IntroductionContainer />
            {/* <CategoriesContainer /> */}
            <CollectionsContainer />
            <FabricsContainer />
            <TopProductsContainer />
            {/* <DesignersContainer /> */}
            <TailorRecruitmentContainer />
            <VoucherContainer />
            <BackTop />
            <Login />
        </div>
    );
}

export default HomeContainer;
