import React, { Component } from 'react';
import './SizeSelection.scss';
import ReactGA from 'react-ga';
// import libs ant design
import { Icon, message, Modal } from 'antd';
// import component
import NavBar from './navbarPage';
import Selection from './Selection';
import BodyScale from './BodyScale';

export default class SizeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelectedProduct: { ...this.props.currentSelectedProduct },
        }
    }
    onSizeUpdated = (size) => {
        let { currentSelectedProduct } = this.state;
        currentSelectedProduct.size = size;
        this.setState({
            currentSelectedProduct
        })
    }

    onBodyMetricUpdated = (bodyMetric) => {
        let { currentSelectedProduct } = this.state;
        currentSelectedProduct.bodyMetric = bodyMetric;
        this.setState({
            currentSelectedProduct
        })
    }

    onConfirmButtonClicked = () => {
        const { currentSelectedProduct } = this.state;
        let isSizeSelected = currentSelectedProduct.size != null;
        let isAllMetricFill = !currentSelectedProduct.bodyMetric.includes('')
        let isAllMetricEmpty = currentSelectedProduct.bodyMetric.every(metric => metric === '');
        if ((isSizeSelected && isAllMetricFill) || (isSizeSelected && isAllMetricEmpty) || (!isSizeSelected && isAllMetricFill)) {
            this.props.onSelectedProductUpdating(currentSelectedProduct);
            this.props.onContentChange('confirm');
            if (isSizeSelected) {
                ReactGA.event({
                    category: 'SizeSelection',
                    action: 'Selected Size',
                    label: `${currentSelectedProduct.size}`
                });
            }
        } else {
            message.error('Vui lòng chọn size hoặc cung cấp 3 số đo cơ thể!');
        }
    }

    onDescriptionClicked = () => {
        Modal.info({
            title: 'Mô tả thiết kế & vải',
            content: (
                <div>
                    <p>{this.props.currentDesignInfo.description}</p>
                </div>
            ),
            // onOk() { },
        });
    }


    render() {
        const { currentSelectedProduct } = this.state;
        return (
            <div className='pageSizeSelection'>
                <NavBar
                    onContentChange={(step) => this.props.onContentChange(step)}
                    totalProductsOnCart={this.props.totalProductsOnCart}
                />
                <div className='bodyPage'>
                    <div className='infProduct d-flex flex-column align-items-center justify-content-center'>
                        <div className='title__infProduct'>
                            <div className='nameProduct'>
                                <span>ĐẦM CÔNG CHÚA</span>
                            </div>
                            <div className='info d-flex flex-row align-items-center justify-content-center'>
                                <span onClick={this.onDescriptionClicked} >
                                    Mô tả thiết kế & vải
                                    <Icon type='info-circle' />
                                </span>
                            </div>
                        </div>
                        <div className='imgProduct'>
                            <span
                                style={{ height: '100%', width: '100%', textAlign: 'center', fontSize: '60' }}
                            >
                                {currentSelectedProduct.size}
                            </span>
                        </div>
                        <Selection currentSelectedProduct={currentSelectedProduct} onSizeUpdated={this.onSizeUpdated} />
                        <BodyScale currentSelectedProduct={currentSelectedProduct} onBodyMetricUpdated={this.onBodyMetricUpdated} />
                    </div>
                </div>
                <div
                    className='buttonApcept d-flex flex-row align-items-center justify-content-center'
                    onClick={this.onConfirmButtonClicked}
                >
                    <a>Xác nhận </a>
                    <Icon type='arrow-right' />
                </div>
            </div>
        );
    }
}
