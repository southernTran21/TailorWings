import React, { Component } from "react";
import "./SizeSelection.scss";
import ReactGA from "react-ga";
// import libs ant design
import { Icon, message, Modal } from "antd";
// import component
import NavBar from "./navbarPage";
import Selection from "./Selection";
import BodyScale from "./BodyScale";

export default class SizeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeImages: this.props.sizeImages[6],
            isUpdate: false
        };
    }

    componentDidMount() {
        const { currentSelectedProduct } = this.props;
        let { sizeImages } = this.state;
        console.log('this.props.sizeImages', this.props.sizeImages)
        sizeImages = this.props.sizeImages.filter(size => currentSelectedProduct.size === size.id)[0];
        if ( sizeImages != null ) {
            this.setState({
                sizeImages
            })
        }
    }

    onSizeUpdated = size => {
        let { sizeImages } = this.props;
        console.log("sizeImages", sizeImages);
        sizeImages = sizeImages.filter(image => image.id === size)[0];
        this.props.onSizeUpdated(size);
        this.setState({
            sizeImages,
            isUpdate: true
        });
    };

    onBodyMetricUpdated = bodyMetric => {
        this.props.onBodyMetricUpdated(bodyMetric);
        this.setState({
            isUpdate: true
        })
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
            if ( this.state.isUpdate ) {
                this.updateSizeMetricToStorage(currentSelectedProduct);
            }
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

    updateSizeMetricToStorage = (selectedProduct) => {
        localStorage.setItem('size', JSON.stringify(selectedProduct.size));
        localStorage.setItem('bodyMetric', JSON.stringify(selectedProduct.bodyMetric));
    }
    

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
        const { sizeImages } = this.state;
        return (
            <div className="pageSizeSelection">
                <NavBar
                    onContentChange={step => this.props.onContentChange(step)}
                    totalProductsOnCart={this.props.totalProductsOnCart}
                />
                <div className="bodyPage d-flex flex-column justify-content-start">
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
                            <img src={sizeImages.image} alt={sizeImages.id} />
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
                    </div>
                </div>
            </div>
        );
    }
}
