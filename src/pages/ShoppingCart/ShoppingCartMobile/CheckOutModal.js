import React, { Component } from 'react';
import { Modal, Icon, notification } from 'antd';
import CheckOutForm from './CheckOutForm';
import { connect } from 'react-redux';
import './CheckOutModal.scss';
import { addDocument } from './../../../services/Fundamental';
import * as actions from '../../../actions/index';
import uniqid from 'uniqid';

const PRODUCT_DETAIL_FORM = {
    discount: 0,
    price: 0,
    productID: '',
    name: '',
    bodyMetric: [],
    size: '',
    quantity: 0
}

class CheckOutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
        }
    }

    showModal = () => {
        let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
        if (productsOnCart.length > 0) {
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
        let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
        let { name, phone, address, email } = customerInfo;
        let totalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + (current.price * current.quantity)
        }, 0);
        console.log('productsOnCart', productsOnCart)
        let orderDetail = {
            orderID: uniqid.process(),
            orderItems: []
        }
        productsOnCart.forEach((product) => {
            let productDetail = PRODUCT_DETAIL_FORM;
            Object.keys(productDetail).forEach((key) => {
                productDetail[key] = product[key] || "";
            })
            orderDetail.orderItems.push(productDetail);
        })

        let customer = {
            adddress: address || '',
            cusName: name || '',
            customerID: uniqid.time() || '',
            email: email || '',
            id: '',
            lock: false,
            note: '',
            phone: phone || '',
            promo: 0,
            rate: '',
            wishList: []
        }
        let order = {
            customerID: customer.customerID,
            doneDate: '',
            id: '',
            notes: '',
            orderDate: '',
            orderID: orderDetail.orderID,
            status: 'new',
            total: totalPrice
        }
        Promise.all([
            addDocument('customers', customer),
            addDocument('orders', order),
            addDocument('orderDetail', orderDetail),
        ]).then(() => {
            this.closeModal();
            notification.success({
                message: 'Giao dịch thành công!',
                placement: 'bottomRight'
            });
            this.props.onUpdateCart([]);
            this.setState({
                loading: false
            })
        });
    }


    render() {
        const { visible, order, loading } = this.state;
        return (
            <div>
                <span onClick={this.showModal}> Thanh toán
                    <Icon type='right' />
                </span>
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
                    <CheckOutForm order={order} uploadNewOrder={this.uploadNewOrder} loading={loading} />
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