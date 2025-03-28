import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'

const NavBar = () => {
    const {aToken}=useContext(AdminContext)
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
        <p>{aToken?'Admin':'Doctor'}</p>
      </div>
      <Button>Logout</Button>
    </div>
  )
}

export default NavBar
