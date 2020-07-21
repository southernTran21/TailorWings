import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';

CollectionsContainer.propTypes = {
    
};

function CollectionsContainer(props) {
    return (
        <div className='home__collections'>
            <Skeleton avatar paragraph={{ rows: 4 }} />
        </div>
    );
}

export default CollectionsContainer;