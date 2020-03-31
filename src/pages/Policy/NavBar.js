import React, { Component } from "react";
import "./Policy.scss";
import { Icon, Badge } from "antd";
import logoTW from "../../assets/imageHomePage/Logo Header.svg";

class NavBar extends Component {
    render() {
        return (
            <div className="navbarHeader d-flex justify-content-between">
                <div className='iconMenu d-flex align-items-center'>
                    <Icon type="menu" />
                </div>
                <div className='titleHeader'>
                    <img src={logoTW} alt="" />
                </div>
                <div className="iconShoppingCart d-flex justify-content-between align-items-center">
                    <Icon type="shopping-cart" />
                    <Badge count='1'>
                        <a className="head-example" />
                    </Badge>
                </div>
            </div>
        );
    }
}

export default NavBar;
