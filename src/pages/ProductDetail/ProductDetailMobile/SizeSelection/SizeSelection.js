// import libs ant design
import { Icon, message, Modal } from "antd";
import React, { Component } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Redirect } from "react-router-dom";
import BodyScale from "./BodyScale";
// import component
import NavBar from "./navbarPage";
import Selection from "./Selection";
import "./SizeSelection.scss";

export default class SizeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelectedProduct: { ...this.props.currentSelectedProduct },
            sizeImage: this.props.sizeImages[6],
            isUpdate: false,
            isConfirmNavigate: false,
            totalProductsOnCart: 0,
        };
    }

    componentDidMount() {
        let currentSelectedProduct = { ...this.props.currentSelectedProduct };
        const { sizeImages } = this.props;
        /* ------------- */
        currentSelectedProduct.size =
            JSON.parse(localStorage.getItem("size")) || null;
        currentSelectedProduct.bodyMetric =
            JSON.parse(localStorage.getItem("bodyMetric")) ||
            new Array(3).fill("");
        /* ------------- */
        let sizeImage = this.state.sizeImage;
        if (currentSelectedProduct.hasOwnProperty("size")) {
            sizeImage = sizeImages.find(
                (size) => currentSelectedProduct.size === size.id
            );
        }
        /* ------------- */
        let productsOnCart =
            JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        let totalProductsOnCart = productsOnCart.reduce(
            (accumulator, current) => {
                return accumulator + Number(current.quantity);
            },
            0
        );
        /* ------------- */
        this.setState({
            sizeImage,
            currentSelectedProduct,
            totalProductsOnCart,
        });
    }

    onSizeUpdated = (size) => {
        const { sizeImages } = this.props;
        let currentSelectedProduct = { ...this.props.currentSelectedProduct };
        /* ------------- */
        currentSelectedProduct.size = size;
        currentSelectedProduct.bodyMetric.fill("");
        /* ------------- */
        let sizeImage = sizeImages.find((image) => image.id === size);
        /* ------------- */
        this.setState({
            currentSelectedProduct,
            sizeImage,
            isUpdate: true,
        });
    };

    onBodyMetricUpdated = (bodyMetric) => {
        let currentSelectedProduct = { ...this.props.currentSelectedProduct };
        /* ------------- */
        currentSelectedProduct.bodyMetric = bodyMetric;
        /* ------------- */
        this.setState({
            currentSelectedProduct,
            isUpdate: true,
        });
    };

    onConfirmButtonClicked = () => {
        const { currentSelectedProduct } = this.state;
        /* ------------- */
        let isSizeSelected = currentSelectedProduct.size != null;
        let isAllMetricFill = !currentSelectedProduct.bodyMetric.includes("");
        let isAllMetricEmpty = currentSelectedProduct.bodyMetric.every(
            (metric) => metric === ""
        );
        /* ------------- */
        if (
            (isSizeSelected && isAllMetricFill) ||
            (isSizeSelected && isAllMetricEmpty) ||
            (!isSizeSelected && isAllMetricFill)
        ) {
            this.props.onSelectedProductUpdating(
                currentSelectedProduct,
                "size-selection"
            );
            /* ------------- */
            if (this.state.isUpdate) {
                this.updateSizeMetricToStorage(currentSelectedProduct);
            }
            /* ------------- */
        } else {
            message.error("Vui lòng chọn size hoặc cung cấp 3 số đo cơ thể!");
        }
    };

    updateSizeMetricToStorage = (selectedProduct) => {
        localStorage.setItem("size", JSON.stringify(selectedProduct.size));
        localStorage.setItem(
            "bodyMetric",
            JSON.stringify(selectedProduct.bodyMetric)
        );
    };

    onDescriptionClicked = () => {
        Modal.info({
            title: "Mô tả thiết kế & vải",
            content: (
                <div>
                    <p>{this.state.currentSelectedProduct.description}</p>
                </div>
            ),
            // onOk() { },
        });
    };

    render() {
        const {
            sizeImage,
            currentSelectedProduct,
            totalProductsOnCart,
        } = this.state;
        console.log('currentSelectedProduct :>> ', currentSelectedProduct);
        const { history, isConfirmNavigate } = this.props;
        let urlProductName = history.match.params.hasOwnProperty("productName")
            ? history.match.params.productName
            : "";
        // let urlSearch =
        //     currentSelectedProduct.hasOwnProperty("designID") &&
        //     currentSelectedProduct.hasOwnProperty("fabricID")
        //         ? `?design=${currentSelectedProduct.designID}&fabric=${currentSelectedProduct.fabricID}`
        //         : "?design=&fabric=";
        let urlSearch = window.location.search;
        if (isConfirmNavigate) {
            return (
                <Redirect
                    to={`/product-detail/confirm-selection/${urlProductName}${urlSearch}`}
                />
            );
        }
        return (
            <div className="pageSizeSelection">
                <NavBar
                    url={`/product-detail/fabric-selection/${urlProductName}`}
                    urlSearch={urlSearch}
                    totalProductsOnCart={totalProductsOnCart}
                />
                <div className="bodyPage d-flex flex-column justify-content-start">
                    <div className="infProduct d-flex flex-column align-items-center">
                        <div className="title__infProduct">
                            <div className="nameProduct">
                                <span>{currentSelectedProduct.name}</span>
                            </div>
                            <div className="info d-flex flex-row align-items-center justify-content-center">
                                <span onClick={this.onDescriptionClicked}>
                                    Mô tả thiết kế & vải
                                    <Icon type="info-circle" />
                                </span>
                            </div>
                        </div>
                        <div className="imgProduct">
                            <img src={sizeImage.image} alt={sizeImage.id} />
                        </div>
                        <Selection
                            size={currentSelectedProduct.size}
                            onSizeUpdated={this.onSizeUpdated}
                        />
                        <BodyScale
                            bodyMetric={currentSelectedProduct.bodyMetric}
                            onBodyMetricUpdated={this.onBodyMetricUpdated}
                        />
                    </div>
                    <div
                        className="buttonApcept d-flex flex-row align-items-center justify-content-center"
                        onClick={this.onConfirmButtonClicked}
                    >
                        <a>XÁC NHẬN</a>
                    </div>
                </div>
            </div>
        );
    }
}
