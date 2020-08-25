import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PriceTag from "components/PriceTag";
import Quantity from "components/Quantity";
import { modifyPrice } from "services/CommonFunctions";

SizeInfo.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    onQuantityChange: PropTypes.func,
};

SizeInfo.defaultProps = {
    name: "",
    price: 0,
    quantity: 1,
    onQuantityChange: null,
};

function SizeInfo(props) {
    if (!props.onQuantityChange) return <Fragment />;
    const { name, price, quantity } = props;
    let modifiedPrice = price * quantity;
    modifiedPrice = modifyPrice(modifiedPrice);
    return (
        <div className="c-size-info">
            <div className="c-size-info--left">
                <span className="c-size-info__name">{name}</span>
                <PriceTag price={modifiedPrice} />
            </div>
            <div className="c-size-info--right">
                <div className="c-size-info__quantity">
                    <Quantity
                        quantity={quantity}
                        onChange={props.onQuantityChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default SizeInfo;
