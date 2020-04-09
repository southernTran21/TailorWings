import React, { Component } from "react";
import { Icon, Input } from "antd";
export default class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelectedProduct: this.props.currentSelectedProduct,
        };
    }

    componentDidMount() {
        const { currentSelectedProduct } = this.props;
        this.setState({
            currentSelectedProduct,
        });
    }

    onQuantityChanged = (type) => {
        const { currentSelectedProduct } = this.state;
        let quantityChanged = 0;
        switch (type) {
            case "minus":
                quantityChanged = Number(currentSelectedProduct.quantity) - 1;
                if (quantityChanged < 11 && quantityChanged > 0) {
                    this.props.onQuantityUpdated(quantityChanged);
                }
                this.setState({
                    currentSelectedProduct,
                });
                break;
            case "plus":
                quantityChanged = Number(currentSelectedProduct.quantity) + 1;
                if (quantityChanged < 11 && quantityChanged > 0) {
                    this.props.onQuantityUpdated(quantityChanged);
                }
                this.setState({
                    currentSelectedProduct,
                });
                break;
            default:
                break;
        }
    };

    static getDerivedStateFromProps(props, state) {
        console.log(
            "props.currentSelectedProduct",
            props.currentSelectedProduct
        );
        return null;
    }

    render() {
        let {
            name,
            productID,
            designDescription,
            quantity,
            price,
        } = this.state.currentSelectedProduct;
        console.log(
            "this.props.currentSelectedProduct",
            this.props.currentSelectedProduct
        );
        let subtotalPrice = price * quantity;
        subtotalPrice =
            subtotalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
            " VNĐ";
        return (
            <div className="infoProduct">
                <div className="info d-flex flex-column">
                    <span>{name}</span>
                    <span>{productID}</span>
                    <span>Mô tả thiết kế</span>
                    <div id="designDescription_wrapper">
                        <div id="designDescription">
                            {`${designDescription}`}
                        </div>
                    </div>
                    <span>Mô tả vải</span>
                    <div id="fabricDescription_wrapper">
                        <div id="fabricDescription">
                            Đang trong quá trình phát triển
                        </div>
                    </div>
                    <div className="note">
                        <span>Lưu ý</span>
                        <span>
                            Trường hợp bạn chọn cả hai thông tin: Size chuẩn và
                            Số đo 3 vòng, Tailor Wings sẽ lấy Số đo 3 vòng để
                            may sản phẩm cho bạn.
                        </span>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="changeQuantity d-flex flex-column">
                        <span>Số lượng</span>
                        <div className="quantity d-flex align-items-center">
                            <Icon
                                type="minus"
                                onClick={() => this.onQuantityChanged("minus")}
                            />
                            <span>{quantity}</span>
                            <Icon
                                type="plus"
                                onClick={() => this.onQuantityChanged("plus")}
                            />
                        </div>
                    </div>
                    <div className="total d-flex flex-column">
                        <span>Giá</span>
                        <span>{subtotalPrice}</span>
                    </div>
                </div>
            </div>
        );
    }
}
