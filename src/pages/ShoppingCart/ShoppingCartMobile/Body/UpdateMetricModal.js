import React, { Component } from "react";
import { Modal, Button } from "antd";
import classNames from "classnames";
import NumberFormat from 'react-number-format';

const SIZE = ["XS", "S", "M", "L", "XL", "XXL"];

export default class UpdateMetricModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalText: "Content of the modal",
            confirmLoading: false
        };
    }

    handleOk = () => {
        this.setState({
            confirmLoading: true
        });
        setTimeout(() => {
            this.props.onModalVisible(false);
            this.setState({
                confirmLoading: false
            });
        }, 2000);
    };

    handleCancel = () => {
        this.props.onModalVisible(false);
    };

    onBodyScaleChange = (e) => {
        let { bodyMetric } = this.state;
        bodyMetric[Number(e.target.id)] = e.target.value !== '' ? Number(e.target.value) : '' ;
        this.props.onBodyMetricUpdated(bodyMetric);
        this.setState({
            bodyMetric,
        })
    }

    render() {
        const { modalVisible } = this.props;
        return (
            <div>
                <Modal
                    title="THAY ĐỔI SỐ ĐO"
                    visible={modalVisible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                    cancelText="HỦY"
                    okText="XÁC NHẬN"
                >
                    <div className="changeSelection_wrapper">
                        <div className="sizeSelection d-flex">
                            {SIZE.map((size, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="col-2 text-center"
                                    >
                                        <div
                                            className={classNames("tilteSize", {
                                                // actived: activeStatus[index]
                                            })}
                                        >
                                            <a
                                                id={index}
                                                name={size}
                                                onClick={e =>
                                                    this.onSizeSelected(e)
                                                }
                                            >
                                                {size}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="scaleBody d-flex flex-column justify-content-between">
                            <div className="title__scaleBody">
                                <span>
                                    *Với mong muốn mang lại một sản phầm vừa vặn
                                    nhất, bạn vui lòng cung cấp số đo
                                </span>
                            </div>
                            <div className="inputScale d-flex flex-row align-items-center">
                                <div className="col-4">
                                    <div className="inputBodyScale">
                                        <span>Vòng 1</span>
                                        <NumberFormat
                                            id="0"
                                            placeholder="(Ngực) cm"
                                            // value={bodyMetric[0]}
                                            className="ant-input"
                                            format="###"
                                            onChange={this.onBodyScaleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="inputBodyScale">
                                        <span>Vòng 2</span>
                                        <NumberFormat
                                            id="1"
                                            placeholder="(Eo) cm"
                                            // value={bodyMetric[1]}
                                            className="ant-input"
                                            format="###"
                                            onChange={this.onBodyScaleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="inputBodyScale">
                                        <span>Vòng 3</span>
                                        <NumberFormat
                                            id="2"
                                            placeholder="(Mông) cm"
                                            // value={bodyMetric[2]}
                                            className="ant-input"
                                            format="###"
                                            onChange={this.onBodyScaleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
