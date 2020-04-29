import React, { Component } from "react";
import { Route } from "react-router-dom";
//
import NavBarWeb from "../../../components/NavBar/NavBarWeb/index";
import FabricSelectionWeb from "./FabricSelection";
import ImageView from "./ImageView";
import "./ProductDetailWeb.scss";
import SizeSelectionWeb from "./SizeSelection";
import Steps from "./Steps";

class ProductDetailWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionStep: "fabricSelection",
            currentSelectedProduct: {
                name: "",
                size: null,
                quantity: 1,
                bodyMetric: new Array(3).fill(""),
                image: new Array(3).fill(""),
            },
            isNewProductAdded: false,
            totalProductsOnCart: 0,
            fabricList: [],
            productList: [],
            isImageView: false,
            isSideBarOpen: false,
        };
    }

    componentDidMount() {
        const { visibilityProducts, fabricsInfo, designsInfo } = this.props;
        let designID = "";
        let fabricID = "";
        if (window.location.search.match(/design=(.*)&\b/)) {
            designID = window.location.search.match(/design=(.*)&\b/)[1];
        }
        if (window.location.search.match(/fabric=(.*)\b/)) {
            fabricID = window.location.search.match(/fabric=(.*)\b/)[1];
        }
        let productList = visibilityProducts.filter((product) => {
            return product.designID === designID;
        });
        productList = this.swapProductPosition(productList, fabricID);
        productList.forEach((product) => {
            let currentDesign = designsInfo.find(
                (design) => design.id === product.designID
            ) || { name: "" };
            product.name = currentDesign.name;
            product.designDescription = currentDesign.description;
        });
        // ------------ //
        let currentSelectedProduct = { ...this.state.currentSelectedProduct };
        if (productList.length > 0) {
            currentSelectedProduct = { ...productList[0] };
            currentSelectedProduct.size = null;
            currentSelectedProduct.bodyMetric = new Array(3).fill("");
            currentSelectedProduct.quantity = 1;
        }
        // ------------ //
        let fabricList = [];
        productList.forEach((product) => {
            let fabric = fabricsInfo.find((fabric) => {
                return fabric.id === product.fabricID;
            }) || { image: "" };
            fabricList.push(fabric);
        });
        // ------------ //
        this.setState({
            currentSelectedProduct,
            fabricList,
            productList,
        });
    }

    onImageView = (state) => {
        this.setState({
            isImageView: state,
        });
    };

    /* Function name: onSelectedProductUpdating
     *  Description: update new $currentSelectedProduct.
     *
     *
     *  Call by: FabricSelection and SizeSelection
     */
    onSelectedProductUpdating = (updateSelectedProduct) => {
        if (updateSelectedProduct) {
            let currentSelectedProduct = { ...updateSelectedProduct };
            this.setState({
                currentSelectedProduct,
            });
        }
    };
    // END

    swapProductPosition = (productList, fabricID) => {
        let currentSelectedProductIndex = productList.findIndex(
            (product) => product.fabricID === fabricID
        );
        if (currentSelectedProductIndex > 0) {
            let temp = { ...productList[0] };
            productList[0] = productList[currentSelectedProductIndex];
            productList[currentSelectedProductIndex] = temp;
        }
        return productList;
    };

    sideBarChange = (state) => {
        this.setState({
            isSideBarOpen: state,
        });
    };

    render() {
        const {
            selectionStep,
            currentSelectedProduct,
            productList,
            fabricList,
        } = this.state;
        const { match } = this.props;
        return (
            <div className="productDetail-container">
                <div className="pageProductDetailWeb-wrapper">
                    <NavBarWeb
                        history={this.props.history}
                        sideBarChange={this.sideBarChange}
                    />
                    <div className="pageProductDetailWeb">
                        <Steps
                            selectionStep={selectionStep}
                            onContentChange={this.onContentChange}
                            history={this.props.history}
                        />
                        <Route
                            path="/product-detail/fabric-selection/:productName"
                            exact
                            component={() => (
                                <FabricSelectionWeb
                                    productList={productList}
                                    fabricList={fabricList}
                                    currentSelectedProduct={
                                        currentSelectedProduct
                                    }
                                    onImageView={this.onImageView}
                                    history={this.props.history}
                                    match={match}
                                    onSelectedProductUpdating={
                                        this.onSelectedProductUpdating
                                    }
                                />
                            )}
                        />
                        <Route
                            path="/product-detail/size-selection/:productName"
                            exact
                            component={({ match }) => (
                                <SizeSelectionWeb
                                    currentSelectedProduct={
                                        currentSelectedProduct
                                    }
                                    history={this.props.history}
                                    match={match}
                                />
                            )}
                        />
                        <Route
                            path="/product-detail/image-view"
                            exact
                            component={() => (
                                <ImageView
                                    history={this.props.history}
                                    productImages={currentSelectedProduct.image}
                                    productName={currentSelectedProduct.name}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetailWeb;
