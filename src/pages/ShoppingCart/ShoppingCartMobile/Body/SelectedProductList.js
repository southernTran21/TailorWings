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
        let productsOnCart = JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        this.state = {
            productsOnCart,
            totalProductsOnCart: this.props.totalProductsOnCart,
            modalState: new Array(productsOnCart.length).fill(false),
            isModalUpdate: false
        };
    }

    onUpdateToStorage = (updatedSize, updatedMetric, index) => {
        let { isModalUpdate, modalState } = this.state;
        let { productsOnCart } = this.props;
        if (isModalUpdate) {
            productsOnCart[index].size = updatedSize;
            productsOnCart[index].bodyMetric = updatedMetric;
            this.props.onUpdateCart(productsOnCart);
            modalState.fill(false);
            this.setState({
                isModalUpdate: false,
                modalState
            });
        } else {
            modalState.fill(false);
            this.setState({
                modalState
            });
        }
    };

    onModalUpdate = () => {
        this.setState({
            isModalUpdate: true
        });
    };

    onModalVisible = index => {
		let {modalState} = this.state;
		modalState.fill(false);
		modalState[index] = true;
        this.setState({
            modalState
        });
	};
	
	onModalClose = () => {
		let {modalState} = this.state;
		modalState.fill(false);
		this.setState({
			modalState
		})
	}

    render() {
        const { price, index } = this.props;
        const { modalState } = this.state;
        let productsOnCart = JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        let product = {...productsOnCart[this.props.index]};
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
                                    onClick={() => this.onModalVisible(index)}
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
                    currentIndex={index}
                    modalVisible={modalState[index]}
                    onModalClose={this.onModalClose}
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
