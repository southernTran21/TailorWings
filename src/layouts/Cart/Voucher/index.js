import React from 'react';
import PropTypes from 'prop-types';
import Voucher from 'components/Pages/Cart/Voucher';

VoucherContainer.propTypes = {
    
};

function VoucherContainer(props) {
    return (
        <section className='l-cart__voucher'>
            <Voucher/>
        </section>
    );
}

export default VoucherContainer;