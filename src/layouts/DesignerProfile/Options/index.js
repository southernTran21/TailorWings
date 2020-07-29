import React from "react";
import Options from "components/Options";
const FILTER_NAME = ["Tất Cả", "Đầm Ôm", "Đầm Xòe", "Đầm Suông"];

const FILTER_ACTIVE = [true, false, false, false];

function OptionsContainer(props) {
    return (
        <div className="l-designer__options">
            <Options filterName={FILTER_NAME} filterActive={FILTER_ACTIVE}/>
        </div>
    );
}

export default OptionsContainer;
