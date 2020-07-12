import React from "react";
import NavbarContainer from "./Navbar";
import BannerContainer from "./Banner";
import IntroductionContainer from "./Introduction";
import CategoriesContainer from "./Categories";
import CollectionsContainer from "./Collections";
import TopDesignersContainer from "./TopDesigners";
import TailorRecruitmentContainer from "./TailorRecruitment";
import TopProductsContainer from "./TopProducts";
import VoucherContainer from "./Voucher";

HomeMobile.propTypes = {};

function HomeMobile(props) {
    return <div className="m-home">
        {/* <NavbarContainer/>
        <BannerContainer/> */}
        {/* <IntroductionContainer/> */}
        <CategoriesContainer/>
        {/* <CollectionsContainer/>
        <TopDesignersContainer/>
        <TailorRecruitmentContainer/>
        <TopProductsContainer/>
        <VoucherContainer/> */}
    </div>;
}

export default HomeMobile;
