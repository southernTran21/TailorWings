/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Order.scss';
import { Icon, Popover, Button, Input, DatePicker } from 'antd';
import { setDocument } from '../../../services/Fundamental'
import { removePunctuation } from '../../../services/CommonFunction';

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

export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            renderOrders: [],
            fromDate: "NaN",
            toDate: "NaN"
        };
    }

    componentDidMount() {
        const { orders, customers } = this.props;
        let renderOrders = [...orders];
        if (renderOrders.length > 0) {
            renderOrders.forEach((order) => {
                if (order.orderDate.hasOwnProperty('seconds')) {
                    console.log('order.orderDate.seconds :', order.orderDate.seconds);
                    order.orderDate = this.timeConverter(order.orderDate.seconds);
                }
                if (order.doneDate.hasOwnProperty('seconds')) {
                    console.log('order.doneDate.seconds :', order.doneDate.seconds);
                    order.doneDate = this.timeConverter(order.doneDate.seconds);
                }
                let currentCustomer = customers.find(customer => customer.customerID === order.customerID) || { cusName: '' }
                order.cusName = currentCustomer.cusName;
            })
        }
        this.setState({
            renderOrders
        })
    }

    OnChangeInputNoteAnt = (e, orderID) => {
        let { renderOrders } = this.state;
        let newNote = e.target.value;
        renderOrders.find((order) => {
            if (order.id === orderID) {
                order.notes = newNote;
            }
        })
        this.setState({
            renderOrders
        })
    };

    onNoteUpdate = (orderID) => {
        const { renderOrders } = this.state;
        let changedOrder = renderOrders.find((order) => {
            return order.id === orderID
        }) || { notes: 'none' };
        if (changedOrder.notes !== 'none') {
            setDocument('orders', changedOrder, changedOrder.id);
        } else {
            console.log('không tìm thấy thông tin đơn hàng được thay đổi');
        }
    }

    onStatusChange = (e, orderID) => {
        const { renderOrders } = this.state;
        let newStatus = e.target.name;
        let changedOrder = renderOrders.find((order) => {
            return order.id === orderID;
        }) || { status: 'none' };
        if (changedOrder.status !== 'none') {
            changedOrder.status = newStatus;
            setDocument('orders', changedOrder, changedOrder.id);
        } else {
            console.log('không tìm thấy thông tin đơn hàng được thay đổi');
        }
    }

    OnFromDateChange = (date, dateString) => {
        let { toDate, renderOrders } = this.state;
        const { orders } = this.props;
        if (dateString !== '') {
            let fromDate = this.CalculateDate(dateString);
            if (toDate != "NaN") {
                renderOrders = orders.filter((order) => {
                    let orderDate = this.CalculateDate(order.orderDate);
                    return orderDate >= fromDate && orderDate <= toDate;
                })
                this.setState({
                    fromDate,
                    renderOrders
                })
            } else {
                renderOrders = orders.filter((order) => {
                    let orderDate = this.CalculateDate(order.orderDate);
                    return orderDate >= fromDate;
                })
                this.setState({
                    fromDate,
                    renderOrders
                })
            }
        }
    }

    OnToDateChange = (date, dateString) => {
        let { fromDate, renderOrders } = this.state;
        const { orders } = this.props;
        if (dateString !== '') {
            let toDate = this.CalculateDate(dateString);
            if (fromDate != "NaN") {
                renderOrders = orders.filter((order) => {
                    let orderDate = this.CalculateDate(order.orderDate);
                    return orderDate >= fromDate && orderDate <= toDate;
                })
                this.setState({
                    toDate,
                    renderOrders
                })
            } else {
                renderOrders = orders.filter((order) => {
                    let orderDate = this.CalculateDate(order.orderDate);
                    return orderDate <= toDate;
                })
                this.setState({
                    toDate,
                    renderOrders
                })
            }
        }
    }

    CalculateDate = ( dateString ) => {
        let calculatedDate = dateString.split('/');
        calculatedDate = Number( calculatedDate[2] + calculatedDate[1] + calculatedDate[0] );
        return calculatedDate;
    }

    timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        if ( Number(month) < 10 ) {
            month = '0'+ month;
        }
        if ( Number(date) < 10 ) {
            date = '0' + date;
        }
        var time = date + '/' + month + '/' + year;
        return time;
    }

    searchFilter = (e) => {
        let searchInput = removePunctuation(e.target.value.toLowerCase()) || "";
        let { renderOrders } = this.state;
        const { orders } = this.props;
        renderOrders = orders.filter((order) => {
            let name = order.cusName.toLowerCase();
            name = removePunctuation(name);
            return name.search( searchInput ) !== -1;
        })
        if ( renderOrders.length === 0 ) {
            renderOrders = orders.filter((order) => {
                let id = order.orderID.toLowerCase();
                return id.search( searchInput ) !== -1;
            })
        }
        this.setState({
            renderOrders
        })
    }

    render() {
        const { renderOrders } = this.state;
        const { customers } = this.props;
        console.log('renderOrders :', renderOrders);
        return (
            <div className="pageOrder">
                <div className="headerPageOrder d-flex flex-row justify-content-between align-items-center">
                    <h2 className="d-flex justify-content-start" style={{ margin: 0 }}>{`Orders (${renderOrders.length})`}</h2>
                </div>
                <div className="showOrder">
                    <div className="header d-flex flex-row justify-content-between">
                        <div className="inputSearch d-flex flex-row align-items-center">
                            <Icon type="search" />
                            <input onChange={this.searchFilter} className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className="d-flex justify-content-end selectedDate">
                            <div className="dateFrom d-flex flex-row justify-content-center align-items-center">
                                <p>FROM</p>
                                <DatePicker onChange={this.OnFromDateChange} format={dateFormatList} />
                            </div>
                            <div className="dateEnd d-flex flex-row justify-content-center align-items-center">
                                <p>TO</p>
                                <DatePicker onChange={this.OnToDateChange} format={dateFormatList} />
                            </div>
                        </div>
                    </div>
                    <div className="tableProduct">
                        <div className="headerTable d-flex">
                            <div className="column1 text-center">Mã</div>
                            <div className="column2">Khách hàng</div>
                            <div className="column3">Tổng tiền</div>
                            <div className="column4 text-center">Ngày đặt hàng</div>
                            <div className="column5 text-center">Ngày hoàn tất</div>
                            <div className="column6 text-center">Tình trạng</div>
                            <div className="column7"></div>
                            <div className="column8"></div>
                        </div>
                        {/* content */}
                        {renderOrders.map((order, index) => {
                            if (order != null) {
                                let currentCustomer = customers.find(customer => customer.customerID === order.customerID) || { cusName: '' }
                                return (
                                    <div key={index} className="contentTable d-flex flex-row align-items-center">
                                        <div className="column1 text-center">{order.orderID}</div>
                                        <div className="column2">{currentCustomer.cusName}</div>
                                        <div className="column3">{order.total}</div>
                                        <div className="column4 text-center">{order.orderDate}</div>
                                        <div className="column5 text-center">{order.doneDate}</div>
                                        {/* <div className="column4 text-center"></div>
                                        <div className="column5 text-center"></div> */}
                                        <div className="column6 text-center">{order.status}</div>
                                        <div className="column7">
                                            <div className="d-flex flex-row justify-content-center align-items-center">
                                                <Popover
                                                    placement="left"
                                                    content={ContentNoteAnt(
                                                        order.notes,
                                                        order.id,
                                                        this.OnChangeInputNoteAnt,
                                                        this.onNoteUpdate
                                                    )}
                                                    trigger="click"
                                                >
                                                    <a className="d-flex flex-row align-items-center"><i className="far fa-file-alt"></i></a>
                                                </Popover>
                                            </div>
                                        </div>
                                        <div className="column8 d-flex flex-row justify-content-center align-items-center">
                                            <div style={{ float: 'left' }}>
                                                <Popover placement="left" content={ContentUpdateAnt(this.onStatusChange, order.id)} trigger="click">
                                                    <Button className="buttonUpdate">Update</Button>
                                                </Popover>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div >
        );
    }
}

export default Order;
