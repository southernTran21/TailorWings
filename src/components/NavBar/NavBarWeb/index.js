import React, { Component } from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import classNames from 'classnames'
//
import "./NavBarWeb.scss";
import iconMenu from "../../../assets/productDetailWeb/menu-2.svg";
import iconSearch from "../../../assets/productDetailWeb/search.svg";
import iconCart from "../../../assets/productDetailWeb/cart.svg";
import iconLogoTailorWings from "../../../assets/imageHomePage/Logo Header.svg";
import Backdrop from "../../SideBar/Backdrop";
import SideBar from "../../SideBar/SideBar";

class NavBarWeb extends Component {
    constructor(props) {
        super(props);
        let currentPage = window.location.pathname;
        this.state = {
            isSideBarOpen: false,
            isSearchOpen: false,
            isProductDetailPage: currentPage === '/product-detail'
        };
    }

    sideBarOpen = () => {
        let { isSideBarOpen } = this.state;
        isSideBarOpen = !isSideBarOpen;
        // this.props.sideBarChange(isSideBarOpen);
        this.setState({
            isSideBarOpen
        });
    };

    backdropClickHandler = () => {
        this.setState({ isSideBarOpen: false });
    };

    sideBarIconChange = () => {
        const { isSideBarOpen } = this.state;
        if (isSideBarOpen) {
            return <Icon type="close" onClick={this.sideBarOpen} />;
        } else {
            return <img src={iconMenu} alt="" onClick={this.sideBarOpen}/>;
        }
    };

    searchChangeIcon = () => {
        const { isSearchOpen } = this.props;
        if (isSearchOpen) {
            return (
                <Icon
                    type="close"
                    onClick={this.props.searchOpen}
                    style={{ fontSize: "18px" }}
                />
            );
        } else {
            return <Icon type="search" onClick={this.props.searchOpen} />;
        }
    };

    render() {
        let { totalProductsOnCart } = this.props;
        const { isSideBarOpen, isProductDetailPage } = this.state;
        if (totalProductsOnCart == null) {
            totalProductsOnCart = 0;
        }
        let backdrop;
        if (this.state.isSideBarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div className="navbarWeb d-flex align-items-center justify-content-between">
                <div className="hamburgerMenu">
                    {this.sideBarIconChange()}
                </div>
                <div
                    className="logoTailorWings"
                    onClick={() => this.props.history.push("/")}
                >
                    <img src={iconLogoTailorWings} alt="" />
                </div>
                <div className="Tools d-flex">
                    <div className={classNames("search", { unvisible: isProductDetailPage })}>
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
                <SideBar
                    show={isSideBarOpen}
                    changeSideBarState={this.sideBarOpen}
                    history={this.props.history}
                />
                {backdrop}
            </div>
        );
    }
}

export default NavBarWeb;
