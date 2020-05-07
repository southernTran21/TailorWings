import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import Categorie3 from "../../../../assets/imageHomePageMobile/imgCategories_DamOm.jpg";
import Categorie1 from "../../../../assets/imageHomePageMobile/imgCategories_DamSuong.jpg";
import Categorie2 from "../../../../assets/imageHomePageMobile/imgCategories_DamXoe.jpg";

class Categories extends Component {
    render() {
        const { visibilityProducts } = this.props;
        let totalDamSuong = 0;
        let totalDamOm = 0;
        let totalDamXoe = 0;
        if (visibilityProducts) {
            totalDamSuong = visibilityProducts.filter((product) => {
                return product.catID === "damsuong";
            }).length;
            totalDamOm = visibilityProducts.filter((product) => {
                return product.catID === "damom";
            }).length;
            totalDamXoe = visibilityProducts.filter((product) => {
                return product.catID === "damxoe";
            }).length;
        }
        return (
            // <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                <div className="listProduct d-flex flex-column justify-content-between">
                    <div className="title__listProduct d-flex flex-row justify-content-center">
                        Danh Mục Sản Phẩm
                    </div>
                    <div className="categoryProduct d-flex flex-row justify-content-between">
                        <Link
                            style={{
                                height: "fit-content",
                                width: "fit-content",
                                border: "none",
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: "/shopping-store",
                                search: `?cat=damsuong&search=`,
                            }}
                        >
                            <div className="image">
                                <img src={Categorie1} />
                                <div className="contentProduct d-flex flex-column justify-content-center align-items-center">
                                    <span>Đầm Suông</span>
                                    <span>{`+${totalDamSuong} sản phẩm`}</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            style={{
                                height: "fit-content",
                                width: "fit-content",
                                border: "none",
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: "/shopping-store",
                                search: `?cat=damom&search=`,
                            }}
                        >
                            <div className="image">
                                <img src={Categorie2} />
                                <div className="contentProduct d-flex flex-column justify-content-center align-items-center">
                                    <span>Đầm Ôm</span>
                                    <span>{`+${totalDamOm} sản phẩm`}</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            style={{
                                height: "fit-content",
                                width: "fit-content",
                                border: "none",
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: "/shopping-store",
                                search: `?cat=damxoe&search=`,
                            }}
                        >
                            <div className="image">
                                <img src={Categorie3} />
                                <div className="contentProduct d-flex flex-column justify-content-center align-items-center">
                                    <span>Đầm Xoè</span>
                                    <span>{`+${totalDamXoe} sản phẩm`}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <hr />
                </div>
            // </LazyLoad>
        );
    }
}

export default Categories;
