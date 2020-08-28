import React from "react";
import PropTypes from "prop-types";
import AddressPayment from "components/Pages/Payment/Address";

AddressPaymentContainer.propTypes = {
    shippingInfo: PropTypes.object,
};

AddressPaymentContainer.defaultProps = {
    shippingInfo: null,
};

function AddressPaymentContainer(props) {
    return (
        <section className="l-payment__address">
            <AddressPayment shippingInfo={props.shippingInfo} />
        </section>
    );
}

export default AddressPaymentContainer;
