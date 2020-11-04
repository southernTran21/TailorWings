import { updateFabricTypeStatus } from "actions/fabricDetail";
import FabricDetailInfo from "components/Pages/FabricDetail/Info";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FabricDetailInfoContainer() {
    /*--------------*/
    const selectedPattern = useSelector(
        (state) => state.fabricDetail.selectedPattern
    );
    const fabricTypeList = useSelector((state) => state.common.fabricTypeList);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (fabricTypeList.length > 0) {
            /*--------------*/
            let fabricTypeStatus =
                fabricTypeList.map((type) => {
                    return {
                        id: type.id,
                        name: type.name,
                        description: type.description,
                        isActive: false,
                    };
                }) || [];
            fabricTypeStatus.unshift({
                id: "all",
                name: "Tất cả",
                description: "Guidline should be here!",
                isActive: true,
            });
            /*--------------*/
            const action_updateFabricTypeStatus = updateFabricTypeStatus(
                fabricTypeStatus
            );
            dispatch(action_updateFabricTypeStatus);
            /*--------------*/
        }
        /*--------------*/
    }, [fabricTypeList.length]);
    /*--------------*/
    if (!selectedPattern || !fabricTypeList.length > 0)
        return <section className="l-fabric-detail__info"></section>;
    return (
        <section className="l-fabric-detail__info">
            <FabricDetailInfo />
        </section>
    );
}

export default FabricDetailInfoContainer;
