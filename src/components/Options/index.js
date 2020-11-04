import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import ButtonFilter from "components/Button/Filter";
import Sort from "components/Sort";

Options.propTypes = {
    filters: PropTypes.array,
    onFilterChange: PropTypes.func,
    linkTo: PropTypes.object,
};

Options.defaultProps = {
    filters: null,
    onFilterChange: null,
    linkTo: null,
};

function Options(props) {
    if (!props.filters || !props.onFilterChange) return <Fragment />;
    return (
        <div className="c-options">
            <div className="c-options__filters">
                {props.filters.map((item, index) => {
                    return (
                        <ButtonFilter
                            key={index}
                            info={{ ...item, index: index }}
                            handleClick={props.onFilterChange}
                            linkTo={props.linkTo}
                        />
                    );
                })}
            </div>
            {/* <div className="c-options__sorts">
                <Sort text="Bộ Lọc & Sắp Xếp" isDisable={true} />
                <Sort text="Bộ Sưu Tập" isDisable={true} />
            </div> */}
        </div>
    );
}

export default Options;
