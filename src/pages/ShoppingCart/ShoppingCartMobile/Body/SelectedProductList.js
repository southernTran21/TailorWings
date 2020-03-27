import React, { Component } from "react";
// import ProductItem from './ProductItem';
import { notification, Button } from "antd";
import { connect } from "react-redux";
import * as actions from "./../../../../actions/index";
import { Icon, Select } from "antd";
import UpdateMetricModal from "./UpdateMetricModal";

const { Option } = Select;

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsOnCart: this.props.productsOnCart || [],
            totalProductsOnCart: this.props.totalProductsOnCart,
            modalVisible: false,
            isModalUpdate: false,
            product: this.props.productsOnCart[this.props.index] || { size: '', bodyMetric: ['','',''] }
        };
    }

    onUpdateToStorage = () => {
        const { productsOnCart, isModalUpdate } = this.state;
        if (isModalUpdate) {
            this.props.onUpdateCart(productsOnCart);
            this.setState({
                isModalUpdate: false,
                modalVisible: false
            })
        }else {
            this.setState({
                modalVisible: false
            })
        }
    };

    onModalUpdate = (type, value) => {
        const { index } = this.props;
        let { productsOnCart } = this.state;
        if (type === "size") {
            productsOnCart[index].size = value;
        } else {
            productsOnCart[index].bodyMetric = value;
        }
        this.setState({
            productsOnCart,
            isModalUpdate: true
        });
    };

    onModalVisible = state => {
        this.setState({
            modalVisible: state
        });
    };

    render() {
        const { price, index } = this.props;
        const { modalVisible, product } = this.state;
        return (
            <div className="product d-flex flex-row">
                <div className="left">
                    <div className="image">
                        <img src={product.image[0]} alt={product.name} />
                    </div>
                    <div className="buttonWishList d-flex flex-row justify-content-center align-items-center">
                        <Icon type="heart" />
                    </div>
                </div>
                <div className="right d-flex flex-column justify-content-between">
                    <div className="content-wraper d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="contentHead d-flex flex-column">
                                <span>{product.name}</span>
                                <span>{price}</span>
                            </div>
                            <div className="iconDelete">
                                <Icon
                                    onClick={() =>
                                        this.props.onProductRemove(index)
                                    }
                                    type="close"
                                />
                            </div>
                        </div>
                        <div className="bodyMetric d-flex flex-column">
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <span>{`Eo ${product.bodyMetric[0]}`}</span>
                                <Button
                                    onClick={() => this.onModalVisible(true)}
                                >
                                    THAY ĐỔI
                                </Button>
                            </div>
                            <span>{`Ngực ${product.bodyMetric[1]}`}</span>
                            <div className="d-flex flex-row justify-content-between">
                                <span>{`Mông ${product.bodyMetric[2]}`}</span>
                                <span>{`Size ${product.size}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="changeQuantity">
                        <Select
                            defaultValue={product.quantity.toString()}
                            style={{ width: "100%" }}
                            onChange={value =>
                                this.props.onQuantityChange(value, index)
                            }
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                        </Select>
                    </div>
                </div>
                <UpdateMetricModal
                    modalVisible={modalVisible}
                    onModalVisible={this.onModalVisible}
                    product={product}
                    onModalUpdate={this.onModalUpdate}
                    onUpdateToStorage={this.onUpdateToStorage}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateCart: updatedList => {
            dispatch(actions.updateCart(updatedList));
        }
    };
};

export default connect(null, mapDispatchToProps)(ProductList);
