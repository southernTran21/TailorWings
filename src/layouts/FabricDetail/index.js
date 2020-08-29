import React, { useState, useEffect, Fragment } from "react";
import BackgroundContainer from "./Background";
import OptionsContainer from "./Options";
import DesignListContainer from "./DesignList";
import FabricDetailInfoContainer from "./Info";
import {
    fetchWithTrippleCondition,
    fetchDocument,
    fetchWithDoubleCondition,
} from "services/Firebase API/basic";
import { Redirect } from "react-router-dom";

const LIMIT = 12;

function FabricDetailContainer() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    /*--------------*/
    let urlSearch = window.location.search.match(/id=(.*)\b/);
    const fabricID = urlSearch ? urlSearch[1] : null;
    /*--------------*/
    const [relatedProducts, setRelatedProducts] = useState(null);
    const [renderProducts, setRenderProducts] = useState(null);
    const [fabricInfo, setFabricInfo] = useState(null);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchFaricDetail() {
            /*--------------*/
            try {
                /*--------------*/
                const fabricInfo = await fetchDocument("fabrics", fabricID);
                const relatedProducts = await fetchWithDoubleCondition(
                    "products",
                    "visibility",
                    true,
                    "fabricID",
                    fabricID
                );
                /*--------------*/
                if (fabricInfo) {
                    setFabricInfo(fabricInfo);
                    setRelatedProducts(relatedProducts);
                }
                /*--------------*/
                if (relatedProducts.length <= LIMIT) {
                    setRenderProducts({
                        isMax: true,
                        designs: [...relatedProducts],
                    });
                } else {
                    setRenderProducts({
                        isMax: false,
                        designs: [...relatedProducts.slice(0, LIMIT)],
                    });
                }
                /*--------------*/
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        if (fabricID) {
            _fetchFaricDetail();
        }
        /*--------------*/
    }, [fabricID]);
    /*--------------*/
    /*********************************
     *  Description: handle load more
     *
     *
     *  Call by:
     */
    function onLoadMore() {
        /*--------------*/
        if (renderProducts && relatedProducts) {
            /*--------------*/
            let udpatedRenderProducts = [...renderProducts.designs];
            /*--------------*/
            udpatedRenderProducts = relatedProducts.slice(
                0,
                LIMIT + udpatedRenderProducts.length
            );
            /*--------------*/
            let isMax = udpatedRenderProducts.length >= relatedProducts.length;
            /*--------------*/
            setRenderProducts({ isMax: isMax, designs: udpatedRenderProducts });
        }
    }
    /************_END_****************/
    /*--------------*/
    if (!fabricID) return <Redirect to="/" />;
    if (!fabricInfo) return <Fragment />;
    return (
        <div className="l-fabric-detail">
            <BackgroundContainer background={fabricInfo.image[0]} />
            <FabricDetailInfoContainer fabricInfo={fabricInfo} />
            <OptionsContainer />
            <DesignListContainer
                renderProducts={renderProducts}
                onLoadMore={onLoadMore}
            />
        </div>
    );
}

export default FabricDetailContainer;
