import { useState } from 'react';
import { Input, Button, notification, Form, Row, Col, Divider } from 'antd';
import { registerUserApi } from '../services/api.service';
import { useNavigate, NavLink } from 'react-router-dom';

const RegisterPage = () => {

    const navigate = useNavigate();
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        console.log('Success:', values);
        const resRegister = await registerUserApi(
            values.fullname,
            values.email,
            values.password,
            values.phone);
        if (resRegister.data) {
            notification.success({
                message: 'Register successfully',
                description: 'Register successfully'
            })
            navigate('/login')
        }

        else {
            notification.error({
                message: 'Register failed',
                description: JSON.stringify(resRegister.message)
            })
        }

    }

    return (
        <Row justify={"center"} style={{ marginTop: '20px' }}>
            <Col xs={24} md={12}>
                <div
                    style={{
                        padding: '20px',
                        margin: '5px',
                    }}>
                    <Row justify={"center"}>
                        <h3>Đăng kí tài khoản</h3>
                    </Row>
                    <Form
                        form={form}
                        layout='vertical'
                        name="basic"
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {/* Full name */}
                        <Form.Item
                            label="Full Name"
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        {/* Email */}
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        {/* password */}

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                { min: 5, message: 'password must be minimum 5 characters.' },
                                { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: 'Password must contain at least 1 letter and 1 number.' }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        {/* phone number */}
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {
                                    pattern: /^[0-9]*$/,
                                    message: 'Please input your phone number!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                     <Button type='primary' onClick={() => form.submit()}>Register</Button>
                        <Divider></Divider>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <p >Đã có tài khoản? &nbsp;
                                <NavLink to="/login">Đăng nhập tại đây</NavLink>
                            </p>
                        </div>
                    </Form> 
                </div>
            </Col>
        </Row>

    )
}

export default RegisterPage;