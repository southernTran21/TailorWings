import React, { Component } from "react";
import "./ProductDetailWeb.scss";
import NavBarWeb from "../../../components/NavBar/NavBarWeb/index";
import FabricSelectionWeb from "./FabricSelection";
import Steps from "./Steps";
import SizeSelectionWeb from "./SizeSelection";
import { connect } from "react-redux";

class ProductDetailWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionStep: "fabricSelection",
            currentSelectedProduct: {
                size: null,
                quantity: 1,
                bodyMetric: new Array(3).fill(""),
                image: new Array(3).fill("")
            },
            isNewProductAdded: false,
            totalProductsOnCart: 0,
            fabricList: [],
            productList: [],
            size: "",
            bodyMetric: []
        };
    }

    componentDidMount() {
        const { visibilityProducts, fabricsInfo, designsInfo } = this.props;
        console.log("visibilityProducts", visibilityProducts);
        let { totalProductsOnCart, currentSelectedProduct } = this.state;
        let designID = window.location.search.match(/id=(.*)&\b/)[1];
        let fabricID = window.location.search.match(/pattern=(.*)\b/)[1];
        let productsOnCart =
            JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        let size = JSON.parse(localStorage.getItem("size")) || null;
        let bodyMetric =
            JSON.parse(localStorage.getItem("bodyMetric")) ||
            new Array(3).fill("");
        // ------------ //
        let productList = visibilityProducts.filter(product => {
            return product.designID === designID;
        });
        productList = this.swapProductPosition(productList, fabricID);
        productList.forEach(product => {
            let currentDesign = designsInfo.find(
                design => design.id === product.designID
            ) || { name: "" };
            product.name = currentDesign.name;
        });
        // ------------ //
        if (productList.length > 0) {
            console.log("productList", productList);
            currentSelectedProduct = { ...productList[0] };
        }
        currentSelectedProduct.size = size;
        currentSelectedProduct.bodyMetric = bodyMetric;
        currentSelectedProduct.quantity = 1;
        // ------------ //
        let fabricList = [];
        productList.forEach(product => {
            let fabric = fabricsInfo.find(fabric => {
                return fabric.id === product.fabricID;
            }) || { image: "" };
            fabricList.push(fabric);
        });
        // ------------ //
        totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
            return accumulator + Number(current.quantity);
        }, 0);
        // ------------ //
        this.setState({
            totalProductsOnCart,
            currentSelectedProduct,
            fabricList,
            productList,
            size,
            bodyMetric
        });
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

    onselectionStepChange = content => {
        this.setState({
            selectionStep: content
        });
    };

    selectionStepHandling = () => {
        const {
            selectionStep,
            currentSelectedProduct,
            productList,
            fabricList
        } = this.state;
        let content = "";
        switch (selectionStep) {
            case "fabricSelection":
                content = (
                    <FabricSelectionWeb
                        productList={productList}
                        fabricList={fabricList}
                        currentSelectedProduct={currentSelectedProduct}
                        onselectionStepChange={this.onselectionStepChange}
                        onSelectedFabricUpdating={this.onSelectedFabricUpdating}
                        history={this.props.history}
                    />
                );
                break;
            case "sizeSelection":
                content = <SizeSelectionWeb />;
                break;
            default:
                break;
        }
        return content;
    };

    swapProductPosition = (productList, fabricID) => {
        let currentSelectedProductIndex = productList.findIndex(
            product => product.fabricID === fabricID
        );
        if (currentSelectedProductIndex > 0) {
            let temp = { ...productList[0] };
            productList[0] = productList[currentSelectedProductIndex];
            productList[currentSelectedProductIndex] = temp;
        }
        return productList;
    };

    onContentChange = selectionStep => {
        this.setState({
            selectionStep
        });
    };

    onSelectedFabricUpdating = selectedFabric => {
        let {
            productList,
            currentSelectedProduct,
            size,
            bodyMetric
        } = this.state;
        let info = productList.find(
            product => product.fabricID === selectedFabric
        );
        currentSelectedProduct = { ...info };
        currentSelectedProduct.size = size;
        currentSelectedProduct.bodyMetric = bodyMetric;
        currentSelectedProduct.quantity = 1;
        this.setState({
            currentSelectedProduct
        });
    };

    onSizeUpdated = size => {
        let { currentSelectedProduct } = this.state;
        currentSelectedProduct.size = size;
        this.setState({
            currentSelectedProduct
        });
    };

    onBodyMetricUpdated = bodyMetric => {
        let { currentSelectedProduct } = this.state;
        currentSelectedProduct.bodyMetric = bodyMetric;
        this.setState({
            currentSelectedProduct
        });
    };

    render() {
        const { selectionStep, totalProductsOnCart } = this.state;
        return (
            <div>
                <NavBarWeb
                    history={this.props.history}
                    totalProductsOnCart={totalProductsOnCart}
                />
                <div className="pageProductDetailWeb">
                    <Steps selectionStep={selectionStep} />
                    {this.selectionStepHandling()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isNewProductAdded: state.listProductOnCart,
        isCartUpdated: state.updateProductOnCart
    };
};

export default connect(mapStateToProps, null)(ProductDetailWeb);
