import React, { Component } from "react";
import "./ShoppingCart.scss";
import ReactGA from "react-ga";
import { notification } from "antd";
import { connect } from "react-redux";
import * as actions from "./../../../actions/index";
//
import ProductList from "./ProductList";
import PageHeader from "./PageHeader/PageHeader";
import CheckOut from "./CheckOut";
import CustomerInfo from "./Body/CustomerInfo";
import PaymentConfirm from "./Body/PaymentConfirm";
import ConfirmInfo from "./Footer/ConfirmInfo";
import ConfirmPayment from "./Footer/ConfirmPayment";

const initGA = () => {
    console.log("initGA");
    ReactGA.initialize("UA-159143322-1");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

class ShoppingCartMobile extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        this.state = {
            productsOnCart: [],
            totalProductsOnCart: 0,
            subtotalPrice: 0,
            isCartUpdated: false,
            paymentStep: "shoppingCart"
        };
    }

    componentDidMount() {
        initGA();
        logPageView();
        let productsOnCart =
            JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        console.log("productsOnCart", productsOnCart);
        let totalProductsOnCart = productsOnCart.reduce(
            (accumulator, current) => {
                return accumulator + current.quantity;
            },
            0
        );
        let subtotalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + current.price * current.quantity;
        }, 0);
        this.setState({
            productsOnCart,
            totalProductsOnCart,
            subtotalPrice
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isCartUpdated !== prevState.isCartUpdated) {
            let productsOnCart =
                JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
            let totalProductsOnCart = productsOnCart.reduce(
                (accumulator, current) => {
                    return accumulator + current.quantity;
                },
                0
            );
            let subtotalPrice = productsOnCart.reduce(
                (accumulator, current) => {
                    return accumulator + current.price * current.quantity;
                },
                0
            );
            return {
                productsOnCart,
                totalProductsOnCart,
                subtotalPrice,
                isCartUpdated: nextProps.isCartUpdated
            };
        }
        return null;
    }

    onQuantityChange = (quantityChanged, index) => {
        let { productsOnCart, subtotalPrice } = this.state;
        productsOnCart[index].quantity = Number(quantityChanged);
        subtotalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + current.price * current.quantity;
        }, 0);
        this.props.onUpdateCart(productsOnCart);
        notification.success({
            message: "Thay đổi thành công",
            placement: "bottomRight"
        });
        this.setState({
            productsOnCart,
            subtotalPrice
        });
    };

    onProductRemove = index => {
        let { productsOnCart, subtotalPrice } = this.state;
        let deletedProduct = productsOnCart.splice(Number(index), 1);
        subtotalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + current.price * current.quantity;
        }, 0);
        this.props.onUpdateCart(productsOnCart);
        notification.success({
            message: "Thay đổi thành công",
            placement: "bottomRight",
            description: `${deletedProduct[0].name} đã được xóa khỏi giỏ hàng của bạn`
        });
        this.setState({
            productsOnCart,
            subtotalPrice
        });
    };

    onStepChange = step => {
        this.setState({
            paymentStep: step
        });
    };

    shoppingCartBodyRender = () => {
        const { productsOnCart } = this.state;
        return productsOnCart.map((product, index) => {
            let price =
                product.price
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " VNĐ";
            return (
                <ProductList
                    key={index}
                    price={price}
                    product={product}
                    onProductRemove={this.onProductRemove}
                    onQuantityChange={this.onQuantityChange}
                    onStepChange={this.onStepChange}
                    index={index}
                />
            );
        });
    };

    shoppingCartFooterRender = () => {
        let { subtotalPrice } = this.state;
        subtotalPrice =
            subtotalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
                " VNĐ" || "0 VNĐ";
        return (
            <CheckOut
                subtotalPrice={subtotalPrice}
                onStepChange={this.onStepChange}
            />
        );
    };

    customerInfoBodyRender = () => {
        return <CustomerInfo onStepChange={this.onStepChange} />;
    };

    customerInfoFooterRender = () => {
        return <ConfirmInfo onStepChange={this.onStepChange} />;
    };

    paymentConfirmBodyRender = () => {
        return <PaymentConfirm onStepChange={this.onStepChange} />;
    };

    paymentConfirmFooterRender = () => {
        return <ConfirmPayment onStepChange={this.onStepChange} />;
    };

    onHeaderRenderChange = () => {
        const { paymentStep } = this.state;
        let currentTitle = "";
        switch (paymentStep) {
            case "shoppingCart":
                currentTitle = "Giỏ hàng";
                break;
            case "customerInfo":
                currentTitle = "Địa chỉ nhận hàng";
                break;
            case "paymentConfirm":
                currentTitle = "Xác nhận thông tin";
                break;
            default:
                break;
        }
        return (
            <PageHeader
                title={currentTitle}
                paymentStep={paymentStep}
                onStepChange={this.onStepChange}
            />
        );
    };

    onBodyRenderChange = () => {
        const { paymentStep } = this.state;
        let currentStepRender = "";
        switch (paymentStep) {
            case "shoppingCart":
                currentStepRender = this.shoppingCartBodyRender();
                break;
            case "customerInfo":
                currentStepRender = this.customerInfoBodyRender();
                break;
            case "paymentConfirm":
                currentStepRender = this.paymentConfirmBodyRender();
                break;
            default:
                break;
        }
        return currentStepRender;
    };

    onFooterRenderChange = () => {
        const { paymentStep } = this.state;
        let currentStepRender = "";
        switch (paymentStep) {
            case "shoppingCart":
                currentStepRender = this.shoppingCartFooterRender();
                break;
            case "customerInfo":
                currentStepRender = this.customerInfoFooterRender();
                break;
            case "paymentConfirm":
                currentStepRender = this.paymentConfirmFooterRender();
                break;
            default:
                break;
        }
        return currentStepRender;
    };

    render() {
        return (
            <div className="pageMyCart-wraper">
                {this.onHeaderRenderChange()}
                {this.onBodyRenderChange()}
                {this.onFooterRenderChange()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isCartUpdated: state.updateProductOnCart
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateCart: updatedList => {
            dispatch(actions.updateCart(updatedList));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartMobile);
