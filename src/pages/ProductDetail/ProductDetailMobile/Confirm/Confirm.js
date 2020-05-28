// import libs ant design
import { Icon, Modal } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../../actions/index";
import ChangeSize from "./ChangeSize";
import "./Confirm.scss";
// import conponent
import Navbar from "./navbarPage";
import Quantity from "./Quantity";
import ShowImage from "./ShowImage";
import { Helmet } from "react-helmet";

class Confirm extends Component {
    constructor(props) {
        super(props);
        let productsOnCart =
            JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        let totalProductsOnCart = productsOnCart.reduce(
            (accumulator, current) => {
                return accumulator + Number(current.quantity);
            },
            0
        );
        this.state = {
            totalProductsOnCart,
            currentSelectedProduct: { ...this.props.currentSelectedProduct },
            currentSelectedFabric: { ...this.props.currentSelectedFabric },
        };
    }

    componentDidMount() {
        let currentSelectedProduct = { ...this.props.currentSelectedProduct };
        let currentSelectedFabric = { ...this.props.currentSelectedFabric };
        if (currentSelectedProduct != null && currentSelectedFabric != null) {
            this.setState({
                currentSelectedProduct,
                currentSelectedFabric,
            });
        }
    }

    addToCart = () => {
        const { currentSelectedProduct } = this.state;
        /* ------------- */
        let addedProduct = { ...currentSelectedProduct };
        /* ------------- */
        delete addedProduct["default"];
        delete addedProduct["timestamp"];
        delete addedProduct["visibility"];
        delete addedProduct["id"];
        /* ------------- */
        if (addedProduct) {
            this.props.onAddProductToCart(
                addedProduct,
                currentSelectedProduct.quantity
            );
        }
    };

    onDescriptionClicked = () => {
        const { currentSelectedProduct } = this.props;
        /* ------------- */
        let description = "Hiện không có mô tả cho sản phẩm này!";
        if (currentSelectedProduct.hasOwnProperty("description")) {
            description = currentSelectedProduct.description;
        }
        /* ------------- */
        Modal.info({
            title: "Mô tả thiết kế & vải",
            content: (
                <div>
                    <p>{description}</p>
                </div>
            ),
            // onOk() { },
        });
    };

    onQuantityChange = (currentSelectedProduct) => {
        if (currentSelectedProduct != null) {
            this.setState({
                currentSelectedProduct,
            });
        }
    };

    render() {
        const {
            currentSelectedProduct,
            currentSelectedFabric,
            totalProductsOnCart,
        } = this.state;
        const { history } = this.props;
        /* ------------- */
        let priceModified = 0;
        let modalImages = [];
        if (currentSelectedProduct.hasOwnProperty("price")) {
            /* ------------- */
            priceModified =
                currentSelectedProduct.price
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
                " " +
                "VNĐ";
            /* ------------- */
            modalImages = currentSelectedProduct.image.map((image) => {
                return image;
            });
            modalImages.push(currentSelectedFabric.image[0]);
        }
        /* ------------- */
        let urlProductName = history.match.params.hasOwnProperty("productName")
            ? history.match.params.productName
            : "";
        /* ------------- */
        let urlSearch = window.location.search;
        return (
            <div className="pageConfirm">
                <Navbar
                    url={`/product-detail/size-selection/${urlProductName}`}
                    urlSearch={urlSearch}
                    totalProductsOnCart={totalProductsOnCart}
                    confirmNavigating={this.props.confirmNavigating}
                />
                <div className="bodyPage">
                    <div className="infProduct d-flex flex-column align-items-center justify-content-center">
                        <div className="title__infProduct">
                            <div className="nameProduct d-flex flex-column align-items-center justify-content-center">
                                <span>{currentSelectedProduct.name}</span>
                                <span>{priceModified}</span>
                                <div
                                    className="info d-flex flex-row align-items-center justify-content-center"
                                    onClick={this.onDescriptionClicked}
                                >
                                    <span>Mô tả thiết kế & vải</span>
                                    <Icon type="info-circle" />
                                </div>
                            </div>
                        </div>
                        <ShowImage
                            currentFabricInfo={currentSelectedFabric}
                            currentSelectedProduct={currentSelectedProduct}
                        />
                    </div>
                </div>
                <div className="change_wraper d-flex flex-row">
                    <div className="col-6">
                        <ChangeSize
                            url={`/product-detail/size-selection/${urlProductName}`}
                            urlSearch={urlSearch}
                            currentSelectedProduct={currentSelectedProduct}
                            confirmNavigating={this.props.confirmNavigating}
                        />
                    </div>
                    <div className="col-6">
                        <Quantity
                            currentSelectedProduct={currentSelectedProduct}
                            onQuantityChange={this.onQuantityChange}
                        />
                    </div>
                </div>
                <div className="endPage">
                    <Link
                        to={"/shopping-cart"}
                        onClick={() => {
                            window.gtag_report_conversion("https://tailorwings.com/shopping-cart");
                            this.addToCart();
                        }}
                        className="buttonApcept d-flex flex-row align-items-center justify-content-center"
                        style={{ textDecoration: "none" }}
                    >
                        <a>MUA HÀNG</a>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductToCart: (product, quantity) => {
            dispatch(actions.addProductToCart(product, quantity));
        },
    };
};
export default connect(null, mapDispatchToProps)(Confirm);
