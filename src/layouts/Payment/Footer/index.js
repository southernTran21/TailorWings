import FooterPayment from "components/Pages/Payment/Footer";
import PropTypes from "prop-types";
import React from "react";

FooterPaymentContainer.propTypes = {
    price: PropTypes.object,
    voucher: PropTypes.object,
    onOrderConfirm: PropTypes.func,
};

FooterPaymentContainer.defaultProps = {
    price: {
        totalPrice: 0,
        discountPrice: 0,
        finalPrice: 0,
    },
    voucher: null,
    onOrderConfirm: null
};

function FooterPaymentContainer(props) {
    return (
        <section className="l-payment__footer">
            <FooterPayment price={props.price} voucher={props.voucher} onOrderConfirm={props.onOrderConfirm}/>
        </section>
    );
}

export default FooterPaymentContainer;
