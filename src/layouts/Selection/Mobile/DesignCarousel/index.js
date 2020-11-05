import React, { Fragment, useEffect } from "react";
import SelectionDesignCarousel from "components/Pages/Selection/Mobile/DesignCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
    updateRenderFabricTypes,
    updateSelectedFabricType,
} from "actions/selection";

function DesignCarouselContainer() {
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
        <div className="l-selection__design-carousel">
            <SelectionDesignCarousel
                images={renderProduct.image}
                id={renderProduct.id}
                isImageLoading={isImageLoading}
                renderFabricTypes={renderFabricTypes}
                selectedFabricType={selectedFabricType}
                onFabricTypeChange={onFabricTypeChange}
            />
        </div>
    );
}

export default DesignCarouselContainer;
