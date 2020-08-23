import React from 'react';
import PropTypes from 'prop-types';
import DescriptionContainer from 'layouts/Selection/Mobile/Description';
import SelectionDescription from 'components/Pages/Selection/Mobile/Description';

DescriptionContainerDesktop.propTypes = {
    
};

function DescriptionContainerDesktop(props) {
    return (
        <section className='l-selection__desc-desktop'>
            <SelectionDescription/>
        </section>
    );
}

export default DescriptionContainerDesktop;