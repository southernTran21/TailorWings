import React from 'react';
import PropTypes from 'prop-types';
import NavbarSelection from 'components/Navbar/NavbarSelection';

NavbarContainerDesktop.propTypes = {
    
};

function NavbarContainerDesktop(props) {
    return (
        <section className='l-selection__navbar-desktop'>
            <NavbarSelection text="CHỌN VẢI"/>
        </section>
    );
}

export default NavbarContainerDesktop;