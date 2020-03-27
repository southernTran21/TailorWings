import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageCategories from "../../.../../../../assets/imageHomePage/collection1.png";
import iconEnter from "../../.../../../../assets/imageHomePage/iconEnter.svg";

export default class Categories extends Component {
    render() {
        return (
            <div className="categories_wrapper d-flex fontMontserrat">
                <div className="col-7">
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=damsuong&search"
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            textDecoration: "none",
                            border: "none"
                        }}
                    >
                        <div className="categoriesfirst d-flex">
                            <div className="image">
                                <img src={imageCategories} alt="" />
                            </div>
                            <div className="title d-flex flex-column">
                                <span>Đầm Suông</span>
                                <span>
                                    Phục vụ với mọi ngữ cảnh như dự tiệc, công
                                    sở và đi chơi…
                                </span>
                                <div className="image d-flex ">
                                    <img src={iconEnter} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-5 d-flex flex-column">
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=damom&search"
                        }}
                        style={{
                            width: "100%",
                            height: "50%",
                            textDecoration: "none",
                            border: "none"
                        }}
                    >
                        <div className="categoriesSecond">
                            <div className="image"></div>
                            <div className="titleFirst d-flex flex-column">
                                <span>Đầm Ôm</span>
                                <span>
                                    Xu hướng đang thịnh ở các cửa hàng bán quần
                                    áo.
                                </span>
                                <img src={iconEnter} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=damxoe&search"
                        }}
                        style={{
                            width: "100%",
                            height: "50%",
                            textDecoration: "none",
                            border: "none"
                        }}
                    >
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
                    </Link>
                    <div className="image"></div>
                </div>
            </div>
        );
    }
}
