import { List } from "@mui/material"
import React, { useEffect, useState } from "react"
import Restaurants from "../../components/restaurants /Restaurants"
import {API_ENDPOINT_FETCH_RESTAURANT_LIST} from '../../constants/apiConstants'
import { apiGet } from "../../serivces/apiServices"
import CarouselPage from "../../components/carousel/Carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Share from "../Share"
import './Home.scss'



function Home(props){   
    const [list,setList]=useState([])
    const [selected,setSelected]=useState(null)

    const getRestaurant = async()=>{

     const response =  await apiGet(API_ENDPOINT_FETCH_RESTAURANT_LIST+"?city_id="+118)
     setList(response)
    }

    useEffect(()=>{
     getRestaurant()
    },[])

    return(
        <div className="container">
            <div className="resList">

                
            {!selected?
             <div>
             
             <div style={{height:'10%', padding:'1px 25px 1px 25px'}}>
                 <CarouselPage/>
             </div>

            {/* <List sx={{ width: '100%', bgcolor: 'background.paper' }}> */}
    
      
    
              {list.map((store,key)=>{
                  return(
                      <Restaurants  select={(data)=>setSelected(data)} {...store} key={key}/>
                  )
              })}
              {/* </List> */}
              </div>
              :<Share {...selected} unselect={()=>setSelected(null)}/>}
            </div>
        </div>
    )
}

export default Home