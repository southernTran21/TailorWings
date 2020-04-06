import React, { Component } from "react";
import ReactGA from "react-ga";
import "./ShoppingCartWeb.scss";
import "../../../components/NavBar/NavBarWeb/NavBarWeb.scss";
import { notification, message } from "antd";
import { connect } from "react-redux";
import * as actions from "./../../../actions/index";
import { addDocument, setDocument } from "./../../../services/Fundamental";
import uniqid from "uniqid";
//
import NavBarWeb from "../../../components/NavBar/NavBarWeb/index";
import ProductList from "./ShoppingCart/ProductList";
import Summary from "./ShoppingCart/Summary";
import CustomerInfo from "./CustomerInfo";
import PaymentConfirm from "./PaymentConfirm";
import OrderConfirm from "./OrderConfirm";

const initGA = () => {
    ReactGA.initialize("UA-159143322-1");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

const PRODUCT_DETAIL_FORM = {
    discount: 0,
    price: 0,
    productID: "",
    name: "",
    bodyMetric: [],
    size: "",
    quantity: 0,
};

class ShoppingCartWeb extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        this.state = {
            // common state
            productsOnCart: [],
            totalProductsOnCart: 0,
            subtotalPrice: 0,
            isCartUpdated: false,
            paymentStep: "shoppingCart",
            customerInfo: {
                name: "",
                phone: "",
                address: "",
            },
            // state for customerInfo
            errorValidate: new Array(3).fill(false),
            rememberChecked: false,
            // state for paymentInfo
            paymentMethod: "COD",
            paymentLoading: false,
        };
    }

    componentDidMount() {
        initGA();
        logPageView();
        let { rememberChecked } = this.state;
        let productsOnCart =
            JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        let customerInfo =
            JSON.parse(localStorage.getItem("customerInfo")) ||
            this.state.customerInfo;
        let totalProductsOnCart = productsOnCart.reduce(
            (accumulator, current) => {
                return accumulator + current.quantity;
            },
            0
        );
        let subtotalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + current.price * current.quantity;
        }, 0);
        if (customerInfo.name !== "") {
            rememberChecked = true;
        }
        this.setState({
            productsOnCart,
            totalProductsOnCart,
            subtotalPrice,
            customerInfo,
            rememberChecked,
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
                isCartUpdated: nextProps.isCartUpdated,
            };
        }
        return null;
    }

    // API FOR SHOPPPING CART RENDER
    onQuantityChange = (quantityChanged, index) => {
        console.log("quantityChanged", quantityChanged);
        let { subtotalPrice, productsOnCart } = this.state;
        productsOnCart[index].quantity = Number(quantityChanged);
        subtotalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + current.price * current.quantity;
        }, 0);
        this.props.onUpdateCart(productsOnCart);
        notification.success({
            message: "Thay đổi thành công",
            placement: "bottomRight",
        });
        this.setState({
            productsOnCart,
            subtotalPrice,
        });
    };

    onProductRemove = (index) => {
        let { productsOnCart, subtotalPrice } = this.state;
        let deletedProduct = productsOnCart.splice(Number(index), 1);
        subtotalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + current.price * current.quantity;
        }, 0);
        this.props.onUpdateCart(productsOnCart);
        notification.success({
            message: "Thay đổi thành công",
            placement: "bottomRight",
            description: `${deletedProduct[0].name} đã được xóa khỏi giỏ hàng của bạn`,
        });
        this.setState({
            productsOnCart,
            subtotalPrice,
        });
    };

    // END API FOR SHOPPPING CART RENDER

    //API FOR CUSTOMER INFO PAGE

    onCustomerInfoUpdate = (customerInfo) => {
        if (customerInfo != null) {
            this.setState({
                customerInfo,
            });
        }
    };

    onCustomerInfoValidate = () => {
        const { name, phone, address } = this.state.customerInfo;
        const { rememberChecked, customerInfo } = this.state;
        let errorValidate = [];
        let phoneModified = phone.replace(/ /gi, "");
        errorValidate[0] = name === "" ? true : false;
        errorValidate[1] =
            isNaN(phoneModified) ||
            phone === "" ||
            phoneModified.split("")[0] != 0
                ? true
                : false;
        errorValidate[2] = address === "" ? true : false;
        if (!errorValidate.includes(true)) {
            this.onStepChange("paymentConfirm");
            if (rememberChecked) {
                localStorage.setItem(
                    "customerInfo",
                    JSON.stringify(customerInfo)
                );
            } else {
                localStorage.setItem(
                    "customerInfo",
                    JSON.stringify({
                        name: "",
                        phone: "",
                        address: "",
                    })
                );
            }
        }
        this.setState({
            errorValidate,
        });
    };

    onRememberInfo = (e) => {
        this.setState({
            rememberChecked: e.target.checked,
        });
    };

    // END API FOR CUSTOMER INFO PAGE

    //API FOR PAYMENT INFO PAGE

    onPaymentMethodChange = (method) => {
        this.setState({
            paymentMethod: method,
        });
    };

    uploadNewOrder = () => {
        this.setState({
            paymentLoading: true,
        });
        const { subtotalPrice, paymentMethod } = this.state;
        let { name, phone, address } = this.state.customerInfo;
        let phoneModified = phone.replace(/ /gi, "");
        let productsOnCart =
            JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        let totalPrice = subtotalPrice;
        let orderDetail = {
            orderID: uniqid.process(),
            orderItems: [],
        };
        productsOnCart.forEach((product) => {
            let productDetail = PRODUCT_DETAIL_FORM;
            Object.keys(productDetail).forEach((key) => {
                productDetail[key] = product[key] || "";
            });
            orderDetail.orderItems.push(productDetail);
        });
        let customer = {
            adddress: address || "",
            cusName: name || "",
            customerID: uniqid.time() || "",
            id: "",
            lock: false,
            note: "",
            phone: phoneModified || "",
            promo: 0,
            rate: "",
            wishList: [],
        };
        let order = {
            customerID: customer.customerID,
            doneDate: "",
            id: "",
            notes: "",
            orderDate: "",
            orderID: orderDetail.orderID,
            status: "new",
            total: totalPrice,
            paymentMethod: paymentMethod,
        };
        Promise.all([
            setDocument("customers", customer, customer.phone),
            addDocument("orders", order),
            addDocument("orderDetail", orderDetail),
        ]).then(() => {
            message.success("Giao dịch thành công!");
            this.props.onUpdateCart([]);
            this.onStepChange("orderConfirm");
            this.setState({
                paymentLoading: false,
            });
        });
    };

    // END API FOR CUSTOMER INFO PAGE

    onStepChange = (step) => {
        this.setState({
            paymentStep: step,
        });
    };

    shoppingCartBodyRender = () => {
        const { productsOnCart, subtotalPrice, paymentStep } = this.state;
        let content = "";
        switch (paymentStep) {
            case "shoppingCart":
                content = (
                    <React.Fragment>
                        <div className="titleHeader_ShoppingCart d-flex justify-content-center">
                            <span>Giỏ hàng</span>
                        </div>
                        <div className="body_ShoppingCart d-flex justify-content-between">
                            <ProductList
                                onProductRemove={this.onProductRemove}
                                onQuantityChange={this.onQuantityChange}
                                onStepChange={this.onStepChange}
                                productsOnCart={productsOnCart}
                            />
                            <Summary
                                subtotalPrice={subtotalPrice}
                                onStepChange={this.onStepChange}
                                productsOnCart={productsOnCart}
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case "customerInfo":
                content = (
                    <CustomerInfo
                        onStepChange={this.onStepChange}
                        onCustomerInfoUpdate={this.onCustomerInfoUpdate}
                        errorValidate={this.state.errorValidate}
                        customerInfo={this.state.customerInfo}
                        onRememberInfo={this.onRememberInfo}
                        rememberChecked={this.state.rememberChecked}
                        onCustomerInfoValidate={this.onCustomerInfoValidate}
                    />
                );
                break;
            case "paymentConfirm":
                content = (
                    <PaymentConfirm
                        onStepChange={this.onStepChange}
                        customerInfo={this.state.customerInfo}
                        productsOnCart={this.state.productsOnCart}
                        subtotalPrice={this.state.subtotalPrice}
                        paymentMethod={this.state.paymentMethod}
                        onPaymentMethodChange={this.onPaymentMethodChange}
                        paymentLoading={this.state.paymentLoading}
                        uploadNewOrder={this.uploadNewOrder}
                    />
                );
                break;

            case "orderConfirm":
                content = <OrderConfirm phone={this.state.customerInfo.phone}/>;
                break;

            default:
                break;
        }
        return content;
    };

    render() {
        return (
            <div className="pageShoppingCartWeb">
                <NavBarWeb history={this.props.history} />
                {this.shoppingCartBodyRender()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isCartUpdated: state.updateProductOnCart,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateCart: (updatedList) => {
            dispatch(actions.updateCart(updatedList));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartWeb);
