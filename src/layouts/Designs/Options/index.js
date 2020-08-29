import {
    setListLoading,
    updateCurrentFilter,
    updateFilteredDesigns,
} from "actions";
import Options from "components/Options";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function OptionsContainer() {
    /*--------------*/
    const urlSearch = window.location.search.match(/cat=(.*)\b/);
    const catID = urlSearch ? urlSearch[1] : "all";
    const FILTER_INFO = [
        { id: "all", name: "Tất Cả", isActive: true },
        { id: "damom", name: "Đầm Ôm", isActive: false },
        { id: "damxoe", name: "Đầm Xòe", isActive: false },
        { id: "damsuong", name: "Đầm Suông", isActive: false },
    ];
    const [filterInfo, setFilterInfo] = useState(FILTER_INFO);
    /*--------------*/
    const defaultProductsLength = useSelector(
        (state) => state.common.defaultProducts.length
    );
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (defaultProductsLength > 0) {
            let updatedFilterInfo = filterInfo.map((info) => {
                let isActive = info.id === catID;
                return { ...info, isActive: isActive };
            });
            /*--------------*/
            setFilterInfo(updatedFilterInfo);
            /*--------------*/
            const action_updateFilteredDesigns = updateFilteredDesigns(catID);
            dispatch(action_updateFilteredDesigns);
            /*--------------*/

            const action_updateCurrentFilter = updateCurrentFilter(catID);
            dispatch(action_updateCurrentFilter);
        }
    }, [defaultProductsLength, catID]);
    /*********************************
     *  Description: handle filter change and dispatch to store
     *
     *
     *  Call by:
     */
    function onFilterChange(catID, changedIndex) {
        let updatedFilter = filterInfo.map((info, index) => {
            let isActive = changedIndex === index;
            return { ...info, isActive: isActive };
        });
        setFilterInfo(updatedFilter);
        /*--------------*/
        const action_setListLoading = setListLoading(true);
        dispatch(action_setListLoading);
        /*--------------*/
        const action_updateFilteredDesigns = updateFilteredDesigns(catID);
        dispatch(action_updateFilteredDesigns);
        /*--------------*/
        const action_updateCurrentFilter = updateCurrentFilter(catID);
        dispatch(action_updateCurrentFilter);
        /*--------------*/
        setTimeout(() => {
            const action_setListLoading = setListLoading(false);
            dispatch(action_setListLoading);
        }, 500);
    }
    /************_END_****************/
    return (
        <section className="l-designs__options">
            <Options
                filter={filterInfo}
                onFilterChange={onFilterChange}
                linkTo={{ pathname: "/designs", search: "?cat=" }}
            />
        </section>
    );
}

export default OptionsContainer;
