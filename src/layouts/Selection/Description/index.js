import React from "react";
import PropTypes from "prop-types";
import SelectionDescription from "components/Pages/Selection/Description";

DescriptionContainer.propTypes = {};

function DescriptionContainer(props) {
    return (
        <div className="l-selection__desc">
            <SelectionDescription />
        </div>
    );
}

export default DescriptionContainer;
