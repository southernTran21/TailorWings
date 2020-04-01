import React, { Component } from "react";

// import component
import TailorWingsLogo from "./TailorWingsLogo";
import SearchInput from "./Search";
import PersonalInfo from "./PersonalInfo";

import iconMenu from "../../../../assets/productDetailWeb/menu-2.svg";

export default class Header extends Component {
    render() {
        const {
            totalProductsOnCart,
            visibleProductsList,
            bestSellerInfo
        } = this.props;
        return (
            <div className="homeNavbar_wrapper d-flex flex-row justify-content-between">
                {/* <div className="col-3">
                    <div className="Empty"></div>
                </div>
                <div className="col-9">
                    
                        <TailorWingsLogo />
                        <SearchInput
                            visibleProductsList={visibleProductsList}
                            bestSellerInfo={bestSellerInfo}
                            history={this.props.history}
                        />
                        <PersonalInfo
                            history={this.props.history}
                            totalProductsOnCart={totalProductsOnCart}
                        />
                    </div>
                </div> */}
                <div className="navbar">
                    <div className="iconMenu d-flex align-items-center">
                        <img src={iconMenu} alt="" />
                        <span>MENU</span>
                    </div>
                    <TailorWingsLogo />
                    <SearchInput
                        visibleProductsList={visibleProductsList}
                        bestSellerInfo={bestSellerInfo}
                        history={this.props.history}
                    />
                    <PersonalInfo
                        history={this.props.history}
                        totalProductsOnCart={totalProductsOnCart}
                    />
                </div>
            </div>
        );
    }
}
