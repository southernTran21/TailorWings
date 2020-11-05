import {
    updateRenderFabricTypes,
    updateSelectedFabricType,
} from "actions/selection";
import DesignCarouselDesktop from "components/Pages/Selection/Desktop/DesignCarousel";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function DesignCarouselContainerDesktop() {
    /*--------------*/
    const fabricTypeList = useSelector((state) => state.common.fabricTypeList);
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    const isImageLoading = useSelector(
        (state) => state.selection.isImageLoading
    );
    const renderFabricTypes = useSelector(
        (state) => state.selection.renderFabricTypes
    );
    const selectedFabricType = useSelector(
        (state) => state.selection.selectedFabricType
    );
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (fabricTypeList.length > 0 && renderProduct) {
            /*--------------*/
            let fabricTypeInfo = renderProduct.idFabricType.map((type) => {
                /*--------------*/
                let typeInfo = fabricTypeList.find((item) => {
                    return item.id === type;
                }) || { name: "" };
                /*--------------*/
                return typeInfo;
            });
            /*--------------*/
            if (fabricTypeInfo) {
                /*--------------*/
                const action_updateRenderFabricTypes = updateRenderFabricTypes(
                    fabricTypeInfo
                );
                dispatch(action_updateRenderFabricTypes);
                /*--------------*/
                const action_updateSelectedFabricType = updateSelectedFabricType(
                    fabricTypeInfo[0]
                );
                dispatch(action_updateSelectedFabricType);
                /*--------------*/
            }
        }
        /*--------------*/
    }, [fabricTypeList.length, renderProduct]);
    /*--------------*/
    /*********************************
     *  Description: handle fabric type change
     *
     *
     *  Call by:
     */
    function onFabricTypeChange(fabricType) {
        /*--------------*/
        if (typeof fabricType === "object") {
            /*--------------*/
            if (fabricType.id !== selectedFabricType.id) {
                /*--------------*/
                const action_updateSelectedFabricType = updateSelectedFabricType(
                    fabricType
                );
                dispatch(action_updateSelectedFabricType);
                /*--------------*/
            }
        }
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    if (!renderProduct) return <Fragment />;
    return (
        <section className="l-selection__design-carousel-desktop">
            <DesignCarouselDesktop
                images={renderProduct.image}
                id={renderProduct.id}
                isImageLoading={isImageLoading}
                renderFabricTypes={renderFabricTypes}
                selectedFabricType={selectedFabricType}
                onFabricTypeChange={onFabricTypeChange}
            />
        </section>
    );
}

export default DesignCarouselContainerDesktop;
