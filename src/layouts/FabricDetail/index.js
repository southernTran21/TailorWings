import React from 'react';
import PropTypes from 'prop-types';
import BackgroundContainer from './Background';
import OptionsContainer from './Options';
import DesignListContainer from './DesignList';

FabricDetailContainer.propTypes = {
    
};

function FabricDetailContainer(props) {
    return (
        <div className='l-fabric-detail'>
            <BackgroundContainer/>
            <OptionsContainer/>
            <DesignListContainer/>
        </div>
    );
}

export default FabricDetailContainer;