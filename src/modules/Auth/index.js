import { Button, Paper, Typography } from "@mui/material"
import React, { useState } from "react"
import Login from "./pages/login"
import Register from "./pages/register"
import "./Auth.scss"
function Auth(props){
    const [activePage,setActivePage]=useState(0)
    const [userMobile,setUserMobile]=useState("")
    const handleSuccess=(data)=>{
        setActivePage(1)
        setUserMobile(data)

    }
    return(
        <div className="Auth">
            <div className="Container">
                {activePage===0?
               <Login success={handleSuccess}/>:<Register mobile={userMobile}/>}
            </div>


        </div>
    )
}

export default Auth