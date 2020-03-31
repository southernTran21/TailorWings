import React, { Component } from "react";
import { Icon } from "antd";
import "./FabricSelection.scss";
import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import FabricList from "./FabricList";
import Price from "./Price";

export default class FabricSelectionWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aciveFabricIndex: 0
        };
    }

    onFabricChanged = (aciveFabricIndex, activeFabricID) => {
        this.props.onSelectedFabricUpdating(activeFabricID);
        this.setState({
            aciveFabricIndex
        });
    };

    render() {
        const { fabricList, currentSelectedProduct } = this.props;
        const { aciveFabricIndex } = this.state;
        return (
            <div className="pageFabricSelection d-flex align-items-center">
                <Link
                    style={{
                        height: "fit-content",
                        width: "fit-content",
                        border: "none",
                        textDecoration: "none"
                    }}
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=all&search="
                    }}
                >
                    <div className="iconBack d-flex flex-column">
                        <Icon type="arrow-left" />
                        <span>CHỌN MẪU</span>
                    </div>
                </Link>
                <ProductImage
                    images={currentSelectedProduct.image}
                    productName={currentSelectedProduct.name}
                    onImageView={this.props.onImageView}
                />
                <div className="d-flex flex-column">
                    <FabricList
                        fabricList={fabricList}
                        aciveFabricIndex={aciveFabricIndex}
                        onFabricChanged={this.onFabricChanged}
                    />
                    <Price
                        productName={currentSelectedProduct.name}
                        productPrice={currentSelectedProduct.price}
                        onselectionStepChange={this.props.onselectionStepChange}
                    />
                </div>
            </div>
        );
    }
}
