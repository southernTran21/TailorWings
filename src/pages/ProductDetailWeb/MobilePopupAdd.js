/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './MobilePopupAdd.scss';
import { connect } from 'react-redux';
import classNames from 'classnames';

export class MobilePopupAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false,
			productsOnCart: JSON.parse(sessionStorage.getItem('productsOnCart')) || [],
			isNewProductAdded: false,
			// isCartUpdated: false,
			isAddedListOpened: false,
            totalProductsOnCart: 0,
            isHide: true
        }
    }
    

    static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.isNewProductAdded !== prevState.isNewProductAdded) {
			let totalProductsOnCart = 0;
            // let isAddedListOpened = false;
            let isHide = true; 
			let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart'));
			if (productsOnCart.length > 0) {
                // isAddedListOpened = true;
                isHide = false; 
				// totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
				// 	return accumulator + current.quantity
				// }, 0);
			}
			return {
				isNewProductAdded: nextProps.isNewProductAdded,
				totalProductsOnCart,
				productsOnCart,
				isHide
			}
		} else if (nextProps.isCartUpdated !== prevState.isCartUpdated) {
			let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart'));
			// let totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
			// 	return accumulator + current.quantity
			// }, 0);
			return {
				productsOnCart,
				// totalProductsOnCart,
				isCartUpdated: nextProps.isCartUpdated
			}
		}
		else {
			return null;
		}
    }

    hideHandling = () => {
        this.setState({
            isHide: true
        });
    }
    
    render() {
        const { isHide } = this.state;
        return (
            <div className={classNames("row addToCartMobile", {hide: isHide})}>
                <div className="modalContent">
                    <div className="header col-12">
                        <div className="contentLeft">
                            <a><i class="far fa-check-circle"></i></a>
                            <span> Sản phẩm đã được thêm vào giỏ hàng</span>
                        </div>
                        <a className="contentClose" onClick={this.hideHandling} ><i class="fas fa-times"></i></a>
                    </div>
                    <div className="col-12 d-flex contentProduct">
                        <div className="col-4">
                            <div className="contentImage">
                                <img src="https://i-ngoisao.vnecdn.net/2018/09/24/758A1666-JPG-2465-1537784880.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-8 ">
                            <div className="contentInfomation">
                                <a className="contentName">Váy Chữ A</a>
                                <a className="contentInf">Size: S</a>
                                <a className="contentInf">Số Lượng: 1</a>
                                <a className="contentInf">Giá: 100.000</a>
                            </div>
                        </div>
                    </div>
                    <div className="contentButton">
                        <button><a>Xem Giỏ Hàng</a></button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		isNewProductAdded: state.listProductOnCart,
		isCartUpdated: state.updateProductOnCart
	}
}

export default connect(mapStateToProps, null)(MobilePopupAdd);
// export default MobilePopupAdd;
