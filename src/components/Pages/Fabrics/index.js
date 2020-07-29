import React from "react";
import PropTypes from "prop-types";
import FabricItem from "./FabricItem";
import ButtonLoadMore from "components/Button/LoadMore";

const test = new Array(4).fill("0");

Fabrics.propTypes = {};

function Fabrics(props) {
    return (
        <div className="c-fabrics">
            <ul className="c-fabrics__list">
                {test.map((fabric, index) => {
                    return <FabricItem key={index} />;
                })}
            </ul>
            <div className="c-fabrics__button">
                <ButtonLoadMore />
            </div>
        </div>
    );
}

export default Fabrics;
