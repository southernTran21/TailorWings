import React, { Component } from "react";
import "./Confirm.scss";

export default class ShowImage extends Component {
    render() {
        const { currentFabricInfo, currentSelectedProduct } = this.props;
        return (
            <div className="imgProduct d-flex justify-content-center align-items-center">
                <div className="row1">
                    <div className="image">
                        <img
                            src={currentSelectedProduct.image[0]}
                        />
                    </div>
                    <div className="image">
                        <img
                            src={currentSelectedProduct.image[1]}
                        />
                    </div>
                </div>
                <div className="row2">
                    <div className="image">
                        <img
                            src={currentSelectedProduct.image[2]}
                        />
                    </div>
                    <div className='image'>
                        <img
                            style={{ objectFit: "cover" }}
                            src={currentFabricInfo.image[1]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
