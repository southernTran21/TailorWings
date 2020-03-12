import React, { Component } from "react";
import iconSliderCircle from "../../../assets/iconImage/slider-circle-h.svg";
import cellFull from "../../../assets/iconImage/cell-full.svg";
import { Icon } from "antd";
class Filter extends Component {
    render() {
        return (
            <div className="filter d-flex flex-row justify-content-between align-items-center">
                <div className="collectionFilter d-flex flex-row justify-content-between">
                    <div className="divClone"></div>
                    <div className="titleFilter">Bộ lọc & sắp xếp</div>
                    <div className="iconFilter">
                        <img src={iconSliderCircle} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;
