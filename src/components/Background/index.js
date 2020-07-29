import React from 'react';
import PropTypes from 'prop-types';
import backButton from '../../assets/Icon/back-button.svg'

Background.propTypes = {
    background: PropTypes.string,
};

Background.defaultProps = {
    background: ""
}

function Background(props) {
    return (
        <div className="c-background" style={{backgroundImage: `url(${props.background})`}}>
            <img src={backButton} alt="back" className="c-background__button-back"/>
        </div>
    );
}

export default Background;