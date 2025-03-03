import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUsersApi } from '../services/api.service';

const UsersPage = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);


    // empty array means this effect will only run once (like componentDidMount in classes)
    // not empty => next value !== prev value => run effect
    useEffect(() => {
        console.log('check dataUsers 111: ')
        loadUser()

    }, [current, pageSize])
    const loadUser = async () => {
        const res = await fetchAllUsersApi(current, pageSize);
        setDataUsers(res.data.result)
        setCurrent(res.data.meta.current);
        setPageSize(res.data.meta.pageSize);
        setTotal(res.data.meta.total)
    }
    console.log("Check current: ", current)

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