import React from "react";
import PropTypes from "prop-types";
import CheckCircle from "../../../../../assets/Icon/check-circle.svg";

IntroItem.propTypes = {
    text: PropTypes.string,
};
IntroItem.defaultProps = {
    text: null,
}

function IntroItem(props) {
    return (
        <li className="c-introduction-item">
            <div className="c-introduction-item__icon">
                <img src={CheckCircle} alt="" />
            </div>
            <span className="c-introduction-item__title">
                {props.text}
            </span>
        </li>
    );
}

export default IntroItem;
