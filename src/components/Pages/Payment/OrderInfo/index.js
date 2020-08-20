import React from 'react';
import PropTypes from 'prop-types';
import OrderItem from './OrderItem';

OrderInfo.propTypes = {
    
};

function OrderInfo(props) {
    return (
        <div className='c-order-info'>
            <div className="c-order-info__head">
                <span className='c-order-info__title'>Địa chỉ nhận hàng</span>
                <span className="c-order-info__sub-title">THAY ĐỔI</span>
            </div>
            <ul className="c-order-info__list">
                <OrderItem/>
            </ul>
        </div>
    );
}

export default OrderInfo;