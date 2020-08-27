import Summary from "components/Pages/Cart/Summary";
import PropTypes from "prop-types";
import React from "react";

SummaryContainer.propTypes = {
    totalPrice: PropTypes.number,
    discountPrice: PropTypes.number,
    voucher: PropTypes.object,
};

SummaryContainer.defaultProps = {
    totalPrice: 0,
    discountPrice: 0,
    voucher: null
};

function SummaryContainer(props) {
    return (
        <section className="l-summary">
            <Summary
                totalPrice={props.totalPrice}
                discountPrice={props.discountPrice}
                voucher={props.voucher}
            />
        </section>
    );
}

export default SummaryContainer;
