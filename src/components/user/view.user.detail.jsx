

import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
const ViewUserUpdate = (props) => {
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
                        <img width={200} height={200}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUpdate.avatar}`} alt="avatar pic" />
                        <div>
                            <label htmlFor='btnUpload'>Upload Avatar</label>
                            <input type="file" hidden id = "btnUpload"/>
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