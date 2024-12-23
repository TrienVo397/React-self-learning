import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import ViewUserDetail from './view.user.detail';
import { deleteUserApi } from '../../services/api.service';



const UserTable = (props) => {
  const { dataUsers, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isDrawerUserDetailOpen, setIsDrawerUserDetailOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const handleDelete = async (id) => {
    const response = await deleteUserApi(id);
        if (response.data) {
            notification.success({
                message: 'Delete user successfully',
                description: 'Delete user successfully'
            })
            await loadUser()
            resetAndCloseModal()
        }
        else {
            notification.error({
                message: "Error Deleting user",
                description: JSON.stringify(response.message)
            })
        }
        console.log("Check res: ", response);
      }


  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',// mapping data from dataUsers
      render: (_, record) => //ứng với mỗi user, sẽ chạy lần lượt vào hàm render này
      (
        <span onClick={() => {
          console.log("check record: ", record)
          setDataUpdate(record) //use object dataUpdate to store data of user from record
          setIsDrawerUserDetailOpen(true)
        }} style={{ cursor: "pointer", color: "blue" }}
        >{record._id}</span> //trả về giá trị của _id của user đó
      )
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined onClick={() => {
            console.log("check record: ", record)
            setDataUpdate(record) //use object dataUpdate to store data of user from record
            setIsModalUpdateOpen(true)

          }} style={{ cursor: "pointer", color: "orange" }} />

          <Popconfirm
            title="Delete the user"
            description="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>

        </div>
      ),
    },
  ];
  //   const data = [
  //     {
  //       key: '1',
  //       name: 'John Brown',
  //       age: 32,
  //       address: 'New York No. 1 Lake Park',
  //       tags: ['nice', 'developer'],
  //     },
  //     {
  //       key: '2',
  //       name: 'Jim Green',
  //       age: 42,
  //       address: 'London No. 1 Lake Park',
  //       tags: ['loser'],
  //     },
  //     {
  //       key: '3',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sydney No. 1 Lake Park',
  //       tags: ['cool', 'teacher'],
  //     },
  //   ];

  // const column = [

  // ];


  console.log('check mount 000 ')


  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}

      />
      <ViewUserDetail
        isDrawerUserDetailOpen={isDrawerUserDetailOpen}
        setIsDrawerUserDetailOpen={setIsDrawerUserDetailOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      ></ViewUserDetail>
    </>

  );
}

export default UserTable;