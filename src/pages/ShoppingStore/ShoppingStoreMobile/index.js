import React, { Component } from "react";
import "./shoppingStore.scss";
import classNames from "classnames";
//import component
import NavbarHeader from "./NavbarHeader";
import SelectionCategory from "./selectionCategory";
import ProductList from "./productList";
import Filter from "./Filter";
import { BackTop } from "antd";
import { removePunctuation } from "../../../services/CommonFunction";
import SearchSuggest from "./SearchSuggest";

class ShoppingStoreMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderProducts: [],
            isFirstLoaded: false,
            currentActiveCategory: "all",
            isSideBarOpen: false,
            isSearchOpen: false,
            suggestedSearch: [],
            bestSellerInfo: []
        };
    }

    componentDidMount() {
        const { history } = this.props;
        this.initialDataUpdateHandling(history.location);
        this.unlisten = history.listen(location => {
            this.initialDataUpdateHandling(location);
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    initialDataUpdateHandling = location => {
        let { visibilityProducts, bestSellerList } = this.props;
        let { renderProducts, bestSellerInfo } = this.state;
        bestSellerInfo = [];
        visibilityProducts.forEach(product => {
            let totalSupportedFabric = visibilityProducts.filter(
                visibleProduct => visibleProduct.designID === product.designID
            ).length;
            product.totalSupportedFabric = totalSupportedFabric;
            if (
                bestSellerList.includes(product.designID) &&
                product.default === true
            ) {
                bestSellerInfo.push(product);
            }
        });
        // visibilityProducts = visibilityProducts.concat(visibilityProducts);
        // visibilityProducts = visibilityProducts.concat(visibilityProducts);
        // visibilityProducts = visibilityProducts.concat(visibilityProducts);
        if (location.pathname === "/shopping-store" && location.search !== "") {
            let categoryID = location.search.match(/cat=(.*)\b&/)[1] || "all";
            if (categoryID === "all") {
                renderProducts =
                    visibilityProducts.filter(
                        product => product.default === true
                    ) || [];
                if (location.search.match(/search=(.*)\b/) != null) {
                    renderProducts = this.searchFilter(
                        location.search.match(/search=(.*)\b/)[1],
                        renderProducts
                    );
                }
            } else {
                renderProducts = this.filterRenderProducts(
                    visibilityProducts,
                    categoryID
                );
            }
            this.setState({
                renderProducts,
                isFirstLoaded: false,
                currentActiveCategory: categoryID,
                bestSellerInfo
            });
        }
    };

    filterRenderProducts = (visibilityProducts, categoryID) => {
        let renderProducts = [];
        if (visibilityProducts.length > 0) {
            switch (categoryID) {
                case "damom":
                    renderProducts =
                        visibilityProducts.filter(
                            product =>
                                product.catID === categoryID &&
                                product.default === true
                        ) || [];
                    break;
                case "damxoe":
                    renderProducts =
                        visibilityProducts.filter(
                            product =>
                                product.catID === categoryID &&
                                product.default === true
                        ) || [];
                    break;
                case "damsuong":
                    renderProducts =
                        visibilityProducts.filter(
                            product =>
                                product.catID === categoryID &&
                                product.default === true
                        ) || [];
                    break;
                case "damdutiec":
                    renderProducts = this.filterProductsInCollection(
                        visibilityProducts,
                        categoryID
                    );
                    break;
                case "damcongso":
                    renderProducts = this.filterProductsInCollection(
                        visibilityProducts,
                        categoryID
                    );
                    break;
                case "damdaopho":
                    renderProducts = this.filterProductsInCollection(
                        visibilityProducts,
                        categoryID
                    );
                    console.log("renderProducts", renderProducts);
                    break;
                default:
                    break;
            }
        }
        return renderProducts;
    };

    filterProductsInCollection = (visibilityProducts, collectionID) => {
        const { collectionsInfo } = this.props;
        if (collectionsInfo.length > 0) {
            let currentCollection = collectionsInfo.filter(
                collection => collection.id === collectionID
            )[0];
            let productsInCollection = [];
            visibilityProducts.forEach(product => {
                if (currentCollection.products.includes(product.productID)) {
                    productsInCollection.push(product);
                }
            });
            return productsInCollection;
        } else {
            return [];
        }
    };

    firstLoadedConfirm = () => {
        this.setState({
            isFirstLoaded: true
        });
    };

    categoryActiveHandling = activeID => {
        const { currentActiveCategory } = this.state;
        if (currentActiveCategory === activeID) {
            this.setState({
                currentActiveCategory: activeID
            });
        }
    };

    sideBarChange = isOpen => {
        if (isOpen != null) {
            this.setState({
                isSideBarOpen: isOpen,
                isFirstLoaded: false
            });
        }
    };

    searchOpen = () => {
        let { isSearchOpen } = this.state;
        isSearchOpen = !isSearchOpen;
        this.setState({
            isFirstLoaded: false,
            isSearchOpen
        });
    };

    searchFilter = (searchInput, renderProducts) => {
        renderProducts = renderProducts.filter(product => {
            let name = product.name.toLowerCase();
            name = removePunctuation(name);
            name = name.replace(/ /g, "-");
            searchInput = searchInput.toLowerCase();
            return name.search(searchInput) !== -1;
        });
        return renderProducts;
    };

    onSearchSuggestionUpdate = searchInput => {
        let { visibilityProducts } = this.props;
        let { suggestedSearch } = this.state;
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.filter(product => {
            let name = product.name.toLowerCase();
            name = removePunctuation(name);
            searchInput = searchInput.toLowerCase();
            searchInput = removePunctuation(searchInput);
            return name.search(searchInput) !== -1;
        });
        if (searchInput !== "") {
            suggestedSearch = visibilityProducts.map(product => {
                return product.name;
            });
        } else {
            suggestedSearch = [];
        }
        this.setState({
            suggestedSearch
        });
    };

    onBodyContentChange = () => {
        const {
            renderProducts,
            isFirstLoaded,
            currentActiveCategory,
            suggestedSearch,
            isSearchOpen,
            bestSellerInfo
        } = this.state;
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
                <React.Fragment>
                    <Filter totalProductsOnCart={this.props.totalProductsOnCart}/>
                    <SelectionCategory
                        history={this.props.history}
                        categoriesInfo={this.props.categoriesInfo}
                        currentActiveCategory={currentActiveCategory}
                        categoryActiveHandling={this.categoryActiveHandling}
                        renderProducts={renderProducts}
                    />
                    <ProductList
                        renderProducts={renderProducts}
                        isFirstLoaded={isFirstLoaded}
                        firstLoadedConfirm={this.firstLoadedConfirm}
                    />
                    <BackTop />
                </React.Fragment>
            );
        }
    };

    render() {
        const { isSearchOpen } = this.state;
        return (
            <div
                className={classNames("pageShoppingStore", {
                    pageFix: this.state.isSideBarOpen
                })}
            >
                <NavbarHeader
                    history={this.props.history}
                    sideBarChange={this.sideBarChange}
                    onSearchSuggestionUpdate={this.onSearchSuggestionUpdate}
                    isSearchOpen={isSearchOpen}
                    searchOpen={this.searchOpen}
                />
                {this.onBodyContentChange()}
            </div>
        );
    }
}

export default ShoppingStoreMobile;
