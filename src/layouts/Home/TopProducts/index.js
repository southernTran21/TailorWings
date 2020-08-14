import Designs from "components/Designs";
import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWithCondition } from "services/Firebase API/basic";

const DESIGN_OBJECT = {
    name: "Đầm ôm Agatha",
    image: "",
    designerName: "Đông Đông",
    fabricNumber: 17,
};
const DESIGNS_ARRAY = new Array(6).fill(DESIGN_OBJECT);

function TopProductsContainer() {
    /*--------------*/
    const bestSeller = useSelector((state) => state.common.bestSeller);
    const designers = useSelector((state) => state.common.designers);
    /*--------------*/
    const [bestSellerList, setBestSellerList] = useState([]);

    useEffect(() => {
        /*--------------*/
        if (bestSeller.length > 0 && designers.length > 0) {
            /*--------------*/
            let bestSellerList = bestSeller.map((item) => {
                /*--------------*/
                let owner = designers.find((designer) => {
                    if (designer.designs.includes(item.designID)) {
                        return designer;
                    }
                }) || { name: "" };
                /*--------------*/
                let modifiedItem = { ...item, designerName: owner.name };
                return modifiedItem;
            });
            /*--------------*/
            if (bestSellerList.length > 0) {
                setBestSellerList(bestSellerList);
            }
        }
    }, [bestSeller, designers]);

    if (bestSellerList.length < 1) return <Fragment />;
    return (
        <section className="l-home__top-products">
            <Designs title="Sản Phẩm Nổi Bật" designs={bestSellerList} />
        </section>
    );
}

export default TopProductsContainer;
