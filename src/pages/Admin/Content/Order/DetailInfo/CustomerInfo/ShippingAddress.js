import React from "react";
import PropTypes from "prop-types";
import { modifyPhone } from "../../../../../../services/CommonFunction";

ShippingAddress.propTypes = {
    currentCustomerInfo: PropTypes.object,
};

ShippingAddress.defaultProps = {
    currentCustomerInfo: null,
};

function ShippingAddress(props) {
    if (!props.currentCustomerInfo)
        return (
            <div className="admin-order-detail__customer-info__shipping-address" />
        );
    const { cusName, address, phone } = props.currentCustomerInfo;
    let modifiedPhone = modifyPhone(phone);
    return (
        <div className="admin-order-detail__customer-info__shipping-address">
            <div className="d-flex justify-content-between">
                <span className="admin-order-detail__customer-info__shipping-address--text1">
                    SHIPPING ADDRESS
                </span>
                <span className="admin-order-detail__customer-info__shipping-address--text2">
                    Edit
                </span>
            </div>
            <span className="admin-order-detail__customer-info__shipping-address--text3">
                {cusName} <br /> {address}
                <br /> {modifiedPhone}
            </span>
        </div>
    );
}

export default ShippingAddress;
