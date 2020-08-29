import ButtonLoadMore from "components/Button/LoadMore";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DesignItem from "./DesignItem";

Designs.propTypes = {
    title: PropTypes.string,
    renderDesigns: PropTypes.object,
    isLoadMore: PropTypes.bool,
    loadMore: PropTypes.func,
};

Designs.defaultProps = {
    title: "",
    renderDesigns: null,
    isLoadMore: false,
    loadMore: null,
};

function Designs(props) {
    /*--------------*/
    if (!props.renderDesigns) return <Fragment />;
    const { isMax, designs } = props.renderDesigns;
    return (
        <div className="c-designs">
            <h2 className="c-designs__title">{props.title}</h2>
            <ul className="c-designs__list">
                {designs.map((design, index) => {
                    return (
                        <DesignItem
                            design={design}
                            key={index}
                        />
                    );
                })}
            </ul>
            <div className="c-designs__button">
                {props.isLoadMore ? (
                    isMax ? (
                        <Fragment />
                    ) : (
                        <ButtonLoadMore loadMore={props.loadMore || ""} />
                    )
                ) : (
                    <Link
                        to={{
                            pathname: "/designs",
                            search: "?cat=all",
                        }}
                    >
                        <ButtonLoadMore />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Designs;
