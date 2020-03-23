import React, { Component } from "react";
import { Modal, Button } from 'antd';
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
            this.props.onModalVisible(false)
            this.setState({
                confirmLoading: false
            });
        }, 2000);
    };

    handleCancel = () => {
        this.props.onModalVisible(false)
    };

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
                    cancelText='HỦY'
                    okText='XÁC NHẬN'
                >
                    <p>{this.state.ModalText}</p>
                </Modal>
            </div>
        );
    }
}
