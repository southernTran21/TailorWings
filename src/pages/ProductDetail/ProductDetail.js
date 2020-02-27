import React, { Component } from 'react';
import FabricSelection from './FabricSelection/FabricSelection';
import SizeSelection from './SizeSelection/SizeSelection';
import Confirm from './Confirm/Confirm';
import Media from 'react-media';
import ProductDetailWeb from '../ProductDetailWeb/ProductDetail'
import { connect } from 'react-redux';
import ReactGA from 'react-ga'

const initGA = () => {
    console.log('initGA');
    ReactGA.initialize('UA-159143322-1')
}

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search)
}

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionStep: 'fabric',
            currentSelectedProduct: { size: null, quantity: 1, bodyMetric: new Array(3).fill("") },
            currentFabricInfo: { image: ['', ''], price: 0 },
            isNewProductAdded: false,
            totalProductsOnCart: 0
        }
    }

    componentDidMount() {
        initGA()
        logPageView()
        let { totalProductsOnCart } = this.state;
        let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
        totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
            return accumulator + Number(current.quantity)
        }, 0);
        this.setState({
            totalProductsOnCart
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isNewProductAdded !== prevState.isNewProductAdded) {
            let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart'));
            let totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
                return accumulator + current.quantity
            }, 0);
            return {
                totalProductsOnCart,
                isNewProductAdded: nextProps.isNewProductAdded
            }
        }
    }


    contentHandling = () => {
        const { visibilityProducts, fabricsInfo, designsInfo } = this.props;
        const { selectionStep, currentSelectedProduct, currentFabricInfo, totalProductsOnCart } = this.state;
        let designID = window.location.search.match(/id=(.*)&\b/)[1];
        let currentDesignInfo = designsInfo.find((design) => {
            return design.id === designID;
        }) || { description: 'none' }
        let productList = visibilityProducts.filter((product) => {
            return product.designID === designID;
        })
        let fabricList = [];
        productList.forEach((product) => {
            let fabric = fabricsInfo.find((fabric) => {
                return fabric.id === product.fabricID;
            }) || { image: '' };
            fabricList.push(fabric);
        })
        let renderComponents = '';
        switch (selectionStep) {
            case 'fabric':
                renderComponents = <FabricSelection
                    totalProductsOnCart={totalProductsOnCart}
                    productList={productList}
                    fabricList={fabricList}
                    designsInfo={designsInfo}
                    currentSelectedProduct={currentSelectedProduct}
                    onContentChange={(step) => this.onContentChange(step)}
                    onSelectedProductUpdating={(currentSelectedProduct) => this.onSelectedProductUpdating(currentSelectedProduct)}
                />
                break;
            case 'size':
                renderComponents = <SizeSelection
                    totalProductsOnCart={totalProductsOnCart}
                    currentDesignInfo={currentDesignInfo}
                    currentSelectedProduct={currentSelectedProduct}
                    onContentChange={(step) => this.onContentChange(step)}
                    onSelectedProductUpdating={(currentSelectedProduct) => this.onSelectedProductUpdating(currentSelectedProduct)}
                />
                break;
            case 'confirm':
                renderComponents = <Confirm
                    totalProductsOnCart={totalProductsOnCart}
                    currentDesignInfo={currentDesignInfo}
                    currentFabricInfo={currentFabricInfo}
                    currentSelectedProduct={currentSelectedProduct}
                    onContentChange={(step) => this.onContentChange(step)}
                    onSelectedProductUpdating={(currentSelectedProduct) => this.onSelectedProductUpdating(currentSelectedProduct)}
                />
                break;

            default:
                break;
        }
        return renderComponents;
    }

    onContentChange = (selectionStep) => {
        this.setState({
            selectionStep
        })
    }

    onSelectedProductUpdating = (currentSelectedProduct) => {
        const { fabricsInfo } = this.props;
        let currentFabricInfo = fabricsInfo.find((fabric) => {
            return fabric.id === currentSelectedProduct.fabricID
        }) || { image: ['', ''], price: 0 }
        this.setState({
            currentFabricInfo,
            currentSelectedProduct
        })
    }


    render() {
        return (
            <Media queries={{ small: { maxWidth: 1024 } }}>
                {matches =>
                    matches.small ?
                        (
                            <div style={{ height: '100vh', width: '100vw' }}>
                                {this.contentHandling()}
                            </div>
                        ) :
                        (
                            <ProductDetailWeb
                                history={this.props.history}
                                visibilityProducts={this.props.visibilityProducts}
                                designsInfo={this.props.designsInfo}
                                fabricsInfo={this.props.fabricsInfo}
                                // scrollToTop={this._scrollToTop}
                                localStorageUpdatedHandling={this.props.localStorageUpdatedHandling}
                            />
                        )
                }
            </Media>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        isNewProductAdded: state.listProductOnCart,
        isCartUpdated: state.updateProductOnCart
    }
}

export default connect(mapStateToProps, null)(ProductDetail);