import React, { Component } from "react";
import { Icon } from "antd";
import './NavBarWeb.scss'

import iconLogoTailorWings from '../../../assets/imageHomePage/Logo Header.svg'

class NavBarWeb extends Component {
    render() {
        return (
            <div className="navbarWeb d-flex justify-content-between align-items-center">
                <div className="hamburgerMenu">
                    <Icon type="menu" />
                </div>
                <div className='logoTailorWings'>
                    <img src={iconLogoTailorWings} alt=""/>
                </div>
                <div className='Tools d-flex'>
                    <div className='search'>
                        <img src="" alt=""/>
                        <span>TÌM KIẾM</span>
                    </div>
                    <div className='shoppingCart'>
                        <img src="" alt=""/>
                        <span>GIỎ HÀNG (2)</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBarWeb;
