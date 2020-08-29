import Designs from "components/Designs";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CUT_OFF_LIMIT = window.innerWidth > 768 ? 4 : 6;

function TopProductsContainer() {
    /*--------------*/
    const bestSeller = useSelector((state) => state.common.bestSeller);
    const designers = useSelector((state) => state.common.designers);
    /*--------------*/
    const [bestSellerList, setBestSellerList] = useState({
        designs: [],
        isMax: false,
    });
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (bestSeller.length > 0 && designers.length > 0) {
            /*--------------*/
            let cutOffList = bestSeller.slice(0, CUT_OFF_LIMIT);
            /*--------------*/
            setBestSellerList({ designs: cutOffList, isMax: false });
        }
    }, [bestSeller, designers]);
    /*--------------*/
    if (bestSellerList.designs.length < 1) return <Fragment />;
    return (
        <section className="l-home__top-products">
            <Designs
                title="Sản Phẩm Nổi Bật"
                renderDesigns={bestSellerList}
                isLoadMore={false}
            />
        </section>
    );
}

export default TopProductsContainer;
