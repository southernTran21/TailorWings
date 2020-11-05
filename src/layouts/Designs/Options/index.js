import {
    setListLoading,
    updateCurrentFilter,
    updateFilteredProducts,
    updateFilterStatus,
} from "actions";
import { updateSRC } from "actions/selection";
import Options from "components/Options";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function OptionsContainer() {
    /*--------------*/
    const defaultProducts = useSelector(
        (state) => state.common.defaultProducts
    );
    const categories = useSelector((state) => state.common.categories);
    const filterStatus = useSelector((state) => state.designs.filterStatus);
    /*--------------*/
    const urlSearch = window.location.search.match(/cat=(.*)\b/);
    const catIDFromURL = urlSearch ? urlSearch[1] : "all";
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        let newFilterStatus = [
            { id: "all", name: "Tất cả", isActive: true },
        ];
        /*--------------*/
        if (categories.length > 0) {
            /*--------------*/
            categories.forEach((category) => {
                newFilterStatus.push({
                    id: category.id,
                    name: category.name,
                    isActive: false,
                });
            });
            /*--------------*/
            const action_updateFilterStatus = updateFilterStatus(
                newFilterStatus
            );
            dispatch(action_updateFilterStatus);
            /*--------------*/
        }
        /*--------------*/
        if (defaultProducts.length > 0) {
            let updatedFilterStatus = newFilterStatus.map((status) => {
                let isActive = status.id === catIDFromURL;
                return { ...status, isActive: isActive };
            });
            /*--------------*/
            let filteredProducts = [];
            if (catIDFromURL === "all") {
                filteredProducts = [...defaultProducts];
            } else {
                filteredProducts =
                    defaultProducts.filter((product) => {
                        return product.idCategory === catIDFromURL;
                    }) || [];
            }
            /*--------------*/
            const action_updateFilterStatus = updateFilterStatus(
                updatedFilterStatus
            );
            dispatch(action_updateFilterStatus);
            /*--------------*/
            const action_updateFilteredProducts = updateFilteredProducts(
                filteredProducts
            );
            dispatch(action_updateFilteredProducts);
            /*--------------*/

            const action_updateCurrentFilter = updateCurrentFilter(
                catIDFromURL
            );
            dispatch(action_updateCurrentFilter);
        }
        /*--------------*/
    }, [defaultProducts.length, catIDFromURL, categories.length]);
    /*********************************
     *  Description: handle filter change and dispatch to store
     *
     *
     *  Call by:
     */
    function onFilterChange(catID, changedIndex) {
        let updatedFilterStatus = filterStatus.map((status, index) => {
            let isActive = changedIndex === index;
            return { ...status, isActive: isActive };
        });
        /*--------------*/
        let filteredProducts = [];
        if (catIDFromURL === "all") {
            filteredProducts = [...defaultProducts];
        } else {
            filteredProducts =
                defaultProducts.filter((product) => {
                    return product.idCategory === catIDFromURL;
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
        const action_updateFilteredProducts = updateFilteredProducts(
            filteredProducts
        );
        dispatch(action_updateFilteredProducts);
        /*--------------*/
        const action_updateCurrentFilter = updateCurrentFilter(catID);
        dispatch(action_updateCurrentFilter);
        /*--------------*/
        const action_updateSrc = updateSRC({
            pathname: "/designs",
            search: `?cat=${catID}`,
        });
        dispatch(action_updateSrc);
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
                filters={filterStatus}
                onFilterChange={onFilterChange}
                linkTo={{ pathname: "/designs", search: "?cat=" }}
            />
        </section>
    );
}

export default OptionsContainer;
