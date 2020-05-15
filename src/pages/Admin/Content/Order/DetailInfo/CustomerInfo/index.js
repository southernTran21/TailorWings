import React from "react";
import PropTypes from "prop-types";
import ContactInfo from "./ContactInfo";
import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./BillingAddress";

CustomerInfo.propTypes = {};

function CustomerInfo(props) {
    return (
        <div className="admin-order-detail__customer-info">
            <ContactInfo />
            <hr />
            <ShippingAddress />
            <hr />
            <BillingAddress />
        </div>
    );
}

export default CustomerInfo;
