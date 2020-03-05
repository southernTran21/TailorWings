import React, { Component } from 'react';
import './SizeSelection.scss';
import NumberFormat from 'react-number-format';

export default class BodyScale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyMetric: [...this.props.currentSelectedProduct.bodyMetric]
        }
    }

    onBodyScaleChange = (e) => {
        let { bodyMetric } = this.state;
        bodyMetric[Number(e.target.id)] = e.target.value !== '' ? Number(e.target.value) : '' ;
        this.props.onBodyMetricUpdated(bodyMetric);
        this.setState({
            bodyMetric,
        })
    }

    render() {
        const { bodyMetric } = this.state;
        return (
            <div className='scaleBody d-flex flex-column justify-content-between'>
                <div className='title__scaleBody'>
                    <span>
                        *Với mong muốn mang lại một sản phầm vừa vặn nhất, bạn
                        vui lòng cung cấp số đo
                    </span>
                </div>
                <div className='inputScale d-flex flex-row align-items-center'>
                    <div className='col-4'>
                        <div className='inputBodyScale'>
                            <span>Vòng 1</span>
                            <NumberFormat
                                id='0'
                                placeholder='(Ngực) cm'
                                value={bodyMetric[0]}
                                className='ant-input'
                                format="###"
                                onChange={this.onBodyScaleChange}
                            />
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='inputBodyScale'>
                            <span>Vòng 2</span>
                            <NumberFormat
                                id='1'
                                placeholder='(Eo) cm'
                                value={bodyMetric[1]}
                                className='ant-input'
                                format="###"
                                onChange={this.onBodyScaleChange}
                            />
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='inputBodyScale'>
                            <span>Vòng 3</span>
                            <NumberFormat
                                id='2'
                                placeholder='(Mông) cm'
                                value={bodyMetric[2]}
                                className='ant-input'
                                format="###"
                                onChange={this.onBodyScaleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
