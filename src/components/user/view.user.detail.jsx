

import React, { useState, useEffect } from 'react';
import { Button, Drawer, notification } from 'antd';
import { handleUploadFile, updateUserAvatarApi } from '../../services/api.service';
const ViewUserDetail = (props) => {
    const {
        isDrawerUserDetailOpen,
        setIsDrawerUserDetailOpen,
        dataUpdate,
        setDataUpdate,
        loadUser } = props


    const [selectedFile, setselectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const handleChange = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setselectedFile(null);
            setPreview(null);
            return;
        }
        var photoFile = e.target.files[0];
        if (photoFile) {
            setselectedFile(photoFile);
            setPreview(URL.createObjectURL(photoFile));
        }
    }
    console.log("check photo ", preview);

    const handleUploadAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, "avatar")
        console.log("response upload ", resUpload);
        if (resUpload.data.fileUploaded) {
            const newAvatar = resUpload.data.fileUploaded;
            //update user
            const resUpdatedAvatar = await updateUserAvatarApi(newAvatar, dataUpdate._id, dataUpdate.fullName, dataUpdate.phone)

            if (resUpdatedAvatar.data) {
                setselectedFile(null);// clear data
                setPreview(null);// clear data
                setIsDrawerUserDetailOpen(false)
                loadUser()
                notification.success({
                    message: "Success update user avatar",
                    description: JSON.stringify(resUpdatedAvatar.message)
                })
            }
            console.log("Check new avatar ", newAvatar);
            console.log("Check resUpdatedAvatar ", resUpdatedAvatar);

        }
        else {
            notification.error({
                message: "Error update avatar",
                description: JSON.stringify(resUpload.message)
            })
        }
    }


    return (
        <>
            <Drawer
                width={"40vw"}
                title="User Update"
                onClose={() => setIsDrawerUserDetailOpen(false)}
                open={isDrawerUserDetailOpen}>
                {dataUpdate ?
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p>Id: {dataUpdate._id}</p>
                        <p>Full Name: {dataUpdate.fullName}</p>
                        <p>Email: {dataUpdate.email}</p>
                        <p>Phone Number: {dataUpdate.phone}</p>
                        <p>Avatar: </p>
                        <div style={{ height: '100%', width: '100%', objectFit: 'contain' }}>
                            <img width={200} height={200}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUpdate.avatar}`} alt="avatar pic" />
                        </div>
                        <div>
                            <label htmlFor='btnUpload'
                                style={{
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    background: "orange",
                                    borderRadius: "5px",
                                    cursor: "pointer"
                                }}>Upload Avatar</label>
                            <input type="file" hidden id="btnUpload" onChange={handleChange} />
                            {preview &&
                                (
                                    <>
                                        <div style={{
                                            height: '200px', width: '200px', objectFit: 'contain',
                                            marginTop: "15px", marginBottom: "15px"
                                        }}>
                                            <img
                                                width={"100%"}
                                                height={"100%"}
                                                src={preview}
                                                alt="preview pic"
                                            />
                                        </div>
                                        <Button type='primary' onClick={handleUploadAvatar}>Save</Button>
                                    </>
                                )}
                        </div>
                        {/* <Button type='primary'>Upload avatar</Button> */}
                    </div>
                    : <div> No data</div>
                }
            </Drawer>
        </>
    );
};
export default ViewUserDetail;