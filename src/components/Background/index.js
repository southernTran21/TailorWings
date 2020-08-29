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
    return (
        <div
            className="c-background"
            style={{
                backgroundImage: `url(${
                    props.background ? props.background : defaultBackground
                })`,
            }}
        >
            <img
                src={backButton}
                alt="back"
                className="c-background__button-back"
                onClick={() => history.goBack()}
            />
        </div>
    );
}

export default Background;
