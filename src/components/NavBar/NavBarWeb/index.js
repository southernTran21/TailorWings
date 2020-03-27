import React, { Component } from "react";
import { Icon } from "antd";
import "./NavBarWeb.scss";
import iconMenu from "../../../assets/productDetailWeb/menu-2.svg"
import iconSearch from "../../../assets/productDetailWeb/search.svg";
import iconCart from "../../../assets/productDetailWeb/cart.svg";
import iconLogoTailorWings from "../../../assets/imageHomePage/Logo Header.svg";
import { Link } from "react-router-dom";

class NavBarWeb extends Component {
    render() {
        let { totalProductsOnCart } = this.props;
        if (totalProductsOnCart == null) {
            totalProductsOnCart = 0;
        }
        return (
            <div className="navbarWeb d-flex align-items-center">
                <div className="hamburgerMenu">
                    <img src={iconMenu} alt="" />
                </div>
                <div
                    className="logoTailorWings"
                    onClick={() => this.props.history.push("/")}
                >
                    <img src={iconLogoTailorWings} alt="" />
                </div>
                <div className="Tools d-flex">
                    <div className="search">
                        <img src={iconSearch} alt="" />
                        <span>TÌM KIẾM</span>
                    </div>
                    <div className="shoppingCart">
                        <Link
                            to="/shopping-cart"
                            style={{
                                width: "fit-content",
                                height: "fit-content",
                                textDecoration: "none",
                                border: "none"
                            }}
                        >
                            <img src={iconCart} alt="" />
                            <span>{`GIỎ HÀNG (${totalProductsOnCart})`}</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBarWeb;
