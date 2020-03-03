import React, { Component } from 'react';
// import ProductItem from './ProductItem';
import { notification } from 'antd';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import { Icon, Select } from 'antd';

const { Option } = Select;

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsOnCart: this.props.productsOnCart || [],
            totalProductsOnCart: this.props.totalProductsOnCart
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     const { productsOnCart, totalProductsOnCart } = nextProps;
    //     if (Array.isArray(productsOnCart) && totalProductsOnCart > -1) {
    //         return {
    //             productsOnCart,
    //             totalProductsOnCart
    //         }
    //     }
    // }

    // onSizeChange = (sizeChanged, index) => {
    //     let updatedCart = [...this.state.productsOnCart];
    //     updatedCart[index].size = sizeChanged;
    //     this.props.onUpdateCart(updatedCart);
    //     notification.success({
    //         message: 'Thay đổi thành công',
    //         placement: 'bottomRight'
    //     });
    // }

    // onQuantityChange = (quantityChanged, index) => {
        // let updatedCart = [...this.state.productsOnCart];
        // updatedCart[index].quantity = quantityChanged;
        // this.props.onUpdateCart(updatedCart);
        // notification.success({
        //     message: 'Thay đổi thành công',
        //     placement: 'bottomRight'
        // });
        // this.props.onQuantityChange()
    // }

    // onProductRemove = (index) => {
        // let updatedCart = [...this.state.productsOnCart];
        // let removedItem = updatedCart.splice(index, 1);
        // this.props.onUpdateCart(updatedCart);
        // notification.success({
        //     message: 'Thay đổi thành công',
        //     placement: 'bottomRight',
        //     description: `${removedItem[0].name} đã được xóa khỏi giỏ hàng của bạn`
        // });
    // }

    render() {
        const { product, price, index } = this.props;
        return (
            <div className='product d-flex flex-row'>
                <div className='col-5'>
                    <div className='image'>
                        <img src={product.image[0]} alt={product.name} />
                    </div>
                    <div className='buttonWishList d-flex flex-row justify-content-center align-items-center'>
                        <Icon type='heart' />
                    </div>
                </div>
                <div className='col-7 d-flex flex-column justify-content-between'>
                    <div className='content-wraper'>
                        <div className='iconDelete d-flex flex-row justify-content-end  '>
                            <Icon onClick={() => this.props.onProductRemove(index)} type='close' />
                        </div>
                        <div className='contentHead d-flex flex-column'>
                            <span>{product.name}</span>
                            <span>{price}</span>
                        </div>
                        <div className='bodyMetric d-flex flex-column'>
                            <span>{`Eo ${product.bodyMetric[0]}`}</span>
                            <span>{`Ngực ${product.bodyMetric[1]}`}</span>
                            <div className='d-flex flex-row justify-content-between'>
                                <span>{`Mông ${product.bodyMetric[2]}`}</span>
                                <span>{`Size ${product.size}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className='changeQuantity'>
                        <Select
                            defaultValue={product.quantity.toString()}
                            style={{ width: '100%' }}
                            onChange={(value) => this.props.onQuantityChange(value, index)}
                        >
                            <Option value='1'>1</Option>
                            <Option value='2'>2</Option>
                            <Option value='3'>3</Option>
                            <Option value='4'>4</Option>
                            <Option value='5'>5</Option>
                            <Option value='6'>6</Option>
                            <Option value='7'>7</Option>
                            <Option value='8'>8</Option>
                            <Option value='9'>9</Option>
                            <Option value='10'>10</Option>
                        </Select>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateCart: (updatedList) => {
            dispatch(actions.updateCart(updatedList))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductList);