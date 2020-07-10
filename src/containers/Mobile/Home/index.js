import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar/index";

HomeMobile.propTypes = {};

function HomeMobile(props) {
    return (
        <div className="m-home">
            <Navbar />
        </div>
    );
}

export default HomeMobile;
