import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material"
import React from "react"
import './Restaurants.scss'
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme =>({
  address: {
    fontSize:14,
    ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: 10
    }
  }})


);


function Restaurants(props){
  let classes=useStyles()
    return(
        <div className="StoreInfo" style={{cursor:'pointer'}} onClick={()=>props.select(props)}>
            <ListItem alignItems="flex-start">
        <ListItemAvatar>
         <img src={props.images[0].url}/>
        </ListItemAvatar>
        <ListItemText
        style={{marginLeft:20}}
          primary= {<Typography variant="h8">{props.restaurant_name}</Typography>}
          secondary={
            <div style={{display:'flex',flexDirection:'column',marginTop:4}}>
              <Typography
                variant="body2"
                color="text.primary"
                className={classes.address}
              >   
            {(props.location?.location_address||"" )+" "+(props.location?.location_address_2||"")+" "+(props?.location?.location_locality||"")+" "+(props?.location?.city_name||"Address not available at the moment")}

              </Typography>
                <div style={{display:'flex',alignItems:'center',marginTop:4}}>
              <DiscountRoundedIcon style={{fontSize:18,color:'#e67e22'}}/>
              <Typography
                component="span"
                variant="body2"
                color="text.primary"
                style={{marginLeft:4,color:'#e67e22'}}
                className={classes.address}
              >   
                4 offers trending
              </Typography>
              </div>

              <div style={{display:'flex',alignItems:'center',marginTop:8,justifyContent:'space-between'}}>

                <div style={{marginBottom:10}}>
                    <div style={{display:'flex',alignItems:'center'}}>
                <StarRoundedIcon style={{fontSize:18,color:'#484444'}}/>
                <Typography
                component="span"
                variant="body2"
                color="text.primary"
                style={{marginLeft:4,color:'#484444',fontWeight:600}}
                className={classes.address}
                >   

                {props.rating.restaurant_avg_rating}
                </Typography>
                </div>
                <Typography
                component="span"
                variant="body2"
                color="text.primary"
                style={{marginLeft:4}}
                className={classes.address}
                >   

                Popularity
                </Typography>
                </div>

                <div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CurrencyRupeeRoundedIcon style={{fontSize:18,color:'#484444',fontWeight:600}}/>
                <Typography
                variant="body2"
                style={{marginLeft:4,color:'#484444',fontWeight:600}}
                className={classes.address}
                >   

                {props.avg_cost_for_two}
                </Typography>
                </div>
                <Typography
                variant="body2"
                color="text.primary"
                style={{marginLeft:4}}
                className={classes.address}
                >   
                Cost for two
                </Typography>
                </div>
                </div>
            </div>
          }
        />
      </ListItem>
        </div>
    )
}

export default Restaurants