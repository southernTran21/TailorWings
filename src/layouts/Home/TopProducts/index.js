import { updateSRC } from "actions/selection";
import Designs from "components/Designs";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    const dispatch = useDispatch();
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
    /*********************************
     *  Description:
     *
     *
     *  Call by:
     */
    function updateBackLink() {
        /*--------------*/
        const action_updateSRC = updateSRC({
            pathname: "/",
            search: "",
        });
        dispatch(action_updateSRC);
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    if (bestSellerList.products.length < 1) return <Fragment />;
    return (
        <section className="l-home__top-products" onClick={updateBackLink}>
            <Designs
                title="Sản Phẩm Nổi Bật"
                renderProducts={bestSellerList}
                isLoadMore={false}
                isLink={true}
            />
        </section>
    );
}

export default TopProductsContainer;
