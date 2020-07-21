import classNames from "classnames";
import PropTypes from "prop-types";
import { default as React } from "react";
import sizeDefaultOption from "../../../assets/Icon/size-default-option.svg";
import sizeModifiedOption from "../../../assets/Icon/size-modified-option.svg";

const DEFAULT_TEXT = "Size Chuẩn";
const MODIFIED_TEXT = "Size Đo";

ButtonSizeOption.propTypes = {
    isDefault: PropTypes.bool,
    isActive: PropTypes.bool,
};

ButtonSizeOption.defaultProps = {
    isDefault: true,
    isActive: false,
};

function ButtonSizeOption(props) {
    let icon = props.isDefault ? sizeDefaultOption : sizeModifiedOption;
    let text = props.isDefault ? DEFAULT_TEXT : MODIFIED_TEXT;
    return (
        <button
            className={classNames("button-size-option", {
                "button-size-option__active": props.isActive,
            })}
        >
            <img
                src={icon}
                alt="size-đo"
                className="button-size-option__icon"
            />
            <span>{text}</span>
        </button>
    );
}

export default ButtonSizeOption;

// ---------- NOTES ----------
// default supported: isDefault: true | isActive: false
// ---------- END ----------
