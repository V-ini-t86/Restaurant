import React from "react"
import classes from "./RestaurantCard.module.css";
import StarIcon from '@mui/icons-material/Star';
export default function RestaurantCard({item}){
 return (
  <div className={classes.card}>
    
    <h4 className={classes.card_heading}>
      <span className={classes.card_heading_star}>
        <span>3.7</span>
        <StarIcon sx={{fontSize:"15px"}} />  
      </span>
      <span>Open</span>
    </h4>   
    
    <div className={classes.details}>
      <div >
        <img className={classes.cardImg} src="https://media-cdn.tripadvisor.com/media/photo-s/0e/65/c0/cf/ma-der-la-by-phuthai.jpg" alt="item-img" />
      </div>
      <div className={classes.card_info}>
        
        <a href="#" className={classes.card_name} >Maradona</a>
        <h3>Phone : +45080430982</h3>
        <h3>City : </h3>
        <h3>State : </h3>
        <h3>Country : </h3>
        <h3>Postal Code : </h3>
        <h3>Website : </h3>
        <h3>Url : </h3>
      </div>
    </div>
 </div>
 );
}