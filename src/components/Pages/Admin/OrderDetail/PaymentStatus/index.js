import React, { Fragment } from "react";
import PropTypes from "prop-types";

OrderDetailPaymentStatus.propTypes = {
    status: PropTypes.object,
};

OrderDetailPaymentStatus.defaultProps = {
    status: null,
};

function OrderDetailPaymentStatus(props) {
    if (!props.status) return <Fragment />;
    const { statusName, statusID } = props.status;
    return (
        <div
            className={`c-order-detail-payment-status c-order-detail-payment-status--${statusID}`}
        >
            <span>{statusName}</span>
            <i class="fas fa-angle-down"></i>
        </div>
    );
}

export default OrderDetailPaymentStatus;
