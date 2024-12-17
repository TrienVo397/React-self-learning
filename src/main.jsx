import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './styles/global.css'
import LoginPage from './pages/login.jsx';
import ProductPage from './pages/product.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/users",
        element: <UsersPage></UsersPage>,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App></App> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);