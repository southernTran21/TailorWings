import React, { Component } from 'react';
import { Modal, Button, notification } from 'antd';
import { CheckOutForm } from './CheckOutForm';
import { connect } from 'react-redux';
import './CheckOutModal.scss';
import { addDocument } from './../../services/Fundamental';
import * as actions from '../../actions/index';

export const BILL_FORM = {
    name: '',
    phone: '',
    address: '',
    email: '',
    status: 'NEW',
    orderedProducts: [],
    totalProductsOnCart: 0,
    subtotalPrice: 0
}

class CheckOutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
            order: BILL_FORM,
            isCartUpdated: false,
            loading: false
        }
    }

    componentDidMount() {
        const { subtotalPrice, totalProductsOnCart } = this.props;
        let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
        let order = this.state.order;
        order.orderedProducts = productsOnCart;
        order.subtotalPrice = subtotalPrice;
        order.totalProductsOnCart = totalProductsOnCart;
        this.setState({
            order
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isCartUpdated !== prevState.isCartUpdated) {
            let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
            let order = prevState.order;
            order.orderedProducts = productsOnCart;
            order.subtotalPrice = nextProps.subtotalPrice;
            order.totalProductsOnCart = nextProps.totalProductsOnCart;
            return {
                order,
                isCartUpdated: nextProps.isCartUpdated
            }
        }
        return null
    }


    showModal = () => {
        let { order } = this.state;
        if (order.orderedProducts.length > 0) {
            this.setState({
                visible: true,
            });
        } else {
            notification.warning({
                message: 'Giỏ hàng trống!',
                placement: 'bottomRight'
            });
        }
    };

    closeModal = () => {
        this.setState({ visible: false });
    };

    uploadNewOrder = (customerInfo) => {
        let updatedOrder = this.state.order;
        Object.keys(customerInfo).forEach((key) => {
            updatedOrder[key] = customerInfo[key] || "";
        })
        let isSuccess = addDocument('orders', updatedOrder);
        setTimeout(() => {
            if (isSuccess) {
                this.closeModal();
                notification.success({
                    message: 'Giao dịch thành công!',
                    placement: 'bottomRight'
                });
                this.props.onUpdateCart([]);
                this.setState({ order: BILL_FORM })
            }else {
                notification.error({
                    message: 'Giao dịch thất bại. Vui lòng kiểm tra đường truyền!',
                    placement: 'bottomRight'
                });
            }
            this.setState({ loading: false })
        }, 2000);
    }


    render() {
        const { visible, order, loading } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Thanh Toán
                </Button>
                <Modal
                    style={{ padding: "0px" }}
                    visible={visible}
                    title="THÔNG TIN GIAO HÀNG"
                    onOk={this.handleOk}
                    onCancel={this.closeModal}
                    centered
                    footer={[
                    ]}
                >
                    <CheckOutForm order={order} uploadNewOrder={this.uploadNewOrder} loading={loading}/>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isCartUpdated: state.updateProductOnCart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateCart: (updatedList) => {
            dispatch(actions.updateCart(updatedList))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutModal);