import adminIcon from "assets/Icon/logo-admin.svg";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import PowerIcon from "../../../../assets/Icon/power-outline.svg";

AdminSidebar.propTypes = {
    items: PropTypes.array,
    userInfo: PropTypes.object,
};

AdminSidebar.defaultProps = {
    items: null,
    userInfo: null,
};

function AdminSidebar(props) {
    /*--------------*/
    if (!props.items || !props.userInfo) return <Fragment />;
    return (
        <div className="c-admin-sidebar">
            <img src={adminIcon} alt="icon" className="c-admin-sidebar__icon" />
            <ul className="c-admin-sidebar__list">
                {props.items.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={item.to}
                            activeClassName="c-admin-sidebar__item--active"
                            className="c-admin-sidebar__item"
                        >
                            {item.name}
                        </NavLink>
                    );
                })}
            </ul>
            {/* <Link to="/login">
                <div className="c-admin-sidebar__account">
                    <img
                        src={props.userInfo.photoURL}
                        alt="avatar"
                        className="c-admin-sidebar__avatar"
                    />
                    <span className="c-admin-sidebar__name">
                        Xin chào, {props.userInfo.displayName}!
                    </span>
                </div>
            </Link> */}
            <p className="c-admin-sidebar__name">
                Xin chào, {props.userInfo.displayName}!
            </p>
            <div className="c-admin-sidebar__logout">
                <span className="c-admin-sidebar__text-log">Đăng xuất</span>
                <img src={PowerIcon} alt="" className="c-admin-sidebar__power-icon"/>
            </div>
        </div>
    );
}

export default AdminSidebar;
