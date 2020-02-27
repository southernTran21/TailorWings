import React, { Component } from 'react';
import './FabricSelection.scss';
import FabricSwiper from './FabricSwiper';
import ProductSwiper from './ProductSwiper';
import { Link } from 'react-router-dom'
import { Icon, Badge } from 'antd';
import ProductModal from './ProductModal';

class FabricSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSelectedState: [true, false, false, false, false],
            productSliderIndex: 0,
            swiper: null,
            renderProducts: [
                { image: [''], price: 0 },
                { image: [''], price: 0 },
                { image: [''], price: 0 },
                { image: [''], price: 0 },
                { image: [''], price: 0 }
            ],
            currentProductIndex: 0,
            isSwiperTouch: false,
            currentDesign: { name: '' },
            price: 0,
            isProductModalShow: false
        }
    }

    componentDidMount() {
        let { productList, designsInfo } = this.props;
        let { productSelectedState } = this.state;
        let designID = window.location.search.match(/id=(.*)&\b/)[1];
        if (productList.length < productSelectedState.length) {
            productList = productList.concat(productList);
            productList = productList.concat(productList);
            productList = productList.concat(productList);
        }
        let renderProducts = [];
        for (let i = 0; i < this.state.productSelectedState.length; i++) {
            renderProducts[i] = productList[i] || { image: [''], price: 0 };
        }
        let currentDesign = designsInfo.find((design) => {
            return design.id === designID
        }) || { name: '' }
        this.setState({
            renderProducts,
            currentDesign,
            price: renderProducts[0].price
        })
    }

    onProductImageSwiped(direction) {
        let { productList } = this.props;
        let { productSelectedState, productSliderIndex, swiper, renderProducts } = this.state;
        productSelectedState[productSliderIndex] = false;
        let indexOfNextProduct = 0;
        if (productList.length < productSelectedState.length) {
            productList = productList.concat(productList);
            productList = productList.concat(productList);
        }
        if (direction > 0) {
            if (productSliderIndex === (productSelectedState.length - 1)) {
                if (renderProducts[productSelectedState.length - 1] === (productList[productList.length - 1])) {
                    renderProducts[0] = productList[0];
                } else {
                    let indexOfCurrentProduct = productList.indexOf(renderProducts[productSelectedState.length - 1])
                    renderProducts[0] = productList[indexOfCurrentProduct + 1];
                }
                productSliderIndex = 0;
            } else {
                if (renderProducts[productSliderIndex] === (productList[productList.length - 1])) {
                    renderProducts[productSliderIndex + 1] = productList[0];
                } else {
                    let indexOfCurrentProduct = productList.indexOf(renderProducts[productSliderIndex])
                    renderProducts[productSliderIndex + 1] = productList[indexOfCurrentProduct + 1];
                }
                productSliderIndex = productSliderIndex + 1;
            }
            indexOfNextProduct = productList.indexOf(renderProducts[productSliderIndex]);
            swiper.slideTo(indexOfNextProduct);
        } else {
            if (productSliderIndex === 0) {
                if (renderProducts[0] === productList[0]) {
                    renderProducts[productSelectedState.length - 1] = productList[productList.length - 1];
                } else {
                    let indexOfCurrentProduct = productList.indexOf(renderProducts[0])
                    renderProducts[productSelectedState.length - 1] = productList[indexOfCurrentProduct - 1];
                }
                productSliderIndex = productSelectedState.length - 1;
            } else {
                if (renderProducts[productSliderIndex] === productList[0]) {
                    renderProducts[productSliderIndex - 1] = productList[productList.length - 1];
                } else {
                    let indexOfCurrentProduct = productList.indexOf(renderProducts[productSliderIndex])
                    renderProducts[productSliderIndex - 1] = productList[indexOfCurrentProduct - 1];
                }
                productSliderIndex = productSliderIndex - 1;
            }
            indexOfNextProduct = productList.indexOf(renderProducts[productSliderIndex]);
            swiper.slideTo(indexOfNextProduct);
        }
        productSelectedState[productSliderIndex] = true;
        this.setState({
            currentProductIndex: indexOfNextProduct,
            productSliderIndex,
            productSelectedState,
            renderProducts,
            isSwiperTouch: false,
            price: renderProducts[productSliderIndex].price
        })
    }

    selectHandling = (e) => {
        const { productList } = this.props;
        let { productSelectedState, productSliderIndex, swiper, renderProducts } = this.state;
        let selectedProductIndex = 0;
        let productListDouble = [];
        if (productList.length < productSelectedState.length) {
            productListDouble = productList.concat(productList);
            productListDouble = productListDouble.concat(productList)
        } else {
            productListDouble = productList.concat(productList);
        }
        switch (e.target.id) {
            case 'slide1':
                selectedProductIndex = productList.indexOf(renderProducts[0]);
                renderProducts[0] = productListDouble[selectedProductIndex];
                renderProducts[1] = productListDouble[selectedProductIndex + 1];
                renderProducts[2] = productListDouble[selectedProductIndex + 2];
                renderProducts[3] = productListDouble[selectedProductIndex + 3];
                renderProducts[4] = productListDouble[selectedProductIndex + 4];
                productSelectedState[productSliderIndex] = !productSelectedState[productSliderIndex];
                productSelectedState[0] = true;
                this.setState({
                    currentProductIndex: selectedProductIndex,
                    renderProducts,
                    productSelectedState,
                    productSliderIndex: 0,
                    isSwiperTouch: false,
                    price: renderProducts[selectedProductIndex]
                })
                swiper.slideTo(selectedProductIndex);
                break;
            case 'slide2':
                selectedProductIndex = productList.indexOf(renderProducts[1]);
                renderProducts[0] = productListDouble[selectedProductIndex + 4];
                renderProducts[1] = productListDouble[selectedProductIndex];
                renderProducts[2] = productListDouble[selectedProductIndex + 1];
                renderProducts[3] = productListDouble[selectedProductIndex + 2];
                renderProducts[4] = productListDouble[selectedProductIndex + 3];
                productSelectedState[productSliderIndex] = !productSelectedState[productSliderIndex];
                productSelectedState[1] = true;
                this.setState({
                    currentProductIndex: selectedProductIndex,
                    renderProducts,
                    productSelectedState,
                    productSliderIndex: 1,
                    isSwiperTouch: false,
                    price: renderProducts[selectedProductIndex]
                })
                swiper.slideTo(selectedProductIndex);
                break;
            case 'slide3':
                selectedProductIndex = productList.indexOf(renderProducts[2]);
                renderProducts[0] = productListDouble[selectedProductIndex + 3];
                renderProducts[1] = productListDouble[selectedProductIndex + 4];
                renderProducts[2] = productListDouble[selectedProductIndex];
                renderProducts[3] = productListDouble[selectedProductIndex + 1];
                renderProducts[4] = productListDouble[selectedProductIndex + 2];
                productSelectedState[productSliderIndex] = !productSelectedState[productSliderIndex];
                productSelectedState[2] = true;
                this.setState({
                    currentProductIndex: selectedProductIndex,
                    renderProducts,
                    productSelectedState,
                    productSliderIndex: 2,
                    isSwiperTouch: false,
                    price: renderProducts[selectedProductIndex]
                })
                swiper.slideTo(selectedProductIndex);
                break;
            case 'slide4':
                selectedProductIndex = productList.indexOf(renderProducts[3]);
                renderProducts[0] = productListDouble[selectedProductIndex + 2];
                renderProducts[1] = productListDouble[selectedProductIndex + 3];
                renderProducts[2] = productListDouble[selectedProductIndex + 4];
                renderProducts[3] = productListDouble[selectedProductIndex];
                renderProducts[4] = productListDouble[selectedProductIndex + 1];
                productSelectedState[productSliderIndex] = !productSelectedState[productSliderIndex];
                productSelectedState[3] = true;
                this.setState({
                    currentProductIndex: selectedProductIndex,
                    renderProducts,
                    productSelectedState,
                    productSliderIndex: 3,
                    isSwiperTouch: false,
                    price: renderProducts[selectedProductIndex]
                })
                swiper.slideTo(selectedProductIndex);
                break;
            case 'slide5':
                selectedProductIndex = productList.indexOf(renderProducts[4]);
                renderProducts[0] = productListDouble[selectedProductIndex + 1];
                renderProducts[1] = productListDouble[selectedProductIndex + 2];
                renderProducts[2] = productListDouble[selectedProductIndex + 3];
                renderProducts[3] = productListDouble[selectedProductIndex + 4];
                renderProducts[4] = productListDouble[selectedProductIndex];
                productSelectedState[productSliderIndex] = !productSelectedState[productSliderIndex];
                productSelectedState[4] = true;
                this.setState({
                    currentProductIndex: selectedProductIndex,
                    renderProducts,
                    productSelectedState,
                    productSliderIndex: 4,
                    isSwiperTouch: false,
                    price: renderProducts[selectedProductIndex]
                })
                swiper.slideTo(selectedProductIndex);
                break;
            default:
                break;
        }
    }

    getSwiper = (swiper) => {
        this.setState({
            swiper
        })
    }

    onSwiperTouchStart = () => {
        this.setState({
            isSwiperTouch: true
        })
    }


    onSwiperTouchEnd = () => {
        // this.setState({
        //     currentProductIndex: this.state.swiper.activeIndex
        // })
    }

    onSwiperSlideChange = () => {
        const { productList } = this.props;
        let { swiper, renderProducts, productSelectedState, isSwiperTouch } = this.state;
        if (isSwiperTouch) {
            let productListDouble = productList.concat(productList);
            for (let i = 0; i < productSelectedState.length; i++) {
                renderProducts[i] = productListDouble[swiper.activeIndex + i];
                productSelectedState[i] = false;
            }
            productSelectedState[0] = true;
            swiper.slideTo(swiper.activeIndex);
            this.setState({
                productSelectedState,
                renderProducts,
                productSliderIndex: 0,
                price: renderProducts[0].price
            })
        }
    }

    onSwiperClicked = () => {
        this.setState({
            currentProductIndex: this.state.swiper.clickedIndex
        })
    }

    onFinishButtonClicked = () => {
        const { productSliderIndex, renderProducts } = this.state;
        let { currentSelectedProduct } = this.props;
        let currentBodyMetric = currentSelectedProduct.bodyMetric;
        let currentSize = currentSelectedProduct.size;
        let currentQuantity = currentSelectedProduct.quantity;
        currentSelectedProduct = { ...renderProducts[productSliderIndex] };
        currentSelectedProduct.bodyMetric = currentBodyMetric;
        currentSelectedProduct.size = currentSize;
        currentSelectedProduct.quantity = currentQuantity;
        this.props.onSelectedProductUpdating(currentSelectedProduct);
        this.props.onContentChange('size');
    }

    onProductModalStatusChanged = (isShow) => {
        this.setState({
            isProductModalShow: isShow
        })
    }

    render() {
        const { productList, fabricList, totalProductsOnCart } = this.props;
        const {
            productSelectedState,
            renderProducts,
            currentProductIndex,
            currentDesign,
            price,
            productSliderIndex,
            isProductModalShow
        } = this.state;
        let priceModified = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + " " + "VNĐ";
        return (
            <div className='pageFabricSelection' >
                <div className='navbarHeader d-flex flex-row align-items-center justify-content-between'>
                    <div className='hamburgerMenu'>
                        <i className='fas fa-bars'></i>
                    </div>
                    <div className='titleHeader'>Chọn Vải</div>
                    <Link
                        style={{ color: 'white' }}
                        to={'/shopping-cart'}
                    >
                        <div className='iconShoppingCart'>
                            <Icon type='shopping-cart' />
                            <Badge count={totalProductsOnCart}>
                                <a className='head-example' />
                            </Badge>
                        </div>
                    </Link>
                </div>
                <div className='contentBody'>
                    <div className='header__contentBody'>
                        <div className='title'>
                            <span>{(currentProductIndex + 1) + '/' + (productList.length)}</span>
                        </div>
                        <FabricSwiper
                            fabricList={fabricList}
                            productSelectedState={productSelectedState}
                            getSwiper={this.getSwiper}
                            onSwiperTouchStart={this.onSwiperTouchStart}
                            onSwiperSlideChange={this.onSwiperSlideChange}
                        />
                    </div>
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                        <ProductSwiper
                            productSliderIndex={productSliderIndex}
                            renderProducts={renderProducts}
                            productSelectedState={productSelectedState}
                            onProductImageSwiped={(direction) => this.onProductImageSwiped(direction)}
                            selectHandling={(e) => this.onProductImageSwiped(e)}
                            onProductModalStatusChanged={(isShow) => this.onProductModalStatusChanged(isShow)}
                        />
                    </div>
                    <div className='end__contentBody'>
                        <div className='title d-flex flex-row align-items-center justify-content-between'>
                            <span>{currentDesign.name}</span>
                            <span>{priceModified}</span>
                        </div>
                        <div
                            className='button d-flex flex-row align-items-center justify-content-center'
                            onClick={this.onFinishButtonClicked}
                        >
                            <span>Chọn số đo</span>
                        </div>
                    </div>
                </div>
                <ProductModal
                    renderProducts={renderProducts}
                    productSliderIndex={productSliderIndex}
                    isProductModalShow={isProductModalShow}
                    onProductModalStatusChanged={(isShow) => this.onProductModalStatusChanged(isShow)}
                />
            </div>
        );
    }
}

export default FabricSelection;
