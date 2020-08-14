import React from 'react';
import PropTypes from 'prop-types';
import InformationInput from 'components/Pages/Information/Input';

InputContainer.propTypes = {
    
};

function InputContainer(props) {
    return (
        <section className='l-information__input'>
            <InformationInput/>
        </section>
    );
}

export default InputContainer;