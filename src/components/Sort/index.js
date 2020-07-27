import React from "react";
import PropTypes from "prop-types";
import dropDownIcon from "../../assets/Icon/drop-down.svg";
import classNames from "classnames";

Sort.propTypes = {
    text: PropTypes.string,
    isDisable: PropTypes.bool,
};

Sort.defaultProps = {
    text: "",
    isDisable: false,
};

function Sort(props) {
    return (
        <div className="c-sort">
            <div
                className={classNames("c-sort__selection", {
                    "c-sort__selection--disable": props.isDisable,
                })}
            >
                <span className="c-sort__text">{props.text}</span>
                <img
                    src={dropDownIcon}
                    alt="drop-down-icon"
                    className="c-sort__icon"
                />
            </div>
        </div>
    );
}

export default Sort;
