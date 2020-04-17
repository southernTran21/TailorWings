/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Order.scss";
import { setDocument } from "../../../services/Fundamental";
import { removePunctuation } from "../../../services/CommonFunction";
import OrderContent from "./Order";
import OrderDetail from "./OrderDetail";

export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            renderOrders: [],
            fromDate: "NaN",
            toDate: "NaN",
            renderState: 'content',
            currentOrderID: ''
        };
    }

    componentDidMount() {
        const { orders, customers } = this.props;
        let renderOrders = [...orders];
        if (renderOrders.length > 0) {
            renderOrders.forEach((order) => {
                if (order.orderDate.hasOwnProperty("seconds")) {
                    console.log(
                        "order.orderDate.seconds :",
                        order.orderDate.seconds
                    );
                    order.orderDate = this.timeConverter(
                        order.orderDate.seconds
                    );
                }
                if (order.doneDate.hasOwnProperty("seconds")) {
                    console.log(
                        "order.doneDate.seconds :",
                        order.doneDate.seconds
                    );
                    order.doneDate = this.timeConverter(order.doneDate.seconds);
                }
                let currentCustomer = customers.find(
                    (customer) => customer.customerID === order.customerID
                ) || { cusName: "" };
                order.cusName = currentCustomer.cusName;
            });
        }
        this.setState({
            renderOrders,
        });
    }

    OnChangeInputNoteAnt = (e, orderID) => {
        let { renderOrders } = this.state;
        let newNote = e.target.value;
        renderOrders.find((order) => {
            if (order.id === orderID) {
                order.notes = newNote;
            }
        });
        this.setState({
            renderOrders,
        });
    };

    onNoteUpdate = (orderID) => {
        const { renderOrders } = this.state;
        let changedOrder = renderOrders.find((order) => {
            return order.id === orderID;
        }) || { notes: "none" };
        if (changedOrder.notes !== "none") {
            setDocument("orders", changedOrder, changedOrder.id);
        } else {
            console.log("không tìm thấy thông tin đơn hàng được thay đổi");
        }
    };

    onStatusChange = (e, orderID) => {
        const { renderOrders } = this.state;
        let newStatus = e.target.name;
        let changedOrder = renderOrders.find((order) => {
            return order.id === orderID;
        }) || { status: "none" };
        if (changedOrder.status !== "none") {
            changedOrder.status = newStatus;
            setDocument("orders", changedOrder, changedOrder.id);
        } else {
            console.log("không tìm thấy thông tin đơn hàng được thay đổi");
        }
    };

    OnFromDateChange = (date, dateString) => {
        let { toDate, renderOrders } = this.state;
        const { orders } = this.props;
        if (dateString !== "") {
            let fromDate = this.CalculateDate(dateString);
            if (toDate != "NaN") {
                renderOrders = orders.filter((order) => {
                    let orderDate = this.CalculateDate(order.orderDate);
                    return orderDate >= fromDate && orderDate <= toDate;
                });
                this.setState({
                    fromDate,
                    renderOrders,
                });
            } else {
                renderOrders = orders.filter((order) => {
                    let orderDate = this.CalculateDate(order.orderDate);
                    return orderDate >= fromDate;
                });
                this.setState({
                    fromDate,
                    renderOrders,
                });
            }
        }
    };

    OnToDateChange = (date, dateString) => {
        let { fromDate, renderOrders } = this.state;
        const { orders } = this.props;
        if (dateString !== "") {
            let toDate = this.CalculateDate(dateString);
            if (fromDate != "NaN") {
                renderOrders = orders.filter((order) => {
                    let orderDate = this.CalculateDate(order.orderDate);
                    return orderDate >= fromDate && orderDate <= toDate;
                });
                this.setState({
                    toDate,
                    renderOrders,
                });
            } else {
                renderOrders = orders.filter((order) => {
                    let orderDate = this.CalculateDate(order.orderDate);
                    return orderDate <= toDate;
                });
                this.setState({
                    toDate,
                    renderOrders,
                });
            }
        }
    };

    CalculateDate = (dateString) => {
        let calculatedDate = dateString.split("/");
        calculatedDate = Number(
            calculatedDate[2] + calculatedDate[1] + calculatedDate[0]
        );
        return calculatedDate;
    };

    timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
        ];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        if (Number(month) < 10) {
            month = "0" + month;
        }
        if (Number(date) < 10) {
            date = "0" + date;
        }
        var time = date + "/" + month + "/" + year;
        return time;
    };

    searchFilter = (e) => {
        let searchInput = removePunctuation(e.target.value.toLowerCase()) || "";
        let { renderOrders } = this.state;
        const { orders } = this.props;
        renderOrders = orders.filter((order) => {
            let name = order.cusName.toLowerCase();
            name = removePunctuation(name);
            return name.search(searchInput) !== -1;
        });
        if (renderOrders.length === 0) {
            renderOrders = orders.filter((order) => {
                let id = order.orderID.toLowerCase();
                return id.search(searchInput) !== -1;
            });
        }
        this.setState({
            renderOrders,
        });
    };

    onOrderDetailView = (orderID) => {
        this.setState({
            renderState: 'detail',
            currentOrderID: orderID
        })
    }

    render() {
        const { renderOrders, renderState, currentOrderID } = this.state;
        const { customers } = this.props;
        let content = <div></div>;
        switch (renderState) {
            case 'content':
                content = <OrderContent
                customers={customers}
                renderOrders={renderOrders}
                searchFilter={this.searchFilter}
                OnFromDateChange={this.OnFromDateChange}
                OnToDateChange={this.OnToDateChange}
                onNoteUpdate={this.onNoteUpdate}
                onStatusChange={this.onStatusChange}
                onOrderDetailView={this.onOrderDetailView}
            />
                break;
            case 'detail':
                content = <OrderDetail currentOrderID={currentOrderID}/>
                break;
            default:
                break;
        }
        return (
            content
        );
    }
}

export default Order;
