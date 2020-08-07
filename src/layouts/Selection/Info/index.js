import React from "react";
import PropTypes from "prop-types";
import SelectionInfo from "components/Pages/Selection/Info";

InfoContainer.propTypes = {};

function InfoContainer(props) {
    return (
        <div className="l-selection__info">
            <SelectionInfo />
        </div>
    );
}

export default InfoContainer;
