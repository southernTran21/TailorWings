import React from 'react';
import PropTypes from 'prop-types';
import HomeDesigners from 'components/Pages/Home/Designers';

DesignersContainer.propTypes = {
    
};

function DesignersContainer(props) {
    return (
        <section className='home__designers'>
            <HomeDesigners/>
        </section>
    );
}

export default DesignersContainer;