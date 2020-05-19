import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import React from 'react';
import './LoginForm.scss';
import auth from '../../app/auth'

export const TEMP_ACCOUNT = {
    userName: 'a',
    password: 'a'
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.username === TEMP_ACCOUNT.userName && values.password === TEMP_ACCOUNT.password) {
                    this.setState({ loading: true });
                    let accountInfo = {
                        username: values.username,
                        password: values.password,
                        isAuthen: true
                    }
                    sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo));
                    auth.login(() => {
                        this.props.history.push('/admin');
                    })
                    setTimeout(() => {
                        this.props.onLoginStatusChanged();
                        this.props.closeModal();
                        this.setState({ loading: false })
                        message.success('Đăng nhập thành công');
                    }, 2000);
                } else {
                    message.error('Đăng nhập thất bại: sai tên tài khoản hoặc mật khẩu');
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    {/* <a className="login-form-forgot" href="">
                        Forgot password
                    </a> */}
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                        Đăng nhập
                    </Button>
                    {/* Or <a href="">register now!</a> */}
                </Form.Item>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedLoginForm;
