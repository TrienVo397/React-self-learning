import axios from './axios.customize';

const createUserApi = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    };
    return axios.post(URL_BACKEND, data)
}
const updateUserApi = (_id, fullName, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    };
    return axios.put(URL_BACKEND, data)
}
const deleteUserApi = (_id) => {
    const URL_BACKEND = `/api/v1/user/${_id}`;
    console.log("Check what in this promise: ", axios.delete(URL_BACKEND))
    return axios.delete(URL_BACKEND)
}


const fetchAllUsersApi = () => {
    const URL_BACKEND = '/api/v1/user?current=1&pageSize=1';

    return axios.get(URL_BACKEND)

}

const handleUploadFile = (file, folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
            
        }
    }
    const data = new FormData();
    data.append("fileImg", file) // fileImg là tên biến đã đc đặt trong back check trong postman và file sẽ chuyền vào fileImgfileImg
    return axios.post(URL_BACKEND, data, config)
}

const updateUserAvatarApi = (avatar,_id,fullName, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = {
        avatar: avatar,
        _id: _id,
        fullName: fullName,
        phone: phone
    };
    return axios.put(URL_BACKEND, data)
}


export { createUserApi, updateUserApi, fetchAllUsersApi, deleteUserApi, handleUploadFile, updateUserAvatarApi };