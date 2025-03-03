import { Link, NavLink } from 'react-router-dom'
// import "./header.css"
import { Menu } from 'antd';
import {
    AuditOutlined, UsergroupDeleteOutlined, HomeOutlined,
    SettingOutlined, LoginOutlined, AliwangwangOutlined
} from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';



const Header = () => {
    const [current, setCurrent] = useState('');
    // const {data}  = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    console.log(">>> AuthContext data from header", user)
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupDeleteOutlined />,
        },
        {
            label: <Link to={"/book"}>Books</Link>,
            key: 'book',
            icon: <AuditOutlined />,
        },

        ...(!user.id ? [{
            label: <Link to={"/login"}>Login</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),


        ...(user.id ? [{
            label: "Welcome " + user.fullName,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <Link to={"/"}>Đăng xuất</Link>,
                    // key: 'book',
                    // icon: <AuditOutlined />,
                },
            ],
        }] : []),



    ];
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header