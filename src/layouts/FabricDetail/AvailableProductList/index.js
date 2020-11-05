import ProductList from "components/ProductList";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LIMIT = 6;
const LOAD_MORE_NAME = "Xem thêm";
const COLLAPSE_NAME = "Thu gọn";

function AvailableProductListContainer() {
    /*--------------*/
    let urlSearch = window.location.search.match(/id=(.*)\b/);
    const patternID = urlSearch ? urlSearch[1] : null;
    /*--------------*/
    const defaultProducts = useSelector(
        (state) => state.common.defaultProducts
    );
    const selectedFabricType = useSelector(
        (state) => state.fabricDetail.selectedFabricType
    );
    /*--------------*/
    const [availableProductList, setAvailableProductList] = useState([]);
    const [renderProducts, setRenderProducts] = useState([]);
    const [buttonName, setButtonName] = useState(LOAD_MORE_NAME);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        let productList = [];
        /*--------------*/
        defaultProducts.forEach((product) => {
            /*--------------*/
            if (product.idPattern === patternID) {
                /*--------------*/
                if (selectedFabricType.id === "all") {
                    /*--------------*/
                    productList.push({ ...product });
                    /*--------------*/
                } else {
                    /*--------------*/
                    if (product.idFabricType.includes(selectedFabricType.id)) {
                        /*--------------*/
                        productList.push({ ...product });
                        /*--------------*/
                    }
                    /*--------------*/
                }
                /*--------------*/
            }
            /*--------------*/
        });
        /*--------------*/
        setRenderProducts(productList.slice(0, LIMIT));
        /*--------------*/
        setAvailableProductList(productList);
        /*--------------*/
    }, [defaultProducts.length, selectedFabricType]);
    /*--------------*/
    /*********************************
     *  Description: handle load more
     *
     *
     *  Call by:
     */
    function onMoreClick() {
        /*--------------*/
        if (renderProducts.length >= availableProductList.length) {
            /*--------------*/
            let updatedProductList = availableProductList.slice(0, LIMIT);
            /*--------------*/
            setRenderProducts(updatedProductList);
            setButtonName(LOAD_MORE_NAME);
            /*--------------*/
        } else {
            /*--------------*/
            let updatedProductList = [...renderProducts];
            updatedProductList = [
                ...updatedProductList.concat(
                    availableProductList.slice(
                        renderProducts.length,
                        availableProductList.length
                    )
                ),
            ];
            /*--------------*/
            setRenderProducts(updatedProductList);
            setButtonName(COLLAPSE_NAME);
            /*--------------*/
        }
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    return (
        <div className="l-fabric-detail__available-product-list">
            <ProductList
                title={`${availableProductList.length} sản phẩm sẵn có`}
                onMoreClick={onMoreClick}
                productList={renderProducts}
                buttonName={buttonName}
            />
        </div>
    );
}

export default AvailableProductListContainer;
