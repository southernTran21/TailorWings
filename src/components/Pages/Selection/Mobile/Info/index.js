import ButtonConfirm from "components/Button/Confirm";
import PropTypes from "prop-types";
import React from "react";

SelectionInfo.propTypes = {
    productID: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    designedBy: PropTypes.string,
    onConfirmClick: PropTypes.func,
};

SelectionInfo.defaultProps = {
    productID: "",
    price: 0,
    name: "",
    designedBy: "",
    onConfirmClick: null,
};

function SelectionInfo(props) {
    return (
        <div className="c-selection-info">
            <span className="c-selection-info__name">{props.name}</span>
            <span className="c-selection-info__designed-by">
                thiết kế bởi {props.designedBy}
            </span>
            <span className="c-selection-info__price">{props.price} VNĐ</span>
            <div className="c-selection-info__confirm-button">
                <ButtonConfirm
                    text="chọn size"
                    padding="1.7rem 9.2rem"
                    onConfirm={props.onConfirmClick}
                    linkTo={{
                        pathname: "/size",
                        search: `?id=${props.productID}`,
                    }}
                />
            </div>
        </div>
    );
}

export default SelectionInfo;
