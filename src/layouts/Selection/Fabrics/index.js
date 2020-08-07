import React from "react";
import PropTypes from "prop-types";
import SelectionFabrics from "components/Pages/Selection/Fabrics";

FabricsContainer.propTypes = {};

function FabricsContainer(props) {
    return (
        <div className="l-selection__fabrics">
            <SelectionFabrics />
        </div>
    );
}

export default FabricsContainer;
