import { Select, Button } from "antd";
import React, { Component, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import {
    removePunctuation,
    getCurrentDate,
} from "../../../../services/CommonFunction";
import "./Content.scss";
import { trackingIncrement } from "services/Fundamental";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import shoppingStoreReducer from "reducers/ShoppingStore";

ProductList.propTypes = {
    renderProducts: PropTypes.array,
    getMoreProducts: PropTypes.func,
};

ProductList.defaultProps = {
    renderProducts: null,
    getMoreProducts: null,
};

function ProductList(props) {
    const { renderProducts, getMoreProducts } = props;
    const isFull = useSelector((state) => state.shoppingStoreReducer.isFull);

    if (!renderProducts || !getMoreProducts) return <Fragment></Fragment>;

    /*********************************
     *  Description: to update tracking counter
     *
     *
     *  Call by:
     */
    function handleTracking(product) {
        let date = getCurrentDate();
        if (!product) return;
        trackingIncrement("tracking", date, "products", product.id);
        trackingIncrement("tracking", date, "categories", product.catID);
        trackingIncrement("tracking", date, "fabrics", product.fabricID);
        trackingIncrement("tracking", date, "designs", product.designID);
    }
    /************_END_****************/
    console.log('renderProducts :>> ', renderProducts);
    return (
        <div className="content_wrapper">
            <div className="headerContent d-flex justify-content-between align-items-center">
                <div className="titleHeader">
                    <span>
                        Hiển thị kết quả tìm kiếm:{" "}
                        <span>{`${renderProducts.length} kết quả`}</span>{" "}
                    </span>
                </div>
            </div>
            <div className="productList_wrapper">
                {renderProducts.map((product, index) => {
                    let modifiedName = "";
                    if (product.name) {
                        modifiedName = product.name.toLowerCase();
                        modifiedName = removePunctuation(modifiedName);
                        modifiedName = modifiedName.replace(/ /gi, "-");
                    }
                    return (
                        <div
                            className="contentProduct col-4 d-flex flex-column align-items-center"
                            key={index}
                        >
                            <Link
                                className="d-flex flex-column align-items-center"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    border: "none",
                                    textDecoration: "none",
                                }}
                                to={{
                                    pathname: `/product-detail/fabric-selection/${modifiedName}`,
                                    search: `?design=${product.designID}&fabric=${product.fabricID}`,
                                }}
                                onClick={() => handleTracking(product)}
                            >
                                <div className="image">
                                    <LazyLoadImage
                                        alt={product.productID}
                                        effect="blur"
                                        src={product.image[0]}
                                    />
                                </div>
                                <span className="productName">
                                    {product.name}
                                </span>
                                <div className="button">{`${
                                    product.totalSupportedFabric || 0
                                } MẪU VẢI`}</div>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="get-more">
                <Button type="link" disabled={isFull} onClick={getMoreProducts}>
                    {isFull ? "_Hết_" : "Xem thêm"}
                </Button>
            </div>
        </div>
    );
}

export default ProductList;

// export default class ProductList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fetchedProducts: [],
//             hasMore: true,
//         };
//     }

//     static getDerivedStateFromProps(nextProps, prevState) {
//         if (nextProps.isFirstLoaded === false) {
//             nextProps.firstLoadedConfirm();
//             let fetchedProducts = nextProps.renderProducts.slice(0, 9);
//             let loaderContent = prevState.loaderContent;
//             return {
//                 renderProducts: nextProps.renderProducts,
//                 fetchedProducts,
//                 hasMore: true,
//                 loaderContent,
//             };
//         } else {
//             return null;
//         }
//     }

//     _fetchMoreData = () => {
//         const { renderProducts } = this.props;
//         const { fetchedProducts } = this.state;
//         if (renderProducts.length > 0) {
//             if (fetchedProducts.length >= renderProducts.length) {
//                 this.setState({
//                     hasMore: false,
//                 });
//                 return;
//             }
//             setTimeout(() => {
//                 let addedProduct = renderProducts.slice(
//                     fetchedProducts.length,
//                     fetchedProducts.length + 9
//                 );
//                 addedProduct = fetchedProducts.concat(addedProduct);
//                 this.setState({
//                     fetchedProducts: addedProduct,
//                 });
//             }, 200);
//         }
//     };

//     /*********************************
//      *  Description: to update tracking counter
//      *
//      *
//      *  Call by:
//      */
//     handleTracking = (product) => {
//         let date = getCurrentDate();
//         if (!product) return;
//         trackingIncrement("tracking", date, "products", product.id);
//         trackingIncrement("tracking", date, "categories", product.catID);
//         trackingIncrement("tracking", date, "fabrics", product.fabricID);
//         trackingIncrement("tracking", date, "designs", product.designID);
//     };
//     /************_END_****************/

//     render() {
//         const { fetchedProducts, loaderContent } = this.state;
//         const { renderProducts } = this.props;
//         return (
//             <div className="content_wrapper">
//                 <div className="headerContent d-flex justify-content-between align-items-center">
//                     <div className="titleHeader">
//                         <span>
//                             Hiển thị kết quả tìm kiếm:{" "}
//                             <span>{`${renderProducts.length} kết quả`}</span>{" "}
//                         </span>
//                     </div>
//                     <div className="selection">
//                         {/* <Select
//                             placeholder="Thứ tự mặc định"
//                             style={{ width: "100%" }}
//                         >
//                             <Option value="1">1</Option>
//                             <Option value="2">2</Option>
//                             <Option value="3">3</Option>
//                         </Select> */}
//                     </div>
//                 </div>
//                 <div className="productList_wrapper">
//                     <InfiniteScroll
//                         style={{ overflow: "unset" }}
//                         className="d-flex flex-wrap"
//                         dataLength={fetchedProducts.length - 7}
//                         next={this._fetchMoreData}
//                         hasMore={this.state.hasMore}
//                         loader={loaderContent}
//                     >
//                         {fetchedProducts.map((product, index) => {
//                             let modifiedName = product.name.toLowerCase();
//                             modifiedName = removePunctuation(modifiedName);
//                             modifiedName = modifiedName.replace(/ /gi, "-");
//                             return (
//                                 <div
//                                     className="contentProduct col-4 d-flex flex-column align-items-center"
//                                     key={index}
//                                 >
//                                     <Link
//                                         className="d-flex flex-column align-items-center"
//                                         style={{
//                                             height: "100%",
//                                             width: "100%",
//                                             border: "none",
//                                             textDecoration: "none",
//                                         }}
//                                         to={{
//                                             pathname: `/product-detail/fabric-selection/${modifiedName}`,
//                                             search: `?design=${product.designID}&fabric=${product.fabricID}`,
//                                         }}
//                                         onClick={() =>
//                                             this.handleTracking(product)
//                                         }
//                                     >
//                                         <div className="image">
//                                             <LazyLoadImage
//                                                 alt={product.productID}
//                                                 effect="blur"
//                                                 src={product.image[0]}
//                                             />
//                                         </div>
//                                         <span className="productName">
//                                             {product.name}
//                                         </span>
//                                         <div className="button">{`${product.totalSupportedFabric} MẪU VẢI`}</div>
//                                     </Link>
//                                 </div>
//                             );
//                         })}
//                     </InfiniteScroll>
//                 </div>
//             </div>
//         );
//     }
// }
