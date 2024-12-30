import { Link, NavLink } from 'react-router-dom'
// import "./header.css"
import { Menu } from 'antd';
import { AuditOutlined, UsergroupDeleteOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';



const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    const items = [
        {
            label: <Link to ={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to = {"/users"}>Users</Link> ,
            key: 'users',
            icon: <UsergroupDeleteOutlined />,
        },
        {
            label: <Link to = {"/book"}>Books</Link> ,
            key: 'book',
            icon: <AuditOutlined />,
        },
        {
            label:  "Setting",
            key: 'setting',
            icon:<SettingOutlined />,
            children: [
                {
                    label: <Link to = {"/login"}>Đăng nhập</Link> ,
                    key: 'login',
                    // icon: <AuditOutlined />,
                },
                {
                    label: <Link to = {"/"}>Đăng xuất</Link> ,
                    // key: 'book',
                    // icon: <AuditOutlined />,
                },
              ],
        },
    ];
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header