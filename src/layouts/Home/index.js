import {
    updateBestSeller,
    updateDesigners,
    updateProducts,
    updateDefaultProducts,
} from "actions";
import { BackTop } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchDefaultProducts,
    fetchWithCondition,
    countSupportedFabric,
} from "services/Firebase API/basic";
import BannerContainer from "./Banner";
import CategoriesContainer from "./Categories";
import CollectionsContainer from "./Collections";
import DesignersContainer from "./Designers";
import IntroductionContainer from "./Introduction";
import NavbarContainer from "./Navbar";
import TailorRecruitmentContainer from "./TailorRecruitment";
import TopProductsContainer from "./TopProducts";
import VoucherContainer from "./Voucher";
import FabricsContainer from "./Fabrics";

function HomeContainer() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    /*--------------*/
    const defaultProductsLength = useSelector(
        (state) => state.common.defaultProducts.length
    );
    const designersLength = useSelector(
        (state) => state.common.designers.length
    );
    const bestSellerLength = useSelector(
        (state) => state.common.bestSeller.length
    );
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        async function _fetchDefaultProducts() {
            try {
                const fetchedDefaultProducts = await fetchDefaultProducts();
                if (fetchedDefaultProducts.length > 0) {
                    /*--------------*/
                    const action_updateDefaultProducts = updateDefaultProducts(
                        fetchedDefaultProducts
                    );
                    dispatch(action_updateDefaultProducts);
                }
            } catch (error) {
                setFetchError(true);
                console.log("error.message :>> ", error.message);
            }
        }
        /*--------------*/
        async function _fetchDesigners() {
            try {
                const fetchedDesigners = await fetchWithCondition(
                    "designers",
                    "isVisible",
                    true
                );
                if (fetchedDesigners.length > 0) {
                    /*--------------*/
                    const action_updateDesigners = updateDesigners(
                        fetchedDesigners
                    );
                    dispatch(action_updateDesigners);
                }
            } catch (error) {
                console.log("error.message :>> ", error.message);
                setFetchError(true);
            }
        }
        /*--------------*/
        async function _fetchBestSeller() {
            try {
                const fetchedBestSeller = await fetchWithCondition(
                    "topList",
                    "id",
                    "bestseller"
                );
                if (fetchedBestSeller.length > 0) {
                    let designs = [...fetchedBestSeller[0].designs];
                    /*--------------*/
                    const action_updateBestSeller = updateBestSeller(designs);
                    dispatch(action_updateBestSeller);
                }
            } catch (error) {
                console.log("error.message :>> ", error.message);
                setFetchError(true);
            }
        }
        /*--------------*/
        if (!fetchError) {
            if (defaultProductsLength < 1) {
                _fetchDefaultProducts();
            }
            if (designersLength < 1) {
                _fetchDesigners();
            }
            if (bestSellerLength < 1 && defaultProductsLength > 0) {
                _fetchBestSeller();
            }
        }
    }, [defaultProductsLength, bestSellerLength, designersLength]);

    return (
        <div className="l-home">
            <NavbarContainer />
            <BannerContainer />
            <IntroductionContainer />
            <CategoriesContainer />
            <CollectionsContainer />
            <TopProductsContainer />
            <FabricsContainer />
            <DesignersContainer />
            <TailorRecruitmentContainer />
            <VoucherContainer />
            <BackTop />
        </div>
    );
}

export default HomeContainer;
