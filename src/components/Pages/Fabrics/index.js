import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FabricItem from "./FabricItem";
import ButtonLoadMore from "components/Button/LoadMore";
import { object } from "firebase-functions/lib/providers/storage";

Fabrics.propTypes = {
    renderPatterns: PropTypes.object,
    onLoadMore: PropTypes.func,
    isLoadMore: PropTypes.bool,
    title: PropTypes.string,
};

Fabrics.defaultProps = {
    renderPatterns: null,
    onLoadMore: null,
    isLoadMore: false,
    title: "",
};

function Fabrics(props) {
    if (!props.renderPatterns || !props.onLoadMore) return <Fragment />;
    return (
        <div className="c-fabrics">
            <h2 className="c-fabrics__title">{props.title}</h2>
            <ul className="c-fabrics__list">
                {props.renderPatterns.patterns.map((pattern, index) => {
                    return <FabricItem key={index} pattern={pattern} />;
                })}
            </ul>
            <div className="c-fabrics__button">
                {props.renderPatterns.isMax ? (
                    ""
                ) : (
                    <ButtonLoadMore loadMore={props.onLoadMore} />
                )}
            </div>
        </div>
    );
}

export default Fabrics;
