import ReactGA from "react-ga";

const initGA = () => {
    ReactGA.initialize("UA-159143322-1");
};

const logPageViewGA = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};
