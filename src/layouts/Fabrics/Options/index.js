import React from 'react';
import PropTypes from 'prop-types';
import Options from 'components/Options';

const FILTER_NAME = ["Tất Cả", "Loại 1", "Loại 2", "Loại 3"];

const FILTER_ACTIVE = [true, false, false, false];

OptionsContainer.propTypes = {
    
};

function OptionsContainer(props) {
    return (
        <section className='l-fabrics__options'>
            <Options filterName={FILTER_NAME} filterActive={FILTER_ACTIVE} />
        </section>
    );
}

export default OptionsContainer;