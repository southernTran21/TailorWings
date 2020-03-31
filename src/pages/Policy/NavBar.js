import React, { Component } from "react";
import "./Policy.scss";
import { Icon, Badge } from "antd";
import { Link } from "react-router-dom";
//
import logoTW from "../../assets/imageHomePage/Logo Header.svg";
import SideBar from "../../components/SideBar/SideBar";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false
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
            return <Icon type="close" onClick={this.sideBarOpen}/>;
        } else {
            return <Icon type="menu" onClick={this.sideBarOpen}/>;
        }
    };
    render() {
        let { totalProductsOnCart } = this.props;
        const {
            isSideBarOpen
        } = this.state;
        if (totalProductsOnCart == null) {
            totalProductsOnCart = 0;
        }
        return (
            <div className="navbarHeader d-flex justify-content-between">
                <div className="iconMenu d-flex align-items-center">
                    {this.sideBarIconChange()}
                </div>
                <div className="titleHeader" onClick={() => this.props.history.push('/')}>
                    <img src={logoTW} alt="" />
                </div>
                <div className="iconShoppingCart d-flex justify-content-between align-items-center">
                    <Link
                        to="/shopping-cart"
                        style={{
                            width: "fit-content",
                            height: "fit-content",
                            textDecoration: "none",
                            border: "none"
                        }}
                    >
                        <Icon type="shopping-cart" />
                        <Badge count={totalProductsOnCart}>
                            <a className="head-example" />
                        </Badge>
                    </Link>
                </div>
                <SideBar
                    show={isSideBarOpen}
                    changeSideBarState={this.sideBarOpen}
                    history={this.props.history}
                />
            </div>
        );
    }
}

export default NavBar;
