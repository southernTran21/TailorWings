import React, { Component } from 'react';
import Media from 'react-media';
import ShoppingStoreMobile from './ShoppingStoreMobile';
import ShoppingStoreWeb from './ShoppingStoreWeb/ShoppingStore';
import ReactGA from 'react-ga'

const initGA = () => {
    ReactGA.initialize('UA-159143322-1')
}

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search)
}

class ShoppingStore extends Component {
    componentDidMount() {
        initGA()
        logPageView()
    }
    render() {
        let { history, designsInfo, visibilityProducts, categoriesInfo, topListInfo, collectionsInfo, localStorageUpdatedHandling } = this.props;
        let bestSellerList = [];
        topListInfo.forEach((list) => {
            if ( list.id === 'bestseller' ) {
                bestSellerList = list.designs;
            }
        })
        if (visibilityProducts && designsInfo) {
            visibilityProducts.forEach((product) => {
                let relatedDesignInfo = designsInfo.find(design => design.id === product.designID) || { name: '' };
                product.name = relatedDesignInfo.name;
            })
        }
        return (
            <Media queries={{ small: { maxWidth: 1024 } }}>
                {matches =>
                    matches.small ?
                        (
                            <ShoppingStoreMobile
                                history={history}
                                visibilityProducts={visibilityProducts}
                                categoriesInfo={categoriesInfo}
                                bestSellerList={bestSellerList}
                                collectionsInfo={collectionsInfo}
                                localStorageUpdatedHandling={localStorageUpdatedHandling}
                            />
                        ) :
                        (
                            <ShoppingStoreWeb
                                history={history}
                                visibilityProducts={visibilityProducts}
                                designsInfo={designsInfo}
                                categoriesInfo={categoriesInfo}
                                localStorageUpdatedHandling={localStorageUpdatedHandling}
                            />
                        )
                }
            </Media>
        );
    }
}

export default ShoppingStore;