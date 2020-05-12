import React, { Component } from "react";
import { removePunctuation } from "../../../../services/CommonFunction";
import FabricList from "./FabricList";
import "./FabricSelection.scss";
import Price from "./Price";
import ProductImage from "./ProductImage";
import { Link } from "react-router-dom";
import { message, Modal } from "antd";

export default class FabricSelectionWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aciveFabricIndex: 0,
            currentSelectedProduct: { ...this.props.currentSelectedProduct },
            currentSelectedFabric: { typeName: "", description: "" },
        };
    }

    componentDidMount() {
        let currentSelectedProduct = { ...this.props.currentSelectedProduct };
        if (!currentSelectedProduct) return;

        let currentSelectedFabric = { ...this.state.currentSelectedFabric };
        currentSelectedFabric = {
            ...currentSelectedFabric,
            ...this.props.fabricList.find(
                (fabric) => fabric.id === currentSelectedProduct.fabricID
            ),
        };
        if (!currentSelectedFabric) return;

        this.setState({
            currentSelectedProduct,
            currentSelectedFabric,
        });
    }

    onFabricChanged = (aciveFabricIndex, selectedFabric) => {
        const { productList, fabricList } = this.props;
        let info = productList.find(
            (product) => product.fabricID === selectedFabric
        );
        let currentSelectedFabric = { typeName: "", description: "" };
        currentSelectedFabric = {
            ...currentSelectedFabric,
            ...fabricList.find((fabric) => fabric.id === selectedFabric),
        };
        if (!info.hasOwnProperty("fabricID")) return;

        info.size = "";
        info.bodyMetric = new Array(3).fill("");
        info.quantity = 1;
        this.setState({
            currentSelectedProduct: info,
            currentSelectedFabric,
            aciveFabricIndex,
        });
    };

    handleDescriptionModify = (arrDescription) => {
        const description = arrDescription.split("-");
        description.shift();
        return description.map((result, index) => {
            return <span key={index}> - {result}</span>;
        });
    };

    onTypeNameClick = () => {
        const { currentSelectedFabric } = this.state;
        if (!currentSelectedFabric) {
            message.info("Hiện không có thông tin!");
            return;
        }
        Modal.info({
            title: "THÔNG TIN VẢI",
            className:"modalDescriptionFabricDesktop",
            content: (
                <div className="descriptionFabricDesktop_wrapper d-flex">
                    <div className="imageFabricDesktop">
                        <img
                            style={{ width: "20vw" }}
                            src={currentSelectedFabric.image[1]}
                            alt={currentSelectedFabric.name}
                        />
                    </div>
                    <div className="contentInfoFabricDesktop">
                        <div className="contentName">
                            <span className="font-weight-bold">Tên:&nbsp;</span>
                            <span>{currentSelectedFabric.name}</span>
                        </div>
                        <div className="contentID">
                            <span className="font-weight-bold">
                                Mã vải:&nbsp;
                            </span>
                            <span>{currentSelectedFabric.id}</span>
                        </div>
                        <span className="font-weight-bold">Mô tả:</span>
                        <div className="d-flex flex-column">
                            {this.handleDescriptionModify(
                                currentSelectedFabric.description
                            )}
                        </div>
                    </div>
                </div>
            ),
            centered: true,
            okText: "Thoát",
        });
    };

    // Function name: onSizeSelectionNavigating
    // Description: used for update new $currentSelectedProduct to ProductDetailWeb/index.js. Then, navigate to SizeSelection
    onSizeSelectionNavigating = () => {
        const { currentSelectedProduct } = this.state;
        if (currentSelectedProduct) {
            this.props.onSelectedProductUpdating(currentSelectedProduct);
        }
    };
    // END

    render() {
        const { fabricList } = this.props;
        const {
            aciveFabricIndex,
            currentSelectedProduct,
            currentSelectedFabric,
        } = this.state;
        let productNameModified = "";
        productNameModified = currentSelectedProduct.name.toLowerCase();
        productNameModified = removePunctuation(productNameModified);
        productNameModified = productNameModified.replace(/ /gi, "-");
        return (
            <div>
                <div
                    className="categoryFabric_wrapper d-flex justify-content-end align-items-center"
                    onClick={this.onTypeNameClick}
                >
                    <div className="content_categoryFabric">
                        <span>Loại vải: </span>
                        <span className="font-weight-bold">
                            {currentSelectedFabric.typeName}
                        </span>
                    </div>
                    <span className="contentSeeMore d-flex align-items-center">
                        Xem thêm
                    </span>
                </div>
                <div className="pageFabricSelection d-flex align-items-center">
                    <div
                        className="iconBack d-flex flex-column align-items-center"
                        onClick={() => window.history.back()}
                    >
                        <svg
                            width="1.73vw"
                            height="2.33vh"
                            viewBox="0 0 25 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.7083 9.04168H5.41248L10.7062 2.68335C10.9538 2.38553 11.0729 2.00158 11.0373 1.61596C11.0017 1.23034 10.8145 0.874634 10.5166 0.627099C10.2188 0.379563 9.83488 0.260473 9.44926 0.296027C9.06363 0.331581 8.70793 0.518866 8.46039 0.816682L1.16873 9.56668C1.11967 9.63628 1.0758 9.70939 1.03748 9.78543C1.03748 9.85835 1.03748 9.9021 0.935397 9.97502C0.869295 10.1422 0.834685 10.3202 0.833313 10.5C0.834685 10.6798 0.869295 10.8578 0.935397 11.025C0.935397 11.0979 0.935396 11.1417 1.03748 11.2146C1.0758 11.2906 1.11967 11.3638 1.16873 11.4333L8.46039 20.1833C8.59751 20.348 8.76921 20.4804 8.96329 20.5711C9.15738 20.6618 9.36907 20.7087 9.58331 20.7083C9.92405 20.709 10.2543 20.5903 10.5166 20.3729C10.6643 20.2505 10.7864 20.1001 10.8758 19.9305C10.9653 19.7608 11.0204 19.5751 11.0381 19.3841C11.0557 19.1931 11.0354 19.0005 10.9785 18.8174C10.9215 18.6342 10.829 18.464 10.7062 18.3167L5.41248 11.9583H22.7083C23.0951 11.9583 23.466 11.8047 23.7395 11.5312C24.013 11.2577 24.1666 10.8868 24.1666 10.5C24.1666 10.1132 24.013 9.74231 23.7395 9.46882C23.466 9.19533 23.0951 9.04168 22.7083 9.04168Z"
                                fill="#FF6D3B"
                            />
                        </svg>
                        <span>CHỌN MẪU</span>
                    </div>
                    <ProductImage
                        images={currentSelectedProduct.image}
                        productName={currentSelectedProduct.name}
                        productID={currentSelectedProduct.productID}
                        onImageView={this.props.onImageView}
                    />
                    <div className="d-flex flex-column">
                        <FabricList
                            fabricList={fabricList}
                            aciveFabricIndex={aciveFabricIndex}
                            onFabricChanged={this.onFabricChanged}
                        />
                        <Price
                            productName={currentSelectedProduct.name}
                            productPrice={currentSelectedProduct.price}
                            onselectionStepChange={
                                this.props.onselectionStepChange
                            }
                            urlSearch={`?design=${currentSelectedProduct.designID}&fabric=${currentSelectedProduct.fabricID}`}
                            onSizeSelectionNavigating={
                                this.onSizeSelectionNavigating
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}
