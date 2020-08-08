import React from 'react';
import PropTypes from 'prop-types';
import Quantity from 'components/Quantity';

CartContainer.propTypes = {
    
};

function CartContainer(props) {
    return (
        <div className='l-cart'>
            <Quantity/>
        </div>
    );
}

export default CartContainer;