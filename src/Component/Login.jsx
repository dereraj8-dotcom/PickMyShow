import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Login (){
const [email,setEmail] =useState('');
const [password,setPassword] =useState('');
const navigate= useNavigate();


const loginUSer =async(e)=>{
    e.preventDefault();
    try{
    const res =await axios.post("http://localhost:1000/Login",{
           email: email,
    password: password
    });
    if(res.status === 200){
        sessionStorage.setItem("email",email);
        alert("Login Successfull")
        navigate("/");
    }
      } catch (error) {
       console.error("Login error:", error.response?.data);
        alert(
            error.response?.data?.msg ||
            "Login failed. Please check your email and password."
        );
    }
};

    return(
        <>
            <div className="login-page">
            <form className="login-box" onSubmit={loginUSer}>
                <div className="login-icon">✦</div>

                <h2>Welcome Back!</h2>
                <p className="login-subtitle">
                    Login to manage your events
                </p>

                <div className="login-field">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="login-field">
                    <label htmlFor="password">Password</label>
                    <div className="password-box">
                        <input
                            type=""
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                    
                    </div>
                </div>

                <div className="login-options">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="/ForgotPassword">Forgot Password?</a>
                </div>

                <button type="submit" className="login-button">
                    Login <span>→</span>
                </button>

                <p className="signup-link">
                    Don't have an account?
                    <a href="/Signup"> Register</a>
                </p>
            </form>
        </div>
        
        </>
    )
}

export default Login;