import React, { Fragment } from "react";
import PropTypes from "prop-types";

ButtonProfile.propTypes = {
    text: PropTypes.string,
};

ButtonProfile.defaultProps = {
    text: null,
};

function ButtonProfile(props) {
    if (!props.text) return <Fragment />;
    return <button className="c-button-profile">{props.text}</button>;
}

export default ButtonProfile;
