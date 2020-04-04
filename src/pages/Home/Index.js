import React, { Component } from "react";
import Media from "react-media";
import HomeWeb from "./HomeWeb";
import HomeMobile from "./HomeMobile";
import ReactGA from "react-ga";
import { BackTop } from "antd";

const initGA = () => {
    console.log("initGA");
    ReactGA.initialize("UA-159143322-1");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default class Home extends Component {
    componentDidMount() {
        initGA();
        logPageView();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        let {
            visibilityProducts,
            designsInfo,
            topListInfo,
            collectionsInfo
        } = this.props;
        console.log("collectionsInfo", collectionsInfo);
        let bestSellerList = [];
        topListInfo.forEach(list => {
            if (list.id === "bestseller") {
                console.log("list.designs", list.designs);
                bestSellerList = list.designs;
            }
        });
        if (visibilityProducts && designsInfo) {
            visibilityProducts.forEach(product => {
                let relatedDesignInfo = designsInfo.find(
                    design => design.id === product.designID
                ) || { name: "" };
                product.name = relatedDesignInfo.name;
            });
        }
        console.log("visibilityProducts", visibilityProducts);
        return (
            <Media queries={{ small: { maxWidth: 1024 } }}>
                {matches =>
                    matches.small ? (
                        <React.Fragment>
                            <HomeMobile
                                history={this.props.history}
                                visibilityProducts={
                                    this.props.visibilityProducts
                                }
                                bestSellerList={bestSellerList}
                                collectionsInfo={collectionsInfo}
                            />
                            <BackTop />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <HomeWeb
                                history={this.props.history}
                                visibilityProducts={
                                    this.props.visibilityProducts
                                }
                                bestSellerList={bestSellerList}
                            />
                            <BackTop />
                        </React.Fragment>
                    )
                }
            </Media>
        );
    }
}
