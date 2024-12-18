

import { useState } from 'react';
import { Input, Button, notification } from 'antd';
import { createUserApi } from '../../services/api.service';

const UserForm = () => {
    const [fullName, setfullName] = useState('trien');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setphone] = useState('');


    const handleOnClicked = async () => {
        const response = await createUserApi(fullName, email, password, phone);
        if (response.data) { // check if the first data exists, then check the second data
            notification.success({
                message: 'Create user successfully',
                description: 'Create user successfully'
            })
        }
        console.log("Check res: ", response);
    }

    return (
        <div className='user-form' style={{ margin: '20px 0' }}>
            <div style={{ display: 'flex', flexDirection: "column", gap: '15px' }}>
                <div>
                    <span>Full Name</span>
                    <Input value={fullName}
                        onChange={(event) =>
                            setfullName(event.target.value)
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
                        onChange={(event) => setphone(event.target.value)} />                </div>

                <div>
                    <Button type='primary'
                        onClick={handleOnClicked}>Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;