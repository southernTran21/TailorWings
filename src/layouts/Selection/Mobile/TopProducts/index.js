import Designs from "components/Designs";
import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

const CUT_OFF_LIMIT = 4;

function TopProductsContainer() {
    /*--------------*/
    const topProducts = useSelector((state) => state.common.topProducts);
    /*--------------*/
    const [renderTopProducts, setRenderTopProducts] = useState({ products: [], isMax: false });
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (topProducts) {
            /*--------------*/
            let cutOffList = topProducts.slice(0, CUT_OFF_LIMIT);
            cutOffList = cutOffList.map((item) => {
                return {
                    ...item,
                    linkInfo: {
                        pathname: "/selection",
                        search: `?id=${item.id}`,
                    },
                };
            });
            /*--------------*/
            setRenderTopProducts({ products: cutOffList, isMax: false });
        }
    }, [topProducts.toString()]);
    /*--------------*/
    if (!renderTopProducts.products.length > 0) return <Fragment />;
    return (
        <div className="l-selection__top-product">
            <Designs
                title="Sản Phẩm Nổi Bật"
                renderProducts={renderTopProducts}
                isLoadMore={false}
            />
        </div>
    );
}

export default TopProductsContainer;
