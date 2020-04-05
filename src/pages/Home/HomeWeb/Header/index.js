import React, { Component } from "react";

// import component
import TailorWingsLogo from "./TailorWingsLogo";
import SearchInput from "./Search";
import PersonalInfo from "./PersonalInfo";
import iconClose from "../../../../assets/imageHomePage/close.svg";
import Backdrop from "../../../../components/SideBar/Backdrop";
import iconMenu from "../../../../assets/productDetailWeb/menu-2.svg";
import SideBar from "../../../../components/SideBar/SideBar";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false
        };
    }

    sideBarOpen = () => {
        let { isSideBarOpen } = this.state;
        isSideBarOpen = !isSideBarOpen;
        this.props.sideBarChange(isSideBarOpen);
        this.setState({
            isSideBarOpen
        });
    };

    sideBarIconChange = () => {
        const { isSideBarOpen } = this.state;
        if (isSideBarOpen) {
            return <img src={iconClose} alt="" />;
        } else {
            return <img src={iconMenu} alt="" />;
        }
    };

    render() {
        const {
            totalProductsOnCart,
            visibleProductsList,
            bestSellerInfo
        } = this.props;
        const { isSideBarOpen } = this.state;
        let backdrop;
        if (this.state.isSideBarOpen) {
            backdrop = <Backdrop click={this.sideBarOpen} />;
        }
        return (
            <div className="homeNavbar_wrapper d-flex flex-row justify-content-between align-items-center">
                <div className="navbar">
                    <div className="iconMenu d-flex align-items-center" onClick={this.sideBarOpen}>
                        {this.sideBarIconChange()}
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
