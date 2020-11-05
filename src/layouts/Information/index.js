import React, { useEffect } from "react";
import NavbarContainer from "./Navbar";
import InputContainer from "./Input";
import ReactGA from "react-ga";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageViewGA = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

function InformationContainer() {
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        initGA();
        logPageViewGA();
        /*--------------*/
    }, []);
    /*--------------*/
    return (
        <div className="l-information">
            <NavbarContainer />
            <InputContainer />
        </div>
    );
}

export default InformationContainer;
