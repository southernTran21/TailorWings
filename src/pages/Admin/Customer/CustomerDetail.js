/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Popover, Button, Input, Switch } from 'antd'
import { setDocument } from '../../../services/Fundamental'

import './CustomerDetail.scss';

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
            <a name='new' onClick={(e) => onStatusChange(e, orderID)} >New</a>
            <a name='repair' onClick={(e) => onStatusChange(e, orderID)} >Repair</a>
            <a name='done' onClick={(e) => onStatusChange(e, orderID)} >Done</a>
        </div>
    )
}


export class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCustomer: {},
            relatedOrders: [],
            isEdit: false
        }
    }

    componentDidMount() {
        const { customers, orders } = this.props;
        if (window.location.pathname === '/admin/customer-detail') {
            let currentCustomerID = window.location.hasOwnProperty('search') ? window.location.search.match(/id=(.*)\b/)[1] : '';
            if (currentCustomerID !== '') {
                let currentCustomer = customers.filter((customer) => {
                    return customer.customerID === currentCustomerID;
                })[0] || { customerID: '' }
                let relatedOrders = orders.filter((order) => {
                    return currentCustomer.customerID === order.customerID;
                })
                this.setState({
                    currentCustomer,
                    relatedOrders
                })
            }
        }
    }

    timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        if (Number(month) < 10) {
            month = '0' + month;
        }
        if (Number(date) < 10) {
            date = '0' + date;
        }
        var time = date + '/' + month + '/' + year;
        return time;
    }

    relatedOrderList = () => {
        const { relatedOrders, currentCustomer } = this.state;
        let renderRelatedOrders = [];
        if (relatedOrders.length > 0) {
            renderRelatedOrders = relatedOrders.map((order, index) => {
                let { orderID, total, orderDate, doneDate, status, notes, id } = order;
                total = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + "đ";
                orderDate = this.timeConverter(orderDate.seconds);
                doneDate = this.timeConverter(doneDate.seconds);
                return (
                    <div key={index} className="contentTable d-flex flex-row align-items-center">
                        <div className="column1 text-center">{orderID}</div>
                        <div className="column2">{currentCustomer.cusName}</div>
                        <div className="column3">{total}</div>
                        <div className="column4 text-center">{orderDate}</div>
                        <div className="column5 text-center">{doneDate}</div>
                        <div className="column6 text-center">{status}</div>
                        <div className="column7">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <Popover
                                    placement="left"
                                    content={ContentNoteAnt(
                                        notes,
                                        id,
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
                                <Popover placement="left" content={ContentUpdateAnt(this.onStatusChange, id)} trigger="click">
                                    <Button className="buttonUpdate">Update</Button>
                                </Popover>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return renderRelatedOrders;
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        let { currentCustomer } = this.state;
        currentCustomer = {
            ...currentCustomer,
            [name]: value
        }
        this.setState({
            currentCustomer,
            isEdit: true
        })
    }

    onBlockChange = () => {
        let { currentCustomer } = this.state;
        currentCustomer.lock = !currentCustomer.lock;
        this.setState({
            currentCustomer,
            isEdit: true
        })
    }

    onCustomerUpdate = () => {
        const { currentCustomer } = this.state;
        setDocument("customers", currentCustomer, currentCustomer.id)
            .then((success) => {
                if (success) {
                    window.history.back();
                }
            })
    }


    OnChangeInputNoteAnt = (e, orderID) => {
        let { relatedOrders } = this.state;
        let newNote = e.target.value;
        relatedOrders.find((order) => {
            if (order.id === orderID) {
                order.notes = newNote;
            }
        })
        this.setState({
            relatedOrders
        })
    };

    onNoteUpdate = (orderID) => {
        const { relatedOrders } = this.state;
        let changedOrder = relatedOrders.find((order) => {
            return order.id === orderID
        }) || { notes: 'none' };
        if (changedOrder.notes !== 'none') {
            setDocument('orders', changedOrder, changedOrder.id);
        } else {
            console.log('không tìm thấy thông tin đơn hàng được thay đổi');
        }
    }

    onStatusChange = (e, orderID) => {
        const { relatedOrders } = this.state;
        let newStatus = e.target.name;
        let changedOrder = relatedOrders.find((order) => {
            return order.id === orderID;
        }) || { status: 'none' };
        if (changedOrder.status !== 'none') {
            changedOrder.status = newStatus;
            setDocument('orders', changedOrder, changedOrder.id);
        } else {
            console.log('không tìm thấy thông tin đơn hàng được thay đổi');
        }
    }

    render() {
        const { cusName, phone, lock, email, rate, promo, address } = this.state.currentCustomer;
        return (
            <div className="pageCustomerDetail">
                <div className="CustomerDetail">
                    <div className="headerpageCustomerDetail d-flex flex-row justify-content-between align-items-center">
                        <h2 className="d-flex justify-content-start" style={{ margin: 0 }}>{'Customer - ' + cusName}</h2>
                        <Button
                            className="buttonSaveCustomer d-flex align-items-center"
                            onClick={this.onCustomerUpdate}
                        >
                            Save
                        </Button>
                    </div>
                    <div className="contentBody d-flex">
                        <div className="col-6">
                            <div className="contentInput d-flex">
                                <p className="d-flex flex-row align-items-center">Name</p>
                                <div className="inputName d-flex flex-row align-items-center">
                                    <input
                                        name='cusName'
                                        value={cusName}
                                        className="form-control"
                                        type="text"
                                        onChange={(e) => this.onInputChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="contentInput d-flex">
                                <p className="d-flex flex-row align-items-center">Phone</p>
                                <div className="inputPhone d-flex flex-row align-items-center">
                                    <input
                                        name='phone'
                                        value={phone}
                                        className="form-control"
                                        type="text"
                                        onChange={(e) => this.onInputChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="contentInput d-flex">
                                <p className="d-flex flex-row align-items-center">Blocked</p>
                                <div className="d-flex flex-row align-items-center">
                                    <Switch checked={lock} onChange={this.onBlockChange} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="contentInput d-flex">
                                <p className="d-flex flex-row align-items-center">Email</p>
                                <div className="inputEmail d-flex flex-row align-items-center">
                                    <input
                                        name='email'
                                        value={email}
                                        className="form-control"
                                        type="text"
                                        onChange={(e) => this.onInputChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="contentInput d-flex">
                                <p className="d-flex flex-row align-items-center">Rate</p>
                                <div className="inputRate d-flex flex-row align-items-center">
                                    <input
                                        name='rate'
                                        value={rate}
                                        className="form-control"
                                        type="text"
                                        onChange={(e) => this.onInputChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="contentInput d-flex">
                                <p className="d-flex flex-row align-items-center">Promo</p>
                                <div className="inputPromo d-flex flex-row align-items-center">
                                    <input
                                        name='promo'
                                        value={promo}
                                        className="form-control"
                                        type="text"
                                        onChange={(e) => this.onInputChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inputAddress d-flex col-12">
                        <p className="d-flex flex-row align-items-center">Address</p>
                        <div className="inputAddress d-flex flex-row align-items-center">
                            <input
                                name='address'
                                value={address}
                                className="form-control"
                                type="text"
                                onChange={(e) => this.onInputChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="pageOrderHistory">
                    <div className="headerPageOrderHistory d-flex flex-row justify-content-between align-items-center">
                        <h4 className="d-flex justify-content-start" style={{ margin: 0 }}>Orders history</h4>
                    </div>
                    <div className="showOrderHistory">
                        <div className="tableProduct">
                            <div className="headerTable d-flex">
                                <div className="column1 text-center">Order ID</div>
                                <div className="column2">Cus_Name</div>
                                <div className="column3">Total</div>
                                <div className="column4 text-center">Ordered Date</div>
                                <div className="column5 text-center">Done Date</div>
                                <div className="column6 text-center">Status</div>
                                <div className="column7"></div>
                                <div className="column8"></div>
                            </div>
                            {this.relatedOrderList()}
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default CustomerDetail;
