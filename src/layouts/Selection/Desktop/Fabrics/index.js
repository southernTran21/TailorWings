import React from "react";
import PropTypes from "prop-types";
import FabricDesktop from "components/Pages/Selection/Desktop/Fabrics";

FabricsContainerDesktop.propTypes = {};

function FabricsContainerDesktop(props) {
    return (
        <section className="l-selection__fabric-desktop">
            <FabricDesktop />
        </section>
    );
}

export default FabricsContainerDesktop;
