import React from 'react';
import PropTypes from 'prop-types';
import NavbarSelection from 'components/Navbar/NavbarSelection';

NavbarPaymentContainer.propTypes = {
    
};

function NavbarPaymentContainer(props) {
    return (
        <section className='l-payment__navbar'>
            <NavbarSelection text='THANH TOÁN'/>
        </section>
    );
}

export default NavbarPaymentContainer;