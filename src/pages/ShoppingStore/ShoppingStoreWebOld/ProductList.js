import React, { Component } from 'react'
import ProductItem from './ProductItem';
import InfiniteScroll from "react-infinite-scroll-component";

export default class ProductList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            renderProducts: [],
            fetchedProduct: [],
            hasMore: true,
            isPropsChanged: true,

        }
        // this.childRef = React.createRef();
        this._fetchMoreData = this._fetchMoreData.bind(this);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isPropsChanged !== prevState.isPropsChanged) {
            return {
                renderProducts: nextProps.renderProducts,
                fetchedProduct: nextProps.renderProducts.slice(0, 9),
                hasMore: true,
                isPropsChanged: nextProps.isPropsChanged,
            }
        }

        return null;
    }

    _fetchMoreData = () => {
        const { renderProducts, fetchedProduct } = this.state;
        if (fetchedProduct.length >= renderProducts.length) {
            this.setState({
                hasMore: false,
            });
            return;
        }
        setTimeout(() => {
            let addedProduct = renderProducts.slice(fetchedProduct.length, fetchedProduct.length + 9);
            addedProduct = fetchedProduct.concat(addedProduct)
            this.setState({
                fetchedProduct: addedProduct,
            });
        }, 200);
    };

    render() {
        const { fetchedProduct } = this.state;
        return (
            <div className="row">
                <InfiniteScroll
                    style={{ overflow: "unset" }}
                    className="d-flex flex-wrap"
                    dataLength={fetchedProduct.length - 6}
                    next={this._fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <button
                            onClick={() => this.props.scrollToTop()}
                            type="button"
                            className="btn btn-link"
                            style={{width: "100%", alignItems: "center"}}
                        >
                        Quay về đầu trang
                        </button>
                    }
                >
                    {fetchedProduct.map((product, index) => {
                        return <ProductItem
                            key={index}
                            {...product}
                            product={product}
                            history={this.props.history}
                            localStorageUpdatedHandling={this.props.localStorageUpdatedHandling}
                        />
                    })}
                </InfiniteScroll>
            </div>
        )
    }
}


