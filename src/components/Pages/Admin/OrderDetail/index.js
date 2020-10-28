import { message } from "antd";
import ProductCard from "components/ProductCard";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { history } from "services/CommonParameter";
import OrderDetailGeneralInfo from "./GeneralInfo";
import OrderDetailPayment from "./PaymentInfo";
import { fetchDocument } from "services/FirebaseAPI/basic";
import { updateOrderDetail } from "actions";

function AdminOrderDetail() {
    let { orderID } = useParams();
    /*--------------*/
    const orderDetail = useSelector((state) => state.admin.orderDetail);
    const orders = useSelector((state) => state.admin.orders);
    /*--------------*/
    const [renderOrderDetail, setRenderOrderDetail] = useState(null);
    const [renderOrderInfo, setRenderOrderInfo] = useState(null);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        async function _fetchOrderDetail() {
            try {
                let fetchedOrderDetail = await fetchDocument(
                    "orderDetail",
                    orderID
                );
                /*--------------*/
                let fetchedRenderOrderInfo = orders.find((order) => {
                    return order.detailID === orderID;
                });
                /*--------------*/
                setRenderOrderDetail(fetchedOrderDetail || null);
                setRenderOrderInfo(fetchedRenderOrderInfo || null);
                /*--------------*/
                const action_updateOrderDetail = updateOrderDetail(
                    fetchedOrderDetail
                );
                dispatch(action_updateOrderDetail);
                /*--------------*/
            } catch (error) {
                message.error("Lỗi truy xuất dữ liệu!");
                console.log("error :>> ", error);
            }
        }
        /*--------------*/
        if (orderDetail.length > 0) {
            let availableOrderDetail = orderDetail.find(
                (detail) => detail.id === orderID
            );
            if (availableOrderDetail) {
                /*--------------*/
                let fetchedRenderOrderInfo = orders.find((order) => {
                    return order.detailID === orderID;
                });
                /*--------------*/
                setRenderOrderDetail(availableOrderDetail);
                setRenderOrderInfo(fetchedRenderOrderInfo);
                /*--------------*/
            } else {
                _fetchOrderDetail();
            }
        } else {
            _fetchOrderDetail();
        }
    }, [orderID]);
    /*--------------*/
    if (!renderOrderDetail || !renderOrderInfo)
        return (
            <div className="c-order-detail">
                <div className="c-order-detail__header">
                    <i
                        className="fas fa-arrow-circle-left"
                        onClick={() => history.goBack()}
                    ></i>
                    <span className="c-order-detail__title">
                        #k8pk4lz9 (6 sản phẩm)
                    </span>
                </div>
            </div>
        );
    else {
        let orderItems = JSON.parse(renderOrderDetail.items);
        /*--------------*/
        const { name, address, phone, note } = renderOrderInfo.shippingInfo;
        let shippingInfo = {
            title: name,
            info: [address, phone],
            editType: "shipping",
        };
        let noteInfo = {
            title: "Ghi chú",
            info: [note],
            editType: "note",
        };
        /*--------------*/
        const { price, paymentStatus } = renderOrderInfo;
        return (
            <div className="c-order-detail">
                <div className="c-order-detail__header">
                    <i
                        className="fas fa-arrow-circle-left"
                        onClick={() => history.goBack()}
                    ></i>
                    <span className="c-order-detail__title">
                        {`#${renderOrderDetail.id} (${orderItems.length} sản phẩm)`}
                    </span>
                </div>
                <div className="c-order-detail__content">
                    <div className="c-order-detail__list">
                        {orderItems.map((item, index) => {
                            return <ProductCard key={index} info={item} />;
                        })}
                    </div>
                    <div className="c-order-detail__info">
                        <OrderDetailGeneralInfo
                            title={shippingInfo.title}
                            info={shippingInfo.info}
                            editType={shippingInfo.editType}
                        />
                        <OrderDetailPayment
                            price={price}
                            status={{
                                statusName: paymentStatus ? "PAID" : "UNPAID",
                                statusID: paymentStatus ? "paid" : "unpaid",
                            }}
                        />
                        <OrderDetailGeneralInfo
                            title={noteInfo.title}
                            info={noteInfo.info}
                            editType={noteInfo.editType}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminOrderDetail;
