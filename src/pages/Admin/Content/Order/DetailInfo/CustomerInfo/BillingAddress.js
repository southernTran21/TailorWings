import React from "react";
import PropTypes from "prop-types";

BillingAddress.propTypes = {};

function BillingAddress(props) {
    return (
        <div className="admin-order-detail__customer-info__billing-address">
            <div className="d-flex justify-content-between">
                <span className="admin-order-detail__customer-info__shipping-address--text1">
                    BILLING ADDRESS
                </span>
                <span className="admin-order-detail__customer-info__shipping-address--text2">
                    Edit
                </span>
            </div>
            <span className="admin-order-detail__customer-info__billing-address--text3">
                Same as shipping address
            </span>
        </div>
    );
}

export default BillingAddress;
