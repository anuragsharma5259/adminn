import React, { useContext } from "react";
import Login from "./pages/Login.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";

import { AdminContext } from "./context/AdminContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Sidebar from "./components/sidebar.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import AllAppointment from "./pages/Admin/AllAppointment.jsx";
import AddDoctor from "./pages/Admin/AddDoctor.jsx";
import DoctorList from "./pages/Admin/doctorlist.jsx";
import { DoctorContext } from "./context/DoctorContext.jsx";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard.jsx";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment.jsx";
import DoctorProfile from "./pages/Doctor/DoctorProfile.jsx";

function App() {
const { aToken } = useContext(AdminContext);
const{dToken}=useContext(DoctorContext)





return  aToken ||dToken ? (
  <div className='bg-[#F8F9FD]'>
    <ToastContainer />
    <NavBar />
    <div className='flex items-start'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/admin-dashboard' element={<Dashboard />} />
        <Route path='/all-appointments' element={<AllAppointment />} />
        <Route path='/add-doctor' element={<AddDoctor />} />
        <Route path='/doctor-list' element={<DoctorList/>} />
        <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
        <Route path='/doctor-appointments' element={<DoctorAppointment />} />
        <Route path='/doctor-profile' element={<DoctorProfile />} />
      </Routes>
    </div>
  </div>
) : (
  <>
    <ToastContainer />
    <Login />
  </>
)
}

export default App;
