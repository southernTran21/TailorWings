import React from 'react';
import PropTypes from 'prop-types';
import FooterPayment from 'components/Pages/Payment/Footer';

FooterPaymentContainer.propTypes = {
    
};

function FooterPaymentContainer(props) {
    return (
        <section className='l-payment__footer'>
            <FooterPayment/>
        </section>
    );
}

export default FooterPaymentContainer;