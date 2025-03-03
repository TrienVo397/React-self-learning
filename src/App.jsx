import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"
import { useContext, useEffect, useState } from "react"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import { Outlet } from "react-router-dom"
import { getAccountAPI } from "./services/api.service"
import { AuthContext, AuthWrapper } from './components/context/auth.context.jsx';

// const ParentComponent = (props) => {
//   return (
//     console.log(">>Check props parents",props),
//     <>
//       <div>Parent Component</div>
//       {props.children}
//     </>
//   )
// }
// const ChildComponent = (props) => {
//   return (
//     <>
//       <div>Child Component</div>
//     </>
//   )
// }
function App() {
  const { setUser } = useContext(AuthContext)
  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      setUser(res.data.user);
    }
  }



  // addNewTodo()
  return (
    <>
      {/* <ParentComponent>
        <ChildComponent />
      </ParentComponent> */}

      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
