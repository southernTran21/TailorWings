import React from "react";
import PropTypes from "prop-types";
import Options from "components/Options";

const FILTER_NAME = ["Tất Cả", "Đầm Ôm", "Đầm Xòe", "Đầm Suông"];

const FILTER_ACTIVE = [true, false, false, false];

OptionsContainer.propTypes = {};

function OptionsContainer(props) {
    return (
        <section className="l-designs__options">
            <Options filterName={FILTER_NAME} filterActive={FILTER_ACTIVE} />
        </section>
    );
}

export default OptionsContainer;
