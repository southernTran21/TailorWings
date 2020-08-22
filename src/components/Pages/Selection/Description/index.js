import React from "react";
import PropTypes from "prop-types";

SelectionDescription.propTypes = {
    designDesc: PropTypes.array,
    fabricDesc: PropTypes.array,
};

SelectionDescription.defaultProps = {
    designDesc: [],
    fabricDesc: [],
};

function SelectionDescription(props) {
    return (
        <div className="c-selection-desc">
            <div className="c-selection-desc__wrapper">
                <span className="c-selection-desc__title">
                    Thông tin thiết kế
                </span>
                {props.designDesc.map((desc, index) => {
                    return (
                        <p key={index} className="c-selection-desc__text">
                            - {desc}
                        </p>
                    );
                })}
            </div>
            <div className="c-selection-desc__wrapper">
                <span className="c-selection-desc__title">Thông tin vải</span>
                {props.fabricDesc.map((desc, index) => {
                    return (
                        <p key={index} className="c-selection-desc__text">
                            - {desc}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default SelectionDescription;
