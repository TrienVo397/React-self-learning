

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
                title="User Update"
                onClose={() => setIsDrawerUserDetailOpen(false)}
                open={isDrawerUserDetailOpen}>
                {dataUpdate ?
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p>Id: {dataUpdate._id}</p>
                        <p>Full Name: {dataUpdate.fullName}</p>
                        <p>Email: {dataUpdate.email}</p>
                        <p>Phone Number: {dataUpdate.phone}</p>
                    </div>
                    : <div> No data</div>
                }
            </Drawer>
        </>
    );
};
export default ViewUserUpdate;