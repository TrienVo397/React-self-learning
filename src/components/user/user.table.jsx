import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { fetchAllUsersApi } from '../../services/api.service';


const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([
    {
      name:"eric",age:20, address:"Hanoi"
    }
  ]);
  useEffect(() =>{
    console.log('check dataUsers 111: ')
    loadUser()

  },[])

    const columns = [
        {
          title: 'Id',
          dataIndex: '_id',// mapping data from dataUsers
        },
        {
          title: 'Full Name',
          dataIndex: 'fullName',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
    
    const column = [

    ];

    const loadUser = async() => {
      const res = await fetchAllUsersApi();
      setDataUsers(res.data)
    }
    console.log('check mount 000 ')


    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    );
}

export default UserTable;