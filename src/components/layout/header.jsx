import { Link, NavLink } from 'react-router-dom'
// import "./header.css"
import { Menu } from 'antd';
import { AuditOutlined, UsergroupDeleteOutlined, HomeOutlined } from '@ant-design/icons';
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
    ];
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header