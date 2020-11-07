import { updatePatternCollections, updatePatterns } from "actions/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PATTERNS, PATTERN_COLLECTIONS } from "../../constants";
import { fetchVisible } from "../../services/FirebaseAPI/basic";
import BannerContainer from "./Banner";
import ListContainer from "./List";
import NavbarContainer from "./Navbar";
import OptionsContainer from "./Options";
import ReactGA from "react-ga";
import Login from "components/Login";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageViewGA = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

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
        initGA();
        logPageViewGA();
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
            <Login />
        </div>
    );
}

export default FabricsContainer;
