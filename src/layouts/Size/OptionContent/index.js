import React from 'react';
import PropTypes from 'prop-types';
import DefaultSizeInput from 'components/DefaultSizeInput';
import ModifiedSizeInput from 'components/ModifiedSizeInput';

OptionContentContainer.propTypes = {
    
};

function OptionContentContainer(props) {
    return (
        <div className="l-size__option-content">
            {/* <DefaultSizeInput /> */}
            <ModifiedSizeInput />
        </div>
    );
}

export default OptionContentContainer;