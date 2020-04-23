import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedProducts: [],
            hasMore: true,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            nextProps.isFirstLoaded === false &&
            nextProps.renderProducts.length > 0
        ) {
            let fetchedProducts = nextProps.renderProducts.slice(0, 9);
            nextProps.firstLoadedConfirm();
            return {
                renderProducts: nextProps.renderProducts,
                fetchedProducts,
                hasMore: true,
            };
        } else {
            return null;
        }
    }

    _fetchMoreData = () => {
        const { renderProducts } = this.props;
        const { fetchedProducts } = this.state;
        console.log("fetched more");
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
        const { renderProducts, categories, checkedList } = this.props;
        const { fetchedProducts } = this.state;
        return (
            <div className="tableProduct">
                <div className="headerTable d-flex">
                    <div className="column1"></div>
                    <div className="column2">Name</div>
                    <div className="column3 text-center">Design ID</div>
                    <div className="column4 text-center">Fabrics ID</div>
                    <div className="column5 text-center">Price</div>
                    <div className="column6 text-center">Visibility</div>
                    <div
                        className="column7 d-flex justify-content-center"
                        style={{ height: "100%" }}
                    >
                        {this.props.onCheckBoxVisibile("", "tableHeader", "")}
                    </div>
                </div>
                <div id='productItems'>
                    <InfiniteScroll
                        style={{ overflow: 'unset' }}
                        dataLength={fetchedProducts.length - 7}
                        next={this._fetchMoreData}
                        hasMore={this.state.hasMore}
                        scrollableTarget="productItems"
                    >
                        {fetchedProducts.map((product, index) => {
                            if (product != null) {
                                let relatedCategory = categories.find(
                                    (category) => category.id === product.catID
                                ) || { discount: 0 };
                                let discountPrice = this.props.priceCalculationHandling(
                                    product.price,
                                    product.discount,
                                    relatedCategory.discount
                                );
                                let modifiedPrice = discountPrice
                                    .toString()
                                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                                let checkedStatus =
                                    checkedList[product.productID];
                                return (
                                    // <LazyLoad
                                    //     key={index}
                                    //     height={108.5}
                                    //     offset={0}
                                    //     throttle={250}
                                    // offsetVertical={300}
                                    // >
                                    <div
                                        key={index}
                                        className="contentTable d-flex flex-row align-items-center"
                                    >
                                        <div className="column1 d-flex justify-content-center">
                                            <div className="imgProduct">
                                                <Link
                                                    to={{
                                                        pathname:
                                                            "/admin/product-edit",
                                                        search: `?id=${product.productID}`,
                                                    }}
                                                >
                                                    <LazyLoad
                                                        key={index}
                                                        height={87.5}
                                                        offset={0}
                                                        throttle={250}
                                                        onContentVisible={() =>
                                                            console.info(
                                                                "loaded"
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            src={
                                                                product.image[0]
                                                            }
                                                            alt={
                                                                product.productID
                                                            }
                                                            style={{
                                                                width: "100%",
                                                                height: "auto",
                                                            }}
                                                        />
                                                    </LazyLoad>
                                                </Link>
                                            </div>
                                        </div>
                                        <div
                                            id="product-name"
                                            className="column2"
                                        >
                                            <Link
                                                to={{
                                                    pathname:
                                                        "/admin/product-edit",
                                                    search: `?id=${product.productID}`,
                                                }}
                                            >
                                                <p>{product.name}</p>
                                            </Link>
                                        </div>
                                        <div
                                            id="product-design-id"
                                            className="column3"
                                        >
                                            <Link
                                                to={{
                                                    pathname:
                                                        "/admin/design-edit",
                                                    search: `?id=${product.designID}`,
                                                }}
                                            >
                                                <p className="text-center">
                                                    {product.designID}
                                                </p>
                                            </Link>
                                        </div>
                                        <div
                                            id="product-fabric-id"
                                            className="column4"
                                        >
                                            <Link
                                                to={{
                                                    pathname:
                                                        "/admin/fabric-edit",
                                                    search: `?id=${product.fabricID}`,
                                                }}
                                            >
                                                <p className="text-center">
                                                    {product.fabricID}
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="column5 text-center">
                                            <p className="text-center">
                                                {modifiedPrice}
                                            </p>
                                        </div>
                                        <div className="column6 text-center">
                                            <a
                                                className={
                                                    product.visibility
                                                        ? "far fa-eye"
                                                        : "far fa-eye-slash"
                                                }
                                                onClick={() =>
                                                    this.props.onSpecificVisibilityChange(
                                                        index
                                                    )
                                                }
                                            />
                                        </div>
                                        <div
                                            className="column7 d-flex justify-content-center"
                                            style={{ height: "100%" }}
                                        >
                                            {this.props.onCheckBoxVisibile(
                                                index,
                                                product.id,
                                                checkedStatus
                                            )}
                                        </div>
                                    </div>
                                    // </LazyLoad>
                                );
                            }
                        })}
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}
