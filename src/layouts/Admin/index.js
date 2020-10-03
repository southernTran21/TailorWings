import AdminDataUpload from "components/Pages/Admin/DataUpload";
import AdminImageUpload from "components/Pages/Admin/ImageUpload";
import AdminOrderDetail from "components/Pages/Admin/OrderDetail";
import AdminOrderManagement from "components/Pages/Admin/OrderManagement";
import AdminSidebar from "components/Pages/Admin/Sidebar";
import * as firebase from "firebase/app";
import "firebase/auth";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const ITEMS = [
    { to: "/admin/order", name: "Đơn hàng" },
    { to: "/admin/data", name: "Dữ liệu" },
    { to: "/admin/image", name: "Hình ảnh" },
];

function AdminContainer() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    /*--------------*/
    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged((user) => {
                /*--------------*/
                if (JSON.stringify(user) !== JSON.stringify(currentUser)) {
                    /*--------------*/
                    const { displayName, email, photoURL } = user;
                    setUserInfo({ displayName, email, photoURL });
                    /*--------------*/
                    setIsAdmin(true);
                    /*--------------*/
                    setCurrentUser(user);
                }
            });
        return () => {
            unregisterAuthObserver();
        };
    });
    /*--------------*/
    console.log('isAdmin :>> ', isAdmin);
    return (
        <Switch>
            <div className="l-admin">
                <AdminSidebar items={ITEMS} userInfo={userInfo} />
                <div className="l-admin__content">
                    <Redirect exact from="/admin" to="/admin/order" />
                    <Route path="/admin/data" component={AdminDataUpload} />
                    <Route path="/admin/image" component={AdminImageUpload} />
                    <Route
                        path="/admin/order"
                        component={AdminOrderManagement}
                    />
                    <Route path="/admin/order-detail/:orderID" component={AdminOrderDetail}/>
                </div>
            </div>
        </Switch>
    );
}

export default AdminContainer;