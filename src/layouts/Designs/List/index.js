import Designs from "components/Designs";
import React from "react";

const DESIGN_OBJECT = {
    name: "Đầm ôm Agatha",
    image: "",
    designerName: "Đông Đông",
    fabricNumber: 17,
};
const DESIGNS_ARRAY = new Array(6).fill(DESIGN_OBJECT);

function ListContainer(props) {
    return (
        <div className="l-designs__list">
            <Designs title="Sản Phẩm Nổi Bật" designs={DESIGNS_ARRAY} />
        </div>
    );
}

export default ListContainer;
