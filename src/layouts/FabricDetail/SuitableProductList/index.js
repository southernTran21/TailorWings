import ProductList from "components/ProductList";
import { DESIGNS } from "../../../constants";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVisible } from "services/FirebaseAPI/basic";
import { updatePageFixedTopStatus, updateSelectedWhiteProduct } from "actions";

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
    const selectedPattern = useSelector(
        (state) => state.fabricDetail.selectedPattern
    );
    /*--------------*/
    const [suitableProductList, setSuitableProductList] = useState([]);
    const [renderProducts, setRenderProducts] = useState([]);
    const [buttonName, setButtonName] = useState(LOAD_MORE_NAME);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _updateDesingInfo(suitableProducts) {
            /*--------------*/
            try {
                /*--------------*/
                const fetchedDesigns = await fetchVisible(DESIGNS);
                /*--------------*/
                if (fetchedDesigns) {
                    /*--------------*/
                    let modifiedProductList = suitableProducts.map(
                        (product) => {
                            /*--------------*/
                            let designInfo =
                                fetchedDesigns.find(
                                    (design) => design.id === product.idDesign
                                ) || null;
                            /*--------------*/
                            if (selectedPattern) {
                                return {
                                    ...designInfo,
                                    image: {
                                        ...designInfo.image,
                                        pattern: selectedPattern.image.mockup,
                                    },
                                };
                            } else {
                                return {
                                    ...designInfo,
                                    image: {
                                        ...designInfo.image,
                                    },
                                };
                            }
                        }
                    );
                    // NOTE: Use designInfo instead of productInfo because WHITE IMAGES is contained in DESIGNS collection
                    /*--------------*/
                    setRenderProducts(modifiedProductList.slice(0, LIMIT));
                    /*--------------*/
                    setSuitableProductList(modifiedProductList);
                    /*--------------*/
                }
                /*--------------*/
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        if (defaultProducts.length > 0) {
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
            _updateDesingInfo(productList);
            /*--------------*/
        }
        /*--------------*/
    }, [defaultProducts.toString(), selectedFabricType, selectedPattern]);
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
    /*********************************
     *  Description: Handle item click
     *
     *
     *  Call by:
     */
    function onItemClick(image, id, name) {
        /*--------------*/
        const action_resetSelectedWhiteProduct = updateSelectedWhiteProduct(null);
        dispatch(action_resetSelectedWhiteProduct);
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
    /*--------------*/
    return (
        <div className="l-fabric-detail__suitable-product-list">
            <ProductList
                title={`${suitableProductList.length} thiết kế phù hợp`}
                onMoreClick={onMoreClick}
                productList={renderProducts}
                buttonName={buttonName}
                isLink={false}
                onItemClick={onItemClick}
            />
        </div>
    );
}

export default SuitableProductListContainer;
