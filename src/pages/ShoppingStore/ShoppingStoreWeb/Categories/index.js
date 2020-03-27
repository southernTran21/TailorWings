import React, { Component } from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import classNames from 'classnames'
// Import image
import tatca from '../../../../assets/imageShoppingStore/tat ca.svg'
import damom from '../../../../assets/imageShoppingStore/dam om.svg'
import damsuong from '../../../../assets/imageShoppingStore/dam suong.svg'
import damxoe from '../../../../assets/imageShoppingStore/dam xoe.svg'

const CAT_ID = ["all", "damom", "damxoe", "damsuong"];

export default class Categories extends Component {
    render() {
        let { isRenderProductsEmpty, currentActiveCategory } = this.props;
        if (isRenderProductsEmpty && currentActiveCategory === "all") {
            currentActiveCategory = null;
        }
        let activeCategory = new Array(4).fill(false);
        if (currentActiveCategory != null) {
            let activeIndex = CAT_ID.indexOf(currentActiveCategory);
            activeCategory[activeIndex] = true;
        }
        return (
            <div className="categories_wrapper d-flex justify-content-between align-items-center">
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
                    onClick={() => this.props.categoryActiveHandling("all")}
                >
                    <div name="all" className={classNames("image d-flex flex-column align-items-center", { blur:  !activeCategory[0] })}>
                        <img src={tatca} alt="all" />
                        <span>TẤT CẢ</span>
                    </div>
                </Link>
                <Link
                    style={{
                        height: "fit-content",
                        width: "fit-content",
                        border: "none",
                        textDecoration: "none"
                    }}
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=damom&search="
                    }}
                    onClick={() => this.props.categoryActiveHandling("damom")}
                >
                    <div name="damom" className={classNames("image d-flex flex-column align-items-center", { blur:  !activeCategory[1] })}>
                        <img src={damom} alt="damom" />
                        <span>ĐẦM ÔM</span>
                    </div>
                </Link>
                <Link
                    style={{
                        height: "fit-content",
                        width: "fit-content",
                        border: "none",
                        textDecoration: "none"
                    }}
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=damxoe&search="
                    }}
                    onClick={() => this.props.categoryActiveHandling("damxoe")}
                >
                    <div name="damxoe" className={classNames("image d-flex flex-column align-items-center", { blur:  !activeCategory[2] })}>
                        <img src={damxoe} alt="damxoe" />
                        <span>ĐẦM XÒE</span>
                    </div>
                </Link>
                <Link
                    style={{
                        height: "fit-content",
                        width: "fit-content",
                        border: "none",
                        textDecoration: "none"
                    }}
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=damsuong&search="
                    }}
                    onClick={() => this.props.categoryActiveHandling("damsuong")}
                >
                    <div name="damsuong" className={classNames("image d-flex flex-column align-items-center", { blur:  !activeCategory[3] })}>
                        <img src={damsuong} alt="damsuong" />
                        <span>ĐẦM SUÔNG</span>
                    </div>
                </Link>
            </div>
        );
    }
}
