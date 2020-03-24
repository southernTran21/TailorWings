import React, { Component } from "react";
import { Icon } from "antd";
import "./FabricSelection.scss";
import ProductImage from "./ProductImage";
import FabricList from "./FabricList";
import Price from "./Price";

export default class FabricSelectionWeb extends Component {
    render() {
        return (
            <div className="pageFabricSelection d-flex align-items-center">
                <div className="iconBack d-flex flex-column">
                    <Icon type="arrow-left" />
                    <span>CHỌN MẪU</span>
                </div>
                <ProductImage />
                <div className='d-flex flex-column'>
                    <FabricList />
                    <Price />
                </div>
            </div>
        );
    }
}
