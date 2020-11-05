import React, { useEffect } from "react";
import HomeCollections from "components/Pages/Home/Collections";
import { useDispatch, useSelector } from "react-redux";
import { updateCategories } from "actions";

function CollectionsContainer() {
    /*--------------*/
    // THIS IS JUST FOR TEMPURARY
    /*--------------*/
    const defaultProducts = useSelector(
        (state) => state.common.defaultProducts
    );
    const categories = useSelector((state) => state.common.categories);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (categories.length > 0 && defaultProducts.length > 0) {
            let updatedCategories = categories.map((category) => {
                let designNumber = defaultProducts.filter(
                    (product) => product.idCategory === category.id
                ).length;
                if (designNumber > -1) {
                    return { ...category, designNumber };
                } else {
                    return { ...category, designNumber: 0 };
                }
            });
            /*--------------*/
            if (updatedCategories) {
                /*--------------*/
                const action_updateCategories = updateCategories(
                    updatedCategories
                );
                dispatch(action_updateCategories);
                /*--------------*/
            }
        }
        /*--------------*/
    }, [categories.length, defaultProducts.length]);
    /*--------------*/
    return (
        <section className="l-home__collections">
            <HomeCollections />
        </section>
    );
}

export default CollectionsContainer;
