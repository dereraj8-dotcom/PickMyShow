import  { useRef, useState } from "react";

function Example1(){
    const usernameref =useRef(null);
    const [useremail,setUseremil]=useState("");
    const handleSubmit=()=>{
        usernameref.current.focus();
        usernameref.current.style.color ="yellow";
        console.log(usernameref.current.value);
    }

    return(
        <>
        <form>
            Username :<input type="text" ref={usernameref}/>
            email :<input type="email" value={useremail} onChange={(e)=>setUseremil(e.target.value)}/>
            Email Output :<h3>{useremail}</h3>
            Username Output :<h3>{usernameref.current?.value}</h3>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
        
        </>
    )
}
export default Example1;