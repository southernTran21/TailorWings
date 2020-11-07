import {
    updateFabricTypeStatus,
    updateSelectedFabricType
} from "actions/fabricDetail";
import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FabricDetailInfo() {
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const selectedPattern = useSelector(
        (state) => state.fabricDetail.selectedPattern
    );
    const fabricTypeStatus = useSelector(
        (state) => state.fabricDetail.fabricTypeStatus
    );
    const selectedFabricType = useSelector(
        (state) => state.fabricDetail.selectedFabricType
    );
    /*--------------*/
    /*********************************
     *  Description: handle fabric type change
     *
     *
     *  Call by:
     */
    function onFabricTypeChange(selectedType) {
        /*--------------*/
        if (selectedType) {
            /*--------------*/
            let updatedFabricTypeStatus = fabricTypeStatus.map((status) => {
                return { ...status, isActive: status.id === selectedType.id };
            });
            /*--------------*/
            const action_updateFabricTypeStatus = updateFabricTypeStatus(
                updatedFabricTypeStatus
            );
            dispatch(action_updateFabricTypeStatus);
            /*--------------*/
            const action_updateSelectedFabricType = updateSelectedFabricType(
                selectedType
            );
            dispatch(action_updateSelectedFabricType);
            /*--------------*/
        }
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    if (!selectedPattern || !fabricTypeStatus.length > 0)
        return <div className="c-fabric-detail-info"></div>;
    /*--------------*/
    const { name, id } = selectedPattern;
    const { description } = selectedFabricType;
    /*--------------*/
    let modifiedDescription = description.split("-");
    modifiedDescription = modifiedDescription.filter((info) => info !== "");
    /*--------------*/
    return (
        <div className="c-fabric-detail-info">
            <div className="c-fabric-detail-info__section1">
                <h2 className="c-fabric-detail-info__name">{name}</h2>
            </div>
            <div className="c-fabric-detail-info__tag">
                {fabricTypeStatus.map((type, index) => {
                    return (
                        <span
                            className={classNames({
                                "c-fabric-detail-info__tag--active":
                                    type.isActive,
                            })}
                            key={index}
                            onClick={() => onFabricTypeChange(type)}
                        >
                            {type.name}
                        </span>
                    );
                })}
            </div>
            <div className="c-fabric-detail-info__desc">
                <span>Mã vải: {id}</span>
                {selectedFabricType.id !== "all" ? (
                    modifiedDescription.map((desc, index) => {
                        return <span key={index}> {desc}</span>;
                    })
                ) : (
                    <span style={{textAlign: "center", textIndent: "0", padding: "0 10rem"}}>{selectedFabricType.description}</span>
                )}
            </div>
        </div>
    );
}

export default FabricDetailInfo;
