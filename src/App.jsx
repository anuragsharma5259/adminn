import React, { useContext } from 'react'
import Login from './pages/login.jsx'
import "./index.css"
import { ToastContainer, toast } from 'react-toastify';

import { AdminContext } from './context/AdminContext.jsx';
import NavBar from './components/NavBar.jsx';
  

function App() {
  const {aToken}=useContext(AdminContext)
  return aToken?(
    <div className='bg-[#F8F9FD]' >
      <ToastContainer/>
      <NavBar/>
    </div>
  ):(
    <>
<Login/>
<ToastContainer/>
    </>
  )
}

export default App
