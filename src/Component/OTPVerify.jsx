import { useState } from "react";
import { data } from "react-router";

function OTPVerify(){
    const [otp, setOtp]=useState(["","","","","",""]);
    console.log(otp.length);
    return(
        <>
       <form>
        <p>Your E-mail ID :<label id="email">{
            sessionStorage.getItem("email")
            }</label></p>
            {otp.map(
                (data,index)=>(
                    <input type="text" maxLength={1} key={index} value= {data}/>

                )
            )
            }

       </form>
        
        </>
    );
}

export default OTPVerify;