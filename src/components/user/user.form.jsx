

import {useState} from 'react';
import { Input, Button } from 'antd';


const UserForm = () => {
    const  [fullname, setFullname] = useState('trien');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleOnClicked = () => {
        console.log("Check fn: ", {fullname, email, password, phoneNumber});

    }
    return (
        <div className='user-form' style={{ margin: '20px 0' }}>
            <div style={{ display: 'flex', flexDirection: "column", gap: '15px' }}>
                <div>
                    <span>Full Name</span>
                    <Input  value ={fullname}
                    onChange={(event)=>
                        setFullname(event.target.value)
                    } />
                </div>

                <div>
                    <span>Email</span>
                    <Input value={email}onChange={(event) =>setEmail(event.target.value)} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={password}
                    onChange={(event) => setPassword(event.target.value)} />
                </div>

                <div>
                    <span>Phone Number</span>
                    <Input value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)} />                </div>

                <div>
                    <Button type='primary'
                    onClick={handleOnClicked}>Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;