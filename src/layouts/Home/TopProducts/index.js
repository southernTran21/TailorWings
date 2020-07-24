import Designs from "components/Designs";
import React from "react";

const DESIGN_OBJECT = {
    name: 'Đầm ôm Agatha',
    image: '',
    designerName: "Đông Đông",
    fabricNumber: 17
}
const DESIGNS_ARRAY = new Array(6).fill(DESIGN_OBJECT);

function TopProductsContainer(props) {
    return (
        <section className="l-home__top-products">
            <Designs title="Sản Phẩm Nổi Bật" designs={DESIGNS_ARRAY}/>
        </section>
    );
}

export default TopProductsContainer;
