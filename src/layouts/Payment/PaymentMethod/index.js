import React from 'react';
import PropTypes from 'prop-types';
import PaymentMethod from 'components/Pages/Payment/PaymentMethod';

PaymentMethodContainer.propTypes = {
    onPaymentMethodChange: PropTypes.func,
    paymentMethod: PropTypes.number,
};

PaymentMethodContainer.defaultProps = {
    onPaymentMethodChange: null,
    paymentMethod: 1
}

function PaymentMethodContainer(props) {
    return (
        <section className='l-payment__payment-method'>
            <PaymentMethod onPaymentMethodChange={props.onPaymentMethodChange} paymentMethod={props.paymentMethod}/>
        </section>
    );
}

export default PaymentMethodContainer;