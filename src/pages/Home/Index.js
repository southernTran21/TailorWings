import React, { Component } from "react";
import Media from "react-media";
import HomeWeb from "./HomeWeb";
import HomeMobile from "./HomeMobile";
import ReactGA from "react-ga";
import { BackTop } from "antd";
import PageLoading from "../../components/Spinner/PageLoading";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};
let timeOut;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPageLoading: true,
        };
    }

    componentDidMount() {
        initGA();
        logPageView();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if (this.props.history.location.state != null) {
            if (this.props.history.location.state.prevPath != null) {
                this.setState({
                    isPageLoading: false,
                });
            } else {
                timeOut = setTimeout(
                    () => this.setState({ isPageLoading: false }),
                    3000
                );
            }
        } else {
            timeOut = setTimeout(
                () => this.setState({ isPageLoading: false }),
                3000
            );
        }
    }

    componentWillMount() {
        clearTimeout(timeOut);
    }

    renderContentHandling = () => {
        const { isPageLoading } = this.state;
        if (isPageLoading) {
            return <PageLoading />;
        } else {
            let {
                visibilityProducts,
                designsInfo,
                topListInfo,
                collectionsInfo,
            } = this.props;
            let bestSellerList = [];
            topListInfo.forEach((list) => {
                if (list.id === "bestseller") {
                    console.log("list.designs", list.designs);
                    bestSellerList = list.designs;
                }
            });
            if (visibilityProducts && designsInfo) {
                visibilityProducts.forEach((product) => {
                    let relatedDesignInfo = designsInfo.find(
                        (design) => design.id === product.designID
                    ) || { name: "" };
                    product.name = relatedDesignInfo.name;
                });
            }
            return (
                <Media queries={{ small: { maxWidth: 750 } }}>
                    {(matches) =>
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
    };

    render() {
        return <React.Fragment>{this.renderContentHandling()}</React.Fragment>;
    }
}
