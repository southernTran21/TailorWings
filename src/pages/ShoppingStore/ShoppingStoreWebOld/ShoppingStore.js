import React from 'react';
import './ShoppingStore.css';
import ProductList from './ProductList';
import Breadcrumb from './Breadcrumb';
import FilterTable from './FilterTable';
import { getWithCondition } from '../../../services/Fundamental';

export default class ShoppingStoreWeb extends React.PureComponent {
    constructor(props) {
        super(props);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        let catID = window.location.search.match(/cat=(.*)\b/);
        if (catID != null) {
            catID = window.location.search.match(/cat=(.*)\b/)[1];
        }
        this.state = {
            visibilityProducts: this.props.visibilityProducts,
            initialProducts: [],
            renderProducts: [],
            categoryName: "Tất cả",
            categoryID: catID,
            sortType: "none",
            isPropsChanged: false,
        }
        this._getCategoryName = this._getCategoryName.bind(this);
        this._filterHandling = this._filterHandling.bind(this);
        this._updateProductByCategory = this._updateProductByCategory.bind(this);
        this._priceSortHandling = this._priceSortHandling.bind(this);
    }

    componentDidMount() {
        const { 
            history,
            categoriesInfo,
            visibilityProducts,
            designsInfo
        } = this.props;
        const { categoryID } = this.state;
        if (categoryID != null) {
            this._updateProductByCategory(
                categoryID,
                visibilityProducts,
                designsInfo
            );
            this._getCategoryName(categoryID, categoriesInfo);
        } else {
            // history.push('/');
        }
        this.unlisten = history.listen(location => {
            if (location.search) {
                let categoryID = window.location.search.match(/cat=(.*)\b/);
                if (categoryID != null) {
                    categoryID = window.location.search.match(/cat=(.*)\b/)[1];
                    this._updateProductByCategory(
                        categoryID,
                        visibilityProducts,
                        designsInfo
                    );
                    this._getCategoryName(categoryID,categoriesInfo);
                } else {
                    // history.push('/');
                }
            }
        })

    }

    componentWillUnmount() {
        this.unlisten();
    }

    _updateProductByCategory = (categoryID, visibilityProducts, designsInfo) => {
        visibilityProducts = visibilityProducts.filter((product) => {
            return product.default === true;
        }) || [];
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        let renderProducts = [];
        if (visibilityProducts != null) {
            renderProducts = visibilityProducts.map((product) => {
                if (product.default === true) {
                    let productDesign = designsInfo.find((design) => {
                        return design.id === product.designID;
                    });
                    if ( productDesign != null ) {
                        product.name = productDesign.name;
                    }else {
                        product.name = "";
                    }
                    return product;
                }
            })
            if (categoryID !== "all") {
                renderProducts = renderProducts.filter(product => product.catID === categoryID)
            }
            this.setState({
                renderProducts,
                initialProducts: renderProducts,
                isPropsChanged: !this.state.isPropsChanged
            });
        }
    }

    _getCategoryName = (categoryID, categoriesInfo) => {
        if (categoryID !== "all") {
            let currentCateforyInfo = categoriesInfo.find(( category ) => {
                return category.id === categoryID;
            })
            if ( currentCateforyInfo != null ) {
                this.setState({
                    categoryName: currentCateforyInfo.name
                })
            }
        }
    }

    _filterHandling = (sizeFiltered) => {
        // let currentProducts = this.state.initialProducts;
        // let renderProducts = [];
        // if (sizeFiltered.length > 0) {
        //     currentProducts.forEach((currentProduct) => {
        //         let productSizes = currentProduct.size;
        //         let isSizeMatch = sizeFiltered.find((size) => {
        //             return productSizes.find((productSize) => {
        //                 return productSize === size;
        //             });
        //         })
        //         if (isSizeMatch != null) {
        //             renderProducts.push(currentProduct);
        //         }
        //     })
        //     this.setState({ 
        //         renderProducts,
        //         isPropsChanged: !this.state.isPropsChanged
        //     });
        // } else {
        //     this.setState({ 
        //         renderProducts: currentProducts,
        //         isPropsChanged: !this.state.isPropsChanged
        //     })
        // }
    }

    _priceSortHandling = (sortType) => {
        let renderProducts = this.state.renderProducts;
        switch (sortType) {
            case "ascending":
                renderProducts.sort((a, b) => {
                    return a.price - b.price;
                })
                break;
            case "descending":
                renderProducts.sort((a, b) => {
                    return b.price - a.price;
                })
                break;
            default:
            // do nothing
        }
        this.setState({
            renderProducts,
            isPropsChanged: !this.state.isPropsChanged
        });
    }

    render() {
        const { renderProducts, categoryName, sortType, isPropsChanged } = this.state;
        return (
            <div id="shopCart">
                <div className="container-fluid">
                    <Breadcrumb categoryName={categoryName} />
                    <div className="row">
                        <FilterTable
                            filterHandling={this._filterHandling}
                            priceSortHandling={this._priceSortHandling}
                            renderProducts={renderProducts}
                            categoriesInfo={this.props.categoriesInfo}
                        />
                        <div className="col-md-9">
                            <ProductList
                                renderProducts={renderProducts}
                                sortType={sortType}
                                isPropsChanged={isPropsChanged}
                                scrollToTop={this.props.scrollToTop}
                                history={this.props.history}
                                localStorageUpdatedHandling={this.props.localStorageUpdatedHandling}
                            />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}