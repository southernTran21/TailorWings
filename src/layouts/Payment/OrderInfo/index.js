import React from 'react';
import PropTypes from 'prop-types';
import OrderInfo from 'components/Pages/Payment/OrderInfo';

OrderInfoContainer.propTypes = {
    
};

function OrderInfoContainer(props) {
    return (
        <section className='l-payment__order-info'>
            <OrderInfo/>
        </section>
    );
}

export default OrderInfoContainer;