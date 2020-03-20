import React, { Component } from "react";

import iconAccount from "../../../../assets/imageHomePage/iconAccount.svg";
import iconShoppingBadge from "../../../../assets/imageHomePage/shopping-bag.svg";

export default class PersonalInfo extends Component {
    render() {
        const {totalProductsOnCart} = this.props;
        return (
            <div className="personalInfo_wrapper d-flex justify-content-between">
                <div className="account d-flex justify-content-center align-items-center">
                    <img src={iconAccount} alt="TailorWings-Account" />
                    <span className="fontMontserrat">TÀI KHOẢN</span>
                </div>
                <div className="shoppingBadge d-flex justify-content-center align-items-center">
                    <img
                        src={iconShoppingBadge}
                        alt="TailorWings-ShoppingBadge"
                    />
                    <span className="fontMontserrat">{`GIỎ HÀNG (${totalProductsOnCart})`}</span>
                </div>
            </div>
        );
    }
}
