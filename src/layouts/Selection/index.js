import {
    updateBestSeller,
    updateDefaultProducts,
    updateFabricList,
    updateProductList,
    updateRenderFabrics,
    updateRenderProduct,
} from "actions";
import PageLoader from "components/Loader/Page";
import React, { Fragment, useEffect, useState } from "react";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    fetchDefaultProducts,
    fetchVisibilityCondition,
    fetchWithCondition,
} from "services/Firebase API/basic";
import DesignCarouselContainerDesktop from "./Desktop/DesignCarousel";
import FabricsContainerDesktop from "./Desktop/Fabrics";
import InfoContainerDesktop from "./Desktop/Info";
import NavbarContainerDesktop from "./Desktop/Navbar";
import DescriptionContainer from "./Mobile/Description";
import DesignCarouselContainer from "./Mobile/DesignCarousel";
import FabricsContainer from "./Mobile/Fabrics";
import InfoContainer from "./Mobile/Info";
import NavbarContainer from "./Mobile/Navbar";
import TopProductsContainer from "./Mobile/TopProducts";

function SelectionContainer() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    /*--------------*/
    const page = window.location.pathname;
    const productID = window.location.search.match(/id=(.*)\b/)[1] || "";
    const designID = productID.substring(0, 4) || null;
    const fabricID = productID.substring(4, 8) || null;
    /*--------------*/
    const productList = useSelector((state) => state.selection.productList);
    const fabricList = useSelector((state) => state.selection.fabricList);
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    const renderFabrics = useSelector((state) => state.selection.renderFabrics);
    /*--------------*/
    const defaultProductsLength = useSelector(
        (state) => state.common.defaultProducts.length
    );
    const bestSellerLength = useSelector(
        (state) => state.common.bestSeller.length
    );
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const [fetchError, setFetchError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    /*--------------*/
    useEffect(() => {
        if (page === "/selection") {
            /*--------------*/
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            /*--------------*/
            async function _fetchProductData() {
                try {
                    const newProducts = await fetchVisibilityCondition(
                        "products",
                        "designID",
                        designID
                    );
                    /*--------------*/
                    if (newProducts.length > 0) {
                        const relatedFabricID = newProducts.map((product) => {
                            return product.fabricID || "";
                        });
                        /*--------------*/
                        let fetchedFabrics = await Promise.all(
                            relatedFabricID.map((id) => {
                                return fetchWithCondition("fabrics", "id", id);
                            })
                        );
                        fetchedFabrics = fetchedFabrics.flat();
                        /*--------------*/

                        /*-------UPDATE NEW DATA-------*/
                        const newRenderFabrics = fetchedFabrics.map(
                            (fabric) => {
                                return {
                                    ...fabric,
                                    isActive: fabric.id === fabricID,
                                };
                            }
                        );
                        /*--------------*/
                        const newFabrics = fetchedFabrics.filter((fabric) => {
                            const isAvailable =
                                fabricList.findIndex(
                                    (item) => item.id === fabric.id
                                ) >= 0;
                            return !isAvailable;
                        });
                        /*--------------*/
                        const newRenderProduct =
                            newProducts.find(
                                (product) => product.productID === productID
                            ) || null;
                        /*--------------*/
                        const action_updateProductList = updateProductList(
                            newProducts
                        );
                        dispatch(action_updateProductList);
                        /*--------------*/
                        const action_updateFabricList = updateFabricList(
                            newFabrics
                        );
                        dispatch(action_updateFabricList);
                        /*--------------*/
                        const action_resetRenderFabrics = updateRenderFabrics(
                            []
                        );
                        const action_updateRenderFabrics = updateRenderFabrics(
                            newRenderFabrics
                        );
                        dispatch(action_resetRenderFabrics);
                        dispatch(action_updateRenderFabrics);
                        /*--------------*/
                        const action_updateRenderProduct = updateRenderProduct(
                            newRenderProduct
                        );
                        dispatch(action_updateRenderProduct);
                        /*--------------*/
                    }
                    setFetchError(false);
                } catch (error) {
                    setFetchError(true);
                    console.log("error.message :>> ", error.message);
                }
            }
            /*--------------*/
            if (!fetchError) {
                const isProductAvailable =
                    productList.findIndex(
                        (product) => product.productID === productID
                    ) >= 0;
                const isDesignChange = renderProduct
                    ? renderProduct.designID !== designID
                    : true;
                if (isProductAvailable) {
                    /*--------------*/
                    let newRenderFabrics = [];
                    let newRenderProduct = productList.find(
                        (product) => product.productID === productID
                    );
                    /*--------------*/
                    if (isDesignChange) {
                        setIsLoading(true);
                        /*-------Reset-------*/
                        const action_updateRenderFabrics = updateRenderFabrics(
                            []
                        );
                        dispatch(action_updateRenderFabrics);
                        /*--------------*/
                        productList.forEach((product) => {
                            if (product.designID === designID) {
                                /*--------------*/
                                const fabricInfo =
                                    fabricList.find(
                                        (fabric) =>
                                            fabric.id === product.fabricID
                                    ) || null;
                                /*--------------*/
                                if (fabricInfo) {
                                    let newRenderFabricItem = {
                                        ...fabricInfo,
                                        isActive: fabricInfo.id === fabricID,
                                    };
                                    /*--------------*/
                                    newRenderFabrics.push(newRenderFabricItem);
                                }
                            }
                        });
                    } else {
                        newRenderFabrics = renderFabrics.map((fabric) => {
                            return {
                                ...fabric,
                                isActive: fabric.id === fabricID,
                            };
                        });
                    }
                    /*--------------*/
                    const action_updateRenderFabrics = updateRenderFabrics(
                        newRenderFabrics
                    );
                    dispatch(action_updateRenderFabrics);
                    /*--------------*/
                    const action_updateRenderProduct = updateRenderProduct(
                        newRenderProduct
                    );
                    dispatch(action_updateRenderProduct);
                    /*--------------*/
                    setFetchError(false);
                } else {
                    setIsLoading(true);
                    _fetchProductData();
                }
            }
        }
        /*--------------*/
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [productID]);
    /*------- Handle bestseller list -------*/
    useEffect(() => {
        if (page === "/selection") {
            async function _fetchDefaultProducts() {
                try {
                    const fetchedDefaultProducts = await fetchDefaultProducts();
                    if (fetchedDefaultProducts.length > 0) {
                        /*--------------*/
                        const action_updateDefaultProducts = updateDefaultProducts(
                            fetchedDefaultProducts
                        );
                        dispatch(action_updateDefaultProducts);
                    }
                    setFetchError(false);
                } catch (error) {
                    setFetchError(true);
                    console.log("error.message :>> ", error.message);
                }
            }
            /*--------------*/
            async function _fetchBestSeller() {
                try {
                    const fetchedBestSeller = await fetchWithCondition(
                        "topList",
                        "id",
                        "bestseller"
                    );
                    if (fetchedBestSeller.length > 0) {
                        let designs = [...fetchedBestSeller[0].designs];
                        /*--------------*/
                        const action_updateBestSeller = updateBestSeller(
                            designs
                        );
                        dispatch(action_updateBestSeller);
                    }
                    setFetchError(false);
                } catch (error) {
                    console.log("error.message :>> ", error.message);
                    setFetchError(true);
                }
            }
            /*--------------*/
            if (!fetchError) {
                if (defaultProductsLength < 1) {
                    _fetchDefaultProducts();
                }
                if (bestSellerLength < 1 && defaultProductsLength > 0) {
                    _fetchBestSeller();
                }
            }
        }
    }, [defaultProductsLength, bestSellerLength]);
    /*--------------*/
    if (!designID || !fabricID) return <Redirect to="/" />;
    if (!renderProduct) return <Redirect to="/designs?cat=all" />;
    /*--------------*/
    if (isLoading) {
        return <PageLoader />;
    } else {
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
                                <div className="l-selection__fabric-selection-wrapper">
                                    <DesignCarouselContainerDesktop />
                                    <div className="l-selection__info-wrapper">
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
}

export default SelectionContainer;
