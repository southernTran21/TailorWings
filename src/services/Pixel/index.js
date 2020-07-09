import ReactPixel from "react-facebook-pixel";

const initPixel = () => {
    const options = {
        autoConfig: true, // set pixel's autoConfig
        debug: false, // enable logs
    };
    ReactPixel.init("218331376051723", null, options);
};

const logPageViewPixel = () => {
    ReactPixel.pageView(window.location.pathname + window.location.search);
};
