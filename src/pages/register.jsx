import { useState } from 'react';
import { Input, Button, notification, Form } from 'antd';
import { registerUserApi } from '../services/api.service';
import { useNavigate } from 'react-router-dom';

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
        <Form
            form={form}
            layout='vertical'
            name="basic"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <Form.Item name="remember" valuePropName="checked" label={null}>
                {/* <Checkbox>Remember me</Checkbox> */}
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

            <div style={{
                // display: 'flex', flexDirection: "column", gap: '15px',
                margin: '20px'
            }}>

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
            </div>
        </Form>

    )
}

export default RegisterPage;