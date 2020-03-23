/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './BodyScale.scss'
import { Collapse } from 'antd';
import { Input } from 'antd';

const { Panel } = Collapse;

export class BodyScale extends Component {
    render() {
        return (
            <div className="bodyScale">
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="Số đo cơ thể" key="1">
                        <p> * Với mong muốn mang lại một sản phầm vừa vặn nhất, bạn vui lòng cung cấp số đo:</p>
                        <div className="row" style={{margin:0}}>
                            <a className="col-md-4 col-sm-4 col-lg-4" style={{padding:0}}>Vòng 1:<Input placeholder="(ngực) cm" /></a>
                            <a className="col-md-4 col-sm-4 col-lg-4" style={{padding:0}}>Vòng 2:<Input placeholder="(eo) cm" /></a>
                            <a className="col-md-4 col-sm-4 col-lg-4" style={{padding:0}}>Vòng 3:<Input placeholder="(mông) cm" /></a>
                        </div>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default BodyScale;
