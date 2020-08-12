import React from "react";
import PropTypes from "prop-types";
import SizeOptions from "components/Pages/Size/Options";

OptionsContainer.propTypes = {};

function OptionsContainer(props) {
    return (
        <div className="l-size__options">
            <SizeOptions />
        </div>
    );
}

export default OptionsContainer;
