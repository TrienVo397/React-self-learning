

import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
const ViewUserUpdate = (props) => {
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
    console.log("check photo ",preview);


    const {
        isDrawerUserDetailOpen,
        setIsDrawerUserDetailOpen,
        dataUpdate,
        setDataUpdate } = props
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
                            {preview && (
                                <div style={{ height: '200px', width: '200px', objectFit: 'contain' }}>
                                    <img
                                        width={"100%"}
                                        height={"100%"}
                                        src={preview}
                                        alt="preview pic"
                                    />
                                </div>
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
export default ViewUserUpdate;