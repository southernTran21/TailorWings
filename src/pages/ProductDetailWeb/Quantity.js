import React, { Component } from 'react';
import './ProductDetail.css'

class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    increaseQuantity = () => {
        const { quantity } = this.state;
        this.setState({ quantity: quantity + 1 });
        this.props.quantityUpdateHandling(quantity + 1);
    }

    decreaseQuantity = () => {
        const { quantity } = this.state;
        if (quantity > 1) {
            this.setState({ quantity: quantity - 1 });
            this.props.quantityUpdateHandling(quantity - 1);
        }
    }

    onQuantityChangeHandling = (event) => {
        const quantity = (event.target.validity.valid) ? event.target.value : this.state.quantity;
        this.setState({ quantity: Number(quantity) });
        this.props.quantityUpdateHandling(Number(quantity))
    }


    render() {
        return (
            <div className="input-group number-spinner d-flex justify-content-center">
                <span className="input-group-btn" style={{height:"35px" }}>
                    <button onClick={this.decreaseQuantity} className="btn btn-default" data-dir="dwn"><i className="fas fa-minus"></i></button>
                </span>
                <input
                    onChange={(event) => this.onQuantityChangeHandling(event)}
                    type="text"
                    pattern="[0-9]*"
                    className="text-center"
                    value={this.state.quantity}
                    style={{ width: "35px", height:"35px" }}>
                </input>
                <span className="input-group-btn" style={{height:"35px" }}>
                    <button onClick={this.increaseQuantity} className="btn btn-default" data-dir="up"><i className="fas fa-plus"></i></button>
                </span>
            </div>
        );
    }
}

export default Quantity;