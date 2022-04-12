import './Register.scss'
import logo from "../../../../asstes/logo.png"
import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import {API_ENDPOINT_AUTH_VERIFY_OTP} from '../../../../constants/apiConstants'
import { apiPost } from '../../../../serivces/apiServices'

function Register(props){
    const [otp, setOtp] = useState('')

  const verifyOtp =  async ()=>{
    let payload = {
        phone:props.mobile,
        otp:otp,
        dial_code:'+91'
    }
   const response  = await apiPost(API_ENDPOINT_AUTH_VERIFY_OTP, payload)
   if(response.status_code == 200){
       console.log("resp", response)
  localStorage.setItem("register", JSON.stringify(response));
  localStorage.setItem("token", response.data.token)
  setTimeout(()=>{
    window.location.reload()

  },1000)
   }else{
       alert("Incorrect OTP")
   }
    }
    return(
        <div className="RegiserContainer">
            <div className='factorLogo'>
                <div className='Logo'>
                <img src={logo}/>
                </div>
                </div>
                <div className='form'>
                            <div className='element'>
                            <Typography variant="h5" style={{fontWeight:500}}>Just one step away</Typography>
                            <div>
                                <div className='element' style={{marginTop:'1rem'}}>
                                    <Typography variant="body2">Enter the 4-digit code sent to you at +91 {props.mobile}</Typography>
                                </div>
                            <div className='element' style={{marginTop:'1rem'}}>
                            <TextField
                            label="000000"
                            id="standard-start-adornment"
                            
                            variant="standard"
                            fullWidth
                            onChange = {(e)=>setOtp(e.target.value)}
                            />
                            </div>

                            <div className='element' style={{marginTop:'2rem'}}>
                            <Button variant="contained" color="primary" size="large" fullWidth onClick={verifyOtp}>Verify</Button>

                            </div>
                            <div className='element'>
                                <Typography variant="caption">already have an account?</Typography>
                            </div>

                    </div>
                    </div>

            </div>
        </div>
    )
}
export default Register