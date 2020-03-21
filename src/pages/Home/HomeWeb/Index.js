import React, { Component } from "react";
import "./home.scss";
// import component
import Header from "./Header/index";
import Welcome from "./Body/Welcome";
import FourSteps from "./Body/FourSteps";
import Categories from "./Body/Categories";
import Introduction from "./Body/Introduction";
import Collections from "./Body/Collections";
import StrikingProducts from "./Body/StrikingProducts";
import WeGive from "./Body/WeGive";
import Passion from "./Body/Passion";
import Instagram from "./Body/Instagram";
import Footer from "./Footer";

export default class HomeWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bestSellerInfo: [],
            totalProductsOnCart: 0,
            visibleProductsList: []
        };
    }

    componentDidMount() {
        let {
            totalProductsOnCart,
            bestSellerInfo,
            visibleProductsList
        } = this.state;
        const { visibilityProducts, bestSellerList } = this.props;
        console.log('visibilityProducts', visibilityProducts)
        let productsOnCart = JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
            return accumulator + Number(current.quantity);
        }, 0);
        visibilityProducts.forEach(product => {
            var result = bestSellerList.includes(product.designID);
            if (result && product.default) {
                let info = {
                    fabricID: product.fabricID,
                    designID: product.designID,
                    name: product.name,
                    image: product.image[0]
                };
                bestSellerInfo.push(info);
            }
            visibleProductsList.push({
                name: product.name,
                productID: product.productID
            });
        });

        this.setState({
            totalProductsOnCart,
            bestSellerInfo,
            visibleProductsList
        });
    }

    render() {
        const {
            bestSellerInfo,
            totalProductsOnCart,
            visibleProductsList
        } = this.state;
        return (
            <div className="homePage_wrapper">
                <Header
                    bestSellerInfo={bestSellerInfo}
                    totalProductsOnCart={totalProductsOnCart}
                    visibleProductsList={visibleProductsList}
                />
                <Welcome />
                <FourSteps />
                <Categories />
                <Introduction />
                <Collections />
                <StrikingProducts bestSellerInfo={bestSellerInfo} />
                <WeGive />
                <Passion />
                <Instagram />
                <Footer />
            </div>
        );
    }
}
