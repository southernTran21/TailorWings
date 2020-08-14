import { updateBestSeller, updateDesigners, updateProducts } from "actions";
import { BackTop } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWithCondition } from "services/Firebase API/basic";
import BannerContainer from "./Banner";
import CategoriesContainer from "./Categories";
import CollectionsContainer from "./Collections";
import DesignersContainer from "./Designers";
import IntroductionContainer from "./Introduction";
import NavbarContainer from "./Navbar";
import TailorRecruitmentContainer from "./TailorRecruitment";
import TopProductsContainer from "./TopProducts";
import VoucherContainer from "./Voucher";

function HomeContainer() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    /*--------------*/
    const products = useSelector((state) => state.common.products);
    const designers = useSelector((state) => state.common.designers);
    const bestSeller = useSelector((state) => state.common.bestSeller);
    /*--------------*/
    const dispatch = useDispatch();

    useEffect(() => {
        /*--------------*/
        if (products.length < 1) {
            getWithCondition("products", "visibility", true).then(
                (products) => {
                    if (products.length > 0) {
                        /*--------------*/
                        const action_updateProducts = updateProducts(products);
                        dispatch(action_updateProducts);
                    }
                }
            );
        }
        if (designers.length < 1) {
            getWithCondition("designers", "isVisible", true).then(
                (designers) => {
                    if (designers.length > 0) {
                        /*--------------*/
                        const action_updateDesigners = updateDesigners(
                            designers
                        );
                        dispatch(action_updateDesigners);
                    }
                }
            );
        }
        if (bestSeller.length < 1 && products.length > 0) {
            getWithCondition("topList", "id", "bestseller").then((result) => {
                if (result[0]) {
                    let designs = [...result[0].designs];
                    let bestSeller = [];
                    designs.forEach((design) => {
                        let info = products.filter(
                            (product) => product.designID === design
                        );
                        if (info.length > 0) {
                            let defaultInfo = info.find((item) => item.default);
                            if (defaultInfo) {
                                defaultInfo.fabricNumber = info.length;
                                bestSeller.push(defaultInfo);
                            }
                        }
                    });
                    /*--------------*/
                    const action_updateBestSeller = updateBestSeller(
                        bestSeller
                    );
                    dispatch(action_updateBestSeller);
                }
            });
        }
    }, [products, bestSeller, designers]);

    return (
        <div className="l-home">
            <NavbarContainer />
            <BannerContainer />
            <IntroductionContainer />
            <CategoriesContainer />
            <CollectionsContainer />
            <TopProductsContainer />
            {/* <FabricsContainer/> */}
            <DesignersContainer />
            <TailorRecruitmentContainer />
            <VoucherContainer />
            <BackTop />
        </div>
    );
}

export default HomeContainer;
