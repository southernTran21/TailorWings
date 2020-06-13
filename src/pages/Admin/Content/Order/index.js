import React, { Suspense, useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { getAllData } from "../../../../services/Fundamental";
import { useDispatch } from "react-redux";
import {
    updateOrderList,
    updateRenderList,
    updateCustomerList,
} from "../../../../actions";
import { timeConverter } from "../../../../services/CommonFunction";
import { message } from "antd";

//Lazy load - code splitting
const GeneralInfo = React.lazy(() => import("./GeneralInfo"));
const DetailInfo = React.lazy(() => import("./DetailInfo"));

function Order() {
    const match = useRouteMatch();

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchOrderList() {
            try {
                const fetchedOrder = await getAllData("orders");
                const fetchedCustomer = await getAllData("customers");
                if (fetchedOrder.length > 0) {
                    fetchedOrder.forEach((order) => {
                        /* Get customer name*/
                        order.cusName = getCustomerName(
                            order.customerID,
                            fetchedCustomer
                        );
                        /* Modify order date to be dd/mm/yy */
                        if (order.hasOwnProperty("timestamp")) {
                            order.orderDate = handleDateModify(order.timestamp);
                        } else {
                            order.orderDate = "0";
                        }
                    });

                    /* udpate OrderList */
                    const action_updateOrderList = updateOrderList(
                        fetchedOrder
                    );
                    dispatch(action_updateOrderList);

                    /* udpate RenderList */
                    const action_updateRenderList = updateRenderList(
                        fetchedOrder
                    );
                    dispatch(action_updateRenderList);
                    const action_updateCustomerList = updateCustomerList(
                        fetchedCustomer
                    );
                    dispatch(action_updateCustomerList);
                }
            } catch (error) {
                message.error("Lấy dữ liệu thất bại! Lêu Lêu");
            }
        }

        fetchOrderList();
    }, []);

    /*********************************
     *  Description: Based on customerID on each order => find related-customer infor and set to that order
     *
     *
     *  Call by: useEffect
     */
    function getCustomerName(customerID, customerList) {
        /* Find index of related-customer */
        let relatedCustomerIndex = customerList.findIndex(
            (customer) => customer.id === customerID
        );
        /* Check and update customer name */
        if (relatedCustomerIndex > -1) {
            let customerName = customerList[relatedCustomerIndex].cusName;
            return customerName;
        } else {
            return "";
        }
    }
    /************_END_****************/

    /*********************************
     *  Description: Modify order date to be dd/mm/yy
     *
     *
     *  Call by: useEffect
     */
    function handleDateModify(date) {
        if (date.hasOwnProperty("seconds")) {
            let { seconds } = date;
            return timeConverter(seconds);
        } else {
            return date;
        }
    }
    /************_END_****************/

    return (
        <div className="admin-order">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route
                        exact
                        path={`${match.url}`}
                        component={GeneralInfo}
                    />
                    <Route
                        path={`${match.url}/:orderID`}
                        component={DetailInfo}
                    />
                </Switch>
            </Suspense>
        </div>
    );
}

export default Order;
