import React from "react";
import PropTypes from "prop-types";
import Footer from "components/Pages/Cart/Footer";

FooterContainer.propTypes = {
    finalPrice: PropTypes.number,
    onConfirm: PropTypes.func,
};

FooterContainer.defaultProps = {
    finalPrice: 0,
    onConfirm: null
};

function FooterContainer(props) {
    return (
        <section className="l-cart__footer">
            <Footer finalPrice={props.finalPrice} onConfirm={props.onConfirm}/>
        </section>
    );
}

export default FooterContainer;
