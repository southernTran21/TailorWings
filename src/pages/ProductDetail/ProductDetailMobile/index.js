import React, { Component } from "react";
import { Route } from "react-router-dom";
import Confirm from "./Confirm/Confirm";
import FabricSelection from "./FabricSelection/FabricSelection";
import SizeSelection from "./SizeSelection/SizeSelection";
import ImageView from "./ImageView";

class ProductDetailMobile extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        this.state = {
            currentSelectedProduct: {
                name: "",
                size: null,
                quantity: 1,
                bodyMetric: new Array(3).fill(""),
                image: new Array(3).fill(""),
            },
            currentSelectedFabric: { image: ["", ""] },
            isNewProductAdded: false,
            totalProductsOnCart: 0,
            productList: [],
            fabricList: [],
            isConfirmNavigate: false,
        };
    }

    componentDidMount() {
        const { history } = this.props;
        this.dataInit(history.location);
        this.unlisten = history.listen((location) => {
            this.dataInit(location);
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    dataInit = (location) => {
        const { visibilityProducts, fabricsInfo, designsInfo } = this.props;
        /* ------------- */
        let designID = location.search.match(/design=(.*)&\b/)
            ? location.search.match(/design=(.*)&\b/)[1]
            : "";
        let fabricID = location.search.match(/&fabric=(.*)\b/)
            ? location.search.match(/&fabric=(.*)\b/)[1]
            : "";
        /* ------------- */
        let relatedDesign = designsInfo.find((design) => {
            return design.id === designID;
        });
        let designName = "";
        let designDescription = "";
        if (
            relatedDesign != null &&
            relatedDesign.hasOwnProperty("description") &&
            relatedDesign.hasOwnProperty("name")
        ) {
            designName = relatedDesign.name;
            designDescription = relatedDesign.description;
        }
        /* ------------- */
        let productList = visibilityProducts.filter((product) => {
            return product.designID === designID;
        });
        productList = this.swapProductPosition(productList, fabricID);

        /* ------------- */
        let fabricList = [];
        productList.forEach((product) => {
            let fabric = fabricsInfo.find((fabric) => {
                return fabric.id === product.fabricID;
            }) || { image: "" };
            fabricList.push(fabric);
        });
        /* ------------- */
        let currentSelectedProduct = { ...this.state.currentSelectedProduct };
        if (productList.length > 0) {
            currentSelectedProduct = {
                ...currentSelectedProduct,
                ...productList[0],
            };
            currentSelectedProduct.description = designDescription;
            currentSelectedProduct.name = designName;
            currentSelectedProduct.size =
                JSON.parse(localStorage.getItem("size")) || null;
            currentSelectedProduct.bodyMetric =
                JSON.parse(localStorage.getItem("bodyMetric")) ||
                new Array(3).fill("");
        }
        /* ------------- */
        let currentSelectedFabric = { ...this.state.currentSelectedFabric };
        if (fabricList.length > 0) {
            currentSelectedFabric = { ...fabricList[0] };
        }
        /* ------------- */
        /* ------------- */
        this.setState({
            currentSelectedProduct,
            currentSelectedFabric,
            productList,
            fabricList,
        });
    };

    swapProductPosition = (productList, fabricID) => {
        let currentSelectedProductIndex = productList.findIndex((product) => {
            return (
                product.fabricID.replace(/ /gi, "") ===
                fabricID.replace(/ /gi, "")
            );
        });
        /* ------------- */
        if (currentSelectedProductIndex > 0) {
            let temp = { ...productList[0] };
            productList[0] = productList[currentSelectedProductIndex];
            productList[currentSelectedProductIndex] = temp;
        }
        /* ------------- */
        return productList;
    };

    onSelectedProductUpdating = (currentSelectedProduct, from) => {
        const { fabricList } = this.state;
        if (currentSelectedProduct != null) {
            let currentSelectedFabric = fabricList.find(
                (fabric) => fabric.id === currentSelectedProduct.fabricID
            ) || { image: [""] };
            if (from === "size-selection") {
                this.setState({
                    currentSelectedProduct,
                    isConfirmNavigate: true,
                    currentSelectedFabric,
                });
            } else {
                this.setState({
                    currentSelectedProduct,
                    currentSelectedFabric,
                    isConfirmNavigate: false,
                });
            }
        }
    };

    confirmNavigating = (isNavigate) => {
        if (isNavigate != null) {
            this.setState({
                isConfirmNavigate: isNavigate,
            });
        }
    };

    render() {
        const {
            productList,
            fabricList,
            currentSelectedProduct,
            currentSelectedFabric,
            isConfirmNavigate,
        } = this.state;
        const { sizeImages, visibilityProducts, fabricsInfo } = this.props;

        return (
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    overflowY: "auto",
                    overflowX: "hidden",
                }}
            >
                <Route
                    path="/product-detail/fabric-selection/:productName"
                    exact
                    component={({ location }) => (
                        <FabricSelection
                            productList={productList}
                            fabricList={fabricList}
                            currentSelectedProduct={currentSelectedProduct}
                            onSelectedProductUpdating={
                                this.onSelectedProductUpdating
                            }
                            location={location}
                        />
                    )}
                />
                <Route
                    path="/product-detail/size-selection/:productName"
                    exact
                    component={(history) => (
                        <SizeSelection
                            currentSelectedProduct={currentSelectedProduct}
                            onSelectedProductUpdating={
                                this.onSelectedProductUpdating
                            }
                            sizeImages={sizeImages}
                            isConfirmNavigate={isConfirmNavigate}
                            history={history}
                        />
                    )}
                />
                <Route
                    path="/product-detail/confirm-selection/:productName"
                    exact
                    component={(history) => (
                        <Confirm
                            currentSelectedProduct={currentSelectedProduct}
                            currentSelectedFabric={currentSelectedFabric}
                            onSelectedProductUpdating={
                                this.onSelectedProductUpdating
                            }
                            confirmNavigating={this.confirmNavigating}
                            history={history}
                        />
                    )}
                />
                <Route
                    path="/product-detail/image-view/:productID"
                    exact
                    component={({ match, location }) => (
                        <ImageView
                            match={match}
                            location={location}
                            visibilityProducts={visibilityProducts}
                            fabricsInfo={fabricsInfo}
                        />
                    )}
                />
            </div>
        );
    }
}

export default ProductDetailMobile;
