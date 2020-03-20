import React, { Component } from "react";

import imageCategories from "../../.../../../../assets/imageHomePage/collection1.png";
import iconEnter from "../../.../../../../assets/imageHomePage/iconEnter.svg";

export default class Categories extends Component {
    render() {
        return (
            <div className="categories_wrapper d-flex fontMontserrat">
                <div className="col-7">
                    <div className="categoriesfirst d-flex">
                        <div className="image">
                            <img src={imageCategories} alt="" />
                        </div>
                        <div className="title d-flex flex-column">
                            <span>Đầm Suông</span>
                            <span>
                                Phục vụ với mọi ngữ cảnh như dự tiệc, công sở và
                                đi chơi…
                            </span>
                            <div className="image d-flex ">
                                <img src={iconEnter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5 d-flex flex-column">
                    <div className="categoriesSecond">
                        <div className="image"></div>
                        <div className="titleFirst d-flex flex-column">
                            <span>Đầm Ôm</span>
                            <span>
                                Xu hướng đang thịnh ở các cửa hàng bán quần áo.
                            </span>
                            <img src={iconEnter} alt="" />
                        </div>
                    </div>
                    <div className="categoriesSecond">
                        <span className="titleSecond d-flex flex-column">
                            <span>Đầm Xòe</span>
                            <span>
                                Được sử dụng rộng rãi & ứng dụng nhiều trong
                                cuộc sống.
                            </span>
                            <img src={iconEnter} alt="" />
                        </span>
                    </div>
                    <div className="image"></div>
                </div>
            </div>
        );
    }
}
