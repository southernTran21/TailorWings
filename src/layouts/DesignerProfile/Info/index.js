import React from 'react';
import PropTypes from 'prop-types';
import DesignerInfo from 'components/Pages/DesignerProfile/Info';

const DESIGNER_INFO = {
    starNumber: 4,
    name: "Phương An",
    description: `“Style is a way to say who you are without having to speak.”`,
    address: "TP. Hồ Chí Minh",
    designNumber: 37
}

InfoContainer.propTypes = {
    
};

function InfoContainer(props) {
    return (
        <div className="l-designer__info">
            <DesignerInfo info={DESIGNER_INFO}/> 
        </div>
    );
}

export default InfoContainer;