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
} from "services/FirebaseAPI/basic";
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
    const urlSearch = window.location.search.match(/id=(.*)\b/);
    const productID = urlSearch ? urlSearch[1] : "";
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
    const selectionSrc = useSelector((state) => state.selection.src);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const [fetchError, setFetchError] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(false);
    /*--------------*/
    useEffect(() => {
        if (page === "/selection") {
            /*--------------*/
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            /*--------------*/
            setIsImageLoading(true);
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
                        setIsPageLoading(true);
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
                    setTimeout(() => {
                        setIsPageLoading(false);
                    }, 1000);
                } else {
                    setIsPageLoading(true);
                    _fetchProductData();
                    /*--------------*/
                    setTimeout(() => {
                        setIsPageLoading(false);
                    }, 1000);
                }
            }
        }
        /*--------------*/
        setTimeout(() => {
            setIsImageLoading(false);
        }, 500);
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
    if (!productID || !designID || !fabricID) return <Redirect to="/" />;
    /*--------------*/
    if (isPageLoading) {
        return <PageLoader />;
    } else {
        return (
            <div className="l-selection">
                <Media queries={{ small: { maxWidth: 768 } }}>
                    {(matches) =>
                        matches.small ? (
                            <Fragment>
                                <NavbarContainer selectionSrc={selectionSrc} />
                                <FabricsContainer />
                                <DesignCarouselContainer
                                    isImageLoading={isImageLoading}
                                />
                                <InfoContainer />
                                <DescriptionContainer />
                                <TopProductsContainer />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <NavbarContainerDesktop
                                    selectionSrc={selectionSrc}
                                />
                                <div className="l-selection__fabric-selection-wrapper">
                                    <DesignCarouselContainerDesktop
                                        isImageLoading={isImageLoading}
                                    />
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
