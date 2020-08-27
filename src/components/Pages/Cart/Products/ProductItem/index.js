import React from 'react';
import PropTypes from 'prop-types';
import Quantity from 'components/Quantity';

ProductItem.propTypes = {
    
};

function ProductItem(props) {
    return (
        <div className='c-cart-product-item'>
            <div className="c-cart-product-item--left">
                <div className="c-cart-product-item__image">
                    <img src="" alt=""/>
                </div>
                <div className="c-cart-product-item__quantity">
                    <Quantity onChange="NaF"/>
                </div>
            </div>
            <div className="c-cart-product-item--right">
                <span className="c-cart-product-item__name">Đầm Suông Hebe</span>
                <span className="c-cart-product-item__price">240,000 VNĐ</span>
                <div className="c-cart-product-item__size">
                    <span>Size: 82 / 90 / 103</span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;