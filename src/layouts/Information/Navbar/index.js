import React from 'react';
import PropTypes from 'prop-types';
import NavbarSelection from 'components/Navbar/NavbarSelection';

NavbarContainer.propTypes = {
    
};

function NavbarContainer(props) {
    return (
        <section className='l-information__navbar'>
            <NavbarSelection/>
        </section>
    );
}

export default NavbarContainer;