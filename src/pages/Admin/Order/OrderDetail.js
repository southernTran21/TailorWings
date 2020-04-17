import React, { Component } from 'react'

export default class OrderDetail extends Component {
    render() {
        console.log('this.props', this.props)
        return (
            <div className='orderDetail'>
                {/* {this.props.currentOrderID} */}
                <div className="headerPageOrder d-flex flex-row justify-content-between align-items-center">
                    <h2
                        className="d-flex justify-content-start"
                        style={{ margin: 0 }}
                    >{`OrderDetail - ${this.props.currentOrderID}`}</h2>
                </div>
                <div className='showOrder'>
                    <div className='headContent d-flex justify-content-between'>
                        <span>Name Customer</span>
                        <span>Total Bill: 5.000.000</span>
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
                        <div className="contentTable d-flex">
                            <div className="column1">X019R038</div>
                            <div className="column2">Đầm Xòe Kelsey</div>
                            <div className="column3">M</div>
                            <div className="column4">[92, 60, 95]</div>
                            <div className="column5">1</div>
                            <div className="column6">0%</div>
                            <div className="column7">1262155</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
