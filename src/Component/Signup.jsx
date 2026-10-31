import { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router';

function Signup() {
    const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
      const [confirmpassword,setConfirmpassword]=useState('');
      const navigate = useNavigate();

      const registerUser=async(e)=>{ 
        console.log(email);
        console.log(password);
        e.preventDefault();
        const response=await fetch("http://localhost:1000/Register",{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                email:email,
                password:password
            })
        });
        const data =await response.json();
// alert(data.msg);
if (response.status === 200){
    alert("Your Registration is Completed")
    sessionStorage.setItem("email",email);
    navigate("/OTPVerify");
}
else{
    alert("Unable To Register Try Again");
}
      }
    return (
        <>
            <form  method="POST" onSubmit={registerUser}>

                <label htmlFor="email">Email Address:</label>
                
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="email"
                    placeholder="Enter your email"
                    required onChange={(e)=>{e.preventDefault(); setEmail(e.target.value)}}
                />
    

                <label htmlFor="password">Password:</label>
                
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="password"
                    placeholder="Create a password"
                    required
                    minLength={4} onChange={(e)=>{e.preventDefault();setPassword(e.target.value) }}
                />
            

                <label htmlFor="confirmPassword">
                    Confirm Password:
                </label>
                
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="confirmPassword"
                    placeholder="Confirm your password"
                    required
                    minLength={4} onChange={(e)=>{e.preventDefault();setConfirmpassword(e.target.value)}}
                />
                <br />

                <button type="submit" >Register</button>
                <button type="reset">Clear Form</button>

            </form>

            <hr />

            <p align="center">
                Already have an account?{' '}
                <a href="/login">Login Here</a>
            </p>
        </>
    );
}

export default Signup;
