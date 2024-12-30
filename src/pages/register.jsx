import { useState } from 'react';
import { Input, Button, notification, Form } from 'antd';

const RegisterPage = () => {

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
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
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
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