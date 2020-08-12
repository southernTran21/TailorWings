import React from "react";
import PropTypes from "prop-types";
import SizeBodyImage from "components/Pages/Size/BodyImage";

BodyImageContainer.propTypes = {};

function BodyImageContainer(props) {
    return (
        <div className="l-size__body-image">
            <SizeBodyImage />
        </div>
    );
}

export default BodyImageContainer;
