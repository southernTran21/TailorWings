import React, { Component } from "react";

export default class ProductImage extends Component {
    render() {
        const { images, productName } = this.props;
        console.log('images', images)
        return (
            <div className="productImage d-flex">
                <div className="left">
                    <div className="top">
                        <div className="image" onClick={() => this.props.onImageView(true)}>
                            <img src={images[2]} alt={productName} />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="image" onClick={() => this.props.onImageView(true)}>
                            <img src={images[1]} alt={productName} />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="image" onClick={() => this.props.onImageView(true)}>
                        <img src={images[0]} alt={productName} />
                    </div>
                </div>
            </div>
        );
    }
}
