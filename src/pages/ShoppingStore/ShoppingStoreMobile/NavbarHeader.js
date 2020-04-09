import React, { Component } from "react";
import { Icon } from "antd";
import classNames from "classnames";
// import component
import SideBar from "../../../components/SideBar/SideBar";
import Backdrop from "../../../components/SideBar/Backdrop";
import Search from "./Search";
import logoTW from "../../../assets/imageHomePage/Logo Header.svg";
import iconMenu from "../../../assets/productDetailWeb/menu-2.svg";
import iconClose from "../../../assets/imageHomePage/close.svg";

class NavbarHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false,
            isSearchOpen: false
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

    backdropClickHandler = () => {
        this.setState({ isSideBarOpen: false });
    };

    sideBarIconChange = () => {
        const { isSideBarOpen } = this.state;
        if (isSideBarOpen) {
            return <img src={iconClose} alt="" />;
        } else {
            return <img src={iconMenu} alt="" />;
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

    // searchOpen = () => {
    //     let { isSearchOpen } = this.state;
    //     isSearchOpen = !isSearchOpen;
    //     this.props.sideBarChange(isSearchOpen);
    //     this.setState({
    //         isSearchOpen
    //     })
    // }

    render() {
        const { isSideBarOpen } = this.state;
        const { isSearchOpen } = this.props;
        let backdrop;
        if (this.state.isSideBarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        const changeClassname = classNames(
            " navbarHeader d-flex flex-row align-items-center justify-content-between"
        );
        return (
            <div className={changeClassname}>
                <div
                    className="iconMenu d-flex align-items-center"
                    onClick={this.sideBarOpen}
                >
                    {this.sideBarIconChange()}
                </div>
                <div
                    className="titleHeader"
                    onClick={() => this.props.history.push("/")}
                >
                    <img src={logoTW} alt="" />
                </div>
                <div className="iconSearch d-flex flex-row justify-content-center align-content-center">
                    {this.searchChangeIcon()}
                </div>
                <SideBar
                    show={isSideBarOpen}
                    changeSideBarState={this.sideBarOpen}
                    history={this.props.history}
                />
                <Search
                    isSearchOpen={isSearchOpen}
                    history={this.props.history}
                    onSearchSuggestionUpdate={
                        this.props.onSearchSuggestionUpdate
                    }
                    searchOpen={this.props.searchOpen}
                />
                {backdrop}
            </div>
        );
    }
}

export default NavbarHeader;
