import React from "react";
import PropTypes from "prop-types";
import SizeInfo from "components/Pages/Size/Info";

InfoContainer.propTypes = {};

function InfoContainer(props) {
    return (
        <div className="l-size__info">
            <SizeInfo />
        </div>
    );
}

export default InfoContainer;
