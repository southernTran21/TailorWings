import React from 'react';
import PropTypes from 'prop-types';
import PaymentMethod from 'components/Pages/Payment/PaymentMethod';

PaymentMethodContainer.propTypes = {
    
};

function PaymentMethodContainer(props) {
    return (
        <section className='l-payment__payment-method'>
            <PaymentMethod/>
        </section>
    );
}

export default PaymentMethodContainer;