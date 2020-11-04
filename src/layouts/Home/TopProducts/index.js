import Designs from "components/Designs";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CUT_OFF_LIMIT = window.innerWidth > 768 ? 4 : 6;

function TopProductsContainer() {
    /*--------------*/
    const topProducts = useSelector((state) => state.common.topProducts);
    // const designers = useSelector((state) => state.common.designers);
    /*--------------*/
    const [bestSellerList, setBestSellerList] = useState({
        products: [],
        isMax: false,
    });
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (topProducts.length > 0) {
            /*--------------*/
            let cutOffList = topProducts.slice(0, CUT_OFF_LIMIT);
            /*--------------*/
            setBestSellerList({ products: cutOffList, isMax: false });
        }
    }, [topProducts]);
    /*--------------*/
    if (bestSellerList.products.length < 1) return <Fragment />;
    return (
        <section className="l-home__top-products">
            <Designs
                title="Sản Phẩm Nổi Bật"
                renderProducts={bestSellerList}
                isLoadMore={false}
            />
        </section>
    );
}

export default TopProductsContainer;
