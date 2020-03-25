import React, { Component } from 'react';
import FabricSelection from './FabricSelection/FabricSelection';
import SizeSelection from './SizeSelection/SizeSelection';
import Confirm from './Confirm/Confirm';
import { connect } from 'react-redux';


class ProductDetailMobile extends Component {
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
        let { totalProductsOnCart, currentSelectedProduct } = this.state;
        let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
        let size = JSON.parse(localStorage.getItem('size')) || null;
        let bodyMetric = JSON.parse(localStorage.getItem('bodyMetric')) || new Array(3).fill("");
        currentSelectedProduct.size = size;
        currentSelectedProduct.bodyMetric = bodyMetric;
        totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
            return accumulator + Number(current.quantity)
        }, 0);
        this.setState({
            totalProductsOnCart,
            currentSelectedProduct
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
        } else {
            return null
        }
    }


    contentHandling = () => {
        const { visibilityProducts, fabricsInfo, designsInfo } = this.props;
        const { selectionStep, currentSelectedProduct, currentFabricInfo, totalProductsOnCart } = this.state;
        let designID = window.location.search.match(/id=(.*)&\b/)[1];
        let fabricID = window.location.search.match(/pattern=(.*)\b/)[1];
        let currentDesignInfo = designsInfo.find((design) => {
            return design.id === designID;
        }) || { description: 'none' }
        let productList = visibilityProducts.filter((product) => {
            return product.designID === designID;
        })
        productList = this.swapProductPosition( productList, fabricID );
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
                    history={this.props.history}
                />
                break;
            case 'size':
                renderComponents = <SizeSelection
                    totalProductsOnCart={totalProductsOnCart}
                    currentDesignInfo={currentDesignInfo}
                    currentSelectedProduct={currentSelectedProduct}
                    onContentChange={(step) => this.onContentChange(step)}
                    onSelectedProductUpdating={(currentSelectedProduct) => this.onSelectedProductUpdating(currentSelectedProduct)}
                    onSizeUpdated={(size) => this.onSizeUpdated(size)}
                    onBodyMetricUpdated={(bodyMetric) => this.onBodyMetricUpdated(bodyMetric)}
                    sizeImages={this.props.sizeImages}
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

    swapProductPosition = ( productList, fabricID) => {
        let currentSelectedProductIndex = productList.findIndex(product => product.fabricID === fabricID);
        if ( currentSelectedProductIndex > 0 ) {
            let temp = {...productList[0]};
            productList[0] = productList[currentSelectedProductIndex];
            productList[currentSelectedProductIndex] = temp;
        }
        return productList;
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

    onSizeUpdated = (size) => {
        let { currentSelectedProduct } = this.state;
        currentSelectedProduct.size = size;
        this.setState({
            currentSelectedProduct
        })
    }

    onBodyMetricUpdated = (bodyMetric) => {
        let { currentSelectedProduct } = this.state;
        currentSelectedProduct.bodyMetric = bodyMetric;
        this.setState({
            currentSelectedProduct
        })
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
                {this.contentHandling()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isNewProductAdded: state.listProductOnCart,
        isCartUpdated: state.updateProductOnCart
    }
}

export default connect(mapStateToProps, null)(ProductDetailMobile);