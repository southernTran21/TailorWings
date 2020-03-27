import React, { Component } from "react";

// import component
import TailorWingsLogo from "./TailorWingsLogo";
import SearchInput from "./Search";
import PersonalInfo from "./PersonalInfo";

export default class Header extends Component {
    render() {
        const {
            totalProductsOnCart,
            visibleProductsList,
            bestSellerInfo
        } = this.props;
        return (
            <div className="homeNavbar_wrapper d-flex flex-row">
                <div className="col-3">
                    <div className="Empty"></div>
                </div>
                <div className="col-9">
                    <div className="navbar">
                        <TailorWingsLogo />
                        <SearchInput
                            visibleProductsList={visibleProductsList}
                            bestSellerInfo={bestSellerInfo}
                        />
                        <PersonalInfo
                            history={this.props.history}
                            totalProductsOnCart={totalProductsOnCart}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
