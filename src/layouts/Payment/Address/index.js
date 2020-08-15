import React from "react";
import PropTypes from "prop-types";
import AddressPayment from "components/Pages/Payment/Address";

AddressPaymentContainer.propTypes = {};

function AddressPaymentContainer(props) {
    return <section className="l-payment__address">
        <AddressPayment/>
    </section>;
}

export default AddressPaymentContainer;
