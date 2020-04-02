import React, { Component } from "react";
import { Icon, Input } from "antd";
import { connect } from "react-redux";
import * as actions from "./../../../../../actions/index";
import UpdateMetricModal from "./UpdateMetricModal";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isModalUpdate: false
        };
    }

    onUpdateToStorage = (updatedSize, updatedMetric, index) => {
        const { isModalUpdate } = this.state;
        let { productsOnCart } = this.props;
        if (isModalUpdate) {
            productsOnCart[index].size = updatedSize;
            productsOnCart[index].bodyMetric = updatedMetric;
            this.props.onUpdateCart(productsOnCart);
            this.setState({
                isModalUpdate: false,
                modalVisible: false
            });
        } else {
            this.setState({
                modalVisible: false
            });
        }
    };

    onModalUpdate = () => {
        this.setState({
            isModalUpdate: true
        });
    };

    onModalVisible = state => {
        this.setState({
            modalVisible: state
        });
    };

    onQuantityChanged = (index, type) => {
        const { productsOnCart } = this.props;
        let quantityChanged = 0;
        switch (type) {
            case "minus":
                quantityChanged = Number(productsOnCart[index].quantity) - 1;
                if (quantityChanged < 11 && quantityChanged > 0) {
                    this.props.onQuantityChange(quantityChanged, index);
                }
                break;
            case "plus":
                quantityChanged = Number(productsOnCart[index].quantity) + 1;
                if (quantityChanged < 11 && quantityChanged > 0) {
                    this.props.onQuantityChange(quantityChanged, index);
                }
                break;
            default:
                break;
        }
    };

    render() {
        let { modalVisible } = this.state;
        let productsOnCart = JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
        return (
            <div className="left">
                <div className="productList">
                    <div className="titleTable d-flex">
                        <div className="column1"></div>
                        <div className="column2">
                            <span>Sản phẩm</span>
                        </div>
                        <div className="column3">
                            <span>Số lượng</span>
                        </div>
                        <div className="column4">
                            <span>Tạm tính</span>
                        </div>
                        <div className="column5"></div>
                    </div>
                    {productsOnCart.length > 0
                        ? productsOnCart.map((product, index) => {
							let subtotalPrice =
								Number(product.price) *
								Number(product.quantity);
							subtotalPrice =
								subtotalPrice
									.toString()
									.replace(
										/(\d)(?=(\d{3})+(?!\d))/g,
										"$1."
									) + " VNĐ";
							return (
								<div
									key={index}
									className="contentTable d-flex"
								>
									<div className="column1">
										<div className="imageProduct">
										<img
                                                src={product.image[0]}
                                                at={product.name}
                                            />
										</div>
									</div>
									<div className="column2 d-flex flex-column justify-content-between">
										<div className="top d-flex flex-column">
											<span>
												{/* Đầm<br></br>Công Chúa - S */}
												{product.name}
												<br></br>
												{product.size}
											</span>
											<span>{product.productID}</span>
										</div>
										<div className="bottom d-flex flex-column">
											<span>{`Eo: ${product.bodyMetric[0]}`}</span>
											<span>{`Ngực: ${product.bodyMetric[1]}`}</span>
											<div className="d-flex">
												<span>{`Mông: ${product.bodyMetric[2]}`}</span>
												<div
													className="buttonChange"
													onClick={() =>
														this.onModalVisible(
															true
														)
													}
												>
													THAY ĐỔI
												</div>
											</div>
										</div>
									</div>
									<div className="column3">
										<div className="quantity d-flex align-items-center">
											<Icon
												type="minus"
												onClick={() =>
													this.onQuantityChanged(
														index,
														"minus"
													)
												}
											/>
											<span>{product.quantity}</span>
											<Icon
												type="plus"
												onClick={() =>
													this.onQuantityChanged(
														index,
														"plus"
													)
												}
											/>
										</div>
									</div>
									<div className="column4">
										<span>{subtotalPrice}</span>
									</div>
									<div
										className="column5"
										onClick={() =>
											this.props.onProductRemove(index)
										}
									>
										<Icon type="delete" />
									</div>
									<UpdateMetricModal
										currentIndex={index}
										modalVisible={modalVisible}
										onModalVisible={this.onModalVisible}
										product={product}
										onModalUpdate={this.onModalUpdate}
										onUpdateToStorage={
											this.onUpdateToStorage
										}
									/>
								</div>
							);
						})
                        : ""}
                </div>
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
