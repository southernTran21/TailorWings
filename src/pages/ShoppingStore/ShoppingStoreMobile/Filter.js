import React, { Component } from "react";
import iconSliderCircle from "../../../assets/iconImage/slider-circle-h.svg";
import { Icon, Badge } from "antd";
import { Link } from "react-router-dom";
class Filter extends Component {
    render() {
        return (
            <div className="filter d-flex flex-row justify-content-between align-items-center">
                <div className="collectionFilter d-flex flex-row justify-content-between align-items-center">
                    {/* <div className="divClone"></div> */}
                    <div
                        className="d-flex flex-row justify-content-start align-items-center"
                    >
                        <div className="titleFilter">Bộ lọc & sắp xếp</div>
                        <div className="iconFilter d-flex justify-content-between align-items-center">
                            <img src={iconSliderCircle} />
                        </div>
                    </div>
                    <Link style={{ color: "white" }} to={"/shopping-cart"}>
                        <div className="iconShoppingCart d-flex justify-content-between align-items-center">
                            <Icon type="shopping-cart" />
                            <Badge count={this.props.totalProductsOnCart}>
                                <a className="head-example" />
                            </Badge>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Filter;
