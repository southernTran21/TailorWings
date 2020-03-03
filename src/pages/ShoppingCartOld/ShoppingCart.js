import React, { Component } from 'react';
import "./ShoppingCart.scss";
import ProductList from './ProductList';
import Summary from './Summary';
import CheckOutMobile from './CheckOutMobile';
import { connect } from 'react-redux';
import ReactGA from 'react-ga'

const initGA = () => {
    console.log('initGA');
    ReactGA.initialize('UA-159143322-1')
}

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search)
}

export class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        this.state = {
            productsOnCart: JSON.parse(sessionStorage.getItem('productsOnCart')) || [],
            totalProductsOnCart: 0,
            subtotalPrice: 0,
            isCartUpdated: false
        }
    }

    componentDidMount() {
        initGA()
        logPageView()
        let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
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
            let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart'));
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
        return null;
    }
    

    render() {
        const { productsOnCart, totalProductsOnCart, subtotalPrice, isCartUpdated } = this.state;
        return (
            <div className="pageMyCart">
                <div className="mainPage">
                    <div className="selectedProductList">
                        <div className="row">
                            <ProductList productsOnCart={productsOnCart} totalProductsOnCart={totalProductsOnCart} />
                            <Summary subtotalPrice={subtotalPrice} totalProductsOnCart={totalProductsOnCart} />
                        </div>
                    </div>
                </div>
                {/* mobile */}
                <CheckOutMobile subtotalPrice={subtotalPrice} totalProductsOnCart={totalProductsOnCart} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		isCartUpdated: state.updateProductOnCart
	}
}

export default connect(mapStateToProps, null)(ShoppingCart);
