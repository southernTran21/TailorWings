import React, { Component } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import "./SideBar.scss";
import LoginForm from "./LoginModal";

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }

    onClickHandling = () => {
        this.props.changeSideBarState();
    };

    render() {
        let drawerClasses = "";
        if (window.innerWidth < 1024) {
            drawerClasses = "side-drawer";
            if (this.props.show) {
                drawerClasses = "side-drawer open";
            }
        } else {
            drawerClasses = "side-drawer-desktop";
            if (this.props.show) {
                drawerClasses = "side-drawer-desktop open";
            }
        }
        return (
            <nav className={drawerClasses}>
                <div className="sidebar-wraper">
                    <div className="selectionCategory d-flex flex-column">
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=all&search="
                            }}
                            onClick={this.onClickHandling}
                        >
                            <span>Hàng Mới</span>
                        </Link>
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=damom&search="
                            }}
                            onClick={this.onClickHandling}
                        >
                            <span>Đầm Ôm</span>
                        </Link>
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=damsuong&search="
                            }}
                            onClick={this.onClickHandling}
                        >
                            <span>Đầm Suông</span>
                        </Link>
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=damxoe&search="
                            }}
                            onClick={this.onClickHandling}
                        >
                            <span>Đầm Xòe</span>
                        </Link>
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=all&search="
                            }}
                            onClick={this.onClickHandling}
                        >
                            <span>Bộ Sưu Tập</span>
                        </Link>
                    </div>
                    <hr />
                    <div className="selectionEndSidebar d-flex flex-column">
                        <a href="https://www.facebook.com/TailorWings" target='_blank' onClick={this.onClickHandling}>
                            <span>
                                Về TailorWings
                            </span>
                        </a>
                        <Link to="/support" onClick={this.onClickHandling}>
                            <span>Trợ Giúp</span>
                        </Link>
                        <Link to="/policy" onClick={this.onClickHandling}>
                            <span>Điều Kiện & Điều Khoản</span>
                        </Link>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfuRlkLX1llCN0L9ZAwmhCxLS3NT5efPxNsbRMmxT3Oe7z0qw/viewform"
                            target="_blank"
                            onClick={this.onClickHandling}
                        >
                            <span style={{ textDecoration: "underline" }}>Bạn Là Thợ May?</span>
                        </a>
                        <LoginForm
                            onClickHandling={this.onClickHandling}
                            history={this.props.history}
                        />
                    </div>
                </div>
            </nav>
        );
    }
}
