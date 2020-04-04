import React, { Component } from "react";
import "./SizeSelection.scss";
import { Icon, message } from "antd";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
//
import SizeImage from "./SizeImage";
import BodyMetric from "./BodyMetric";
import SizeSelection from "./SizeSelection";
import ProductInfo from "./ProductInfo";
//
import Empty from "../../../../assets/imageSizeSelection/Asset 9.svg";
import XS from "../../../../assets/imageSizeSelection/size XS.svg";
import S from "../../../../assets/imageSizeSelection/size S.svg";
import M from "../../../../assets/imageSizeSelection/size M.svg";
import L from "../../../../assets/imageSizeSelection/size L.svg";
import XL from "../../../../assets/imageSizeSelection/size XL.svg";
import XXL from "../../../../assets/imageSizeSelection/size XXL.svg";

// let imageSize = {
//     Empty: Empty,
//     XS: XS,
//     S: S,
//     M: M,
//     L: L,
//     XL: XL,
//     XXL: XXL
// };
const SIZE = ["XS", "S", "M", "L", "XL", "XXL"];
let imageSize = [ XS, S, M, L, XL, XXL ]

class SizeSelectionWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeImage: ''
        }
    }
    
    componentDidMount() {
        const { currentSelectedProduct } = this.props;
        console.log('currentSelectedProduct', currentSelectedProduct)
        let index = SIZE.indexOf(currentSelectedProduct.size);
        let sizeImage = index > -1 ? imageSize[index] : Empty; 
        this.setState({
            sizeImage
        })
    }

    onConfirmButtonClicked = () => {
        const { currentSelectedProduct, isSizeMetricUpdate } = this.props;
        let isSizeSelected = currentSelectedProduct.size != null;
        let isAllMetricFill = !currentSelectedProduct.bodyMetric.includes("");
        let isAllMetricEmpty = currentSelectedProduct.bodyMetric.every(
            metric => metric === ""
        );
        if (
            (isSizeSelected && isAllMetricFill) ||
            (isSizeSelected && isAllMetricEmpty) ||
            (!isSizeSelected && isAllMetricFill)
        ) {
            this.addToCart();
            if (isSizeMetricUpdate) {
                this.updateSizeMetricToStorage(currentSelectedProduct);
            }
        } else {
            message.error("Vui lòng chọn size hoặc cung cấp 3 số đo cơ thể!");
        }
    };

    addToCart = () => {
        const { currentSelectedProduct } = this.props;
        let addedProduct = { ...currentSelectedProduct };
        delete addedProduct["default"];
        delete addedProduct["timestamp"];
        delete addedProduct["visibility"];
        delete addedProduct["id"];
        delete addedProduct["designDescription"];
        if (addedProduct) {
            this.props.onAddProductToCart(
                addedProduct,
                currentSelectedProduct.quantity
            );
            this.props.history.push('/shopping-cart');
        }
    };

    updateSizeMetricToStorage = selectedProduct => {
        localStorage.setItem("size", JSON.stringify(selectedProduct.size));
        localStorage.setItem(
            "bodyMetric",
            JSON.stringify(selectedProduct.bodyMetric)
        );
    };

    sizeImageUpdate = (index, size) => {
        let { sizeImage } = this.state;
        this.props.onSizeUpdated(size);
        sizeImage = imageSize[index];
        this.setState({
            sizeImage
        })
    }
    

    render() {
        let { currentSelectedProduct } = this.props;
        const { sizeImage } = this.state;
        let size = Empty;
        let bodyMetric = currentSelectedProduct.bodyMetric;
        if (
            currentSelectedProduct.size != null &&
            currentSelectedProduct.size !== ""
        ) {
            size = currentSelectedProduct.size;
        }
        return (
            <div className="pageSizeSelectionWeb d-flex align-items-center">
                <div
                    className="iconBack d-flex flex-column"
                    onClick={() =>
                        this.props.onselectionStepChange("fabricSelection")
                    }
                >
                    <Icon type="arrow-left" />
                    <span>CHỌN VẢI</span>
                </div>
                <div className="bodyScale d-flex flex-column align-items-center">
                    <SizeImage imageSize={sizeImage} size={size} />
                    <SizeSelection
                        size={size}
                        sizeImageUpdate={this.sizeImageUpdate}
                        currentSelectedProduct={currentSelectedProduct}
                    />
                    <BodyMetric
                        bodyMetric={bodyMetric}
                        onBodyMetricUpdated={this.props.onBodyMetricUpdated}
                    />
                </div>
                <div className="d-flex flex-column">
                    <ProductInfo
                        currentSelectedProduct={currentSelectedProduct}
                        onQuantityUpdated={this.props.onQuantityUpdated}
                    />
                    <div
                        className="buttonApcept d-flex justify-content-center align-items-center"
                        onClick={this.onConfirmButtonClicked}
                    >
                        ĐẶT MAY
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductToCart: (product, quantity) => {
            dispatch(actions.addProductToCart(product, quantity));
        }
    };
};
export default connect(null, mapDispatchToProps)(SizeSelectionWeb);
