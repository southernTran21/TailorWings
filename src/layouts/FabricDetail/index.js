import React from 'react';
import PropTypes from 'prop-types';
import BackgroundContainer from './Background';
import OptionsContainer from './Options';
import DesignListContainer from './DesignList';
import FabricDetailInfoContainer from './Info';

FabricDetailContainer.propTypes = {
    
};

function FabricDetailContainer(props) {
    return (
        <div className='l-fabric-detail'>
            <BackgroundContainer/>
            <FabricDetailInfoContainer/>
            <OptionsContainer/>
            <DesignListContainer/>
        </div>
    );
}

export default FabricDetailContainer;