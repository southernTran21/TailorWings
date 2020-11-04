import ProductList from "components/ProductList";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LIMIT = 6;
const LOAD_MORE_NAME = "Xem thêm";
const COLLAPSE_NAME = "Thu gọn";

function SuitableProductListContainer() {
    /*--------------*/
    const defaultProducts = useSelector(
        (state) => state.common.defaultProducts
    );
    const selectedFabricType = useSelector(
        (state) => state.fabricDetail.selectedFabricType
    );
    /*--------------*/
    const [suitableProductList, setSuitableProductList] = useState([]);
    const [renderProducts, setRenderProducts] = useState([]);
    const [buttonName, setButtonName] = useState(LOAD_MORE_NAME);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        let productList = [];
        /*--------------*/
        defaultProducts.forEach((product) => {
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
        });
        /*--------------*/
        productList = [
            ...productList,
            ...productList,
            ...productList,
            ...productList,
            ...productList,
            ...productList,
            ...productList,
            ...productList,
            ...productList,
        ];
        /*--------------*/
        setRenderProducts(productList.slice(0, LIMIT));
        /*--------------*/
        setSuitableProductList(productList);
        /*--------------*/
    }, [defaultProducts.length, selectedFabricType]);
    /*--------------*/
    /*********************************
     *  Description:
     *
     *
     *  Call by:
     */
    function onMoreClick() {
        /*--------------*/
        if (renderProducts.length >= suitableProductList.length) {
            /*--------------*/
            let updatedProductList = suitableProductList.slice(0, LIMIT);
            /*--------------*/
            setRenderProducts(updatedProductList);
            setButtonName(LOAD_MORE_NAME);
            /*--------------*/
        } else {
            /*--------------*/
            let updatedProductList = [...renderProducts];
            updatedProductList = [
                ...updatedProductList.concat(
                    suitableProductList.slice(
                        renderProducts.length,
                        suitableProductList.length
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
        <div className="l-fabric-detail__suitable-product-list">
            <ProductList
                title={`${suitableProductList.length} sản phẩm phù hợp`}
                onMoreClick={onMoreClick}
                productList={renderProducts}
                buttonName={buttonName}
            />
        </div>
    );
}

export default SuitableProductListContainer;
