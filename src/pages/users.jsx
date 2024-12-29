import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUsersApi } from '../services/api.service';

const UsersPage = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        console.log('check dataUsers 111: ')
        loadUser()

    }, [])
    const loadUser = async () => {
        const res = await fetchAllUsersApi(current, pageSize);
        setDataUsers(res.data.result)
        setCurrent(res.data.meta.current);
        setPageSize(res.data.meta.pageSize);
        setTotal(res.data.meta.total)
    }
    return (
        <div style={{ padding: '20px' }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                dataUsers={dataUsers}
                loadUser={loadUser}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}

            />
        </div>
    )

}

export default UsersPage