import React, { Component } from "react";
import Media from "react-media";
import ShoppingStoreMobile from "./ShoppingStoreMobile";
import ShoppingStoreWeb from "./ShoppingStoreWeb/index";
import ReactGA from "react-ga";
import { connect } from "react-redux";

const initGA = () => {
    ReactGA.initialize("UA-159143322-1");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

class ShoppingStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalProductsOnCart: 0,
            isNewProductAdded: false
        }
    }

    componentDidMount() {
        initGA();
        logPageView();
        let { totalProductsOnCart } = this.state;
        let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
        totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
            return accumulator + Number(current.quantity)
        }, 0);
        this.setState({
            totalProductsOnCart
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isNewProductAdded !== prevState.isNewProductAdded) {
            let productsOnCart = JSON.parse(
                sessionStorage.getItem("productsOnCart")
            );
            let totalProductsOnCart = productsOnCart.reduce(
                (accumulator, current) => {
                    return accumulator + current.quantity;
                },
                0
            );
            return {
                totalProductsOnCart,
                isNewProductAdded: nextProps.isNewProductAdded
            };
        } else {
            return null;
        }
    }

    render() {
        let {
            history,
            designsInfo,
            visibilityProducts,
            categoriesInfo,
            topListInfo,
            collectionsInfo,
        } = this.props;
        let bestSellerList = [];
        topListInfo.forEach(list => {
            if (list.id === "bestseller") {
                bestSellerList = list.designs;
            }
        });
        if (visibilityProducts && designsInfo) {
            visibilityProducts.forEach(product => {
                let relatedDesignInfo = designsInfo.find(
                    design => design.id === product.designID
                ) || { name: "" };
                product.name = relatedDesignInfo.name;
            });
        }
        return (
            <Media queries={{ small: { maxWidth: 1024 } }}>
                {matches =>
                    matches.small ? (
                        <ShoppingStoreMobile
                            history={history}
                            visibilityProducts={visibilityProducts}
                            categoriesInfo={categoriesInfo}
                            bestSellerList={bestSellerList}
                            collectionsInfo={collectionsInfo}
                            totalProductsOnCart={this.state.totalProductsOnCart}
                        />
                    ) : (
                        <ShoppingStoreWeb
                            history={history}
                            visibilityProducts={visibilityProducts}
                            categoriesInfo={categoriesInfo}
                            bestSellerList={bestSellerList}
                            collectionsInfo={collectionsInfo}
                            totalProductsOnCart={this.state.totalProductsOnCart}
                        />
                    )
                }
            </Media>
        );
    }
}

const mapStateToProps = state => {
    return {
        isNewProductAdded: state.listProductOnCart,
        isCartUpdated: state.updateProductOnCart
    };
};

export default connect(mapStateToProps, null)(ShoppingStore);
