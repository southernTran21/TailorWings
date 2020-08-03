import React from 'react';
import PropTypes from 'prop-types';
import FabricDetailBackground from '../../../components/Background/index';

BackgroundContainer.propTypes = {
    
};

function BackgroundContainer(props) {
    return (
        <section className='l-fabric-detail__background'>
            <FabricDetailBackground/>
        </section>
    );
}

export default BackgroundContainer;