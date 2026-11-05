
import { useEffect, useState } from "react";
import "./OTPVerify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OTPVerify = () => {
    const [timer,setTimer] =useState(30);
    const [verifystatus,setVerifystatus]=useState(false)
    const [resendstatus,setResendstatus]=useState(true)
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();
const updateOTP =(e,index)=>{
    e.preventDefault();
    const digit =[...otp];
    if(!/^\d$/.test(e.target.value)){
        return;
    }
    digit[index]=e.target.value;
    setOtp(digit);

    if(e.target.value!=="" && index<5){
        console.log(index);
        document.getElementById(`otp${index+2}`).focus();
    }
    console.log(digit);
}

const removeOTP =(e,index)=>{
    if(e.key === "Backspace"){
    const digit =[...otp];
    digit[index]="";
    setOtp(digit);
    
    if(index>0){
        document.getElementById(`otp${index}`).focus();
    }
    
}
};

const handleResend=async(e)=>{
    e.preventDefault();
     const res=await axios.post("http://localhost:1000/regenerateOTP",{
        email:sessionStorage.getItem("email")

    });
    if(res.status===404){
        alert("user does not exist");
    }else{
        setTimer(30);
        setVerifystatus(false);
        setResendstatus(true); 
        setOtp(["","","","","",""]);
        document.getElementById("otp1").focus();
    }
}


const handleVerify =async(e)=>{
     e.preventDefault();
    const x =otp.join("");
    const res=await axios.post("http://localhost:1000/VerifyOTP",{
        email:sessionStorage.getItem("email"),
        otp:x
    });
    console.log(res.data);
    alert(res.data.msg);
    if(res.status === 200){
        navigate("/");
    }
}

//  useEffect(()=>{
//         const timerId=setInterval(()=>{
//      setTimer((value)=>{
//         if(value<1){
//             clearInterval(timerId);
//             setVerifystatus(true);
//             setResendstatus(false);
//       return 0;
//         }else{
//             return value-1;
//         }
//      })
//         },1000);
//          return ()=
// >clearInterval(timerId);// cleaning up
//     },[timer]);
useEffect(()=>{
       if(timer===0){
        setVerifystatus(true);
        setResendstatus(false);
 return 0;

       }else{
        const timerId=setTimeout(()=>{
            setTimer(previousValue=>previousValue -1);
        },1000);
        return ()=>clearTimeout(timerId);
       }

},[timer]);
    return (
        <div className="verify-page">
            <form className="verify-form"  onSubmit={handleVerify}>
                <p className="verify-email-text">
                    Your E-mail ID:
                    <label className="verify-email">
                        {sessionStorage.getItem("email")}
                    </label>
                </p>
                <p><label>{timer}</label></p>
                <div className="verify-otp-row">
                      {otp.map(
                (data,index)=>(
                    <input type="text" maxLength={1} id={`otp${index+1}`} key={index} value= {data} onChange={(e)=>updateOTP(e,index)} onKeyDown={(e)=>removeOTP(e,index)}/>

                )
            )
            }
                </div>
                <button type="submit" className="verify-btn" disabled={verifystatus}>OTP Verify</button>
                <button type="button" className="verify-btn" disabled={resendstatus} onClick={handleResend}>Resend OTP</button>
            </form>
        </div>
    );
}

export default OTPVerify;
