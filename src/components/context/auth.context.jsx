import { createContext, useState } from "react";

export const AuthContext = createContext({
    emai: "",
    phone: "",
    fullname: "",
    role: "",
    avatar: "",
    id: ""
});

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        emai: "",
        phone: "",
        fullname: "",
        role: "",
        avatar: "",
        id: ""
    })
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
            {/* <RouterProvider router={router} /> */}

        </AuthContext.Provider>
    )
}