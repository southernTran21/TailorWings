import React, { Fragment, useEffect, useState } from "react";
import IconSearch from "../../../../assets/Icon/icon-search.svg";
import { Link } from "react-router-dom";
import { message, Popover } from "antd";
import { fetchAll, updateDocument } from "services/FirebaseAPI/basic";
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "actions";
import classNames from "classnames";
import { timeConverter } from "services/CommonFunctions/index";
import { setDocument } from "services/FirebaseAPI/basic";
import ListLoader from "components/Loader/List/index";
import { history } from "services/CommonParameter";

const STATUS_SELECTION = [
    {
        id: "new",
        name: "Mới",
        className: "c-admin-order-management__status--new",
    },
    {
        id: "pending",
        name: "Chuẩn bị",
        className: "c-admin-order-management__status--pending",
    },
    {
        id: "done",
        name: "Hoàn thành",
        className: "c-admin-order-management__status--done",
    },
];

function AdminOrderManagement() {
    const dispatch = useDispatch();
    /*--------------*/
    const [isStatusVisible, setIsStatusVisible] = useState([]);
    const [orderDataModified, setOrderDataModified] = useState([]);
    const [isListLoading, setIsListLoading] = useState(false);
    /*--------------*/
    const orders = useSelector((state) => state.admin.orders);
    const ordersLength = orders ? orders.length : 0;
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchOrders() {
            /*--------------*/
            try {
                let fetchedOrders = await fetchAll("orders");
                if (fetchedOrders) {
                    setIsStatusVisible(
                        new Array(fetchedOrders.length).fill(false)
                    );
                    /*--------------*/
                    let orderDataModified = fetchedOrders.map((order) => {
                        /*--------------*/
                        let orderStatus =
                            STATUS_SELECTION.find(
                                (selection) => selection.id === order.status
                            ) || null;
                        /*--------------*/
                        let orderDate = timeConverter(order.orderDate);
                        /*--------------*/
                        let link = `/admin/order-detail/${order.detailID}`;
                        /*--------------*/
                        return {
                            orderStatus,
                            orderDate,
                            link,
                        };
                    });
                    setOrderDataModified(orderDataModified);
                    /*--------------*/
                    const action_updateOrders = updateOrders(fetchedOrders);
                    dispatch(action_updateOrders);
                    /*--------------*/
                }
            } catch (error) {
                message.error("Lỗi truy xuất dữ liệu!");
                console.log("error :>> ", error);
            }
        }
        /*--------------*/
        _fetchOrders();
    }, [ordersLength]);
    /*--------------*/
    /*********************************
     *  Description: hanlde order status update
     *
     *
     *  Call by:
     */
    function onOrderStatusUpdate(index, newStatus) {
        setIsListLoading(true);
        /*--------------*/
        let updatedOrder = { ...orders[index] };
        /*--------------*/
        if (updatedOrder && newStatus) {
            updatedOrder.status = newStatus;
            /*--------------*/
            // setDocument("orders", updatedOrder, updatedOrder.id).then(() => {
            //     setIsListLoading(false);
            // });
            updateDocument("orders", updatedOrder.id, "status", newStatus).then(
                () => {
                    setIsListLoading(false);
                    history.push("/admin");
                }
            );
            /*--------------*/
        } else {
            message.error("Không thể update dữ liệu!");
            setIsListLoading(false);
        }
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    if (!orders) {
        return (
            <div className="c-admin-order-management">
                <div className="c-admin-order-management__header">
                    <span className="c-admin-order-management__title">
                        Đơn hàng (18)
                    </span>
                    <div className="c-admin-order-management__search-box">
                        <img
                            src={IconSearch}
                            alt=""
                            className="c-admin-order-management__icon-search"
                        />
                        <input
                            type="text"
                            placeholder="Bạn cần tìm gì?"
                            className="c-admin-order-management__input-search"
                        />
                    </div>
                </div>
                <div className="c-admin-order-management__head-table">
                    <span className="c-admin-order-management__col">
                        Mã đơn hàng
                    </span>
                    <span className="c-admin-order-management__col">
                        Ngày nhận
                    </span>
                    <span className="c-admin-order-management__col">
                        Khách hàng
                    </span>
                    <span className="c-admin-order-management__col">
                        Tình trạng
                    </span>
                    <span className="c-admin-order-management__col">
                        Thanh toán
                    </span>
                    <span className="c-admin-order-management__col">
                        Tổng tiền
                    </span>
                </div>
            </div>
        );
    } else {
        if (isListLoading || orderDataModified.length < 1)
            return <ListLoader />;
        return (
            <div className="c-admin-order-management">
                <div className="c-admin-order-management__header">
                    <span className="c-admin-order-management__title">
                        Đơn hàng (18)
                    </span>
                    <div className="c-admin-order-management__search-box">
                        <img
                            src={IconSearch}
                            alt=""
                            className="c-admin-order-management__icon-search"
                        />
                        <input
                            type="text"
                            placeholder="Bạn cần tìm gì?"
                            className="c-admin-order-management__input-search"
                        />
                    </div>
                </div>
                <div className="c-admin-order-management__head-table">
                    <span className="c-admin-order-management__col">
                        Mã đơn hàng
                    </span>
                    <span className="c-admin-order-management__col">
                        Ngày nhận
                    </span>
                    <span className="c-admin-order-management__col">
                        Khách hàng
                    </span>
                    <span className="c-admin-order-management__col">
                        Tình trạng
                    </span>
                    <span className="c-admin-order-management__col">
                        Thanh toán
                    </span>
                    <span className="c-admin-order-management__col">
                        Tổng tiền
                    </span>
                </div>
                <div className="c-admin-order-management__body-table--wrapper">
                    {orders.map((result, index) => {
                        const {
                            detailID,
                            shippingInfo,
                            price,
                            paymentStatus,
                        } = result;
                        return (
                            <div
                                className="c-admin-order-management__body-table"
                                key={index}
                            >
                                <Link
                                    className="c-admin-order-management__col c-admin-order-management__col-1"
                                    to={orderDataModified[index].link}
                                >
                                    <span>{`#${detailID}`}</span>
                                </Link>
                                <span className="c-admin-order-management__col">
                                    {orderDataModified[index].orderDate}
                                </span>
                                <span className="c-admin-order-management__col">
                                    {shippingInfo.name}
                                </span>
                                {orderDataModified[index].orderStatus ? (
                                    <Popover
                                        content={
                                            <div className="c-admin-order-management__status">
                                                {STATUS_SELECTION.map(
                                                    (status, index2) => {
                                                        if (
                                                            status.id !==
                                                            orderDataModified[
                                                                index
                                                            ].orderStatus.id
                                                        ) {
                                                            return (
                                                                <span
                                                                    key={index2}
                                                                    className={
                                                                        status.className
                                                                    }
                                                                    onClick={() =>
                                                                        onOrderStatusUpdate(
                                                                            index,
                                                                            status.id
                                                                        )
                                                                    }
                                                                >
                                                                    {
                                                                        status.name
                                                                    }
                                                                </span>
                                                            );
                                                        } else {
                                                            return <Fragment />;
                                                        }
                                                    }
                                                )}
                                            </div>
                                        }
                                        trigger="click"
                                        visible={isStatusVisible[index]}
                                        onVisibleChange={(isVisible) => {
                                            let changedVisible = new Array(
                                                isStatusVisible.length
                                            ).fill(false);
                                            changedVisible[index] = isVisible;
                                            setIsStatusVisible(changedVisible);
                                        }}
                                    >
                                        <span
                                            className={`c-admin-order-management__col ${orderDataModified[index].orderStatus.className}`}
                                        >
                                            {
                                                orderDataModified[index]
                                                    .orderStatus.name
                                            }
                                        </span>
                                    </Popover>
                                ) : (
                                    <Fragment />
                                )}
                                <span
                                    className={classNames(
                                        "c-admin-order-management__col c-admin-order-management__col-3",
                                        {
                                            "c-admin-order-management__col-3--unpaid": !paymentStatus,
                                        }
                                    )}
                                >
                                    {paymentStatus ? "PAID" : "UNPAID"}
                                </span>
                                <span className="c-admin-order-management__col c-admin-order-management__col-4">
                                    {`${price.finalPrice}đ`}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default AdminOrderManagement;
