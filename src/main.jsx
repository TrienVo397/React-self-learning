import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/error.jsx";
import './styles/global.css'
import LoginPage from './pages/login.jsx';
import BookPage from './pages/book.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/users.jsx';
import TodoApp from './components/todo/TodoApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <TodoApp /> //default child
      },
      {
        path: "/users",
        element: <UsersPage></UsersPage>,
      },
      {
        path: "/book",
        element: <BookPage />,
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