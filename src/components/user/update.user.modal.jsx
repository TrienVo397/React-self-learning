
import { useEffect, useState } from 'react';
import { Input, notification, Modal } from 'antd';
import { updateUserApi } from '../../services/api.service';


const UpdateUserModal = (props) => {
    const {isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser} = props
    const [id, setId] = useState('');
    const [fullName, setFullName] = useState('trien');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if(dataUpdate){
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }
        console.log("Check dataUpdate props: ", dataUpdate)
    }, [dataUpdate])

    // handle submit button
    const handleSubmitButton = async () => {
        const response = await updateUserApi(id, fullName, phone);
        if (response.data) {
            notification.success({
                message: 'Update user successfully',
                description: 'Update user successfully'
            })
            await loadUser()
            resetAndCloseModal()
        }
        else {
            notification.error({
                message: "Error creating user",
                description: JSON.stringify(response.message)
            })
        }
        console.log("Check res: ", response);
    }

    // reset and close modal
    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName("")
        setPhone('')
        setId('')
    }


    // return modal
    return (<Modal title="Update User"
        maskClosable={false}
        open={isModalUpdateOpen}
        onOk={handleSubmitButton}
        onCancel={() => { setIsModalUpdateOpen(false) }}
        okText="Update">

        <div style={{ display: 'flex', flexDirection: "column", gap: '15px' }}>
            <div>
                <span>Id</span>
                <Input value={id} disabled />
            </div>
            <div>
                <span>Full Name</span>
                <Input value={fullName}
                    onChange={(event) =>{
                        setFullName(event.target.value)
                    }
                    } />
            </div>
            <div>
                <span>Phone Number</span>
                <Input value={phone}
                    onChange={(event) => setPhone(event.target.value)} />
            </div>
        </div>
    </Modal>
    )
}
export default UpdateUserModal;