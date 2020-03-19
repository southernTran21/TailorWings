import React, { Component } from "react";
import "./SizeSelection.scss";
import ReactGA from "react-ga";
// import libs ant design
import { Icon, message, Modal } from "antd";
// import component
import NavBar from "./navbarPage";
import Selection from "./Selection";
import BodyScale from "./BodyScale";

import XS from "../../../../assets/imageSizeSelection/size XS.svg";
import S from "../../../../assets/imageSizeSelection/size S.svg";
import M from "../../../../assets/imageSizeSelection/size M.svg";
import L from "../../../../assets/imageSizeSelection/size L.svg";
import XL from "../../../../assets/imageSizeSelection/size XL.svg";
import XXL from "../../../../assets/imageSizeSelection/size XXL.svg";

const sizeImages = [
    {
        id: "XS",
        image: XS
    },
    {
        id: "S",
        image: S
    },
    {
        id: "M",
        image: M
    },
    {
        id: "L",
        image: L
    },
    {
        id: "XL",
        image: XL
    },
    {
        id: "XXL",
        image: XXL
    }
];

export default class SizeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeImage: {
                id: "XS",
                image: XS
            }
        };
    }

    onSizeUpdated = size => {
        let { sizeImage } = this.state;
        sizeImage = sizeImages.filter(image => image.id === size)[0];
        this.props.onSizeUpdated(size);
        this.setState({
            sizeImage
        })
    };

    onBodyMetricUpdated = bodyMetric => {
        this.props.onBodyMetricUpdated(bodyMetric);
    };

    onConfirmButtonClicked = () => {
        const { currentSelectedProduct } = this.props;
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
            this.props.onSelectedProductUpdating(currentSelectedProduct);
            this.props.onContentChange("confirm");
            if (isSizeSelected) {
                ReactGA.event({
                    category: "SizeSelection",
                    action: "Selected Size",
                    label: `${currentSelectedProduct.size}`
                });
            }
        } else {
            message.error("Vui lòng chọn size hoặc cung cấp 3 số đo cơ thể!");
        }
    };

    onDescriptionClicked = () => {
        Modal.info({
            title: "Mô tả thiết kế & vải",
            content: (
                <div>
                    <p>{this.props.currentDesignInfo.description}</p>
                </div>
            )
            // onOk() { },
        });
    };

    render() {
        const { currentSelectedProduct } = this.props;
        const { sizeImage } = this.state;
        return (
            <div className="pageSizeSelection">
                <NavBar
                    onContentChange={step => this.props.onContentChange(step)}
                    totalProductsOnCart={this.props.totalProductsOnCart}
                />
                <div className="bodyPage d-flex flex-column justify-content-between">
                    <div className="infProduct d-flex flex-column align-items-center">
                        <div className="title__infProduct">
                            <div className="nameProduct">
                                <span>ĐẦM CÔNG CHÚA</span>
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
                            currentSelectedProduct={currentSelectedProduct}
                            onSizeUpdated={this.onSizeUpdated}
                        />
                        <BodyScale
                            currentSelectedProduct={currentSelectedProduct}
                            onBodyMetricUpdated={this.onBodyMetricUpdated}
                        />
                    </div>
                    <div
                        className="buttonApcept d-flex flex-row align-items-center justify-content-center"
                        onClick={this.onConfirmButtonClicked}
                    >
                        <a>Xác nhận </a>
                        <Icon type="right" />
                    </div>
                </div>
            </div>
        );
    }
}
