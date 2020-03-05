import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from 'react-router-dom'

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedProducts: [],
            hasMore: true,
            loaderContent: <h4>Loading...</h4>
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isFirstLoaded === false) {
            nextProps.firstLoadedConfirm();
            let fetchedProducts = nextProps.renderProducts.slice(0, 9);
            let loaderContent = prevState.loaderContent;
            if (fetchedProducts.length === 0) {
                loaderContent = <div>
                    <h4>{`Không tìm thấy sản phẩm!`}</h4>
                    <Link to={{ pathname: '/shopping-store', search: '?cat=all&search=' }} >
                        xem tất cả sản phẩm
                    </Link>
                </div>
            }
            return {
                renderProducts: nextProps.renderProducts,
                fetchedProducts,
                hasMore: true,
                loaderContent
            }
        } else {
            return null
        }
    }

    _fetchMoreData = () => {
        const { renderProducts } = this.props;
        const { fetchedProducts } = this.state;
        if (renderProducts.length > 0) {
            if (fetchedProducts.length >= renderProducts.length) {
                this.setState({
                    hasMore: false,
                });
                return;
            }
            setTimeout(() => {
                let addedProduct = renderProducts.slice(fetchedProducts.length, fetchedProducts.length + 9);
                addedProduct = fetchedProducts.concat(addedProduct)
                this.setState({
                    fetchedProducts: addedProduct,
                });
            }, 200);
        } else {
            this.setState({
                loaderContent: <div>
                    <h4>{`Không tìm thấy sản phẩm!`}</h4>
                    <Link to={{ pathname: '/shopping-store', search: '?cat=all&search=' }} >
                        xem tất cả sản phẩm
                </Link>
                </div>
            })
        }
    };

    render() {
        const { fetchedProducts, loaderContent } = this.state;
        console.log('fetchedProducts :', fetchedProducts);
        return (
            <div className='productList-wraper d-flex flex-wrap'>
                <InfiniteScroll
                    style={{ overflow: "unset" }}
                    className="d-flex flex-wrap"
                    dataLength={fetchedProducts.length - 7}
                    next={this._fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={loaderContent}
                // endMessage={
                //     <button
                //         // onClick={() => this.props.scrollToTop()}
                //         type="button"
                //         className="btn btn-link"
                //         style={{ width: "100%", alignItems: "center" }}
                //     >
                //         Quay về đầu trang
                //     </button>
                // }
                >
                    {fetchedProducts.map((product, index) => {
                        return (
                            <div key={index} className='col-6'>
                                <Link
                                    style={{
                                        height: 'fit-content',
                                        width: 'fit-content',
                                        border: 'none',
                                        textDecoration: 'none',
                                    }}
                                    to={{
                                        pathname: '/product-detail',
                                        search: `?id=${product.designID}&pattern=${product.fabricID}`
                                    }}
                                >
                                    <div className='imageProduct'>
                                        <img src={product.image[0]} alt={product.productID} ></img>
                                    </div>
                                </Link>
                                <div className='titleProduct'>
                                    <span>{product.name}</span>
                                </div>
                                <div className='button d-flex flex-row justify-content-center'>
                                    <span>{`${product.totalSupportedFabric} mẫu vải`}</span>
                                </div>
                            </div>
                        );
                    })}
                </InfiniteScroll>
            </div>
        );
    }
}
