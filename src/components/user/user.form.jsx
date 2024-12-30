

import { useState } from 'react';
import { Input, Button, notification, Modal } from 'antd';
import { createUserApi } from '../../services/api.service';

const UserForm = (props) => {
    const {loadUser} = props
    console.log("Check props: ", props)
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    // useEffect(() => {
    //     handleSubmitButton()
    // }, [])


    const handleSubmitButton = async () => {
        const response = await createUserApi(fullName, email, password, phone);
        if (response.data) {
            notification.success({
                message: 'Create user successfully',
                description: 'Create user successfully'
            })
            resetAndCloseModal()
            await loadUser()
        }
        else {
            notification.error({
                message: "Error creating user",
                description: JSON.stringify(response.message)
            })
        }
        console.log("Check res: ", response);
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPhone('')
        setPassword("")
    }
    return (
        <div className='user-form' style={{ margin: '20px 0' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>User Table</h1>
                <Button type='primary'
                    onClick={() =>setIsModalOpen(true)}>Create User</Button>
            </div>

            <Modal title="Create User"
                maskClosable={false}
                open={isModalOpen}
                onOk={handleSubmitButton}
                onCancel={() => { setIsModalOpen(false) }}
                okText="Create">

                <div style={{ display: 'flex', flexDirection: "column", gap: '15px' }}>
                    <div>
                        <span>Full Name</span>
                        <Input value={fullName}
                            onChange={(event) =>
                                setFullName(event.target.value)
                            } />
                    </div>

                    <div>
                        <span>Email</span>
                        <Input value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div>
                        <span>Phone Number</span>
                        <Input value={phone}
                            onChange={(event) => setPhone(event.target.value)} />
                    </div>
                </div>
            </Modal>

        </div>
    )
}
export default UserForm;