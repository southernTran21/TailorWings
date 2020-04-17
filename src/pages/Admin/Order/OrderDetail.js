import React, { Component } from 'react'

export default class OrderDetail extends Component {
    render() {
        return (
            <div>
                {this.props.currentOrderID}
            </div>
        )
    }
}
