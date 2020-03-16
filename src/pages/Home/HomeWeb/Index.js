import React, { Component } from "react";
import "./home.scss";

import { Input } from "antd";

// import file svg and image
import logoHeader from "../.../../../../assets/imageHomePage/Logo Header.svg";
import iconAccount from "../.../../../../assets/imageHomePage/iconAccount.svg";
import iconShoppingBadge from "../.../../../../assets/imageHomePage/shopping-bag.svg";

const { Search } = Input;

export default class HomeWeb extends Component {
    render() {
        return (
            <div className="homePage_wrapper">
                <div className="homeNavbar_wrapper d-flex flex-row">
                    <div className="col-2">
                        <div className="Empty"></div>
                    </div>
                    <div className="col-10">
                        <div className="navbar">
                            <div className="logo_wrapper">
                                <img src={logoHeader} alt="TailorWings" />
                            </div>
                            <div className="search_wrapper">
                                <Search
                                    placeholder="Bạn tìm may gì?"
                                    onSearch={value => console.log(value)}
                                    style={{ width: '25vw' }}
                                />
                            </div>
                            <div className='personalInfo_wrapper d-flex justify-content-between'>
                                <div className='account d-flex justify-content-center align-items-center'>
                                    <img src={iconAccount} alt="TailorWings-Account"/>
                                    <span className='fontMontserrat'>TÀI KHOẢN</span>
                                </div>
                                <div className='shoppingBadge d-flex justify-content-center align-items-center'>
                                    <img src={iconShoppingBadge} alt="TailorWings-ShoppingBadge"/>
                                    <span className='fontMontserrat'>GIỎ HÀNG (0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
