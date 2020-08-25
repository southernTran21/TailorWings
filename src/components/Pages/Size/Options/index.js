import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ButtonSizeOption from "components/Button/SizeOption";

SizeOptions.propTypes = {
    isDefault: PropTypes.bool,
    onSizeOptionChange: PropTypes.func,
};

SizeOptions.defautProps = {
    isDefault: true,
    onSizeOptionChange: null,
};

function SizeOptions(props) {
    if (!props.onSizeOptionChange) return <Fragment />;
    return (
        <div className="c-size-option__buttons">
            <ButtonSizeOption isDefault={false} isActive={!props.isDefault} onChange={props.onSizeOptionChange}/>
            <ButtonSizeOption isDefault={true} isActive={props.isDefault} onChange={props.onSizeOptionChange}/>
        </div>
    );
}

export default SizeOptions;
