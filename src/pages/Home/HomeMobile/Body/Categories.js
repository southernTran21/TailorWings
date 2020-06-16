import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCurrentDate } from "services/CommonFunction";
import { trackingIncrement } from "services/Fundamental";
import Categorie3 from "../../../../assets/imageHomePageMobile/imgCategories_DamOm.jpg";
import Categorie1 from "../../../../assets/imageHomePageMobile/imgCategories_DamSuong.jpg";
import Categorie2 from "../../../../assets/imageHomePageMobile/imgCategories_DamXoe.jpg";
import { Skeleton } from "antd";

class Categories extends Component {
    /*********************************
     *  Description: to update tracking counter
     *
     *
     *  Call by:
     */
    handleTracking = (catID) => {
        let date = getCurrentDate();
        if (!catID) return;
        trackingIncrement("tracking", date, "categories", catID);
    };
    /************_END_****************/

    render() {
        const { categories } = this.props;
        if (categories.length === 0) return <Skeleton active />;
        return (
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
                        onClick={() => this.handleTracking("damsuong")}
                    >
                        <div className="image">
                            <img src={Categorie1} />
                            <div className="contentProduct d-flex flex-column justify-content-center align-items-center">
                                <span>Đầm Suông</span>
                                <span>{`+${categories.damsuong || 0} sản phẩm`}</span>
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
                        onClick={() => this.handleTracking("damom")}
                    >
                        <div className="image">
                            <img src={Categorie2} />
                            <div className="contentProduct d-flex flex-column justify-content-center align-items-center">
                                <span>Đầm Ôm</span>
                                <span>{`+${categories.damom || 0} sản phẩm`}</span>
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
                        onClick={() => this.handleTracking("damxoe")}
                    >
                        <div className="image">
                            <img src={Categorie3} />
                            <div className="contentProduct d-flex flex-column justify-content-center align-items-center">
                                <span>Đầm Xoè</span>
                                <span>{`+${categories.damxoe || 0} sản phẩm`}</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <hr />
            </div>
        );
    }
}

export default Categories;
