import { updateCurrentRenderProducts, updatePageFixedTopStatus, updateSelectedWhiteProduct } from "actions";
import Designs from "components/Designs";
import ListLoader from "components/Loader/List";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LIMIT = 12;

function ListContainer() {
    /*--------------*/
    const urlSearch = window.location.search.match(/cat=(.*)\b/);
    const catIDFromURL = urlSearch ? urlSearch[1] : "all";
    /*--------------*/
    const isListLoading = useSelector((state) => state.designs.isListLoading);
    const currentRenderProducts = useSelector(
        (state) => state.designs.currentRenderProducts
    );
    const filteredProducts = useSelector(
        (state) => state.designs.filteredProducts
    );
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        let endIndex = LIMIT;
        /*--------------*/
        let newRenderProducts = [...filteredProducts.slice(0, endIndex)];
        let isMax =
            (currentRenderProducts.length >= filteredProducts.length &&
            filteredProducts.length > 0) || newRenderProducts.length < LIMIT;
        /*--------------*/
        let updatedRenderProducts = {
            isMax: isMax,
            products: newRenderProducts,
        };
        /*--------------*/
        const action_updateCurrentRenderProducts = updateCurrentRenderProducts(
            updatedRenderProducts
        );
        dispatch(action_updateCurrentRenderProducts);
    }, [filteredProducts.toString()]);
    /*********************************
     *  Description: handle loading more data for render designs
     *
     *
     *  Call by:
     */
    function loadMore() {
        /*--------------*/
        let endIndex = currentRenderProducts.products.length + LIMIT;
        /*--------------*/
        let newRenderProducts = [...filteredProducts.slice(0, endIndex)];
        let isMax =
            currentRenderProducts.length >= filteredProducts.length &&
            filteredProducts.length > 0;
        /*--------------*/
        let updatedRenderProducts = {
            isMax: isMax,
            products: newRenderProducts,
        };
        /*--------------*/
        const action_updateCurrentRenderProducts = updateCurrentRenderProducts(
            updatedRenderProducts
        );
        dispatch(action_updateCurrentRenderProducts);
    }
    /************_END_****************/
    /*********************************
     *  Description: Handle item click
     *
     *
     *  Call by:
     */
    function onItemClick(image, id, name) {
        /*--------------*/
        const action_updateSelectedWhiteProduct = updateSelectedWhiteProduct({
            image,
            id,
            name,
        });
        dispatch(action_updateSelectedWhiteProduct);
        /*--------------*/
        const action_updatePageFixedTopStatus = updatePageFixedTopStatus();
        dispatch(action_updatePageFixedTopStatus);
        /*--------------*/
    }
    /************_END_****************/
    if (!currentRenderProducts) return <Fragment />;
    if (isListLoading) return <ListLoader />;
    /*--------------*/
    let updatedLinkInfo = currentRenderProducts.products.map((product) => {
        let linkInfo = {
            pathname: "/selection",
            search: `?id=${product.id}`,
        };
        return { ...product, linkInfo: linkInfo };
    });
    /*--------------*/
    let modifiedRenderProducts = {
        ...currentRenderProducts,
        products: [...updatedLinkInfo],
    };
    /*--------------*/
    return (
        <div className="l-designs__list">
            <Designs
                title={`${filteredProducts.length} thiết kế`}
                renderProducts={modifiedRenderProducts}
                isLoadMore={!modifiedRenderProducts.products.length <= LIMIT}
                loadMore={loadMore}
                isLink={catIDFromURL !== "plussize"}
                onItemClick={onItemClick}
            />
        </div>
    );
}

export default ListContainer;
