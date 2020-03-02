import React, { Component } from 'react';
import './shoppingStore.scss';
import classNames from 'classnames';
//import component
import NavbarHeader from './NavbarHeader';
import SelectionCategory from './selectionCategory';
import ProductList from './productList';
import Filter from './Filter';
import { BackTop } from 'antd';
import { removePunctuation } from '../../../services/CommonFunction'

class ShoppingStoreMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderProducts: [],
            isFirstLoaded: false,
            currentActiveCategory: 'all',
            isSideBarOpen: false
        }
    }

    componentDidMount() {
        const { history } = this.props;
        this.initialDataUpdateHandling(history.location);
        this.unlisten = history.listen(location => {
            this.initialDataUpdateHandling(location);
        })
    }

    componentWillUnmount() {
        this.unlisten();
    }

    initialDataUpdateHandling = (location) => {
        let { visibilityProducts } = this.props;
        let { renderProducts } = this.state;
        visibilityProducts.forEach(product => {
            let totalSupportedFabric = visibilityProducts.filter(visibleProduct => visibleProduct.designID === product.designID).length;
            product.totalSupportedFabric = totalSupportedFabric;
        });
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        if (location.pathname === '/shopping-store' && location.search !== '') {
            let categoryID = location.search.match(/cat=(.*)\b&/)[1] || 'all';
            if (categoryID === 'all') {
                renderProducts = visibilityProducts.filter(product => product.default === true) || [];
                if ( location.search.match(/search=(.*)\b/) != null ) {
                    renderProducts = this.searchFilter(location.search.match(/search=(.*)\b/)[1], renderProducts);
                }
            } else {
                renderProducts = visibilityProducts.filter(product => (product.default === true) && (product.catID === categoryID)) || [];
            }
            this.setState({
                renderProducts,
                isFirstLoaded: false,
                currentActiveCategory: categoryID
            })
        }
    }

    firstLoadedConfirm = () => {
        this.setState({
            isFirstLoaded: true
        })
    }

    categoryActiveHandling = (activeID) => {
        const { currentActiveCategory } = this.state;
        if (currentActiveCategory === activeID) {
            this.setState({
                currentActiveCategory: activeID
            })
        }
    }

    sideBarChange = (isOpen) => {
        if (isOpen != null) {
            this.setState({
                isSideBarOpen: isOpen
            })
        }
    }

    searchFilter = (searchInput, renderProducts) => {
        renderProducts = renderProducts.filter((product) => {
            let name = product.name.toLowerCase();
            name = removePunctuation(name);
            name = name.replace(/ /g, '-');
            searchInput = searchInput.toLowerCase();
            return name.search(searchInput) !== -1;
        });
        return renderProducts;
    }

    render() {
        const { renderProducts, isFirstLoaded, currentActiveCategory } = this.state;
        return (
            <div className={classNames('pageShoppingStore', { pageFix: this.state.isSideBarOpen })}>
                {/* <Navbar history={this.props.history} /> */}
                <NavbarHeader
                    history={this.props.history}
                    sideBarChange={this.sideBarChange}
                />
                <Filter />
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
            </div>
        );
    }
}

export default ShoppingStoreMobile;