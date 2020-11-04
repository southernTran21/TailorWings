import { updateSRC } from "actions/selection";
import {
    setListLoading,
    updateCurrentFilter,
    updateFilteredPatterns,
    updateFilterStatus,
} from "actions/fabrics";
import Options from "components/Options";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function OptionsContainer() {
    /*--------------*/
    const urlSearch = window.location.search.match(/col=(.*)\b/);
    const colIDFromURL = urlSearch ? urlSearch[1] : "all";
    /*--------------*/
    const filterStatus = useSelector((state) => state.fabrics.filterStatus);
    const patterns = useSelector((state) => state.common.patterns);
    const patternCollections = useSelector(
        (state) => state.common.patternCollections
    );
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        let initialFilterStatus = [
            {
                id: "all",
                name: "Tất cả",
                isActive: false,
            },
        ];
        if (patternCollections.length > 0) {
            /*--------------*/
            patternCollections.forEach((collection) => {
                /*--------------*/
                initialFilterStatus.push({
                    id: collection.id,
                    name: collection.name,
                    isActive: false,
                });
                /*--------------*/
            });
            /*--------------*/
            const action_updateFilterStatus = updateFilterStatus(
                initialFilterStatus
            );
            dispatch(action_updateFilterStatus);
            /*--------------*/
        }
        /*--------------*/
        if (patterns.length > 0) {
            let updatedFilterStatus = initialFilterStatus.map((status) => {
                let isActive = status.id === colIDFromURL;
                return { ...status, isActive: isActive };
            });
            /*--------------*/
            let filteredPatterns = [];
            if (colIDFromURL === "all") {
                filteredPatterns = [...patterns];
            } else {
                filteredPatterns =
                    patterns.filter((pattern) => {
                        return pattern.idPatternCollection === colIDFromURL;
                    }) || [];
            }
            /*--------------*/
            const action_updateFilterStatus = updateFilterStatus(
                updatedFilterStatus
            );
            dispatch(action_updateFilterStatus);
            /*--------------*/
            const action_updateFilteredPatterns = updateFilteredPatterns(
                filteredPatterns
            );
            dispatch(action_updateFilteredPatterns);
            /*--------------*/

            const action_updateCurrentFilter = updateCurrentFilter(
                colIDFromURL
            );
            dispatch(action_updateCurrentFilter);
        }
        /*--------------*/
    }, [
        patterns.length,
        colIDFromURL,
        filterStatus.length,
        patternCollections.length,
    ]);
    /*--------------*/
    /*********************************
     *  Description: handle filter change and dispatch to store
     *
     *
     *  Call by:
     */
    function onFilterChange(id, changedIndex) {
        let updatedFilterStatus = filterStatus.map((status, index) => {
            let isActive = changedIndex === index;
            return { ...status, isActive: isActive };
        });
        /*--------------*/
        let filteredPatterns = [];
        if (colIDFromURL === "all") {
            filteredPatterns = [...patterns];
        } else {
            filteredPatterns =
                patterns.filter((pattern) => {
                    return pattern.idPatternCollection === colIDFromURL;
                }) || [];
        }
        /*--------------*/
        const action_updateFilterStatus = updateFilterStatus(
            updatedFilterStatus
        );
        dispatch(action_updateFilterStatus);
        /*--------------*/
        const action_setListLoading = setListLoading(true);
        dispatch(action_setListLoading);
        /*--------------*/
        const action_updateFilteredPatterns = updateFilteredPatterns(
            filteredPatterns
        );
        dispatch(action_updateFilteredPatterns);
        /*--------------*/
        const action_updateCurrentFilter = updateCurrentFilter(id);
        dispatch(action_updateCurrentFilter);
        /*--------------*/
        const action_updateSrc = updateSRC({
            pathname: "/fabrics",
            search: `?col=${id}`,
        });
        dispatch(action_updateSrc);
        /*--------------*/
        setTimeout(() => {
            const action_setListLoading = setListLoading(false);
            dispatch(action_setListLoading);
        }, 500);
    }
    /************_END_****************/
    /*--------------*/
    return (
        <section className="l-fabrics__options">
            <Options
                filters={filterStatus}
                onFilterChange={onFilterChange}
                linkTo={{ pathname: "/fabrics", search: "?col=" }}
            />
        </section>
    );
}

export default OptionsContainer;
