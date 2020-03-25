import React, { Component } from "react";
import Media from "react-media";
import ReactGA from "react-ga";
import ProductDetailMobile from "./ProductDetailMobile";
import ProductDetailWeb from "./ProductDetailWeb/index";

const initGA = () => {
    console.log("initGA");
    ReactGA.initialize("UA-159143322-1");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default class ProductDetail extends Component {
    componentDidMount() {
        initGA();
        logPageView();
    }

    render() {
        return (
            <Media queries={{ small: { maxWidth: 1024 } }}>
                {matches =>
                    matches.small ? (
                        <ProductDetailMobile
                            history={this.props.history}
                            visibilityProducts={this.props.visibilityProducts}
                            designsInfo={this.props.designsInfo}
                            fabricsInfo={this.props.fabricsInfo}
                        />
                    ) : (
                        <ProductDetailWeb
                            history={this.props.history}
                            visibilityProducts={this.props.visibilityProducts}
                            designsInfo={this.props.designsInfo}
                            fabricsInfo={this.props.fabricsInfo}
                            // scrollToTop={this._scrollToTop}
                            localStorageUpdatedHandling={
                                this.props.localStorageUpdatedHandling
                            }
                        />
                    )
                }
            </Media>
        );
    }
}
