import axios from 'axios';
import React, { useState } from 'react'
import {BASE_URL} from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';

const Login = () => {
    const navigate=useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [emailId, setEmailId] = useState("akshay@gmail.com");
    const [password, setPassword] = useState("Akshay@123");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [error, setError] = useState("");
    const dispatch=useDispatch();

    const handleLogin = async () => {
        try {
            console.log("handleLogin started")
            const res = await axios.post(BASE_URL + "/login", { emailId, password }, { withCredentials: true })
            dispatch(addUser(res.data.user))
            console.log(res.data.user)
            return navigate("/")
            
        } catch (err) {
            console.log(err);
            setError(err)
        }
    }

    const handleSignUp = async () => {
        try{
            const res=await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,password},{withCredentials:true});
            dispatch(addUser(res.data.user));
            navigate("/profile")
        } catch(err){
            setError(err.message);
        }
    }

    return (
        <div className="flex-1 flex justify-center items-center bg-base-200 p-4">
            <div className="card bg-base-300 w-80 shadow-xl border border-base-300">
                <div className="card-body space-y-4">

                    <h2 className="text-3xl font-bold text-center mb-2">
                        {isLoginForm ? "Login" : "SignUp"}
                    </h2>
                    {!isLoginForm && <>
                        <label className="form-control w-full">
                            <span className="label-text">First Name</span>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => { setFirstName(e.target.value) }}
                                className="input input-bordered w-full"
                                placeholder="Enter First Name"
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text">Last Name</span>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => { setlastName(e.target.value) }}
                                className="input input-bordered w-full"
                                placeholder="Enter Last Name"
                            />
                        </label>
                    </>}

                    <label className="form-control w-full">
                        <span className="label-text">Email</span>
                        <input
                            type="email"
                            value={emailId}
                            onChange={(e) => { setEmailId(e.target.value) }}
                            className="input input-bordered w-full"
                            placeholder="your@email.com"
                        />
                    </label>

                    <label className="form-control w-full">
                        <span className="label-text">Password</span>
                        <input
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                            className="input input-bordered w-full"
                            placeholder="••••••••"
                        />
                    </label>

                    <div className="pt-2">
                        <button className="btn btn-primary w-full" onClick={isLoginForm ? handleLogin : handleSignUp}>
                            {isLoginForm ? "Login" : "SignUp"}
                        </button>
                    </div>

                    <p className="text-center text-sm opacity-70">
                        {isLoginForm ? "Don’t have an account ? " : "Already Registered ? "}
                        <a className="link link-primary" onClick={() => { setIsLoginForm(!isLoginForm) }}>{isLoginForm ? "SignUp" : "SignIn"}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
