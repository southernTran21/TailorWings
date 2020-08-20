import React from 'react';
import PropTypes from 'prop-types';
import NavbarPaymentContainer from './Navbar';
import AddressPaymentContainer from './Address';
import PaymentMethodContainer from './PaymentMethod';
import OrderInfoContainer from './OrderInfo';
import FooterPaymentContainer from './Footer';

PaymentContainer.propTypes = {
    
};

function PaymentContainer(props) {
    return (
        <div className='l-payment'>
            <NavbarPaymentContainer/>
            <AddressPaymentContainer/>
            <PaymentMethodContainer/>
            <OrderInfoContainer/>
            <FooterPaymentContainer/>
        </div>
    );
}

export default PaymentContainer;