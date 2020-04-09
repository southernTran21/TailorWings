import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { getAllData, getWithCondition } from "../services/Fundamental";
import { totalPriceCalculation } from "../services/CommonFunction";
import ShoppingStore from "../pages/ShoppingStore/index";
import ProductDetail from "../pages/ProductDetail/index";
import ShoppingCart from "../pages/ShoppingCart/index";
import Home from "../pages/Home/index";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Admin from "../pages/Admin/Admin";
import { ProtectedRoute } from "./ProtectedRoute";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";
import Policy from "../pages/Policy";
import Support from "../pages/Support";

export const history = createBrowserHistory();

const initGA = () => {
    ReactGA.initialize("UA-159143322-1");
};

const logPageViewGA = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

const initPixel = () => {
    const options = {
        autoConfig: true, // set pixel's autoConfig
        debug: false // enable logs
    };
    ReactPixel.init("218331376051723", null, options);
};

const logPageViewPixel = () => {
    ReactPixel.pageView(window.location.pathname + window.location.search);
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityProducts: [],
            categoriesInfo: [],
            designsInfo: [],
            fabricsInfo: [],
            collectionsInfo: [],
            topListInfo: [],
            localStorageUpdated: false
        };
    }

    componentDidMount() {
        initGA();
        logPageViewGA();
        initPixel();
        logPageViewPixel();
        Promise.all([
            getWithCondition("categories", "visibility", true),
            getWithCondition("products", "visibility", true),
            getAllData("designs"),
            getAllData("fabrics"),
            getWithCondition("collections", "visibility", true),
            getWithCondition("topList", "visibility", true)
        ]).then(dataList => {
            if ( dataList.every(data => data != null || data !== '') ) {
                this.setState({
                    categoriesInfo: dataList[0],
                    visibilityProducts: dataList[1],
                    designsInfo: dataList[2],
                    fabricsInfo: dataList[3],
                    collectionsInfo: dataList[4],
                    topListInfo: dataList[5]
                })
            }
        });
    }

    getCategories = () => {
        getWithCondition("categories", "visibility", true);
        // .then(
        //     categoriesInfo => {
        //         if (categoriesInfo != null) {
        //             this.setState({
        //                 categoriesInfo
        //             });
        //         }
        //     }
        // );
    };

    getVisibilityProducts = () => {
        getWithCondition("products", "visibility", true);
        // .then(
        //     visibilityProducts => {
        //         if (visibilityProducts != null) {
        //             this.setState({
        //                 visibilityProducts
        //             });
        //         }
        //     }
        // );
    };

    getDesigns = () => {
        getAllData("designs");
        // .then(designsInfo => {
        //     if (designsInfo != null) {
        //         this.setState({
        //             designsInfo
        //         });
        //     }
        // });
    };

    getFabrics = () => {
        getAllData("fabrics");
        // .then(fabricsInfo => {
        //     if (fabricsInfo != null) {
        //         this.setState({
        //             fabricsInfo
        //         });
        //     }
        // });
    };

    getCollection = () => {
        getWithCondition("collections", "visibility", true);
        // .then(
        //     collectionsInfo => {
        //         if (collectionsInfo != null) {
        //             this.setState({
        //                 collectionsInfo
        //             });
        //         }
        //     }
        // );
    };

    getTopList = () => {
        getWithCondition("topList", "visibility", true);
        // .then(topListInfo => {
        //     if (topListInfo != null) {
        //         this.setState({
        //             topListInfo
        //         });
        //     }
        // });
    };

    render() {
        let {
            visibilityProducts,
            designsInfo,
            categoriesInfo,
            fabricsInfo,
            collectionsInfo,
            topListInfo
        } = this.state;
        if ( visibilityProducts.length > 0 ) {
            visibilityProducts.forEach((product) => {
                let relatedDesign = designsInfo.filter(design => design.id === product.designID)[0] || { price: 0, length: 0 };
                let relatedFabric = fabricsInfo.filter(fabric => fabric.id === product.fabricID)[0] || { price: 0 };
                let price = totalPriceCalculation(relatedDesign.price, relatedDesign.length, relatedFabric.price);
                price = Math.ceil(price/1000) * 1000;
                product.price = price;
            })
        }
        return (
            <React.Fragment>
                <Router history={history}>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            component={() => (
                                <Home
                                    history={history}
                                    visibilityProducts={visibilityProducts}
                                    designsInfo={designsInfo}
                                    topListInfo={topListInfo}
                                    collectionsInfo={collectionsInfo}
                                />
                            )}
                        />
                        <Route
                            path="/shopping-store"
                            exact
                            component={() => (
                                <ShoppingStore
                                    history={history}
                                    visibilityProducts={visibilityProducts}
                                    designsInfo={designsInfo}
                                    categoriesInfo={categoriesInfo}
                                    topListInfo={topListInfo}
                                    collectionsInfo={collectionsInfo}
                                />
                            )}
                        />
                        <Route
                            path="/product-detail"
                            exact
                            component={() => (
                                <ProductDetail
                                    history={history}
                                    visibilityProducts={visibilityProducts}
                                    designsInfo={designsInfo}
                                    fabricsInfo={fabricsInfo}
                                />
                            )}
                        />
                        <Route
                            path="/shopping-cart"
                            exact
                            component={() => <ShoppingCart history={history} />}
                        />
                        <Route
                            path="/policy"
                            exact
                            component={() => <Policy history={history} />}
                        />
                        <Route
                            path="/support"
                            exact
                            component={() => <Support history={history} />}
                        />
                        <ProtectedRoute
                            path="/admin"
                            component={props => <Admin {...props} />}
                        />
                        {/* <ProtectedRoute exact path="/admin" render={(props) => <Admin {...props} />} /> */}
                        <Route path="*" component={() => "404 NOT FOUND"} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}
