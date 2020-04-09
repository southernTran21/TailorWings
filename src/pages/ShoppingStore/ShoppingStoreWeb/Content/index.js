import React, { Component } from "react";
import "./Content.scss";
import { Select } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const { Option } = Select;

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedProducts: [],
            hasMore: true,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isFirstLoaded === false) {
            console.log("nextProps", nextProps);
            nextProps.firstLoadedConfirm();
            let fetchedProducts = nextProps.renderProducts.slice(0, 9);
            let loaderContent = prevState.loaderContent;
            return {
                renderProducts: nextProps.renderProducts,
                fetchedProducts,
                hasMore: true,
                loaderContent,
            };
        } else {
            return null;
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
                let addedProduct = renderProducts.slice(
                    fetchedProducts.length,
                    fetchedProducts.length + 9
                );
                addedProduct = fetchedProducts.concat(addedProduct);
                this.setState({
                    fetchedProducts: addedProduct,
                });
            }, 200);
        }
    };

    render() {
        const { fetchedProducts, loaderContent } = this.state;
        const { renderProducts } = this.props;
        return (
            <div className="content_wrapper">
                <div className="headerContent d-flex justify-content-between align-items-center">
                    <div className="titleHeader">
                        <span>
                            Hiển thị kết quả tìm kiếm:{" "}
                            <span>{`${renderProducts.length} kết quả`}</span>{" "}
                        </span>
                    </div>
                    <div className="selection">
                        {/* <Select
                            placeholder="Thứ tự mặc định"
                            style={{ width: "100%" }}
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select> */}
                    </div>
                </div>
                <div className="productList_wrapper">
                    <InfiniteScroll
                        style={{ overflow: "unset" }}
                        className="d-flex flex-wrap"
                        dataLength={fetchedProducts.length - 7}
                        next={this._fetchMoreData}
                        hasMore={this.state.hasMore}
                        loader={loaderContent}
                    >
                        {fetchedProducts.map((product, index) => {
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
                                            pathname: "/product-detail",
                                            search: `?id=${product.designID}&pattern=${product.fabricID}`,
                                        }}
                                    >
                                        <div className="image">
                                            <img
                                                src={product.image[0]}
                                                alt={product.productID}
                                            ></img>
                                        </div>
                                        <span>{product.name}</span>
                                        <div className="button">{`${product.totalSupportedFabric} MẪU VẢI`}</div>
                                    </Link>
                                </div>
                            );
                        })}
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}
