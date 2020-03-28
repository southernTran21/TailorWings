import React, { Component } from "react";
import NumberFormat from 'react-number-format';

export default class BodyMetric extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyMetric: [...this.props.bodyMetric]
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
        const { bodyMetric } = this.props;
        return (
            <div className="inputBody d-flex justify-content-between">
                <div className="d-flex flex-column">
                    <span>NGỰC</span>
                    <NumberFormat
                        id="0"
                        placeholder="(Ngực) cm"
                        value={bodyMetric[0]}
                        className="ant-input"
                        format="###"
                        onChange={this.onBodyScaleChange}
                    />
                </div>
                <div className="d-flex flex-column">
                    <span>EO</span>
                    <NumberFormat
                        id="1"
                        placeholder="(Eo) cm"
                        value={bodyMetric[1]}
                        className="ant-input"
                        format="###"
                        onChange={this.onBodyScaleChange}
                    />
                </div>
                <div className="d-flex flex-column">
                    <span>MÔNG</span>
                    <NumberFormat
                        id="2"
                        placeholder="(Mông) cm"
                        value={bodyMetric[2]}
                        className="ant-input"
                        format="###"
                        onChange={this.onBodyScaleChange}
                    />
                </div>
            </div>
        );
    }
}
