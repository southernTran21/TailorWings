import React, { Component } from "react";
import { Icon, Popover, Button, Input, DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { TextArea } = Input;

const ContentNoteAnt = (noteContent, orderID, OnChangeInputNoteAnt, onNoteUpdate) => {
    return (
        <div className="contentNote d-flex flex-column">
            <TextArea
                value={noteContent}
                onChange={(e) => OnChangeInputNoteAnt(e, orderID)}
                placeholder="Note"
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
            <div className="buttonSave d-flex justify-content-end">
                <a onClick={() => onNoteUpdate(orderID)} >Save</a>
            </div>
        </div>
    );
}

const ContentUpdateAnt = (onStatusChange, orderID) => {
    return (
        <div className="contentUpdate d-flex flex-column justify-content-center align-items-center">
            <a name='new' onClick={(e) => onStatusChange(e, orderID)} >Mới</a>
            <a name='repair' onClick={(e) => onStatusChange(e, orderID)} >Chuẩn bị</a>
            <a name='done' onClick={(e) => onStatusChange(e, orderID)} >Xong</a>
        </div>
    )
}

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

export default class OrderContent extends Component {
    render() {
        const { customers, renderOrders } = this.props;
        return (
            <div className="pageOrder">
                <div className="headerPageOrder d-flex flex-row justify-content-between align-items-center">
                    <h2
                        className="d-flex justify-content-start"
                        style={{ margin: 0 }}
                    >{`Orders (${renderOrders.length})`}</h2>
                </div>
                <div className="showOrder">
                    <div className="header d-flex flex-row justify-content-between">
                        <div className="inputSearch d-flex flex-row align-items-center">
                            <Icon type="search" />
                            <input
                                onChange={this.props.searchFilter}
                                className="form-control"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </div>
                        <div className="d-flex justify-content-end selectedDate">
                            <div className="dateFrom d-flex flex-row justify-content-center align-items-center">
                                <p>FROM</p>
                                <DatePicker
                                    onChange={this.props.OnFromDateChange}
                                    format={dateFormatList}
                                />
                            </div>
                            <div className="dateEnd d-flex flex-row justify-content-center align-items-center">
                                <p>TO</p>
                                <DatePicker
                                    onChange={this.props.OnToDateChange}
                                    format={dateFormatList}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="tableProduct">
                        <div className="headerTable d-flex">
                            <div className="column1 text-center">Mã</div>
                            <div className="column2">Khách hàng</div>
                            <div className="column3">Tổng tiền</div>
                            <div className="column4 text-center">
                                Ngày đặt hàng
                            </div>
                            <div className="column5 text-center">
                                Ngày hoàn tất
                            </div>
                            <div className="column6 text-center">
                                Tình trạng
                            </div>
                            <div className="column7"></div>
                            <div className="column8"></div>
                        </div>
                        {/* content */}
                        {renderOrders.map((order, index) => {
                            if (order != null) {
                                let currentCustomer = customers.find(
                                    (customer) =>
                                        customer.customerID === order.customerID
                                ) || { cusName: "" };
                                return (
                                    <div
                                        key={index}
                                        className="contentTable d-flex flex-row align-items-center"
                                    >
                                        <div className="column1 text-center" onClick={() => this.props.onOrderDetailView(order.orderID)}>
                                            {order.orderID}
                                        </div>
                                        <div className="column2">
                                            {currentCustomer.cusName}
                                        </div>
                                        <div className="column3">
                                            {order.total}
                                        </div>
                                        <div className="column4 text-center">
                                            {order.orderDate}
                                        </div>
                                        <div className="column5 text-center">
                                            {order.doneDate}
                                        </div>
                                        {/* <div className="column4 text-center"></div>
                                        <div className="column5 text-center"></div> */}
                                        <div className="column6 text-center">
                                            {order.status}
                                        </div>
                                        <div className="column7">
                                            <div className="d-flex flex-row justify-content-center align-items-center">
                                                <Popover
                                                    placement="left"
                                                    content={ContentNoteAnt(
                                                        order.notes,
                                                        order.id,
                                                        this
                                                            .OnChangeInputNoteAnt,
                                                        this.props.onNoteUpdate
                                                    )}
                                                    trigger="click"
                                                >
                                                    <a className="d-flex flex-row align-items-center">
                                                        <i className="far fa-file-alt"></i>
                                                    </a>
                                                </Popover>
                                            </div>
                                        </div>
                                        <div className="column8 d-flex flex-row justify-content-center align-items-center">
                                            <div style={{ float: "left" }}>
                                                <Popover
                                                    placement="left"
                                                    content={ContentUpdateAnt(
                                                        this.props.onStatusChange,
                                                        order.id
                                                    )}
                                                    trigger="click"
                                                >
                                                    <Button className="buttonUpdate">
                                                        Update
                                                    </Button>
                                                </Popover>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
