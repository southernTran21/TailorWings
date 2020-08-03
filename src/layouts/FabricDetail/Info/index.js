import React from 'react';
import PropTypes from 'prop-types';
import FabricDetailInfo from 'components/Pages/FabricDetail/Info';

FabricDetailInfoContainer.propTypes = {
    
};

function FabricDetailInfoContainer(props) {
    return (
        <section className='l-fabric-detail__info'>
            <FabricDetailInfo/>
        </section>
    );
}

export default FabricDetailInfoContainer;