import React from "react";
import PropTypes from "prop-types";
import PriceTag from "../../../../PriceTag/index";
import ButtonConfirm from "components/Button/Confirm";

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
            <PriceTag price={props.price} />
            <span className="c-selection-info__name">{props.name}</span>
            <span className="c-selection-info__designed-by">
                thiết kế bởi {props.designedBy}
            </span>
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
