import React, { Component } from "react";

export default class OrderDetail extends Component {
    render() {
        const { currentOrderDetail } = this.props;
        if (currentOrderDetail !== "" && currentOrderDetail != null) {
            let modifiedPrice = currentOrderDetail.total
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            return (
                <div className="orderDetail">
                    <div className="headerPageOrder d-flex flex-row justify-content-between align-items-center">
                        <h2
                            className="d-flex justify-content-start"
                            style={{ margin: 0 }}
                        >{`OrderDetail - ${currentOrderDetail.orderID}`}</h2>
                    </div>
                    <div className="showOrder">
                        <div className="headContent d-flex justify-content-between">
                            <span>{`Customer: ${currentOrderDetail.cusName}`}</span>
                            <span>{`Total Bill: ${modifiedPrice}`}</span>
                        </div>
                        <div className="tableContent">
                            <div className="titleHeaderTable d-flex">
                                <div className="column1">productID</div>
                                <div className="column2">name</div>
                                <div className="column3">size</div>
                                <div className="column4">bodyMetric</div>
                                <div className="column5">quantity</div>
                                <div className="column6">discount</div>
                                <div className="column7">price</div>
                            </div>
                            {currentOrderDetail.orderItems.map(
                                (item, index) => {
                                    let {
                                        bodyMetric,
                                        discount,
                                        name,
                                        price,
                                        productID,
                                        quantity,
                                        size,
                                    } = item;
                                    let modifiedPrice = price
                                        .toString()
                                        .replace(
                                            /(\d)(?=(\d{3})+(?!\d))/g,
                                            "$1."
                                        );
                                    return (
                                        <div className="contentTable d-flex">
                                            <div className="column1">
                                                {productID}
                                            </div>
                                            <div className="column2">
                                                {name}
                                            </div>
                                            <div className="column3">
                                                {size}
                                            </div>
                                            <div className="column4">
                                                {`[${bodyMetric.toString()}]`}
                                            </div>
                                            <div className="column5">
                                                {quantity}
                                            </div>
                                            <div className="column6">{`${discount}%`}</div>
                                            <div className="column7">
                                                {modifiedPrice}
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}
