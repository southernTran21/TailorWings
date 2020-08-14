import React from 'react';
import PropTypes from 'prop-types';
import NavbarContainer from './Navbar';
import InputContainer from './Input';

InformationContainer.propTypes = {
    
};

function InformationContainer(props) {
    return (
        <div className='l-information'>
            <NavbarContainer/>
            <InputContainer/>
        </div>
    );
}

export default InformationContainer;