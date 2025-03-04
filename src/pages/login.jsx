import { useState, useContext } from 'react';
import { Input, Button, notification, Form, Row, Col, Divider, message } from 'antd';
import { loginApi, registerUserApi } from '../services/api.service';
import { NavLink, useNavigate } from 'react-router-dom';
import Password from 'antd/es/input/Password';
import { AuthContext } from '../components/context/auth.context';

const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { setUser } = useContext(AuthContext);

    const onFinish = async (values) => {
        setLoading(true)
        console.log('Success:', values);
        const resLogin = await loginApi(
            values.email,
            values.password
        )
        if (resLogin.data) {
            message.success(`Login successfully!, ${resLogin.data.user.fullName}`)
            localStorage.setItem("access_token", resLogin.data.access_token)
            setUser(resLogin.data.user);
            navigate('/')
        }
        else {
            notification.error({
                message: 'Login failed',
                description: JSON.stringify(resLogin.message)
            })
        }
        setLoading(false)

    }

    return (
        <Row justify={"center"} style={{ marginTop: '50px' }}>
            <Col xs={24} md={12}>
                <fieldSet style={{
                    padding: '20px',
                    margin: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                }}>
                    <legend>Đăng Nhập</legend>
                    <Form
                        form={form}
                        layout='vertical'
                        name="basic"
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        {/* Email */}
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: 'Wrong email format'
                                }
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
                                { min: 5, message: 'Password must be minimum 5 characters.' },


                            ]}
                        >
                            <Input.Password onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                        form.submit()
                                }
                            }} />
                        </Form.Item>

                        <Row justify={"space-between"} align={"middle"} style={{ marginTop: '20px' }}>
                            <Button loading={loading}
                                type='primary' onClick={() => form.submit()}>Login</Button>
                            <NavLink to="/"><p type="primary">Go to home page</p></NavLink>
                        </Row>
                        <Divider></Divider>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <p >Chưa có tài khoản? &nbsp;
                                <NavLink to="/register"><span type="primary">Đăng kí tại đây</span></NavLink>
                            </p>
                        </div>
                    </Form>
                </fieldSet>
            </Col>
        </Row>

    )
}

export default LoginPage;