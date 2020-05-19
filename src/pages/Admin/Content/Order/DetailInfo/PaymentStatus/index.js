import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import adminOrderReducer from "../../../../../../reducers/AdminOrder";
import { useEffect } from "react";
import { modifyPrice } from "../../../../../../services/CommonFunction";
import { Button, message } from "antd";
import { updateDocument } from "../../../../../../services/Fundamental";
import { updateRenderList, updateOrderDetail } from "../../../../../../actions";

const paymentStatusIcon = (isPaid) => {
    if (isPaid) {
        return (
            <svg
                width="1.875vw"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM14.3 7.61L9.73 13.61C9.63685 13.731 9.51721 13.8291 9.38027 13.8967C9.24333 13.9643 9.09272 13.9996 8.94 14C8.78811 14.0008 8.63803 13.967 8.50115 13.9012C8.36426 13.8353 8.24418 13.7392 8.15 13.62L5.71 10.51C5.62924 10.4063 5.5697 10.2876 5.53479 10.1609C5.49988 10.0341 5.49027 9.90172 5.50652 9.77126C5.52277 9.64079 5.56456 9.5148 5.6295 9.40049C5.69444 9.28617 5.78126 9.18576 5.885 9.105C6.09453 8.94189 6.36026 8.8687 6.62375 8.90152C6.75421 8.91777 6.8802 8.95955 6.99452 9.02449C7.10884 9.08943 7.20924 9.17626 7.29 9.28L8.92 11.36L12.7 6.36C12.7801 6.25494 12.8801 6.16669 12.9943 6.10029C13.1086 6.03388 13.2347 5.99062 13.3657 5.97298C13.4966 5.95534 13.6297 5.96365 13.7574 5.99746C13.8851 6.03126 14.0049 6.08989 14.11 6.17C14.2151 6.25011 14.3033 6.35012 14.3697 6.46433C14.4361 6.57855 14.4794 6.70472 14.497 6.83565C14.5147 6.96658 14.5063 7.0997 14.4725 7.22742C14.4387 7.35514 14.3801 7.47494 14.3 7.58V7.61Z"
                    fill="#77C44C"
                />
            </svg>
        );
    } else {
        return (
            <svg
                width="1.875vw"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM14.71 13.29C14.8037 13.383 14.8781 13.4936 14.9289 13.6154C14.9797 13.7373 15.0058 13.868 15.0058 14C15.0058 14.132 14.9797 14.2627 14.9289 14.3846C14.8781 14.5064 14.8037 14.617 14.71 14.71C14.617 14.8037 14.5064 14.8781 14.3846 14.9289C14.2627 14.9797 14.132 15.0058 14 15.0058C13.868 15.0058 13.7373 14.9797 13.6154 14.9289C13.4936 14.8781 13.383 14.8037 13.29 14.71L12 13.41L10.71 14.71C10.617 14.8037 10.5064 14.8781 10.3846 14.9289C10.2627 14.9797 10.132 15.0058 10 15.0058C9.86799 15.0058 9.73729 14.9797 9.61543 14.9289C9.49357 14.8781 9.38297 14.8037 9.29 14.71C9.19628 14.617 9.12188 14.5064 9.07111 14.3846C9.02034 14.2627 8.99421 14.132 8.99421 14C8.99421 13.868 9.02034 13.7373 9.07111 13.6154C9.12188 13.4936 9.19628 13.383 9.29 13.29L10.59 12L9.29 10.71C9.1017 10.5217 8.99591 10.2663 8.99591 10C8.99591 9.7337 9.1017 9.4783 9.29 9.29C9.47831 9.1017 9.7337 8.99591 10 8.99591C10.2663 8.99591 10.5217 9.1017 10.71 9.29L12 10.59L13.29 9.29C13.4783 9.1017 13.7337 8.99591 14 8.99591C14.2663 8.99591 14.5217 9.1017 14.71 9.29C14.8983 9.4783 15.0041 9.7337 15.0041 10C15.0041 10.2663 14.8983 10.5217 14.71 10.71L13.41 12L14.71 13.29Z"
                    fill="#E5484A"
                />
            </svg>
        );
    }
};

