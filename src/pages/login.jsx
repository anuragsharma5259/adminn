import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { AdminContext } from "../context/AdminContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [State, setState] = useState("Admin");
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  
const{setAToken,backendurl}=useContext(AdminContext)
const onSubmitHandler=async(event)=>{
   event.preventDefault()
   
   try {
    if(State==='Admin'){
   const {data}=await axios.post(backendurl+'/api/admin/login',{email,password})
   if(data.success){
    localStorage.setItem('aToken',data.token)
    setAToken(data.token);
    
   }
   else{
    toast.error(data.message);
   }
    }
    else{

    }
    
   } catch (error) {
    
   }
}
  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center bg-red-500">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E]">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">
          {State}
          </span>
          </p> 
        
        <div>
          <p className="bg-red-700">Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border border-[#DADADA] rounded w-full p-2 mt-1" type="email" required />
        </div>

        <div>
          <p>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} className="border border-[#DADADA] rounded w-full p-2 mt-1" type="password" required />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md">Login</button>
        {
          State=== 'Admin'?
          <p>Doctor Login? <span className="text-primary underline cursor-pointer" onClick={()=>setState('Doctor')}>Click here</span>
           </p>:<p>Admin Login ?<span className="text-primary underline cursor-pointer" onClick={()=>setState('Admin')}>Click here</span>
           </p>
        }
      </div>
    </form>
  );
};

export default Login;
