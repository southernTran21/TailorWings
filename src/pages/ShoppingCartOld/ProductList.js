import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { notification } from 'antd';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsOnCart: this.props.productsOnCart || [],
            totalProductsOnCart: this.props.totalProductsOnCart
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { productsOnCart, totalProductsOnCart } = nextProps;
        if (Array.isArray(productsOnCart) && totalProductsOnCart > -1) {
            return {
                productsOnCart,
                totalProductsOnCart
            }
        }
    }

    onSizeChange = (sizeChanged, index) => {
        let updatedCart = [...this.state.productsOnCart];
        updatedCart[index].size = sizeChanged;
        this.props.onUpdateCart(updatedCart);
        notification.success({
            message: 'Thay đổi thành công',
            placement: 'bottomRight'
        });
    }

    onQuantityChange = (quantityChanged, index) => {
        let updatedCart = [...this.state.productsOnCart];
        updatedCart[index].quantity = quantityChanged;
        this.props.onUpdateCart(updatedCart);
        notification.success({
            message: 'Thay đổi thành công',
            placement: 'bottomRight'
        });
    }

    onProductRemove = (index) => {
        let updatedCart = [...this.state.productsOnCart];
        let removedItem = updatedCart.splice(index,1);
        this.props.onUpdateCart(updatedCart);
        notification.success({
            message: 'Thay đổi thành công',
            placement: 'bottomRight',
            description: `${removedItem[0].name} đã được xóa khỏi giỏ hàng của bạn`
        });
    }

    render() {
        const { productsOnCart, totalProductsOnCart } = this.state;
        return (
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <div className="title">
                    <Link to={{ pathname: '/shopping-store', search: '?cat=all&search='}} className="backToStore"><i class="fas fa-arrow-circle-left"></i></Link>
                    <a className="titleBag">Giỏ hàng của bạn <a>{["(", totalProductsOnCart, ")"].join('')}</a></a>
                </div>
                {productsOnCart.map((product, index) => {
                    return (
                        <ProductItem
                            key={index}
                            {...product}
                            index={index}
                            onSizeChange={this.onSizeChange}
                            onQuantityChange={this.onQuantityChange}
                            onProductRemove={this.onProductRemove}
                        />)
                })}
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