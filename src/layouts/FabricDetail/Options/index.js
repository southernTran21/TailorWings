import React from "react";
import Options from "components/Options";
const FILTER_NAME = ["Tất Cả", "Loại 1", "Loại 2", "Loại 3"];

const FILTER_ACTIVE = [true, false, false, false];

function OptionsContainer(props) {
    return (
        <div className="l-fabric-detail__options">
            <Options filterName={FILTER_NAME} filterActive={FILTER_ACTIVE}/>
        </div>
    );
}

export default OptionsContainer;