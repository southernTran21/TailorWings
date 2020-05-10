import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductImage extends Component {
    render() {
        const { images, productName, productID } = this.props;
        let url = `/product-detail/image-view/${productID}`;
        return (
            <div className="productImage d-flex">
                <div className="left">
                    <div className="top">
                        <Link
                            className="link"
                            to={{
                                pathname: url,
                            }}
                        >
                            <div className="image">
                                <img src={images[2]} alt={productName} />
                            </div>
                        </Link>
                    </div>
                    <div className="bottom">
                        <Link
                            className="link"
                            to={{
                                pathname: url,
                            }}
                        >
                            <div className="image">
                                <img src={images[1]} alt={productName} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <Link
                        className="link"
                        to={{
                            pathname: url,
                        }}
                    >
                        <div className="image">
                            <img src={images[0]} alt={productName} />
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}
