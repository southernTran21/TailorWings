import React, { Component } from "react";
import "./Confirm.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class ShowImage extends Component {
    render() {
        const { currentFabricInfo, currentSelectedProduct } = this.props;
        return (
            <div className="imgProduct d-flex justify-content-center align-items-center">
                <div className="row1">
                    <div
                        className="image"
                        onClick={() =>
                            this.props.onProductModalStatusChanged(true)
                        }
                    >
                        {/* <img src={currentSelectedProduct.image[0]} /> */}
                        <LazyLoadImage
                            alt={currentSelectedProduct.name}
                            effect="blur"
                            src={currentSelectedProduct.image[0]}
                        />
                    </div>
                    <div
                        className="image"
                        onClick={() =>
                            this.props.onProductModalStatusChanged(true)
                        }
                    >
                        {/* <img src={currentSelectedProduct.image[1]} /> */}
                        <LazyLoadImage
                            alt={currentSelectedProduct.name}
                            effect="blur"
                            src={currentSelectedProduct.image[1]}
                        />
                    </div>
                </div>
                <div className="row2">
                    <div
                        className="image"
                        onClick={() =>
                            this.props.onProductModalStatusChanged(true)
                        }
                    >
                        {/* <img src={currentSelectedProduct.image[2]} /> */}
                        <LazyLoadImage
                            alt={currentSelectedProduct.name}
                            effect="blur"
                            src={currentSelectedProduct.image[2]}
                        />
                    </div>
                    <div
                        className="image"
                        onClick={() =>
                            this.props.onProductModalStatusChanged(true)
                        }
                    >
                        {/* <img
                            style={{ objectFit: "cover" }}
                            src={currentFabricInfo.image[1]}
                        /> */}
                        <LazyLoadImage
                            alt={currentFabricInfo.name}
                            effect="blur"
                            src={currentFabricInfo.image[1]}
                            style={{objectFit: "cover"}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
