import classNames from "classnames";
import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import Categories from "./Body/Categories";
import Collections from "./Body/Collections";
import FourSteps from "./Body/FourSteps";
import Introduction from "./Body/Introduction";
import Passion from "./Body/Passion";
import StrikingProducts from "./Body/StrikingProducts";
import WeGive from "./Body/WeGive";
import Welcome from "./Body/Welcome";
import Footer from "./Footer";
// import component
import Header from "./Header/index";
import "./home.scss";

export default class HomeDesktop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalProductsOnCart: 0,
            isSideBarOpen: false,
        };
    }

    componentDidMount() {
        let productsOnCart =
            JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        let totalProductsOnCart = productsOnCart.reduce(
            (accumulator, current) => {
                return accumulator + Number(current.quantity);
            },
            0
        );
        /*--------------*/
        this.setState({
            totalProductsOnCart,
        });
    }

    sideBarChange = (state) => {
        this.setState({
            isSideBarOpen: state,
        });
    };

    render() {
        const { totalProductsOnCart, isSideBarOpen } = this.state;
        return (
            <div
                className={classNames("homePage_wrapper", {
                    disable_scroll: isSideBarOpen,
                })}
            >
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Header
                        history={this.props.history}
                        totalProductsOnCart={totalProductsOnCart}
                        sideBarChange={this.sideBarChange}
                    />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Welcome />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <FourSteps />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Categories />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Introduction />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Collections />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <StrikingProducts />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <WeGive />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Passion />
                </LazyLoad>
                {/* <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Instagram />
                </LazyLoad> */}
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Footer />
                </LazyLoad>
            </div>
        );
    }
}
