import classNames from "classnames";
import React, { Component, lazy, Suspense } from "react";
import { removePunctuation } from "../../../services/CommonFunction";
import Body from "./Body";
// import Footer from "./Footer";
// import component
import NavbarHeader from "./Header/NavbarHeader";
import "./home.scss";
import SearchSuggest from "./SearchSuggest";

const Footer = lazy(() => import("./Footer"));

export default class HomeMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false,
            isSearchOpen: false,
            suggestedSearch: [],
            bestSellerInfo: [],
        };
    }

    searchOpen = () => {
        let { isSearchOpen } = this.state;
        isSearchOpen = !isSearchOpen;
        this.setState({
            isSearchOpen,
        });
    };

    sideBarChange = (isOpen) => {
        if (isOpen != null) {
            this.setState({
                isSideBarOpen: isOpen,
            });
        }
    };

    onSearchSuggestionUpdate = (searchInput) => {
        let { visibilityProducts } = this.props;
        let { suggestedSearch } = this.state;
        visibilityProducts = visibilityProducts.filter((product) => {
            if (product.default) {
                let name = product.name.toLowerCase();
                name = removePunctuation(name);
                searchInput = searchInput.toLowerCase();
                searchInput = removePunctuation(searchInput);
                return name.search(searchInput) !== -1;
            }
        });
        if (searchInput !== "") {
            suggestedSearch = visibilityProducts.map((product) => {
                return product.name;
            });
        } else {
            suggestedSearch = [];
        }
        this.setState({
            suggestedSearch,
        });
    };

    onBodyContentChange = () => {
        let { isSearchOpen, suggestedSearch, bestSellerInfo } = this.state;
        const { bestSellerList, visibilityProducts } = this.props;
        if (bestSellerList.length > 0 && visibilityProducts.length > 0) {
            visibilityProducts.forEach((product) => {
                if (
                    bestSellerList.includes(product.designID) &&
                    product.default === true
                ) {
                    bestSellerInfo.push(product);
                }
            });
            bestSellerInfo.forEach((info) => {
                let totalSupportedFabric = visibilityProducts.filter(
                    (product) => product.designID === info.designID
                ).length;
                info.totalSupportedFabric = totalSupportedFabric;
            });
        }
        if (isSearchOpen) {
            return (
                <div>
                    <SearchSuggest
                        suggestedSearch={suggestedSearch}
                        searchOpen={this.searchOpen}
                        bestSellerInfo={bestSellerInfo}
                    />
                </div>
            );
        } else {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    {/* <React.Fragment> */}
                        <Body
                            visibilityProducts={this.props.visibilityProducts}
                            bestSellerInfo={bestSellerInfo}
                            collectionsInfo={this.props.collectionsInfo}
                        />
                        <Footer />
                    {/* </React.Fragment> */}
                </Suspense>
            );
        }
    };

    render() {
        let { isSearchOpen } = this.state;
        return (
            <div
                className={classNames("pageHomeMobile", {
                    pageFix: this.state.isSideBarOpen,
                })}
            >
                <NavbarHeader
                    history={this.props.history}
                    isSearchOpen={isSearchOpen}
                    sideBarChange={this.sideBarChange}
                    searchOpen={this.searchOpen}
                    onSearchSuggestionUpdate={this.onSearchSuggestionUpdate}
                />
                {this.onBodyContentChange()}
            </div>
        );
    }
}
