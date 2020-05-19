import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { updateOrderDetail } from "../../../../../actions";
import { getWithCondition } from "../../../../../services/Fundamental";
import CustomerInfo from "./CustomerInfo";
import "./DetailInfo.scss";
import ItemList from "./ItemList";
import Note from "./Note";
import PaymentStatus from "./PaymentStatus";
import Title from "./Title";
import { useRef } from "react";

function DetailInfo() {
    const match = useRouteMatch();
    const orderID = match.params.orderID;
    const dispatch = useDispatch();
    /* define state */
    const [customerID, setCustomerID] = useState("");

    /* get data from redux store */
    const renderList = useSelector(
        (state) => state.adminOrderReducer.renderList
    );

    useEffect(() => {
        let isMounted = true;
        if (!renderList) return;

        /* get and update currentOrderDetail */
        handleOrderDetailUpdate(renderList, isMounted);
        /* clean up */
        return () => {
            isMounted = false;
        };
    }, [match.orderID, renderList]);

    /*********************************
     *  Description: call API to query orderDetail and update to store
     *
     *
     *  Call by: useEffect
     */
    async function handleOrderDetailUpdate(renderList, isMounted) {
        try {
            /* filter out currentOrder from renderList */
            let currentOrder = renderList.find(
                (order) => order.orderID === orderID
            );
            /* call API to get currentOrderDetail info */
            let currentOrderDetail = await getWithCondition(
                "orderDetail",
                "orderID",
                match.params.orderID
            );
            /* merged data to currentOrderDetail */
            currentOrderDetail = {
                orderItems: currentOrderDetail[0].orderItems,
                ...currentOrder,
            };
            if (isMounted) {
                /* update currentOrderDetail to redux store */
                const action_updateOrderDetail = updateOrderDetail(
                    currentOrderDetail
                );
                dispatch(action_updateOrderDetail);
                /* update customer id state */
                setCustomerID(currentOrderDetail.customerID);
            }
        } catch (error) {}
    }
    /************_END_****************/
    return (
        <div className="admin-order-detail d-flex">
            <div>
                <Title />
                <ItemList />
                <PaymentStatus/>
            </div>
            <div>
                <CustomerInfo customerID={customerID} />
                <Note />
            </div>
        </div>
    );
}

export default DetailInfo;
