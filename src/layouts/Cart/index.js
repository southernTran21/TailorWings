import React from 'react';
import PropTypes from 'prop-types';
import NavBarContainer from './Navbar';
import ProductsContainer from './Products';
import FooterContainer from './Footer';
import VoucherContainer from './Voucher';
import SummaryContainer from './Summary';

CartContainer.propTypes = {
    
};

function CartContainer(props) {
    return (
        <div className='l-cart'>
            <NavBarContainer/>
            <ProductsContainer/>
            <VoucherContainer/>
            <SummaryContainer/>
            <FooterContainer/>
        </div>
    );
}

export default CartContainer;