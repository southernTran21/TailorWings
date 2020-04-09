import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageDamOm from "../../../../assets/imageHomePage/dam om.png";
import imageDamXoe from "../../../../assets/imageHomePage/dam xoe.png";
import imageDamSuong from "../../../../assets/imageHomePage/dam suong.png";

export default class Categories extends Component {
    render() {
        return (
            <div className="categories_wrapper d-flex justify-content-between fontMontserrat">
                <Link
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=damom&search",
                    }}
                >
                    <div className="category d-flex flex-column">
                        <div className="image_wrapper">
                            <img src={imageDamOm} alt="dam-om" />
                        </div>
                        <div className="content d-flex flex-column">
                            <span className="titleHead">ĐẦM ÔM</span>
                            <span className="titleSeconds">
                                Phục vụ với mọi ngữ cảnh như dự tiệc, công sở và
                                dạo phố...
                            </span>
                            <div className="button">XEM THÊM</div>
                        </div>
                    </div>
                </Link>
                <Link
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=damxoe&search",
                    }}
                >
                    <div className="category d-flex flex-column">
                        <div className="image_wrapper">
                            <img src={imageDamXoe} alt="dam-xoe" />
                        </div>
                        <div className="content d-flex flex-column">
                            <span className="titleHead">ĐẦM XÒE</span>
                            <span className="titleSeconds">
                                Phục vụ với mọi ngữ cảnh như dự tiệc, công sở và
                                dạo phố...
                            </span>

                            <div className="button">XEM THÊM</div>
                        </div>
                    </div>
                </Link>
                <Link
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=damsuong&search",
                    }}
                >
                    <div className="category d-flex flex-column">
                        <div className="image_wrapper">
                            <img src={imageDamSuong} alt="dam-suong" />
                        </div>
                        <div className="content contentDamSuong d-flex flex-column">
                            <span className="titleHead">ĐẦM SUÔNG</span>
                            <span className="titleSeconds">
                                Phục vụ với mọi ngữ cảnh như dự tiệc, công sở và
                                dạo phố...
                            </span>
                            <div className="button">XEM THÊM</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
