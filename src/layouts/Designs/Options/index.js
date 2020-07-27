import React from "react";
import PropTypes from "prop-types";
import Options from "components/Options";

const FILTER_NAME = [
    'Tất Cả',
    'Đầm Ôm',
    'Đầm Xòe',
    'Đầm Suông'
]

OptionsContainer.propTypes = {};

function OptionsContainer(props) {
    return (
        <section className="l-designs__options">
            <Options filterName={FILTER_NAME}/>
        </section>
    );
}

export default OptionsContainer;
