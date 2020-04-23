import classNames from "classnames";
import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import Categories from "./Body/Categories";
import Collections from "./Body/Collections";
import FourSteps from "./Body/FourSteps";
import Instagram from "./Body/Instagram";
import Introduction from "./Body/Introduction";
import Passion from "./Body/Passion";
import StrikingProducts from "./Body/StrikingProducts";
import WeGive from "./Body/WeGive";
import Welcome from "./Body/Welcome";
import Footer from "./Footer";
// import component
import Header from "./Header/index";
import "./home.scss";

export default class HomeWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bestSellerInfo: [],
            totalProductsOnCart: 0,
            visibleProductsList: [],
            isSideBarOpen: false,
        };
    }

    componentDidMount() {
        let {
            totalProductsOnCart,
            bestSellerInfo,
            visibleProductsList,
        } = this.state;
        const { visibilityProducts, bestSellerList } = this.props;
        let productsOnCart =
            JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
            return accumulator + Number(current.quantity);
        }, 0);
        visibilityProducts.forEach((product) => {
            var result = bestSellerList.includes(product.designID);
            if (result && product.default) {
                let info = {
                    fabricID: product.fabricID,
                    designID: product.designID,
                    name: product.name,
                    image: product.image[0],
                };
                bestSellerInfo.push(info);
            }
            visibleProductsList.push({
                name: product.name,
                productID: product.productID,
            });
        });

        this.setState({
            totalProductsOnCart,
            bestSellerInfo,
            visibleProductsList,
        });
    }

    sideBarChange = (state) => {
        this.setState({
            isSideBarOpen: state,
        });
    };

    render() {
        const {
            bestSellerInfo,
            totalProductsOnCart,
            visibleProductsList,
            isSideBarOpen,
        } = this.state;
        return (
            <div
                className={classNames("homePage_wrapper", {
                    disable_scroll: isSideBarOpen,
                })}
            >
                {/* {" "} */}
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Header
                        history={this.props.history}
                        bestSellerInfo={bestSellerInfo}
                        totalProductsOnCart={totalProductsOnCart}
                        visibleProductsList={visibleProductsList}
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
                    <StrikingProducts
                        bestSellerInfo={bestSellerInfo}
                        visibleProductsList={visibleProductsList}
                    />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <WeGive />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Passion />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Instagram />
                </LazyLoad>
                <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                    <Footer />
                </LazyLoad>
            </div>
        );
    }
}
