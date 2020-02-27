import React, { Component } from 'react';
import './Confirm.scss';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import { Link } from 'react-router-dom'
// import conponent
import Navbar from './navbarPage';
import ShowImage from './ShowImage';
import ChangeSize from './ChangeSize';
import Quantity from './Quantity';

// import libs ant design
import { Icon } from 'antd';

class Confirm extends Component {
    addToCart = () => {
        const { currentSelectedProduct } = this.props;
        let addedProduct = { ...currentSelectedProduct };
        delete addedProduct["default"];
        delete addedProduct["timestamp"];
        delete addedProduct["visibility"];
        delete addedProduct["id"];
        if (addedProduct) {
            this.props.onAddProductToCart(addedProduct, currentSelectedProduct.quantity);
        }
    }
    render() {
        const { currentDesignInfo, currentFabricInfo, currentSelectedProduct } = this.props;
        let priceModified = currentSelectedProduct.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + " " + "VNĐ";
        return (
            <div className='pageConfirm'>
                <Navbar
                    onContentChange={(step) => this.props.onContentChange(step)}
                    totalProductsOnCart={this.props.totalProductsOnCart}
                />
                <div className='bodyPage'>
                    <div className='infProduct d-flex flex-column align-items-center justify-content-center'>
                        <div className='title__infProduct'>
                            <div className='nameProduct d-flex flex-column align-items-center justify-content-center'>
                                <span>{currentDesignInfo.name}</span>
                                <span>{priceModified}</span>
                            </div>
                        </div>
                        <ShowImage
                            currentFabricInfo={currentFabricInfo}
                            currentSelectedProduct={currentSelectedProduct}
                        />
                    </div>
                    <ChangeSize
                        onContentChange={(step) => this.props.onContentChange(step)}
                        currentSelectedProduct={currentSelectedProduct}
                    />
                </div>
                <div className='endPage d-flex justify-content-between'>
                    <Quantity
                        currentSelectedProduct={this.props.currentSelectedProduct}
                        onSelectedProductUpdating={(currentSelectedProduct) => this.props.onSelectedProductUpdating(currentSelectedProduct)}
                    />
                    <Link
                        to={'/shopping-cart'}
                        onClick={() => {
                            this.addToCart();
                        }}
                    >
                        <div className='buttonApcept d-flex flex-row align-items-center justify-content-center'>
                            <a>Mua Hàng</a>
                            <Icon type='arrow-right' />
                        </div>
                    </Link>
                </div>
            </div >
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductToCart: (product, quantity) => {
            dispatch(actions.addProductToCart(product, quantity))
        }
    }
}
export default connect(null, mapDispatchToProps)(Confirm);
