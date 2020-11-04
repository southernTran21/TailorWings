import React, { useEffect, useState } from "react";
import BannerContainer from "./Banner";
import ListContainer from "./List";
import NavbarContainer from "./Navbar";
import OptionsContainer from "./Options";
import { fetchVisible } from "../../services/FirebaseAPI/basic";
import { PATTERNS, PATTERN_COLLECTIONS } from "../../constants";
import { updatePatternCollections, updatePatterns } from "actions/index";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus, updateRenderPatterns } from "actions/fabrics";

function FabricsContainer() {
    /*--------------*/
    const patterns = useSelector((state) => state.common.patterns);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        /*--------------*/
        async function _fetchPatterns() {
            try {
                /*--------------*/
                if (patterns.length < 1) {
                    const fetchedPatterns = await fetchVisible(PATTERNS);
                    /*--------------*/
                    const action_updatePatterns = updatePatterns(
                        fetchedPatterns
                    );
                    dispatch(action_updatePatterns);
                    /*--------------*/
                }
                /*--------------*/
            } catch (error) {
                console.log("error :>> ", error);
            }
        }
        /*--------------*/
        _fetchPatterns();
    }, []);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchPatternCollections() {
            /*--------------*/
            try {
                /*--------------*/
                const patternCollections = await fetchVisible(
                    PATTERN_COLLECTIONS
                );
                /*--------------*/
                if (patternCollections.length > 0) {
                    /*--------------*/
                    const action_updatePatternCollections = updatePatternCollections(
                        patternCollections
                    );
                    dispatch(action_updatePatternCollections);
                    /*--------------*/
                }
            } catch (error) {}
            /*--------------*/
        }
        /*--------------*/
        _fetchPatternCollections();
        /*--------------*/
    }, []);
    /*--------------*/
    return (
        <div className="l-fabrics">
            <NavbarContainer />
            <BannerContainer />
            <OptionsContainer />
            <ListContainer />
        </div>
    );
}

export default FabricsContainer;
