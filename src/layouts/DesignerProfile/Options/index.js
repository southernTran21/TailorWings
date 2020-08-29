import Options from "components/Options";
import PropTypes from "prop-types";
import React from "react";

OptionsContainer.propTypes = {
    filterInfo: PropTypes.array,
    onFilterChange: PropTypes.func,
};

OptionsContainer.propTypes = {
    filterInfo: null,
    onFilterChange: null,
};

function OptionsContainer(props) {
    return (
        <div className="l-designer__options">
            <Options
                filter={props.filterInfo}
                onFilterChange={props.onFilterChange}
            />
        </div>
    );
}

export default OptionsContainer;
