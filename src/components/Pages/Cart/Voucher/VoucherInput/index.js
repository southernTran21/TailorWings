import React from 'react';
import PropTypes from 'prop-types';

VoucherInput.propTypes = {
    
};

function VoucherInput(props) {
    return (
        <div className='c-voucher-input'>
            <input type="text" placeholder="Mã Giảm Giá"/>
        </div>
    );
}

export default VoucherInput;