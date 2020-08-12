import React from 'react';
import PropTypes from 'prop-types';
import ButtonSizeOption from 'components/Button/SizeOption';

SizeOptions.propTypes = {
    
};

function SizeOptions(props) {
    return (
        <div className="c-size-option__buttons">
            <ButtonSizeOption isDefault={false} isActive={true} /> 
            <ButtonSizeOption isDefault={true} isActive={false} /> 
        </div>
    );
}

export default SizeOptions;