import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ButtonSize from "components/Button/Size";

DefaultSizeInput.propTypes = {
    sizeInfo: PropTypes.object,
    onSizeChange: PropTypes.func,
};

DefaultSizeInput.defaultProps = {
    sizeInfo: null,
    onSizeChange: null,
};

function DefaultSizeInput(props) {
    if (!props.sizeInfo || !props.onSizeChange) return <Fragment />;
    return (
        <ul className="c-size-default">
            {props.sizeInfo.map((info, index) => {
                const { size, isActive } = info;
                return (
                    <li key={index} className="c-size-default__item">
                        <ButtonSize
                            id={size}
                            text={size}
                            isActive={isActive}
                            handleClick={props.onSizeChange}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default DefaultSizeInput;
