import React, { Component } from "react";
import ReactGA from "react-ga";
import Media from "react-media";
import DesktopVersion from "./DesktopVersion";
import MobileVersion from "./MobileVersion";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

class TailorwingsWelcome extends Component {
    componentDidMount() {
        initGA();
        logPageView();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    render() {
        const { history } = this.props;
        return (
            <Media queries={{ small: { maxWidth: 750 } }}>
                {(matches) =>
                    matches.small ? (
                        <MobileVersion history={history} />
                    ) : (
                        <DesktopVersion history={history} />
                    )
                }
            </Media>
        );
    }
}

export default TailorwingsWelcome;