function PaymentStatus() {
    const [modifiedTotal, setModifiedTotal] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("Unpaid");
    const [paymentStatusColor, setPaymentStatusColor] = useState("#FC4856");
    const [paymentMark, setPaymentMark] = useState("Paid");
    const [paymentMarkColor, setPaymentMarkColor] = useState("#77C44C");
    const renderList = useSelector(
        (state) => state.adminOrderReducer.renderList
    );
    const orderDetail = useSelector(
        (state) => state.adminOrderReducer.orderDetail
    );
    const dispatch = useDispatch();

    const { isPaid, total, discount, orderID, paymentMethod } = orderDetail;

    useEffect(() => {
        /* modify total */
        setModifiedTotal(modifyPrice(total));
        /* set payment status and color */
        if (isPaid) {
            setPaymentStatus("Paid");
            setPaymentStatusColor("#77C44C");
            setPaymentMark("MARK AS UNPAID");
            setPaymentMarkColor("#FC4856");
        } else {
            setPaymentStatus("Unpaid");
            setPaymentStatusColor("#FC4856");
            setPaymentMark("MARK AS PAID");
            setPaymentMarkColor("#77C44C");
        }
    }, [orderDetail]);

    if (!orderDetail) return "";

    /*********************************
     *  Description: update payment status to firestore
     *
     *
     *  Call by: jsx
     */
    function updatePaymentStatus() {
        /* find out current order info */
        let currentOrderIndex = renderList.findIndex((order) => {
            return order.orderID === orderID;
        });

        /* update paymentStatus to fire store */
        let updatedRenderList = [...renderList];
        let updatedOrderDetail = { ...orderDetail };
        if (currentOrderIndex < 0) {
            message.error("No data to update!");
        }
        updatedRenderList[currentOrderIndex].isPaid = !updatedRenderList[
            currentOrderIndex
        ].isPaid;
        updatedOrderDetail.isPaid = !updatedOrderDetail.isPaid;
        updateDocument(
            "orders",
            updatedRenderList[currentOrderIndex],
            updatedRenderList[currentOrderIndex].id
        )
            .then(() => {
                /* update renderList to store */
                const action_updateRenderList = updateRenderList(
                    updatedRenderList
                );
                dispatch(action_updateRenderList);
                /* update orderDetail to store */
                const action_updateOrderDetail = updateOrderDetail(
                    updatedOrderDetail
                );
                dispatch(action_updateOrderDetail);
                message.success("Success!");
            })
            .catch((error) => {
                message.error("Fail to update!");
                console.log("error :>> ", error);
            });
    }
    /************_END_****************/

    if (!orderDetail)
        return <div className="admin-order-detail__payment-status" />;

    return (
        <div className="admin-order-detail__payment-status">
            <div className="admin-order-detail__payment-status__top d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    {paymentStatusIcon(isPaid)}
                    <span
                        className="admin-order-detail__payment-status__top--text font-weight-bold"
                        style={{ color: paymentStatusColor }}
                    >
                        {` ${paymentStatus}`}
                    </span>
                </div>
                <Button
                    className="admin-order-detail__payment-status__top__button-mark-as-paid d-flex justify-content-center align-items-center"
                    onClick={updatePaymentStatus}
                    style={{
                        color: paymentMarkColor,
                        borderColor: paymentMarkColor,
                    }}
                >
                    {paymentMark}
                </Button>
            </div>
            <div className="admin-order-detail__payment-status__bot">
                <div className="d-flex justify-content-between">
                    <span>Total Discount</span>
                    <span>{`-${discount || "0đ"}`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>0đ</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Tax</span>
                    <span>0đ</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Method</span>
                    <span>{paymentMethod}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Total</span>
                    <span className="font-weight-bold">{modifiedTotal}</span>
                </div>
            </div>
        </div>
    );
}

export default PaymentStatus;
