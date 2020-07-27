import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import ButtonFilter from "components/Button/Filter";

Options.propTypes = {
    filterName: PropTypes.array,
};

Options.defaultProps = {
    filterName: null,
};

function Options(props) {
    if (!props.filterName) return <Fragment />;
    return (
        <div classNames="c-options">
            <div className="c-options__filters">
                {props.filterName.map((name, index) => {
                    return <ButtonFilter text={name} key={index} />;
                })}
            </div>
            <div className="c-options__sorts">
                
            </div>
        </div>
    );
}

export default Options;
