import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FabricItem from "./FabricItem";
import ButtonLoadMore from "components/Button/LoadMore";

const test = new Array(4).fill("0");

Fabrics.propTypes = {
    renderFabrics: PropTypes.array,
    onLoadMore: PropTypes.func,
};

Fabrics.defaultProps = {
    renderFabrics: null,
    onLoadMore: null,
};

function Fabrics(props) {
    if (!props.renderFabrics || !props.onLoadMore) return <Fragment />;
    return (
        <div className="c-fabrics">
            <ul className="c-fabrics__list">
                {props.renderFabrics.fabrics.map((fabric, index) => {
                    return <FabricItem key={index} fabric={fabric} />;
                })}
            </ul>
            <div className="c-fabrics__button">
                {props.renderFabrics.isMax ? (
                    ""
                ) : (
                    <ButtonLoadMore loadMore={props.onLoadMore} />
                )}
            </div>
        </div>
    );
}

export default Fabrics;
