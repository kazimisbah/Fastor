import './login.scss'
import logo from "../../../../asstes/logo.png"
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import {API_ENDPOINT_AUTH_LOGIN} from '../../../../constants/apiConstants'
import { apiPost } from '../../../../serivces/apiServices'
import React,{ useState } from 'react'


function Login(props){
    const [mobileNO,setMobileNO]=useState('')

    const getUserLogin=async()=>{
        let payload={
            dial_code:"+91",
            phone:mobileNO
        }
      const response = await apiPost(API_ENDPOINT_AUTH_LOGIN, payload)
      if(response.status==="Success"){
            props.success(mobileNO)
      }else{
          alert("login failed")
      }
      console.log("resp:",response)

    }
    return(
        <div className="loginContainer">
            <div className='factorLogo'>
                <div className='Logo'>
                <img src={logo}/>
                </div>
                </div>
                <div className='form'>
                            <div className='element'>
                            <Typography variant="h5" style={{fontWeight:500}}>Switch Your Store To Online</Typography>
                            <div>
                            <div className='element' style={{marginTop:'1rem'}}>
                            <TextField
                            label="Enter your phone number (required)"
                            id="standard-start-adornment"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                            }}
                            variant="standard"
                            fullWidth
                            onChange={(e)=>setMobileNO(e.target.value)}
                            />
                            </div>

                            <div className='element' style={{marginTop:'2rem'}}>
                            <Button variant="contained" color="primary" size="large" fullWidth onClick={getUserLogin}>Next</Button>

                            </div>
                            <div className='element'>
                                <Typography variant="caption"> or sign up with phone number</Typography>
                            </div>

                    </div>
                    </div>

            </div>
        </div>
    )
}
export default Login