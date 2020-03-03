import {
    Form,
    Input,
    Button,
} from 'antd';
import React from 'react';
import './CheckOutForm.scss'

export default class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        const { loading } = this.props;
        this.setState({
            loading
        })
    }
    

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({ loading: true });
                this.props.uploadNewOrder(values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="Tên" className="d-flex justify-content-between" style={{ width: "100%" }}>
                    {getFieldDecorator('name', {
                        rules: [
                            {

                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập tên',
                            },
                        ],
                    })(<Input placeholder="Tên người nhận" />)}
                </Form.Item>
                <Form.Item label="Điện thoại" className="d-flex justify-content-between" style={{ width: "100%" }}>
                    {getFieldDecorator('phone', {
                        rules: [
                            {
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại người nhận',
                            },
                        ],
                    })(<Input placeholder="Số điện thoại người nhận" />)}
                </Form.Item>
                <Form.Item label="Địa chỉ" className="d-flex justify-content-between" style={{ width: "100%" }}>
                    {getFieldDecorator('address', {
                        rules: [
                            {

                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập địa chỉ người nhận',
                            },
                        ],
                    })(<Input placeholder="Địa chỉ người nhận" />)}
                </Form.Item>
                <Form.Item label="Email" className="d-flex justify-content-between" style={{ width: "100%" }}>
                    {getFieldDecorator('email')(<Input placeholder="Email" />)}
                </Form.Item>
                <Form.Item style={{ width: "100%" }} className="d-flex justify-content-end checkOutButton">
                    <Button type="primary" htmlType="submit" loading={this.state.loading}>
                        Đặt Hàng
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export const CheckOutForm = Form.create({ name: 'register' })(FormInput);
