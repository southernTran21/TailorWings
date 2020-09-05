import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import backButton from "../../assets/Icon/back-button.svg";
import defaultBackground from "../../assets/Image/default-background.jpg";

Background.propTypes = {
    background: PropTypes.string,
    backLink: PropTypes.object,
};

Background.defaultProps = {
    background: null,
    backLink: { pathname: "/", search: "" },
};

function Background(props) {
    return (
        <div className="c-background">
            <Link to={props.backLink}>
                <img
                    src={backButton}
                    alt="back"
                    className="c-background__button-back"
                />
            </Link>
            <img
                className="c-background__image"
                src={props.background ? props.background : defaultBackground}
                alt="background"
            />
        </div>
    );
}

export default Background;
