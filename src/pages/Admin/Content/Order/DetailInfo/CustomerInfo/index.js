import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import ContactInfo from "./ContactInfo";
import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./BillingAddress";
import { useSelector } from "react-redux";
import { useEffect } from "react";

CustomerInfo.propTypes = {
    customerID: PropTypes.string,
};

CustomerInfo.defaultProps = {
    customerID: null,
};

function CustomerInfo(props) {
    /* define state */
    const [currentCustomerInfo, setCurrentCustomerInfo] = useState({});

    /* get data from store */
    const customerList = useSelector(
        (state) => state.adminOrderReducer.customerList
    );

    useEffect(() => {
        let isMounted = true;
        /* filter out currentCustomerInfo */
        let currentCustomerInfo = customerList.find(
            (customer) => customer.id === props.customerID
        );
        /* update currentCustomerInfo state */
        if (currentCustomerInfo && isMounted) {
            setCurrentCustomerInfo(currentCustomerInfo);
        }
        /* clean up */
        return () => {
            isMounted = false;
        };
    }, [props.customerID, customerList]);

    return (
        <div className="admin-order-detail__customer-info">
            <ContactInfo currentCustomerInfo={currentCustomerInfo} />
            <hr />
            <ShippingAddress currentCustomerInfo={currentCustomerInfo} />
            <hr />
            <BillingAddress />
        </div>
    );
}

export default CustomerInfo;
