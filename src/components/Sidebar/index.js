import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

Sidebar.propTypes = {
    isSidebar: PropTypes.bool,
    onSidebarClosed: PropTypes.func,
};

Sidebar.defaultProps = {
    isSidebar: false,
    onSidebarClosed: null,
};

function Sidebar(props) {
    if (!props.onSidebarClosed) return <Fragment />;
    return (
        <nav
            className={classNames("c-sidebar", {
                "c-sidebar--open": props.isSidebar,
            })}
        >
            <div className="c-sidebar__content">
                <div className="c-sidebar__top">
                    <Link
                        to={{
                            pathname: "/designs",
                            search: "?cat=all",
                        }}
                        onClick={props.onSidebarClosed}
                    >
                        Tất cả
                    </Link>
                    <Link
                        to={{
                            pathname: "/designs",
                            search: "?cat=aodai",
                        }}
                        onClick={props.onSidebarClosed}
                    >
                        <span>Áo Dài</span>
                    </Link>
                    <Link
                        to={{
                            pathname: "/designs",
                            search: "?cat=damom",
                        }}
                        onClick={props.onSidebarClosed}
                    >
                        <span>Đầm Ôm</span>
                    </Link>
                    <Link
                        to={{
                            pathname: "/designs",
                            search: "?cat=damxoe",
                        }}
                        onClick={props.onSidebarClosed}
                    >
                        <span>Đầm Xòe</span>
                    </Link>
                    <Link
                        to={{
                            pathname: "/designs",
                            search: "?cat=damsuong",
                        }}
                        onClick={props.onSidebarClosed}
                    >
                        <span>Đầm Suông</span>
                    </Link>
                    <Link
                        to={{
                            pathname: "/designs",
                            search: "?cat=plussize",
                        }}
                        onClick={props.onSidebarClosed}
                    >
                        <span>Đầm Plus Size</span>
                    </Link>
                </div>
                <hr className="c-sidebar__line" />
                <div className="c-sidebar__bottom">
                    <a
                        href="https://www.facebook.com/TailorWings"
                        target="_blank"
                        onClick={props.onSidebarClosed}
                    >
                        <span>Về TailorWings</span>
                    </a>
                    <Link to="/support" onClick={props.onSidebarClosed}>
                        <span>Trợ Giúp</span>
                    </Link>
                    <Link to="/policy" onClick={props.onSidebarClosed}>
                        <span>Điều Kiện & Điều Khoản</span>
                    </Link>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfuRlkLX1llCN0L9ZAwmhCxLS3NT5efPxNsbRMmxT3Oe7z0qw/viewform"
                        target="_blank"
                        onClick={props.onSidebarClosed}
                    >
                        <span style={{ textDecoration: "underline" }}>
                            Bạn Là Thợ May?
                        </span>
                    </a>
                    {/* <LoginForm
                        onClickHandling={this.onClickHandling}
                        history={this.props.history}
                    /> */}
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
