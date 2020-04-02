import React, { Component } from "react";
import { Modal, Button } from "antd";
import classNames from "classnames";
import NumberFormat from "react-number-format";

const SIZE = ["XS", "S", "M", "L", "XL", "XXL"];

export default class UpdateMetricModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmLoading: false,
            activeStatus: new Array(SIZE.length).fill(false),
            currentMetric: ["", "", ""],
            currentSize: "",
            isUpdate: false,
            errorValidate: false
        };
    }

    componentDidMount() {
        const { product } = this.props;
        let { currentMetric, currentSize, activeStatus } = this.state;
        if (product != null) {
            let currentSizeIndex = SIZE.indexOf(product.size);
            activeStatus[currentSizeIndex] = true;
            currentMetric = product.bodyMetric;
            currentSize = product.size;
            this.setState({
                activeStatus,
                currentMetric,
                currentSize
            });
        }
    }

    handleOk = () => {
        const { currentSize, currentMetric } = this.state;
        let isDataValidated = this.onDataValidate();
        if (isDataValidated) {
            this.setState({
                confirmLoading: true
            });
            setTimeout(() => {
                this.props.onUpdateToStorage(
                    currentSize,
                    currentMetric,
                    this.props.currentIndex
                );
                this.setState({
                    confirmLoading: false,
                    errorValidate: false
                });
            }, 2000);
        } else {
            this.setState({
                errorValidate: true
            });
        }
    };

    handleCancel = () => {
        this.props.onModalVisible(false);
        const { product } = this.props;
        let { currentMetric, currentSize, activeStatus } = this.state;
        if (product != null) {
            let currentSizeIndex = SIZE.indexOf(product.size);
            activeStatus[currentSizeIndex] = true;
            currentMetric = product.bodyMetric;
            currentSize = product.size;
            this.setState({
                activeStatus,
                currentMetric,
                currentSize
            });
        }
    };

    onSizeSelected = (index, size) => {
        if (index != null && index > -1) {
            this.props.onModalUpdate();
            this.setState({
                currentSize: size
            });
        }
    };

    onBodyScaleChange = e => {
        let { currentMetric } = this.state;
        currentMetric[Number(e.target.id)] =
            e.target.value !== "" ? Number(e.target.value) : "";
        this.props.onModalUpdate();
        this.setState({
            currentMetric
        });
    };

    onDataValidate = () => {
        const { currentMetric, currentSize } = this.state;
        let isSizeSelected = currentSize != null || currentSize != "";
        let isAllMetricFill = !currentMetric.includes("");
        let isAllMetricEmpty = currentMetric.every(metric => metric === "");
        if (
            (isSizeSelected && isAllMetricFill) ||
            (isSizeSelected && isAllMetricEmpty) ||
            (!isSizeSelected && isAllMetricFill)
        ) {
            return true;
        } else {
            return false;
        }
    };

    render() {
        const { product, modalVisible } = this.props;
        let {
            currentMetric,
            activeStatus,
            errorValidate,
            currentSize
        } = this.state;
        let currentSizeIndex = SIZE.indexOf(currentSize);
        activeStatus.fill(false);
        activeStatus[currentSizeIndex] = true;
        return (
            <div>
                <Modal
                    title="THAY ĐỔI SỐ ĐO"
                    visible={modalVisible}
                    centered={true}
                    confirmLoading={this.state.confirmLoading}
                    onOk={this.handleOk}
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
                                            id={index}
                                            onClick={() =>
                                                this.onSizeSelected(index, size)
                                            }
                                            className={classNames("titleSize", {
                                                actived: activeStatus[index]
                                            })}
                                        >
                                            <a id={index} name={size}>
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
                                            value={currentMetric[0]}
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
                                            value={currentMetric[1]}
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
                                            value={currentMetric[2]}
                                            className="ant-input"
                                            format="###"
                                            onChange={this.onBodyScaleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <small
                                className={classNames({
                                    error: errorValidate,
                                    errorUnvisible: !errorValidate
                                })}
                            >
                                *Vui lòng cung cấp dủ số đo 3 vòng hoặc bỏ trống
                                và chọn size phù hợp.
                            </small>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
