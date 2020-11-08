// import {
//     updateBestSeller,
//     updateDefaultProducts,
//     updateFabricList,
//     updateProductList,
//     updateRenderFabrics,
//     updateRenderProduct,
// } from "actions";
import {
    updateFabricTypeList,
    updatePatterns,
    updateTopProducts,
} from "actions";
import {
    updatePageLoading,
    updateRelatedProducts,
    updateRenderPatterns,
    updateRenderProduct,
    updateSelectedDesign,
} from "actions/selection";
import PageLoader from "components/Loader/Page";
import React, { Fragment, useEffect } from "react";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    fetchVisible,
    fetchVisibleCondition,
} from "services/FirebaseAPI/basic";
import { DESIGNS, FABRIC_TYPE, PATTERNS, PRODUCTS } from "../../constants";
// import {
//     fetchDefaultProducts,
//     fetchVisibilityCondition,
//     fetchVisibleCondition,
//     fetchWithCondition,
// } from "services/FirebaseAPI/basic";
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
import ReactGA from "react-ga";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageViewGA = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

function SelectionContainer() {
    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    // });
    /*--------------*/
    const urlSearch = window.location.search.match(/id=(.*)\b/);
    const productID = urlSearch ? urlSearch[1] : "";
    const designID = productID.substring(0, 4) || null;
    const patternID = productID.substring(4, 8) || null;

    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const patterns = useSelector((state) => state.common.patterns);
    const topProducts = useSelector((state) => state.common.topProducts);
    const fabricTypeList = useSelector((state) => state.common.fabricTypeList);
    const relatedProducts = useSelector(
        (state) => state.selection.relatedProducts
    );
    const isPageLoading = useSelector((state) => state.selection.isPageLoading);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        initGA();
        logPageViewGA();
        /*--------------*/
    }, []);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchPatterns() {
            /*--------------*/
            try {
                /*--------------*/
                let fetchedPattern = await fetchVisible(PATTERNS);
                /*--------------*/
                if (fetchedPattern) {
                    /*--------------*/
                    const action_updatePatterns = updatePatterns(
                        fetchedPattern
                    );
                    dispatch(action_updatePatterns);
                    /*--------------*/
                }
                /*--------------*/
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        if (!patterns.length > 0) {
            /*--------------*/
            _fetchPatterns();
            /*--------------*/
        }
        /*--------------*/
    }, [patterns.length]);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchSelectedDesign() {
            /*--------------*/
            try {
                /*--------------*/
                let fetchedSelectedDesign = await fetchVisibleCondition(
                    DESIGNS,
                    "id",
                    designID
                );
                /*--------------*/
                if (fetchedSelectedDesign) {
                    /*--------------*/
                    const action_updateSelectedDesign = updateSelectedDesign(
                        fetchedSelectedDesign[0]
                    );
                    dispatch(action_updateSelectedDesign);
                    /*--------------*/
                }
                /*--------------*/
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        _fetchSelectedDesign();
        /*--------------*/
    }, [designID]);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        const action_updatePageLoading = updatePageLoading(true);
        dispatch(action_updatePageLoading);
        /*--------------*/
        async function _fetchRelatedProducts() {
            /*--------------*/
            try {
                /*--------------*/
                let fetchedRelatedProducts = await fetchVisibleCondition(
                    PRODUCTS,
                    "idDesign",
                    designID
                );
                /*--------------*/
                if (fetchedRelatedProducts) {
                    /*--------------*/
                    let renderPatterns = fetchedRelatedProducts.map(
                        (product) => {
                            /*--------------*/
                            let patternInfo =
                                patterns.find(
                                    (pattern) =>
                                        pattern.id === product.idPattern
                                ) || null;
                            /*--------------*/
                            if (patternInfo) {
                                return {
                                    ...patternInfo,
                                    isActive: patternInfo.id === patternID,
                                };
                            } else {
                                return patternInfo;
                            }
                        }
                    );
                    /*--------------*/
                    let renderProduct =
                        fetchedRelatedProducts.find(
                            (product) => product.id === productID
                        ) || null;
                    /*--------------*/
                    const action_updateRelatedProducts = updateRelatedProducts(
                        fetchedRelatedProducts
                    );
                    dispatch(action_updateRelatedProducts);
                    /*--------------*/
                    const action_updateRenderPatterns = updateRenderPatterns(
                        renderPatterns
                    );
                    dispatch(action_updateRenderPatterns);
                    /*--------------*/
                    const action_updateRenderProduct = updateRenderProduct(
                        renderProduct
                    );
                    dispatch(action_updateRenderProduct);
                    /*--------------*/
                }
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        if (patterns.length > 0) {
            /*--------------*/
            _fetchRelatedProducts();
            /*--------------*/
        }
        /*--------------*/
        const timer = setTimeout(() => {
            /*--------------*/
            const action_updatePageLoading = updatePageLoading(false);
            dispatch(action_updatePageLoading);
            /*--------------*/
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            /*--------------*/
        }, 500);
        /*--------------*/
        return () => clearTimeout(timer);
        /*--------------*/
    }, [designID, patterns.toString(), productID]);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchFabricTypeList() {
            /*--------------*/
            try {
                /*--------------*/
                let fetchedTypeList = await fetchVisible(FABRIC_TYPE);
                /*--------------*/
                if (fetchedTypeList) {
                    /*--------------*/
                    const action_updateFabricTypeList = updateFabricTypeList(
                        fetchedTypeList
                    );
                    dispatch(action_updateFabricTypeList);
                    /*--------------*/
                }
                /*--------------*/
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        if (!fabricTypeList.length > 0) {
            /*--------------*/
            _fetchFabricTypeList();
            /*--------------*/
        }
        /*--------------*/
    }, [fabricTypeList.length]);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchTopProducts() {
            /*--------------*/
            try {
                /*--------------*/
                let fetchedTopProducts = await fetchVisibleCondition(
                    PRODUCTS,
                    "topStatus",
                    true
                );
                /*--------------*/
                if (fetchedTopProducts) {
                    /*--------------*/
                    const action_updateTopProducts = updateTopProducts(
                        fetchedTopProducts
                    );
                    dispatch(action_updateTopProducts);
                    /*--------------*/
                }
                /*--------------*/
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        if (!topProducts.length > 0) {
            /*--------------*/
            _fetchTopProducts();
            /*--------------*/
        }
        /*--------------*/
    }, [topProducts.length]);
    /*--------------*/
    if (!productID || !designID || !patternID) return <Redirect to="/" />;
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
