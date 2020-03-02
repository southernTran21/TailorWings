import React, { Component } from 'react';
import './Confirm.scss';

export default class ShowImage extends Component {
    render() {
        const { currentFabricInfo, currentSelectedProduct } = this.props;
        return (
            <div className='imgProduct'>
                <div className='col-6 float-left'>
                    <img className='image' src={currentSelectedProduct.image[0]} />
                </div>
                <div className='col-6 float-left'>
                    <img className='image' src={currentSelectedProduct.image[1]} />
                </div>
                <div className='col-6 float-left'>
                    <img className='image' src={currentSelectedProduct.image[2]} />
                </div>
                <div className='col-6 float-left'>
                    <img className='image' style={{ objectFit: 'cover' }} src={currentFabricInfo.image[0]}/>
                </div>
            </div>
        );
    }
}
