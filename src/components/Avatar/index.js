import React from "react";
import PropTypes from "prop-types";

Avatar.propTypes = {
    image: PropTypes.string,
};

Avatar.defaultProps = {
    image: "",
};

function Avatar(props) {
    if (!props.image) return <div className="c-avatar"></div>;
    return (
        <div className="c-avatar">
            <img src={props.image} alt="avatar" />
        </div>
    );
}

export default Avatar;
