/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { removePunctuation } from '../../../services/CommonFunction';

import './Customer.scss';

export class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderCustomers: []
        }
    }
    
    componentDidMount() {
        const { customers } = this.props;
        this.setState({
            renderCustomers: customers
        })
    }
    

    tableContent = () => {
        const { orders } = this.props;
        const { renderCustomers } = this.state;
        return renderCustomers.map((customer, index) => {
            let { cusName, customerID, phone, rate, promo } = customer;
            let relatedOrders = orders.filter((order) => {
                return customerID === order.customerID;
            }) || [];
            let total = relatedOrders.reduce((accumulator, current) => {
                return accumulator + current.total;
            }, 0);
            total = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + "đ";
            return (
                <div key={index} className="contentTable d-flex flex-row align-items-center">
                    <div className="column1">{customerID}</div>
                    <div className="column2">{cusName}</div>
                    <div className="column3">{phone}</div>
                    <div className="column4">{relatedOrders.length}</div>
                    <div className="column5">{total}</div>
                    <div className="column6">{rate}</div>
                    <div className="column7">{promo + '%'}</div>
                    <div className="column8">
                        <div style={{ float: 'left' }}>
                            <Link
                                to={{
                                    pathname: "/admin/customer-detail",
                                    search: `?id=${customerID}`
                                }}>
                                <Button className="buttonUpdate">Update</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
    }

    searchFilter = (e) => {
        let searchInput = removePunctuation(e.target.value.toLowerCase()) || "";
        let { renderCustomers } = this.state;
        const { customers } = this.props;
        renderCustomers = customers.filter((customer) => {
            let cusName = customer.cusName.toLowerCase();
            cusName = removePunctuation(cusName);
            return cusName.search( searchInput ) !== -1;
        })
        if ( renderCustomers.length === 0 ) {
            renderCustomers = customers.filter((customer) => {
                let customerID = customer.customerID.toLowerCase();
                return customerID.search( searchInput ) !== -1;
            })
        }
        this.setState({
            renderCustomers
        })
    }

    render() {
        return (
            <div>
                <div className="pageCustomer">
                    <div className="headerPageCustomer d-flex flex-row justify-content-between align-items-center">
                        <h2 className="d-flex justify-content-start" style={{ margin: 0 }}>Customers</h2>
                    </div>
                    <div className="showCustomer">
                        <div className="inputSearch d-flex flex-row align-items-center">
                            <Icon type="search" />
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.searchFilter} />
                        </div>
                        <div className="tableProduct">
                            <div className="headerTable d-flex">
                                <div className="column1">Cus ID</div>
                                <div className="column2">Cus Name</div>
                                <div className="column3">Phone</div>
                                <div className="column4">NoBills</div>
                                <div className="column5">Total</div>
                                <div className="column6">Rate</div>
                                <div className="column7">Promo</div>
                                <div className="column8"></div>
                            </div>
                            {this.tableContent()}
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default Customer;
