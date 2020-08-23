import {
    updateFabricList,
    updateProductList,
    updateRenderFabrics,
    updateRenderProduct,
} from "actions";
import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchVisibilityCondition,
    fetchWithCondition,
} from "services/Firebase API/basic";
import DescriptionContainer from "./Mobile/Description";
import DesignCarouselContainer from "./Mobile/DesignCarousel";
import FabricsContainer from "./Mobile/Fabrics";
import InfoContainer from "./Mobile/Info";
import NavbarContainer from "./Mobile/Navbar";
import TopProductsContainer from "./Mobile/TopProducts";
import Media from "react-media";
import InfoContainerDesktop from "./Desktop/Info";
import DescriptionContainerDesktop from "./Desktop/Description";
import TopProductsContainerDesktop from "./Desktop/TopProducts";
import NavbarContainerDesktop from "./Desktop/Navbar";
import FabricsContainerDesktop from "./Desktop/Fabrics";
import DesignCarouselContainerDesktop from "./Desktop/DesignCarousel";

function SelectionContainer() {
    /*--------------*/
    const productID = window.location.search.match(/id=(.*)\b/)[1] || "";
    const designID = productID.substring(0, 4);
    const fabricID = productID.substring(4, 8);
    /*--------------*/
    const productList = useSelector((state) => state.selection.productList);
    const fabricList = useSelector((state) => state.selection.fabricList);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        /*--------------*/
        async function _fetchProductData() {
            try {
                /*--------------*/
                if (
                    productList.findIndex(
                        (product) => product.productID === productID
                    ) < 0
                ) {
                    const newProducts =
                        (await fetchVisibilityCondition(
                            "products",
                            "designID",
                            designID
                        )) || [];
                    /*--------------*/
                    let relatedProducts = [];
                    if (fabricList.length > 0) {
                        relatedProducts =
                            newProducts.filter(
                                (product) =>
                                    fabricList.findIndex(
                                        (fabric) =>
                                            product.fabricID === fabric.id
                                    ) > -1
                            ) || [];
                    } else {
                        relatedProducts = [...newProducts];
                    }
                    const fetchFabricsDataFunctions = relatedProducts.map(
                        (product) => {
                            return fetchWithCondition(
                                "fabrics",
                                "id",
                                product.fabricID
                            );
                        }
                    );
                    const newFabrics = (
                        await Promise.all(fetchFabricsDataFunctions)
                    ).flat();
                    /*--------------*/
                    if (newProducts.length > 0) {
                        /*--------------*/
                        const action_updateProductList = updateProductList(
                            newProducts
                        );
                        dispatch(action_updateProductList);
                    }
                    if (newFabrics.length > 0) {
                        const action_updateFabricList = updateFabricList(
                            newFabrics
                        );
                        dispatch(action_updateFabricList);
                    }
                }
                /*--------------*/
                const action_updateRenderProduct = updateRenderProduct(
                    productID
                );
                dispatch(action_updateRenderProduct);
                /*--------------*/
                const action_updateRenderFabrics = updateRenderFabrics(
                    designID,
                    fabricID
                );
                dispatch(action_updateRenderFabrics);
                /*--------------*/
            } catch (error) {
                console.log("error.message :>> ", error.message);
            }
        }
        /*--------------*/
        _fetchProductData();
    }, [productID]);
    return (
        <div className="l-selection">
            <Media queries={{ small: { maxWidth: 768 } }}>
                {(matches) =>
                    matches.small ? (
                        <Fragment>
                            <NavbarContainer />
                            <FabricsContainer />
                            <DesignCarouselContainer />
                            <InfoContainer />
                            <DescriptionContainer />
                            <TopProductsContainer />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <NavbarContainerDesktop />
                            <div className='l-selection__fabric-selection-wrapper'>
                                <DesignCarouselContainerDesktop />
                                <div className='l-selection__info-wrapper'>
                                    <FabricsContainerDesktop />
                                    <InfoContainerDesktop />
                                </div>
                            </div>
                            <DescriptionContainer />
                            <TopProductsContainer />
                        </Fragment>
                    )
                }
            </Media>
        </div>
    );
}

export default SelectionContainer;
