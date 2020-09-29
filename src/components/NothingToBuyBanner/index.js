import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./NothingToBuyBanner.scss";

NothingToBuyBanner.propTypes = {
    image: PropTypes.string.isRequired,
};

NothingToBuyBanner.defaultProps = {
    image: null,
};

function NothingToBuyBanner(props) {
    if (!props.image) return <Fragment></Fragment>;

    return (
        <div className="NTB-banner">
            <a
                href="https://www.messenger.com/t/334170847264692"
                target="_blank"
            >
                <img src={props.image} alt="nothing-to-buy-banner" />
            </a>
        </div>
    );
}

export default NothingToBuyBanner;
