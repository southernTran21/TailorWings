import React from "react";
import Designs from "components/Designs";

const DESIGN_OBJECT = {
    name: "Đầm ôm Agatha",
    image: "",
    designerName: "Đông Đông",
    fabricNumber: 17,
};
const DESIGNS_ARRAY = new Array(6).fill(DESIGN_OBJECT);

function DesignListContainer(props) {
    return (
        <div className="l-designer__design-list">
            <Designs title="Sản Phẩm Nổi Bật" designs={DESIGNS_ARRAY} />
        </div>
    );
}

export default DesignListContainer;
