import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUsersApi } from '../services/api.service';

const UsersPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        console.log('check dataUsers 111: ')
        loadUser()

    }, [])
    const loadUser = async () => {
        const res = await fetchAllUsersApi();
        setDataUsers(res.data)
    }
    return (
        <div style={{ padding: '20px' }}>
            <UserForm loadUser={loadUser}/>
            <UserTable dataUsers ={dataUsers} loadUser={loadUser}/>
        </div>
    )

}

export default UsersPage