import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import ButtonFilter from "components/Button/Filter";
import Sort from "components/Sort";

Options.propTypes = {
    filterName: PropTypes.array,
    filterActive: PropTypes.array,
};

Options.defaultProps = {
    filterName: null,
    filterActive: new Array(4).fill(false),
};

function Options(props) {
    if (!props.filterName) return <Fragment />;
    return (
        <div className="c-options">
            <div className="c-options__filters">
                {props.filterName.map((name, index) => {
                    return (
                        <ButtonFilter
                            key={index}
                            text={name}
                            isActive={props.filterActive[index]}
                        />
                    );
                })}
            </div>
            <div className="c-options__sorts">
                <Sort text="Bộ Lọc & Sắp Xếp" isDisable={true} />
                <Sort text="Bộ Sưu Tập" isDisable={true} />
            </div>
        </div>
    );
}

export default Options;
