import React, { Component } from "react";
import "./Confirm.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

export default class ShowImage extends Component {
    render() {
        const { currentFabricInfo, currentSelectedProduct } = this.props;
        return (
            <div className="imgProduct d-flex justify-content-center align-items-center">
                <div className="row1">
                    <div
                        className="image"
                    >
                        <Link
                            className="link"
                            to={{
                                pathname: "/product-detail/image-view",
                            }}
                        >
                            <LazyLoadImage
                                alt={currentSelectedProduct.name}
                                effect="blur"
                                src={currentSelectedProduct.image[0]}
                            />
                        </Link>
                    </div>
                    <div
                        className="image"
                    >
                        <Link
                            className="link"
                            to={{
                                pathname: "/product-detail/image-view",
                            }}
                        >
                            <LazyLoadImage
                                alt={currentSelectedProduct.name}
                                effect="blur"
                                src={currentSelectedProduct.image[1]}
                            />
                        </Link>
                    </div>
                </div>
                <div className="row2">
                    <div
                        className="image"
                    >
                        <Link
                            className="link"
                            to={{
                                pathname: "/product-detail/image-view",
                            }}
                        >
                            <LazyLoadImage
                                alt={currentSelectedProduct.name}
                                effect="blur"
                                src={currentSelectedProduct.image[2]}
                            />
                        </Link>
                    </div>
                    <div
                        className="image"
                    >
                        <Link
                            className="link"
                            to={{
                                pathname: "/product-detail/image-view",
                            }}
                        >
                            <LazyLoadImage
                                alt={currentFabricInfo.name}
                                effect="blur"
                                src={currentFabricInfo.image[1]}
                                style={{ objectFit: "cover" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
