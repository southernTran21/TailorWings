import React, { Component } from 'react';
import './shoppingStore.scss';
//import component
import Navbar from './navbarPage';
import SelectionCategory from './selectionCategory';
import ProductList from './productList';
import Filter from './Filter';
import { BackTop } from 'antd';

class ShoppingStoreMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderProducts: [],
            isFirstLoaded: false,
            currentActiveCategory: 'all'
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
            let categoryID = location.search.match(/cat=(.*)\b/)[1] || 'all';
            if (categoryID === 'all') {
                renderProducts = visibilityProducts.filter(product => product.default === true) || [];
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
        if ( currentActiveCategory === activeID ) {
            this.setState({
                currentActiveCategory: activeID
            })
        }
    }

    render() {
        const { renderProducts, isFirstLoaded, currentActiveCategory } = this.state;
        return (
            <div className='pageShoppingStore'>
                <Navbar history={this.props.history} />
                <Filter />
                <SelectionCategory
                    history={this.props.history}
                    categoriesInfo={this.props.categoriesInfo}
                    currentActiveCategory={currentActiveCategory}
                    categoryActiveHandling={this.categoryActiveHandling}
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