import React, { Component } from "react";
import Media from "react-media";
import ReactGA from "react-ga";
import ShoppingCartMobile from './ShoppingCartMobile/index';
import ShoppingCartWeb from './ShoppingCartWeb/index'

const initGA = () => {
    ReactGA.initialize("UA-159143322-1");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default class ShoppingCart extends Component {
    componentDidMount() {
        initGA();
        logPageView();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <Media queries={{ small: { maxWidth: 1024 } }}>
                {matches =>
                    matches.small ? <ShoppingCartMobile /> : <ShoppingCartWeb history={this.props.history}/>
                }
            </Media>
        );
    }
}
