import React, { Component } from "react";
import { Icon } from "antd";
import './NavBarWeb.scss';
import iconMenu from '../../../assets/productDetailWeb/menu-2.svg';
import iconSearch from '../../../assets/productDetailWeb/search.svg';
import iconCart from '../../../assets/productDetailWeb/cart.svg';
import iconLogoTailorWings from '../../../assets/imageHomePage/Logo Header.svg'

class NavBarWeb extends Component {
    render() {
        return (
            <div className="navbarWeb d-flex align-items-center">
                <div className="hamburgerMenu">
                    <img src={iconMenu} alt=""/>
                </div>
                <div className='logoTailorWings'>
                    <img src={iconLogoTailorWings} alt=""/>
                </div>
                <div className='Tools d-flex'>
                    <div className='search'>
                        <img src={iconSearch} alt=""/>
                        <span>TÌM KIẾM</span>
                    </div>
                    <div className='shoppingCart'>
                        <img src={iconCart} alt=""/>
                        <span>GIỎ HÀNG (2)</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBarWeb;
