import Designs from "components/Designs";
import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

const CUT_OFF_LIMIT = 6;

function TopProductsContainer() {
    /*--------------*/
    const bestSeller = useSelector((state) => state.common.bestSeller);
    /*--------------*/
    const [bestSellerList, setBestSellerList] = useState({
        designs: [],
        isMax: false,
    });
    /*--------------*/
    useEffect(() => {
        
        /*--------------*/
        if (bestSeller.length > 0) {
            /*--------------*/
            let cutOffList = bestSeller.slice(CUT_OFF_LIMIT);
            cutOffList = cutOffList.map((item) => {
                return {
                    ...item,
                    linkInfo: {
                        pathname: "/selection",
                        search: `?id=${item.productID}`,
                    },
                };
            });
            /*--------------*/
            setBestSellerList({ designs: cutOffList, isMax: false });
        }
    }, [bestSeller]);
    /*--------------*/
    if (bestSellerList.designs.length < 1) return <Fragment />;
    return (
        <div className="l-selection__top-product">
            <Designs title="Sản Phẩm Nổi Bật" renderDesigns={bestSellerList} isLoadMore={false} />
        </div>
    );
}

export default TopProductsContainer;
