import {
    updateDefaultProducts,
    updateFabricTypeList,
    updatePatterns,
} from "actions";
import { updateSelectedPattern } from "actions/fabricDetail";
import { updateSRC } from "actions/selection";
import WhiteProductModal from "components/Modal/WhiteProductModal";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchDefaultProducts, fetchVisible } from "services/FirebaseAPI/basic";
import { FABRIC_TYPE, PATTERNS } from "../../constants";
import AvailableProductListContainer from "./AvailableProductList";
import BackgroundContainer from "./Background";
import FabricDetailInfoContainer from "./Info";
import PatternOrderBannerContainer from "./PatternOrderBanner";
import SuitableProductListContainer from "./SuitableProductList";
import WhiteProductModalContainer from "./WhiteProductModal";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageViewGA = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

function FabricDetailContainer() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    /*--------------*/
    let urlSearch = window.location.search.match(/id=(.*)\b/);
    const patternID = urlSearch ? urlSearch[1] : null;
    /*--------------*/
    const patterns = useSelector((state) => state.common.patterns);
    const fabricTypeList = useSelector((state) => state.common.fabricTypeList);
    const defaultProducts = useSelector(
        (state) => state.common.defaultProducts
    );
    /*--------------*/
    const dispatch = useDispatch();
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
        const action_updateSRC = updateSRC({
            pathname: "/fabric-detail",
            search: `?id=${patternID}`,
        });
        dispatch(action_updateSRC);
        /*--------------*/
    }, [patternID]);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchPatterns() {
            /*--------------*/
            try {
                /*--------------*/
                if (patterns.length > 0) {
                    /*--------------*/
                    let selectedPattern =
                        patterns.find((pattern) => pattern.id === patternID) ||
                        null;
                    /*--------------*/
                    const action_updateSelectedPattern = updateSelectedPattern(
                        selectedPattern
                    );
                    dispatch(action_updateSelectedPattern);
                    /*--------------*/
                } else {
                    /*--------------*/
                    let fetchedPatterns = await fetchVisible(PATTERNS);
                    /*--------------*/
                    if (fetchedPatterns.length > 0) {
                        /*--------------*/
                        let selectedPattern =
                            fetchedPatterns.find(
                                (pattern) => pattern.id === patternID
                            ) || null;
                        /*--------------*/
                        const action_updateSelectedPattern = updateSelectedPattern(
                            selectedPattern
                        );
                        dispatch(action_updateSelectedPattern);
                        /*--------------*/
                        const action_updatePatterns = updatePatterns(
                            fetchedPatterns
                        );
                        dispatch(action_updatePatterns);
                        /*--------------*/
                    }
                }
                /*--------------*/
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        _fetchPatterns();
        /*--------------*/
    }, []);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchFabricTypeList() {
            /*--------------*/
            try {
                /*--------------*/
                let fetchedFabricTypeList = await fetchVisible(FABRIC_TYPE);
                /*--------------*/
                if (fetchedFabricTypeList.length > 0) {
                    /*--------------*/
                    const action_updateFabricTypeList = updateFabricTypeList(
                        fetchedFabricTypeList
                    );
                    dispatch(action_updateFabricTypeList);
                    /*--------------*/
                }
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        if (fabricTypeList.length < 1) {
            _fetchFabricTypeList();
        }
        /*--------------*/
    }, []);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchDefaultProducts() {
            /*--------------*/
            try {
                /*--------------*/
                let fetchedDefaultProducts = await fetchDefaultProducts();
                /*--------------*/
                if (fetchedDefaultProducts.length > 0) {
                    /*--------------*/
                    const action_updateDefaultProducts = updateDefaultProducts(
                        fetchedDefaultProducts
                    );
                    dispatch(action_updateDefaultProducts);
                    /*--------------*/
                }
            } catch (error) {
                console.log("error :>> ", error);
            }
            /*--------------*/
        }
        /*--------------*/
        if (defaultProducts.length < 1) {
            _fetchDefaultProducts();
        }
        /*--------------*/
    }, []);
    /*--------------*/
    if (!patternID) return <Redirect to="/" />;
    return (
        <div className="l-fabric-detail">
            <BackgroundContainer />
            <FabricDetailInfoContainer />
            <AvailableProductListContainer />
            <SuitableProductListContainer />
            <PatternOrderBannerContainer />
            <WhiteProductModalContainer />
        </div>
    );
}

export default FabricDetailContainer;
