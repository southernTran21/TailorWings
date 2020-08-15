import React from 'react';
import PropTypes from 'prop-types';
import NavbarSelection from 'components/Navbar/NavbarSelection';

NavBarOrderSuccessContainer.propTypes = {
    
};

function NavBarOrderSuccessContainer(props) {
    return (
        <section className='l-order-success__navbar'>
            <NavbarSelection text='TAILORWINGS'/>
        </section>
    );
}

export default NavBarOrderSuccessContainer;