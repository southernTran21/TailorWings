import React, { Component } from 'react';
import './ShoppingCart.scss';
import ReactGA from 'react-ga';
import { notification } from 'antd';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
// 
import ProductList from './ProductList';
import PageHeader from './PageHeader'
import CheckOut from './CheckOut';

const initGA = () => {
    console.log('initGA');
    ReactGA.initialize('UA-159143322-1')
}

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search)
}

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        this.state = {
            productsOnCart: [],
            totalProductsOnCart: 0,
            subtotalPrice: 0,
            isCartUpdated: false
        }
    }


    componentDidMount() {
        initGA()
        logPageView()
        let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
        console.log('productsOnCart', productsOnCart)
        let totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
            return accumulator + current.quantity
        }, 0);
        let subtotalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + (current.price * current.quantity)
        }, 0);
        this.setState({
            productsOnCart,
            totalProductsOnCart,
            subtotalPrice
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isCartUpdated !== prevState.isCartUpdated) {
            let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
            let totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
                return accumulator + current.quantity
            }, 0);
            let subtotalPrice = productsOnCart.reduce((accumulator, current) => {
                return accumulator + (current.price * current.quantity)
            }, 0);
            return {
                productsOnCart,
                totalProductsOnCart,
                subtotalPrice,
                isCartUpdated: nextProps.isCartUpdated
            }
        }
        return null
    }

    onQuantityChange = (quantityChanged, index) => {
        let { productsOnCart, subtotalPrice } = this.state;
        productsOnCart[index].quantity = Number(quantityChanged);
        subtotalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + (current.price * current.quantity)
        }, 0);
        this.props.onUpdateCart(productsOnCart);
        notification.success({
            message: 'Thay đổi thành công',
            placement: 'bottomRight'
        });
        this.setState({
            productsOnCart,
            subtotalPrice
        })
    }

    onProductRemove = (index) => {
        let { productsOnCart, subtotalPrice } = this.state;
        let deletedProduct = productsOnCart.splice(Number(index), 1);
        subtotalPrice = productsOnCart.reduce((accumulator, current) => {
            return accumulator + (current.price * current.quantity)
        }, 0);
        this.props.onUpdateCart(productsOnCart);
        notification.success({
            message: 'Thay đổi thành công',
            placement: 'bottomRight',
            description: `${deletedProduct[0].name} đã được xóa khỏi giỏ hàng của bạn`
        });
        this.setState({
            productsOnCart,
            subtotalPrice
        })
    }

    render() {
        let { productsOnCart, totalProductsOnCart, subtotalPrice } = this.state;
        subtotalPrice = subtotalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + " VNĐ" || "0 VNĐ"
        return (
            <div className='pageMyCart-wraper'>
                <PageHeader />
                {productsOnCart.map((product, index) => {
                    let price = product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + " VNĐ";
                    return (
                        <ProductList
                            key={index}
                            price={price}
                            product={product}
                            onProductRemove={this.onProductRemove}
                            onQuantityChange={this.onQuantityChange}
                            index={index}
                        />
                    );
                })}
                <CheckOut
                    subtotalPrice={subtotalPrice}
                />
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
