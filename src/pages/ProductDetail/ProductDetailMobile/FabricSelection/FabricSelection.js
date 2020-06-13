import classNames from "classnames";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconShoppingBadge from "../../../../assets/imageHomePage/shopping-cart.svg";
import {
    removePunctuation,
    getCurrentDate,
} from "../../../../services/CommonFunction";
import "./FabricSelection.scss";
import FabricSwiper from "./FabricSwiper";
import ProductSwiper from "./ProductSwiper";
import { message, Modal } from "antd";
import { trackingIncrement } from "services/Fundamental";

class FabricSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSelectedState: [true, false, false, false, false],
            renderProducts: new Array(5).fill({ image: [""], price: 0 }),
            price: 0,
            totalProductsOnCart: 0,
            currentFabric: { typeName: "", description: "" },
            /* ------------- */
            isSwiperTouch: false,
            currentProductIndex: 0,
            productSliderIndex: 0,
            swiper: null,
        };
    }

    componentDidMount() {
        const { fabricList } = this.props;
        const { productSelectedState } = this.state;
        /* ------------- */
        let productList = [...this.props.productList];
        if (productList.length < productSelectedState.length) {
            productList = productList.concat(productList);
            productList = productList.concat(productList);
            productList = productList.concat(productList);
        }
        /* ------------- */
        let renderProducts = [...this.state.renderProducts];
        for (let i = 0; i < productSelectedState.length; i++) {
            renderProducts[i] =
                productList.length > 0
                    ? { ...productList[i] }
                    : {
                          image: [""],
                          price: 0,
                      };
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
        let currentFabric = { ...this.state.currentFabric };
        currentFabric = {
            ...currentFabric,
            ...fabricList.find(
                (fabric) => fabric.id === renderProducts[0].fabricID
            ),
        };
        this.setState({
            renderProducts,
            price: renderProducts[0].price,
            totalProductsOnCart,
            currentFabric,
        });
    }

    handleDescriptionModify = (arrDescription) => {
        const description = arrDescription.split("-");
        description.shift();
        return description.map((result, index) => {
            return <span key={index}> - {result}</span>;
        });
    };

    onTypeNameClick = () => {
        const { currentFabric } = this.state;
        if (!currentFabric) {
            message.info("Hiện không có thông tin!");
            return;
        }

        Modal.info({
            title: "THÔNG TIN VẢI",
            className: "modalDescriptionFabricMobile",
            content: (
                <div className="modalInfoFabric_wrapper">
                    <div className="imageFabric_wrapper d-flex justify-content-center">
                        <img
                            style={{ width: "70vw" }}
                            src={currentFabric.image[1]}
                            alt={currentFabric.name}
                        />
                    </div>
                    <div className="contentInfoFabric">
                        <div className="contentName d-flex">
                            <p className="font-weight-bold">Tên: &nbsp;</p>
                            <p> {currentFabric.name}</p>
                        </div>
                        <div className="contentID d-flex">
                            <p className="font-weight-bold">Mã vải: &nbsp;</p>
                            <p>{currentFabric.id}</p>
                        </div>
                        <hr></hr>
                        <p className="font-weight-bold">Mô tả:</p>
                        <div className="d-flex flex-column">
                            {this.handleDescriptionModify(
                                currentFabric.description
                            )}
                        </div>
                    </div>
                </div>
            ),
            centered: true,
            okText: "Thoát",
        });
    };

    onProductImageSwiped(direction) {
        const { fabricList } = this.props;
        const { swiper } = this.state;
        let renderProducts = [...this.state.renderProducts];
        let productSelectedState = [...this.state.productSelectedState];
        let productSliderIndex = this.state.productSliderIndex;
        /* ------------- */
        productSelectedState[productSliderIndex] = false;
        let indexOfNextProduct = 0;
        /* ------------- */
        let productList = [...this.props.productList];
        if (productList.length < productSelectedState.length) {
            productList = productList.concat(productList);
            productList = productList.concat(productList);
        }
        /* ------SlideToRight------ */
        if (direction > 0) {
            if (productSliderIndex === productSelectedState.length - 1) {
                if (
                    renderProducts[
                        productSelectedState.length - 1
                    ].productID.replace(/ /gi, "") ===
                    productList[productList.length - 1].productID.replace(
                        / /gi,
                        ""
                    )
                ) {
                    renderProducts[0] = { ...productList[0] };
                } else {
                    let indexOfCurrentProduct = productList.findIndex(
                        (product) => {
                            return (
                                product.productID.replace(/ /gi, "") ===
                                renderProducts[
                                    productSliderIndex
                                ].productID.replace(/ /gi, "")
                            );
                        }
                    );
                    renderProducts[0] = {
                        ...productList[indexOfCurrentProduct + 1],
                    };
                }
                productSliderIndex = 0;
            } else {
                if (
                    renderProducts[productSliderIndex].productID ===
                    productList[productList.length - 1].productID
                ) {
                    renderProducts[productSliderIndex + 1] = {
                        ...productList[0],
                    };
                } else {
                    let indexOfCurrentProduct = productList.findIndex(
                        (product) => {
                            return (
                                product.productID.replace(/ /gi, "") ===
                                renderProducts[
                                    productSliderIndex
                                ].productID.replace(/ /gi, "")
                            );
                        }
                    );
                    renderProducts[productSliderIndex + 1] = {
                        ...productList[indexOfCurrentProduct + 1],
                    };
                }
                productSliderIndex = productSliderIndex + 1;
            }
            indexOfNextProduct = productList.findIndex(
                (product) =>
                    renderProducts[productSliderIndex].productID.replace(
                        / /gi,
                        ""
                    ) === product.productID.replace(/ /gi, "")
            );
            swiper.updateActiveIndex(indexOfNextProduct);
            swiper.slideTo(swiper.activeIndex + 5);
            /* ------SlideToLeft------ */
        } else {
            if (productSliderIndex === 0) {
                if (
                    renderProducts[0].productID.replace(/ /gi, "") ===
                    productList[0].productID.replace(/ /gi, "")
                ) {
                    renderProducts[productSelectedState.length - 1] = {
                        ...productList[productList.length - 1],
                    };
                } else {
                    let indexOfCurrentProduct = productList.findIndex(
                        (product) => {
                            return (
                                product.productID.replace(/ /gi, "") ===
                                renderProducts[
                                    productSliderIndex
                                ].productID.replace(/ /gi, "")
                            );
                        }
                    );
                    renderProducts[productSelectedState.length - 1] = {
                        ...productList[indexOfCurrentProduct - 1],
                    };
                }
                productSliderIndex = productSelectedState.length - 1;
            } else {
                if (
                    renderProducts[productSliderIndex].productID.replace(
                        / /gi,
                        ""
                    ) === productList[0].productID.replace(/ /gi, "")
                ) {
                    renderProducts[productSliderIndex - 1] = {
                        ...productList[productList.length - 1],
                    };
                } else {
                    let indexOfCurrentProduct = productList.findIndex(
                        (product) => {
                            return (
                                product.productID.replace(/ /gi, "") ===
                                renderProducts[
                                    productSliderIndex
                                ].productID.replace(/ /gi, "")
                            );
                        }
                    );
                    renderProducts[productSliderIndex - 1] = {
                        ...productList[indexOfCurrentProduct - 1],
                    };
                }
                productSliderIndex = productSliderIndex - 1;
            }
            indexOfNextProduct = productList.findIndex(
                (product) =>
                    renderProducts[productSliderIndex].productID.replace(
                        / /gi,
                        ""
                    ) === product.productID.replace(/ /gi, "")
            );
            swiper.updateActiveIndex(indexOfNextProduct);
            swiper.slideTo(swiper.activeIndex + 5);
        }
        /* ------------- */
        productSelectedState[productSliderIndex] = true;
        /* ------------- */
        let currentFabric = { typeName: "", description: "" };
        currentFabric = {
            ...currentFabric,
            ...fabricList.find(
                (fabric) =>
                    fabric.id === renderProducts[productSliderIndex].fabricID
            ),
        };
        /* ------------- */
        this.handleTracking(renderProducts[productSliderIndex]);
        /* ------------- */
        this.setState({
            currentProductIndex: indexOfNextProduct,
            productSliderIndex,
            productSelectedState,
            renderProducts,
            isSwiperTouch: false,
            price: renderProducts[productSliderIndex].price,
            currentFabric,
        });
    }

    getSwiper = (swiper) => {
        this.setState({
            swiper,
        });
    };

    onFabricClicked = (e) => {
        let {
            swiper,
            productSliderIndex,
            renderProducts,
            productSelectedState,
        } = this.state;
        const { productList, fabricList } = this.props;
        /* ------------- */
        let index = swiper.realIndex;
        /* ------------- */
        productSliderIndex =
            productSliderIndex === 4 ? 0 : productSliderIndex + 1;
        /* ------------- */
        productSelectedState.fill(false);
        productSelectedState[productSliderIndex] = true;
        /* ------------- */
        renderProducts[productSliderIndex] = productList[index];
        /* ------------- */
        let currentFabric = { typeName: "", description: "" };
        currentFabric = {
            ...currentFabric,
            ...fabricList.find(
                (fabric) =>
                    fabric.id === renderProducts[productSliderIndex].fabricID
            ),
        };
        /* ------------- */
        this.handleTracking(renderProducts[productSliderIndex]);
        /* ------------- */
        this.setState({
            currentProductIndex: index,
            productSelectedState,
            renderProducts,
            productSliderIndex,
            price: renderProducts[productSliderIndex].price,
            currentFabric,
        });
    };

    onFinishButtonClicked = () => {
        const { productSliderIndex, renderProducts } = this.state;
        /* ------------- */
        let currentSelectedProduct = {
            ...this.props.currentSelectedProduct,
            ...renderProducts[productSliderIndex],
        };
        /* ------------- */
        this.props.onSelectedProductUpdating(
            currentSelectedProduct,
            "fabric-selection"
        );
    };

    /*********************************
     *  Description: to update tracking counter
     *
     *
     *  Call by:
     */
    handleTracking = (product) => {
        let date = getCurrentDate();
        if (!product) return;
        trackingIncrement("tracking", date, "products", product.id);
        trackingIncrement("tracking", date, "fabrics", product.fabricID);
    };
    /************_END_****************/

    render() {
        const { currentSelectedProduct, productList, fabricList } = this.props;
        const {
            productSelectedState,
            renderProducts,
            currentProductIndex,
            price,
            productSliderIndex,
            totalProductsOnCart,
            currentFabric,
        } = this.state;
        /* ------------- */
        let priceModified = 0;
        if (price != null) {
            priceModified =
                price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
                " " +
                "VNĐ";
        }
        /* ------------- */
        let productNameModified = "";
        if (
            currentSelectedProduct.name != null &&
            currentSelectedProduct.name !== ""
        ) {
            productNameModified = removePunctuation(
                currentSelectedProduct.name.toLowerCase()
            );
            productNameModified = productNameModified.replace(/ /gi, "-");
        }
        /* ------------- */
        let urlSearch = "?design=&fabric=";
        if (renderProducts[productSliderIndex] != null) {
            let designID = renderProducts[productSliderIndex].designID;
            let fabricID = renderProducts[productSliderIndex].fabricID;
            urlSearch = `?design=${designID}&fabric=${fabricID}`;
        }
        /* ------------- */

        return (
            <div
                className={classNames(
                    "pageFabricSelection_mobile d-flex flex-column align-items-center justify-content-start"
                )}
            >
                <div className="navbarHeader d-flex flex-row align-items-center justify-content-between">
                    <div className="iconBack_wrapper">
                        <div className="iconBack">
                            <Link
                                to={{
                                    pathname: "/shopping-store",
                                    search: "?cat=all&search=",
                                }}
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
                            </Link>
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
                        <div className="title_wrapper d-flex justify-content-between">
                            <div className="title1 d-flex align-items-end">
                                <span
                                    className="font-weight-bold"
                                    style={{ fontSize: "3.6vw" }}
                                >
                                    {currentProductIndex + 1}
                                </span>
                                <span>/{productList.length}</span>
                            </div>
                            <div
                                className="title2 d-flex flex-column align-items-end"
                                onClick={this.onTypeNameClick}
                            >
                                <div className="content_categoryFabric">
                                    <span>Loại vải: </span>
                                    <span className="font-weight-bold">
                                        {currentFabric.typeName}
                                    </span>
                                </div>
                                <span className="contentSeeMore d-flex align-items-center">
                                    Xem thêm
                                </span>
                            </div>
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
                            <span>{currentSelectedProduct.name}</span>
                            <span>{priceModified}</span>
                        </div>
                        <div className="button d-flex flex-row align-items-center justify-content-center">
                            <Link
                                className="link"
                                to={{
                                    pathname: `/product-detail/size-selection/${productNameModified}`,
                                    search: `${urlSearch}`,
                                }}
                                onClick={this.onFinishButtonClicked}
                            >
                                <span>CHỌN SIZE</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FabricSelection;
