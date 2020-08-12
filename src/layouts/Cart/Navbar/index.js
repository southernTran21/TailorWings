import React from 'react';
import PropTypes from 'prop-types';
import NavbarSelection from 'components/Navbar/NavbarSelection';

NavBarContainer.propTypes = {
    
};

function NavBarContainer(props) {
    return (
        <section className='l-cart__navbar'>
            <NavbarSelection/>
        </section>
    );
}

export default NavBarContainer;