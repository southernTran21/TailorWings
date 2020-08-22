import React from "react";
import PropTypes from "prop-types";
import PriceTag from "../../../../components/PriceTag/index";
import ButtonConfirm from "components/Button/Confirm";

SelectionInfo.propTypes = {
    price: PropTypes.number,
    name: PropTypes.string,
    designedBy: PropTypes.string,
};

SelectionInfo.defaultProps = {
    price: 0,
    name: "",
    designedBy: "",
};

function SelectionInfo(props) {
    return (
        <div className="c-selection-info">
            <PriceTag price={props.price} />
            <span className="c-selection-info__name">{props.name}</span>
            <span className="c-selection-info__designed-by">
                thiết kế bởi {props.designedBy}
            </span>
            <div className="c-selection-info__confirm-button">
                <ButtonConfirm text="chọn size" padding="1.7rem 9.2rem" />
            </div>
        </div>
    );
}

export default SelectionInfo;
