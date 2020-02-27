import React, { Component } from 'react';
import { Select, Popconfirm } from 'antd';
const { Option } = Select;
const SUPPORTED_SIZE = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const QUANTITY = Array.from({ length: 10 });

class ProductItem extends Component {
    onSizeChange = (value) => {
        let index = this.props.index;
        this.props.onSizeChange(value, index);
    }

    onQuantityChange = (value) => {
        let index = this.props.index;
        this.props.onQuantityChange(value, index);
    }

    onProductRemove = () => {
        let index = this.props.index;
        this.props.onProductRemove(index);
    }
    

    render() {
        const { name, price, quantity, image, size } = this.props;
        let total = Number(price) * Number(quantity);
        total = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + "đ";
        return (
            <div className="listProductSelected">
                <div className="imgProductSelected">
                    <img src={image[0]} alt="" />
                </div>
                <div className="infoProductSelected d-flex flex-column justify-content-start">
                    <div className="itemName"><a>{name}</a></div>
                    <div className="itemInfo">
                        <div className="itemUnitPrice">
                            <a>Đơn Giá: </a>
                            <a>{price}</a>
                        </div>
                        <div className="itemSize d-flex">
                            <a className=" d-flex justify-content-between">Size: </a>
                            <div className="selectSize d-flex">
                                <Select defaultValue={size} value={size} style={{ width: 70 }} onChange={this.onSizeChange}>
                                    {SUPPORTED_SIZE.map((SIZE, index) => {
                                        return <Option key={index} value={SIZE}>{SIZE}</Option>
                                    })}
                                </Select>
                            </div>
                        </div>
                        <div className="itemQuantity d-flex">
                            <a className=" d-flex justify-content-between">Số Lượng: </a>
                            <div className="selectSize d-flex">
                                <Select defaultValue={quantity} value={quantity} style={{ width: 70 }} onChange={this.onQuantityChange}>
                                    {QUANTITY.map((QUANTITY, index) => {
                                        let number = Number(index) + 1;
                                        return <Option key={index} value={number}>{number}</Option>
                                    })}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="itemButton">
                        <div className="buttonHeart">
                            <a className="fas fa-heart" />
                            <a> Yêu Thích</a>
                        </div>

                    </div>
                </div>
                <div className="itemRight d-flex flex-column justify-content-end flex-grow-1">
                    <div className="buttonEventRemove">
                        <Popconfirm
                            placement="leftTop"
                            title="Xác nhận xóa"
                            okText="Xác nhận"
                            cancelText="Hủy"
                            onConfirm={this.onProductRemove}
                        >
                            <a className="fas fa-times"></a>
                        </Popconfirm>
                    </div>
                    <div className="itemTotal">
                        <a>{total}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;
