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
            // loaderContent: <h4>Loading...</h4>
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isFirstLoaded === false) {
            console.log('nextProps', nextProps)
            nextProps.firstLoadedConfirm();
            let fetchedProducts = nextProps.renderProducts.slice(0, 9);
            let loaderContent = prevState.loaderContent;
            // if (fetchedProducts.length === 0) {
            //     loaderContent = (
            //         <div>
            //             {/* <h4>{`Không tìm thấy sản phẩm!`}</h4> */}
            //             <Link
            //                 to={{
            //                     pathname: "/shopping-store",
            //                     search: "?cat=all&search="
            //                 }}
            //             >
            //                 xem tất cả sản phẩm
            //             </Link>
            //         </div>
            //     );
            // }
            return {
                renderProducts: nextProps.renderProducts,
                fetchedProducts,
                hasMore: true,
                loaderContent
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
                    hasMore: false
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
                    fetchedProducts: addedProduct
                });
            }, 200);
        }
        // } else {
        //     this.setState({
        //         loaderContent: (
        //             <div>
        //                 <h4>{`Không tìm thấy sản phẩm!`}</h4>
        //                 <Link
        //                     to={{
        //                         pathname: "/shopping-store",
        //                         search: "?cat=all&search="
        //                     }}
        //                 >
        //                     xem tất cả sản phẩm
        //                 </Link>
        //             </div>
        //         )
        //     });
        // }
    };

    render() {
        const { fetchedProducts, loaderContent } = this.state;
        const { renderProducts } = this.props;
        return (
            <div className="content_wrapper">
                <div className="headerContent d-flex justify-content-between align-items-center">
                    <div className="titleHeader">
                        <span>
                            Hiển thị kết quả tìm kiếm: <span>{`${renderProducts.length} kết quả`}</span>{" "}
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
                                // <div key={index}>
                                <div
                                    className="contentProduct col-4 d-flex flex-column align-items-center"
                                    key={index}
                                >
                                    <Link
                                        style={{
                                            height: "fit-content",
                                            width: "fit-content",
                                            border: "none",
                                            textDecoration: "none"
                                        }}
                                        to={{
                                            pathname: "/product-detail",
                                            search: `?id=${product.designID}&pattern=${product.fabricID}`
                                        }}
                                    >
                                        <div className="image">
                                            <img
                                                src={product.image[0]}
                                                alt={product.productID}
                                            ></img>
                                        </div>
                                    </Link>
                                    <span>{product.name}</span>
                                    <div className="button">{`${product.totalSupportedFabric} Mẫu Vải`}</div>
                                </div>
                                // </div>
                            );
                        })}
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}
