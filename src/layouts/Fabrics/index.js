import React, { useEffect, useState } from "react";
import BannerContainer from "./Banner";
import ListContainer from "./List";
import NavbarContainer from "./Navbar";
import OptionsContainer from "./Options";
import { fetchVisible } from "../../services/FirebaseAPI/basic";
import { updatePaymentMethod } from "actions";

const LIMIT = 12;

function FabricsContainer() {
    /*--------------*/
    const [fabricList, setFabricList] = useState(null);
    const [renderFabrics, setRenderFabrics] = useState(null);
    /*--------------*/
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        /*--------------*/
        async function _fetchAllVisibleFabric() {
            try {
                /*--------------*/
                const visibleFabrics = await fetchVisible("fabrics");
                /*--------------*/
                if (visibleFabrics.length > 0) {
                    setFabricList(visibleFabrics);
                    if (visibleFabrics.length <= LIMIT) {
                        setRenderFabrics({
                            isMax: true,
                            fabrics: [...visibleFabrics],
                        });
                    } else {
                        setRenderFabrics({
                            isMax: false,
                            fabrics: [...visibleFabrics.slice(0, LIMIT)],
                        });
                    }
                }
            } catch (error) {
                console.log("error :>> ", error);
            }
        }
        /*--------------*/
        _fetchAllVisibleFabric();
    }, []);
    /*--------------*/
    /*********************************
     *  Description: handle load more
     *
     *
     *  Call by:
     */
    function onLoadMore() {
        /*--------------*/
        if (renderFabrics && fabricList) {
            /*--------------*/
            let udpatedRenderFabrics = [...renderFabrics.fabrics];
            /*--------------*/
            udpatedRenderFabrics = fabricList.slice(
                0,
                LIMIT + udpatedRenderFabrics.length
            );
            /*--------------*/
            let isMax = udpatedRenderFabrics.length >= fabricList.length;
            /*--------------*/
            setRenderFabrics({ isMax: isMax, fabrics: udpatedRenderFabrics });
        }
    }
    /************_END_****************/
    /*--------------*/
    return (
        <div className="l-fabrics">
            <NavbarContainer />
            <BannerContainer />
            <OptionsContainer />
            <ListContainer
                renderFabrics={renderFabrics}
                onLoadMore={onLoadMore}
            />
        </div>
    );
}

export default FabricsContainer;
