import React, { useEffect } from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../store/userSlice'
import axios from 'axios'

const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const fetchUser=async()=>{
    try{
      const user=await axios.get(BASE_URL+"/profile",{withCredentials:true})
      // console.log(user)
      dispatch(addUser(user.data.loggedInUser))
    } catch(err){
      navigate('/login')
    }
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body