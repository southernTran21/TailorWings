import classNames from "classnames";
import PropTypes from "prop-types";
import { default as React, Fragment } from "react";
import sizeDefaultOptionPassive from "../../../assets/Icon/size-default-option-passive.svg";
import sizeDefaultOptionActive from "../../../assets/Icon/size-default-option-active.svg";
import sizeModifiedOptionPassive from "../../../assets/Icon/size-modified-option-passive.svg";
import sizeModifiedOptionActive from "../../../assets/Icon/size-modified-option-active.svg";

const DEFAULT_TEXT = "Size Chuẩn";
const MODIFIED_TEXT = "Size Đo";

ButtonSizeOption.propTypes = {
    isDefault: PropTypes.bool,
    isActive: PropTypes.bool,
    onChange: PropTypes.func,
};

ButtonSizeOption.defaultProps = {
    isDefault: true,
    isActive: false,
    onChange: null,
};

function ButtonSizeOption(props) {
    if (!props.onChange) return <Fragment />;
    /*--------------*/
    let iconSrc = "";
    let text = props.isDefault ? DEFAULT_TEXT : MODIFIED_TEXT;
    /*--------------*/
    if (props.isDefault) {
        iconSrc = props.isActive
            ? sizeDefaultOptionActive
            : sizeDefaultOptionPassive;
    } else {
        iconSrc = props.isActive
            ? sizeModifiedOptionActive
            : sizeModifiedOptionPassive;
    }
    return (
        <button
            className={classNames("c-button-size-option", {
                "c-button-size-option--active": props.isActive,
            })}
            onClick={() => props.onChange(props.isDefault)}
        >
            <img
                src={iconSrc}
                alt="size-đo"
                className={classNames({
                    "c-button-size-option--icon-default": props.isDefault,
                    "c-button-size-option--icon-measured": !props.isDefault,
                })}
            />
            <span>{text}</span>
        </button>
    );
}

export default ButtonSizeOption;

// ---------- NOTES ----------
// default supported: isDefault: true | isActive: false
// ---------- END ----------
