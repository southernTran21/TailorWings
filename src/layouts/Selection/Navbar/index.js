import React from 'react';
import PropTypes from 'prop-types';
import NavbarSelection from 'components/Navbar/NavbarSelection';

NavbarContainer.propTypes = {
    
};

function NavbarContainer(props) {
    return (
        <div className="l-selection__navbar">
            <NavbarSelection />
        </div>
    );
}

export default NavbarContainer;