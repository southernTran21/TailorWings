import React, { Component } from 'react'

export default class ProductImage extends Component {
    render() {
        return (
            <div className='productImage d-flex'>
                <div className='left'>
                    <div className='top'>
                        <div className='image'></div>
                    </div>
                    <div className='bottom'>
                        <div className='image'></div>
                    </div>
                </div>
                <div className='right'>
                    <div className='image'></div>
                </div>
            </div>
        )
    }
}
