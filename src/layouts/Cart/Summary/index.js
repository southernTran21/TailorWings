import React from 'react';
import PropTypes from 'prop-types';
import Summary from 'components/Pages/Cart/Summary';

SummaryContainer.propTypes = {
    
};

function SummaryContainer(props) {
    return (
        <section className='l-summary'>
            <Summary/>
        </section>
    );
}

export default SummaryContainer;