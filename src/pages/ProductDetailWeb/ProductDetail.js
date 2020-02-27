import React, { Component } from 'react'
import { getRelatedProducts } from '../../services/ProductDetail'
import { getWithCondition } from '../../services/Fundamental';
import { Link } from 'react-router-dom'
import './ProductDetail.css'
import './ProductDetail.scss'
import Quantity from './Quantity';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import CarouselImgProduct from './CarouselImgProduct'
import BodyScale from './BodyScale'
import MultiCarousel from './MultiCarousel'
import RelatedCarousel from './RelatedCarousel'
import { message } from 'antd';
import MobilePopupAdd from './MobilePopupAdd'
import Breadcum from './Breadcum';
import Infomation from './Infomation';

export const ref = React.createRef();
export const SIMILAR_PRODUCT = 'Sản Phẩm Liên Quan'
export const BEST_SELLER = 'Sản Phẩm Nổi Bật'
export const SIZE_LIST = ["XS", "S", "M", "L", "XL", "XXL"]
export const ConditionalLink = ({ children, to, condition, finalSelectedProduct, addToCart }) => (!!condition && to)
    ? <Link
        to={to}
        onClick={() => {
            addToCart(finalSelectedProduct);
        }}
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100%" }}>
        {children}
    </Link>
    : <div
        onClick={() => {
            addToCart(finalSelectedProduct);
        }}
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100%" }}>
        {children}
    </div>;

class ProductDetailWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "",
            productInfo: "",
            designInfo: "",
            fabricInfo: "",
            designID: window.location.search.match(/id=(.*)&\b/)[1],
            fabricID: window.location.search.match(/pattern=(.*)\b/)[1],
            productID: "",
            relatedProducts: [],
            productImage: "",
            finalSelectedProduct: "",
            sizeSelectedIndex: null,
            informationTableStatus: [true, false, false]
        }
    }

    componentDidMount() {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        const { history } = this.props;
        this.onSetStateHandling();
        this.unlisten = history.listen((location) => {
            if (location.pathname.match(/product-detail/)) {
                this.onSetStateHandling();
                ref.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    onSetStateHandling = () => {
        const { visibilityProducts, designsInfo, fabricsInfo } = this.props;
        let { productInfo, designInfo, relatedProducts, fabricInfo, finalSelectedProduct } = this.state;
        let designID = window.location.search.match(/id=(.*)&\b/)[1];
        let fabricID = window.location.search.match(/pattern=(.*)\b/)[1];
        let productID = designID.concat(fabricID);
        productInfo = this.getProductInfo(productID, visibilityProducts);
        designInfo = this.getDesignInfo(designID, designsInfo);
        relatedProducts = this.getRelatedProducts(designID, visibilityProducts);
        fabricInfo = this.getFabricInfo(fabricID, fabricsInfo);
        if (productInfo != null && designInfo != null && relatedProducts != null && fabricInfo != null) {
            this.setState({
                designID,
                fabricID,
                productID,
                productInfo,
                designInfo,
                fabricInfo,
                relatedProducts,
                finalSelectedProduct: { ...productInfo, size: '', quantity: 1 },
                productImage: productInfo.image
            })
        } else if (fabricInfo != null) {
            if (finalSelectedProduct != "") {
                finalSelectedProduct.designID = designID;
                finalSelectedProduct.fabricID = null;
            }
            this.setState({
                finalSelectedProduct,
                productImage: fabricInfo.image
            })
        }
    }

    getProductInfo = (productID, visibilityProducts) => {
        let productInfo = "";
        if (visibilityProducts != null) {
            productInfo = visibilityProducts.find((product) => {
                return product.productID === productID;
            })
        }
        return productInfo;
    }
    getDesignInfo = (designID, designsInfo) => {
        let currentDesignInfo = "";
        if (designsInfo != null) {
            currentDesignInfo = designsInfo.find((design) => {
                return design.id === designID;
            })
        }
        return currentDesignInfo;
    }

    getFabricInfo = (fabricID, fabricsInfo) => {
        let currentFabricInfo = "";
        if (fabricsInfo != null) {
            currentFabricInfo = fabricsInfo.find((fabric) => {
                return fabric.id === fabricID;
            })
        }
        return currentFabricInfo;
    }

    getRelatedProducts = (designID, visibilityProducts) => {
        let relatedProducts = [];
        if (visibilityProducts != null) {
            relatedProducts = visibilityProducts.filter((product) => {
                if (product.designID.split('')[0] === designID.split('')[0] && product.visibility === true && product.designID !== designID) {
                    return product;
                }
            })
        }
        return relatedProducts;
    }

    sizeUpdateHandling = (selectedSize, index) => {
        let { finalSelectedProduct } = this.state;
        if (finalSelectedProduct != null) {
            finalSelectedProduct.size = selectedSize;
            this.setState({
                finalSelectedProduct,
                size: selectedSize,
                sizeSelectedIndex: index,
                informationTableStatus: [false, false, true]
            })
        }
    }

    quantityUpdateHandling = (updatedQuantity) => {
        let finalSelectedProduct = this.state.finalSelectedProduct;
        finalSelectedProduct.quantity = updatedQuantity;
        this.setState({
            finalSelectedProduct
        });
    }

    informationStatusHandling = (tabName) => {
        switch (tabName) {
            case 'designDescription':
                this.setState({
                    informationTableStatus: [true, false, false]
                })
                break;
            case 'fabricDescription':
                this.setState({
                    informationTableStatus: [false, true, false]
                })
                break;
            case 'sizeDescription':
                this.setState({
                    informationTableStatus: [false, false, true]
                })
                break;
            default:
                break;
        }
    }

    addToCart = (selectedProduct) => {
        console.log('selectedProduct :', selectedProduct);
        const { productID, designID, fabricID, catID, discount, price, image, size, quantity } = selectedProduct;
        const { name } = this.state.designInfo;
        let addedProduct = { name, productID, designID, fabricID, catID, discount, price, image, size, quantity };
        let isAvailable = false;
        if (fabricID != null) {
            isAvailable = true;
            if (size === '' || size == null) {
                isAvailable = false;
                message.error('Quý khách vui lòng chọn size!');
            }
        } else {
            message.error('Mẫu đang được phát triển. Vui lòng chọn mẫu khác!');
        }
        if (isAvailable) {
            this.props.onAddProductToCart(addedProduct, quantity);
        }
    }

    render() {
        const {
            size,
            relatedProducts,
            finalSelectedProduct,
            productInfo,
            designInfo,
            fabricInfo,
            designID,
            fabricID,
            productImage,
            sizeSelectedIndex,
            informationTableStatus
        } = this.state;
        let price = 0;
        if (productInfo != null && productInfo !== '') {
            price = productInfo.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        }
        return (
            <div id="detail" >
                <div className="container-fluid" ref={ref}>
                    <Breadcum designName={designInfo.name} />
                    <div className="row d-flex flex-wrap justify-content-between" style={{ margin: 0 }}>
                        <div className="col-md-6 col-sm-12 col-xs-12" id="imgProductSlick">
                            <div className="product-img">
                                <CarouselImgProduct
                                    history={this.props.history}
                                    productInfo={productInfo}
                                    fabricInfo={fabricInfo}
                                    productImage={productImage}
                                />
                                <MultiCarousel
                                    currentFabricID={fabricID}
                                    currentDesignID={designID}
                                    designsInfo={this.props.designsInfo}
                                    fabricsInfo={this.props.fabricsInfo}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12" id="product">
                            <div className="detail-border infor-detail">
                                <h3 itemProp="name">{designInfo.name}</h3>
                                <ul className="list-unstyled" style={{ lineHeight: 2, marginBottom: 0 }}>
                                    <li>Mã thiết kế: {designID}</li>
                                    <li>Mã vải: {fabricID}</li>
                                </ul>
                                <div className=" d-flex justify-content-between ">
                                    <div className="d-flex align-self-center" style={{ paddingTop: "6px" }} >
                                        <h4 className="price">{price}</h4>
                                        <span className="text-blue " style={{ padding: 6 }}> VND </span>
                                    </div>
                                    <Quantity quantityUpdateHandling={this.quantityUpdateHandling} />
                                </div>
                                <div className="detail-size">
                                    <ul className="nav d-flex justify-content-between flex-nowrap" role="tablist">
                                        {SIZE_LIST.map((size, index) => {
                                            const className = sizeSelectedIndex === index ? "nav-link active" : "nav-link";
                                            return (
                                                <li key={index} className="nav-item d-flex justify-content-center align-items-center">
                                                    <a onClick={() => this.sizeUpdateHandling(size, index)} className={className} >
                                                        {size}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <BodyScale />
                                <div className="d-flex flex-nowrap justify-content-center mt-3 mb-3" >
                                    <div className="to-cart-wrapper" >
                                        <button
                                            onClick={() => this.addToCart(finalSelectedProduct)}
                                            type="button"
                                            id="button-cart"
                                            data-loading-text="Đang Xử lý..."
                                            className="btn btn-outline-orange button-cart"
                                            style={{ width: "80%", height: "100%" }}
                                        >
                                            Thêm vào giỏ
                                            </button>
                                    </div>
                                    <div className="to-cart-wrapper" >
                                        <ConditionalLink
                                            to="/shopping-cart"
                                            finalSelectedProduct={finalSelectedProduct}
                                            addToCart={this.addToCart}
                                            condition={size !== ""}
                                            style={{ width: "100%", height: "100%" }}>
                                            <button
                                                type="button"
                                                id="button-cart"
                                                data-loading-text="Đang Xử lý..."
                                                className="btn btn-primary button-cart"
                                                style={{ width: "80%", height: "100%" }}>
                                                Mua ngay
                                            </button>
                                        </ConditionalLink>
                                    </div>
                                </div>
                            </div>
                            <Infomation
                                designInfo={designInfo}
                                fabricInfo={fabricInfo}
                                status={informationTableStatus}
                                informationStatusHandling={this.informationStatusHandling}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <RelatedCarousel relatedProducts={relatedProducts} designsInfo={this.props.designsInfo} title={SIMILAR_PRODUCT} />
                </div>
                <div className="container-fluid">
                    <RelatedCarousel relatedProducts={relatedProducts} designsInfo={this.props.designsInfo} title={BEST_SELLER} />
                </div>
                <MobilePopupAdd />
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductToCart: (product, quantity) => {
            dispatch(actions.addProductToCart(product, quantity))
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductDetailWeb);

