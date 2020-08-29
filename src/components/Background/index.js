import React from "react";
import PropTypes from "prop-types";
import backButton from "../../assets/Icon/back-button.svg";
import defaultBackground from "../../assets/Image/default-background.jpg";
import { history } from "services/CommonParameter";

Background.propTypes = {
    background: PropTypes.string,
};

Background.defaultProps = {
    background: null,
};

function Background(props) {
    console.log("props.background :>> ", props.background);
    return (
        <div
            className="c-background"
        >
            <img
                src={backButton}
                alt="back"
                className="c-background__button-back"
                onClick={() => history.goBack()}
            />
            <img
                className="c-background__image"
                src={props.background ? props.background : defaultBackground}
                alt="background"
            />
        </div>
    );
}

export default Background;
