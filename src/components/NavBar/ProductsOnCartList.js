import React, { Component } from 'react'
import "./NavBar.css";

export default class ProductsOnCartList extends Component {
    render() {
        const { image, name, size, price, quantity } = this.props;
        let modifiedPrice = '';
        let imageURL = image || [];
        if ( price != null ) {
            modifiedPrice = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        }
        return (
            <div className="d-flex justify-content-between" style={{ marginBottom: 15 }}>
                <div className="image-contain">
                    <img src={imageURL[0]} width="100%"></img>
                </div>
                <div className="flex-grow-1  text-left d-flex flex-column justify-content-center align-items-start" style={{ color: "#000", paddingLeft: 10, paddingBottom: 10 }}>
                    <h6 className="card-title">{name}</h6>
                    <div className='d-flex flex-column justify-content-between align-items-start' style={{ height: "100%" }} >
                        <p className="card-text " style={{ lineHeight: 0.2, fontSize: 13 }}>Size: <span>{size}</span></p>
                        <p className="card-text" style={{ lineHeight: 0.2, fontSize: 13 }}>Số lượng: <span>{quantity}</span></p>
                        <p className="card-text" style={{ lineHeight: 0.2, fontSize: 13 }}>{modifiedPrice}<span > VND </span></p>
                    </div>
                </div>

            </div>
        )
    }
}
