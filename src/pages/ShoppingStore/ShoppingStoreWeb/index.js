import classNames from "classnames";
import React, { Component } from "react";
import NavBarWeb from "../../../components/NavBar/NavBarWeb/index";
import { removePunctuation } from "../../../services/CommonFunction";
import Categories from "./Categories";
import ProductList from "./Content";
import Filter from "./Filter";
import "./ShoppingStore.scss";

export default class ShoppingStoreWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderProducts: [],
            bestSellerInfo: [],
            isFirstLoaded: false,
            currentActiveCategory: "all",
            isEmptyFilter: true,
            isSideBarOpen: false,
        };
    }

    componentDidMount() {
        const { history } = this.props;
        // Inital prepare data
        this.initialDataUpdateHandling(history.location);
        // Reload data after url changed
        this.unlisten = history.listen((location) => {
            this.initialDataUpdateHandling(location);
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    initialDataUpdateHandling = (location) => {
        let { visibilityProducts, bestSellerList } = this.props;
        let { renderProducts, bestSellerInfo } = this.state;
        visibilityProducts.forEach((product) => {
            // Find totalSupportedFabric
            let totalSupportedFabric = visibilityProducts.filter(
                (visibleProduct) => visibleProduct.designID === product.designID
            ).length;
            product.totalSupportedFabric = totalSupportedFabric;
            // push product that bestSellerList contains to bestSellerInfo
            if (
                bestSellerList.includes(product.designID) &&
                product.default === true
            ) {
                bestSellerInfo.push(product);
            }
        });
        if (location.pathname === "/shopping-store" && location.search !== "") {
            // url: www.----.com/shoppping-store?cat=abc&search=def. Có cách nào khác cách em cắt nội dung cat và search ra không anh?
            let currentCategory = "all";
            if (location.search.match(/cat=(.*)\b&/) != null) {
                currentCategory =
                    location.search.match(/cat=(.*)\b&/)[1] || "all";
            }
            if (currentCategory === "all") {
                renderProducts =
                    visibilityProducts.filter(
                        (product) => product.default === true
                    ) || [];
                // Check search content and filter new renderProducts
                if (location.search.match(/search=(.*)\b/) != null) {
                    renderProducts = this.searchFilter(
                        location.search.match(/search=(.*)\b/)[1],
                        renderProducts
                    );
                }
            } else {
                renderProducts = this.filterRenderProducts(
                    visibilityProducts,
                    currentCategory
                );
            }
            this.setState({
                renderProducts,
                //this one is set 'true' in other component for checking first loading of Infinity Scroll
                isFirstLoaded: false,
                currentActiveCategory: currentCategory,
                bestSellerInfo,
                isEmptyFilter: true,
            });
        }
    };

    filterRenderProducts = (visibilityProducts, currentCategory) => {
        let renderProducts = [];
        if (visibilityProducts.length > 0) {
            switch (currentCategory) {
                case "damom":
                    renderProducts =
                        visibilityProducts.filter(
                            (product) =>
                                product.catID === currentCategory &&
                                product.default === true
                        ) || [];
                    break;
                case "damxoe":
                    renderProducts =
                        visibilityProducts.filter(
                            (product) =>
                                product.catID === currentCategory &&
                                product.default === true
                        ) || [];
                    break;
                case "damsuong":
                    renderProducts =
                        visibilityProducts.filter(
                            (product) =>
                                product.catID === currentCategory &&
                                product.default === true
                        ) || [];
                    break;
                case "damdutiec":
                    renderProducts = this.filterProductsInCollection(
                        visibilityProducts,
                        currentCategory
                    );
                    break;
                case "damcongso":
                    renderProducts = this.filterProductsInCollection(
                        visibilityProducts,
                        currentCategory
                    );
                    break;
                case "damdaopho":
                    renderProducts = this.filterProductsInCollection(
                        visibilityProducts,
                        currentCategory
                    );
                    break;
                default:
                    break;
            }
        }
        return renderProducts;
        // * Vì categories hiện tại bao gồm 'damom', 'damxoe', 'damsuong' được gán vào từng products object thông qua key categoryID.
        // * Collections là một list các mã product, một product có thể thuộc nhiều collection nhưng chỉ thuộc duy nhất 1 category.
        // * Nên em tách ra xử riêng biệt như trên
    };

    filterProductsInCollection = (visibilityProducts, collectionID) => {
        const { collectionsInfo } = this.props;
        if (collectionsInfo.length > 0) {
            let currentCollection = collectionsInfo.filter(
                (collection) => collection.id === collectionID
            )[0];
            let productsInCollection = [];
            visibilityProducts.forEach((product) => {
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
            isFirstLoaded: true,
        });
    };

    categoryActiveHandling = (activeID) => {
        const { currentActiveCategory } = this.state;
        if (currentActiveCategory === activeID) {
            this.setState({
                currentActiveCategory: activeID,
            });
        }
    };

    onCollectionFiltering = (filterList) => {
        let { visibilityProducts } = this.props;
        let defaultProducts = visibilityProducts.filter(
            (product) => product.default === true
        );
        filterList.forEach((collectionID) => {
            defaultProducts = this.filterProductsInCollection(
                defaultProducts,
                collectionID
            );
        });
        this.setState({
            renderProducts: defaultProducts,
            isEmptyFilter: false,
            isFirstLoaded: false,
        });
    };

    searchFilter = (searchInput, renderProducts) => {
        renderProducts = renderProducts.filter((product) => {
            let name = product.name.toLowerCase();
            name = removePunctuation(name);
            name = name.replace(/ /g, "-");
            searchInput = searchInput.toLowerCase();
            return name.search(searchInput) !== -1;
        });
        return renderProducts;
    };

    sideBarChange = (state) => {
        this.setState({
            isSideBarOpen: state,
        });
    };

    render() {
        const { collectionsInfo } = this.props;
        const {
            renderProducts,
            currentActiveCategory,
            isEmptyFilter,
            isFirstLoaded,
            isSideBarOpen,
        } = this.state;
        return (
            <div className={classNames({ fixed_top: isSideBarOpen })}>
                <NavBarWeb
                    history={this.props.history}
                    totalProductsOnCart={this.props.totalProductsOnCart}
                    sideBarChange={this.sideBarChange}
                />
                <div className="shoppingStore_wrapper">
                    <Categories
                        isRenderProductsEmpty={renderProducts.length === 0}
                        currentActiveCategory={currentActiveCategory}
                        categoryActiveHandling={this.categoryActiveHandling}
                    />
                    <div className="filterContent d-flex justify-content-between">
                        <Filter
                            categoryActiveHandling={this.categoryActiveHandling}
                            onCollectionFiltering={this.onCollectionFiltering}
                            collectionsInfo={collectionsInfo}
                            isEmptyFilter={isEmptyFilter}
                        />
                        <ProductList
                            renderProducts={renderProducts}
                            isFirstLoaded={isFirstLoaded}
                            firstLoadedConfirm={this.firstLoadedConfirm}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
