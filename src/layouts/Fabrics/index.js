import React from 'react';
import PropTypes from 'prop-types';
import NavbarContainer from './Navbar';
import BannerContainer from './Banner';
import OptionsContainer from './Options';
import ListContainer from './List';

FabricsContainer.propTypes = {
    
};

function FabricsContainer(props) {
    return (
        <div className='l-fabrics'>
            <NavbarContainer/>
            <BannerContainer/>
            <OptionsContainer/>
            <ListContainer/>
        </div>
    );
}

export default FabricsContainer;