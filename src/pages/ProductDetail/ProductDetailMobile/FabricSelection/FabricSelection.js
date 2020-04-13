import React, { Component } from "react";
import "./FabricSelection.scss";
import { Link } from "react-router-dom";
import { Icon, Badge } from "antd";
import classNames from "classnames";
//
import ProductModal from "../ProductModal";
import FabricSwiper from "./FabricSwiper";
import ProductSwiper from "./ProductSwiper";

import iconShoppingBadge from "../../../../assets/imageHomePage/shopping-cart.svg";

class FabricSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSelectedState: [true, false, false, false, false],
            productSliderIndex: 0,
            swiper: null,
            renderProducts: [
                { image: [""], price: 0 },
                { image: [""], price: 0 },
                { image: [""], price: 0 },
                { image: [""], price: 0 },
                { image: [""], price: 0 },
            ],
            currentProductIndex: 0,
            isSwiperTouch: false,
            currentDesign: { name: "" },
            price: 0,
            isProductModalShow: false,
        };
    }

    componentDidMount() {
        let { productList, designsInfo } = this.props;
        let { productSelectedState } = this.state;
        let designID = window.location.search.match(/id=(.*)&\b/)[1];
        if (productList.length < productSelectedState.length) {
            productList = productList.concat(productList);
            productList = productList.concat(productList);
            productList = productList.concat(productList);
        }
        let renderProducts = [];
        for (let i = 0; i < this.state.productSelectedState.length; i++) {
            renderProducts[i] = productList[i] || { image: [""], price: 0 };
        }
        let currentDesign = designsInfo.find((design) => {
            return design.id === designID;
        }) || { name: "" };
        this.setState({
            renderProducts,
            currentDesign,
            price: renderProducts[0].price,
        });
    }

    onProductImageSwiped(direction) {
        let { productList } = this.props;
        let {
            productSelectedState,
            productSliderIndex,
            swiper,
            renderProducts,
        } = this.state;
        productSelectedState[productSliderIndex] = false;
        let indexOfNextProduct = 0;
        if (productList.length < productSelectedState.length) {
            productList = productList.concat(productList);
            productList = productList.concat(productList);
        }
        if (direction > 0) {
            if (productSliderIndex === productSelectedState.length - 1) {
                if (
                    renderProducts[productSelectedState.length - 1] ===
                    productList[productList.length - 1]
                ) {
                    renderProducts[0] = productList[0];
                } else {
                    let indexOfCurrentProduct = productList.indexOf(
                        renderProducts[productSelectedState.length - 1]
                    );
                    renderProducts[0] = productList[indexOfCurrentProduct + 1];
                }
                productSliderIndex = 0;
            } else {
                if (
                    renderProducts[productSliderIndex] ===
                    productList[productList.length - 1]
                ) {
                    renderProducts[productSliderIndex + 1] = productList[0];
                } else {
                    let indexOfCurrentProduct = productList.indexOf(
                        renderProducts[productSliderIndex]
                    );
                    renderProducts[productSliderIndex + 1] =
                        productList[indexOfCurrentProduct + 1];
                }
                productSliderIndex = productSliderIndex + 1;
            }
            indexOfNextProduct = productList.indexOf(
                renderProducts[productSliderIndex]
            );
            swiper.updateActiveIndex(indexOfNextProduct);
            swiper.slideTo(swiper.activeIndex + 5);
        } else {
            if (productSliderIndex === 0) {
                if (renderProducts[0] === productList[0]) {
                    renderProducts[productSelectedState.length - 1] =
                        productList[productList.length - 1];
                } else {
                    let indexOfCurrentProduct = productList.indexOf(
                        renderProducts[0]
                    );
                    renderProducts[productSelectedState.length - 1] =
                        productList[indexOfCurrentProduct - 1];
                }
                productSliderIndex = productSelectedState.length - 1;
            } else {
                if (renderProducts[productSliderIndex] === productList[0]) {
                    renderProducts[productSliderIndex - 1] =
                        productList[productList.length - 1];
                } else {
                    let indexOfCurrentProduct = productList.indexOf(
                        renderProducts[productSliderIndex]
                    );
                    renderProducts[productSliderIndex - 1] =
                        productList[indexOfCurrentProduct - 1];
                }
                productSliderIndex = productSliderIndex - 1;
            }
            indexOfNextProduct = productList.indexOf(
                renderProducts[productSliderIndex]
            );
            swiper.updateActiveIndex(indexOfNextProduct);
            swiper.slideTo(swiper.activeIndex + 5);
        }
        productSelectedState[productSliderIndex] = true;
        this.setState({
            currentProductIndex: indexOfNextProduct,
            productSliderIndex,
            productSelectedState,
            renderProducts,
            isSwiperTouch: false,
            price: renderProducts[productSliderIndex].price,
        });
    }

    // selectHandling = (e) => {
    //     const { productList } = this.props;
    //     let {
    //         productSelectedState,
    //         productSliderIndex,
    //         swiper,
    //         renderProducts,
    //     } = this.state;
    //     let selectedProductIndex = 0;
    //     let productListDouble = [];
    //     if (productList.length < productSelectedState.length) {
    //         productListDouble = productList.concat(productList);
    //         productListDouble = productListDouble.concat(productList);
    //     } else {
    //         productListDouble = productList.concat(productList);
    //     }
    //     switch (e.target.id) {
    //         case "slide1":
    //             selectedProductIndex = productList.indexOf(renderProducts[0]);
    //             renderProducts[0] = productListDouble[selectedProductIndex];
    //             renderProducts[1] = productListDouble[selectedProductIndex + 1];
    //             renderProducts[2] = productListDouble[selectedProductIndex + 2];
    //             renderProducts[3] = productListDouble[selectedProductIndex + 3];
    //             renderProducts[4] = productListDouble[selectedProductIndex + 4];
    //             productSelectedState[
    //                 productSliderIndex
    //             ] = !productSelectedState[productSliderIndex];
    //             productSelectedState[0] = true;
    //             this.setState({
    //                 currentProductIndex: selectedProductIndex,
    //                 renderProducts,
    //                 productSelectedState,
    //                 productSliderIndex: 0,
    //                 isSwiperTouch: false,
    //                 price: renderProducts[selectedProductIndex],
    //             });
    //             swiper.slideTo(selectedProductIndex);
    //             break;
    //         case "slide2":
    //             selectedProductIndex = productList.indexOf(renderProducts[1]);
    //             renderProducts[0] = productListDouble[selectedProductIndex + 4];
    //             renderProducts[1] = productListDouble[selectedProductIndex];
    //             renderProducts[2] = productListDouble[selectedProductIndex + 1];
    //             renderProducts[3] = productListDouble[selectedProductIndex + 2];
    //             renderProducts[4] = productListDouble[selectedProductIndex + 3];
    //             productSelectedState[
    //                 productSliderIndex
    //             ] = !productSelectedState[productSliderIndex];
    //             productSelectedState[1] = true;
    //             this.setState({
    //                 currentProductIndex: selectedProductIndex,
    //                 renderProducts,
    //                 productSelectedState,
    //                 productSliderIndex: 1,
    //                 isSwiperTouch: false,
    //                 price: renderProducts[selectedProductIndex],
    //             });
    //             swiper.slideTo(selectedProductIndex);
    //             break;
    //         case "slide3":
    //             selectedProductIndex = productList.indexOf(renderProducts[2]);
    //             renderProducts[0] = productListDouble[selectedProductIndex + 3];
    //             renderProducts[1] = productListDouble[selectedProductIndex + 4];
    //             renderProducts[2] = productListDouble[selectedProductIndex];
    //             renderProducts[3] = productListDouble[selectedProductIndex + 1];
    //             renderProducts[4] = productListDouble[selectedProductIndex + 2];
    //             productSelectedState[
    //                 productSliderIndex
    //             ] = !productSelectedState[productSliderIndex];
    //             productSelectedState[2] = true;
    //             this.setState({
    //                 currentProductIndex: selectedProductIndex,
    //                 renderProducts,
    //                 productSelectedState,
    //                 productSliderIndex: 2,
    //                 isSwiperTouch: false,
    //                 price: renderProducts[selectedProductIndex],
    //             });
    //             swiper.slideTo(selectedProductIndex);
    //             break;
    //         case "slide4":
    //             selectedProductIndex = productList.indexOf(renderProducts[3]);
    //             renderProducts[0] = productListDouble[selectedProductIndex + 2];
    //             renderProducts[1] = productListDouble[selectedProductIndex + 3];
    //             renderProducts[2] = productListDouble[selectedProductIndex + 4];
    //             renderProducts[3] = productListDouble[selectedProductIndex];
    //             renderProducts[4] = productListDouble[selectedProductIndex + 1];
    //             productSelectedState[
    //                 productSliderIndex
    //             ] = !productSelectedState[productSliderIndex];
    //             productSelectedState[3] = true;
    //             this.setState({
    //                 currentProductIndex: selectedProductIndex,
    //                 renderProducts,
    //                 productSelectedState,
    //                 productSliderIndex: 3,
    //                 isSwiperTouch: false,
    //                 price: renderProducts[selectedProductIndex],
    //             });
    //             swiper.slideTo(selectedProductIndex);
    //             break;
    //         case "slide5":
    //             selectedProductIndex = productList.indexOf(renderProducts[4]);
    //             renderProducts[0] = productListDouble[selectedProductIndex + 1];
    //             renderProducts[1] = productListDouble[selectedProductIndex + 2];
    //             renderProducts[2] = productListDouble[selectedProductIndex + 3];
    //             renderProducts[3] = productListDouble[selectedProductIndex + 4];
    //             renderProducts[4] = productListDouble[selectedProductIndex];
    //             productSelectedState[
    //                 productSliderIndex
    //             ] = !productSelectedState[productSliderIndex];
    //             productSelectedState[4] = true;
    //             this.setState({
    //                 currentProductIndex: selectedProductIndex,
    //                 renderProducts,
    //                 productSelectedState,
    //                 productSliderIndex: 4,
    //                 isSwiperTouch: false,
    //                 price: renderProducts[selectedProductIndex],
    //             });
    //             swiper.slideTo(selectedProductIndex);
    //             break;
    //         default:
    //             break;
    //     }
    // };

    getSwiper = (swiper) => {
        this.setState({
            swiper,
        });
    };

    onFabricClicked = (e) => {
        let { swiper, productSliderIndex, renderProducts, productSelectedState } = this.state;
        const { productList } = this.props;
        let index = swiper.realIndex;
        productSliderIndex = productSliderIndex === 4 ? 0 : productSliderIndex + 1;
        productSelectedState.fill(false);
        productSelectedState[productSliderIndex] = true;
        renderProducts[productSliderIndex] = productList[index];
        this.setState({
            currentProductIndex: index,
            productSelectedState,
            renderProducts,
            productSliderIndex,
            price: renderProducts[0].price,
        });
    };

    onFinishButtonClicked = () => {
        const { productSliderIndex, renderProducts } = this.state;
        let { currentSelectedProduct } = this.props;
        let currentBodyMetric = currentSelectedProduct.bodyMetric;
        let currentSize = currentSelectedProduct.size;
        let currentQuantity = currentSelectedProduct.quantity;
        currentSelectedProduct = { ...renderProducts[productSliderIndex] };
        currentSelectedProduct.bodyMetric = currentBodyMetric;
        currentSelectedProduct.size = currentSize;
        currentSelectedProduct.quantity = currentQuantity;
        this.props.onSelectedProductUpdating(currentSelectedProduct);
        this.props.onContentChange("size");
    };

    onProductModalStatusChanged = (isShow) => {
        this.setState({
            isProductModalShow: isShow,
        });
    };

    render() {
        const { productList, fabricList, totalProductsOnCart } = this.props;
        const {
            productSelectedState,
            renderProducts,
            currentProductIndex,
            currentDesign,
            price,
            productSliderIndex,
            isProductModalShow,
        } = this.state;
        let priceModified =
            price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
            " " +
            "VNĐ";
        return (
            <div
                className={classNames(
                    "pageFabricSelection d-flex flex-column align-items-center justify-content-start",
                    { fixed_top: isProductModalShow }
                )}
            >
                <div className="navbarHeader d-flex flex-row align-items-center justify-content-between">
                    <div className="iconBack_wrapper">
                        <div
                            className="iconBack"
                            onClick={() => window.history.back()}
                        >
                            <svg
                                width="11"
                                height="18"
                                viewBox="0 0 11 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.26668 17.3333C8.04218 17.3325 7.82016 17.2863 7.61395 17.1975C7.40774 17.1087 7.22159 16.9792 7.06668 16.8167L0.63335 10.15C0.327972 9.83845 0.156921 9.41959 0.156921 8.98333C0.156921 8.54708 0.327972 8.12822 0.63335 7.81667L7.30002 1.15C7.45541 0.994606 7.6399 0.871339 7.84294 0.787238C8.04597 0.703138 8.26359 0.659851 8.48335 0.659851C8.70312 0.659851 8.92073 0.703138 9.12377 0.787238C9.3268 0.871339 9.51129 0.994606 9.66668 1.15C9.82208 1.3054 9.94535 1.48989 10.0295 1.69292C10.1136 1.89596 10.1568 2.11357 10.1568 2.33334C10.1568 2.5531 10.1136 2.77072 10.0295 2.97375C9.94535 3.17679 9.82208 3.36127 9.66668 3.51667L4.16668 9L9.46668 14.5C9.7771 14.8123 9.95134 15.2347 9.95134 15.675C9.95134 16.1153 9.7771 16.5377 9.46668 16.85C9.30897 17.0065 9.12157 17.1298 8.91549 17.2128C8.70942 17.2958 8.48882 17.3368 8.26668 17.3333Z"
                                    fill="#FF6D3B"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="titleHeader d-flex justify-content-center">
                        Chọn vải
                    </div>
                    <Link style={{ color: "white" }} to={"/shopping-cart"}>
                        <div className="iconShoppingCart">
                            <img src={iconShoppingBadge} alt="" />
                            <span>({totalProductsOnCart})</span>
                        </div>
                    </Link>
                </div>
                <div className="contentBody">
                    <div className="header__contentBody">
                        <div className="title">
                            <span
                                className="font-weight-bold"
                                style={{ fontSize: "3.6vw" }}
                            >
                                {currentProductIndex + 1}
                            </span>
                            <span>/{productList.length}</span>
                        </div>
                        <FabricSwiper
                            fabricList={fabricList}
                            productSelectedState={productSelectedState}
                            currentProductIndex={currentProductIndex}
                            getSwiper={this.getSwiper}
                            onFabricClicked={this.onFabricClicked}
                        />
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <ProductSwiper
                            productSliderIndex={productSliderIndex}
                            renderProducts={renderProducts}
                            productSelectedState={productSelectedState}
                            onProductImageSwiped={(direction) =>
                                this.onProductImageSwiped(direction)
                            }
                            selectHandling={(e) => this.onProductImageSwiped(e)}
                            onProductModalStatusChanged={(isShow) =>
                                this.onProductModalStatusChanged(isShow)
                            }
                        />
                    </div>
                    <div className="end__contentBody">
                        <div className="title d-flex flex-row align-items-center justify-content-between">
                            <span>{currentDesign.name}</span>
                            <span>{priceModified}</span>
                        </div>
                        <div
                            className="button d-flex flex-row align-items-center justify-content-center"
                            onClick={this.onFinishButtonClicked}
                        >
                            <span>CHỌN SIZE</span>
                        </div>
                    </div>
                </div>
                <ProductModal
                    modalImages={renderProducts[productSliderIndex].image}
                    isProductModalShow={isProductModalShow}
                    onProductModalStatusChanged={(isShow) =>
                        this.onProductModalStatusChanged(isShow)
                    }
                />
            </div>
        );
    }
}

export default FabricSelection;
