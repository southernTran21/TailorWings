import React from 'react';
import PropTypes from 'prop-types';

AddressPayment.propTypes = {
    
};

function AddressPayment(props) {
    return (
        <div className='c-payment-address'>
            <div className="c-payment-address__head">
                <span className='c-payment-address__title'>Địa chỉ nhận hàng</span>
                <span className="c-payment-address__sub-title">THAY ĐỔI</span>
            </div>
            <div className="c-payment-address--wrapper">
                <span className="c-payment-address__name">Trần Phương Nam - 0777627941</span>
                <span className='c-payment-address__address'>KTX KHU B ĐHQG</span>
            </div>
        </div>
    );
}

export default AddressPayment;