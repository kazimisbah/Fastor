import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getToken } from './utils/auth';
import Home from './modules/Home';
import Auth from './modules/Auth';
import { createTheme } from '@mui/material';
import { ThemeProvider } from 'styled-components';


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#f46a27",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#2a90e7",
    },
  },
});


function App() {
  const [isAuth,setIsAuth]=useState(false)
  useEffect(()=>{
      if(getToken()){
        setIsAuth(true)
      }else{
        setIsAuth(false)
      }
  },[])
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      {isAuth?<Home/>:<Auth/>}
     
    </div>
    </ThemeProvider>
  );
}

export default App;
