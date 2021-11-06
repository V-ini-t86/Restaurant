import React from "react"
import  { useRestContextValue } from "../../RestaurantContext"
import RestaurantCard from "../RestaurantCards/RestaurantCard"
import classes from "./Restaurant.module.css"

export default function Restaurant(){
  const rValue =  useRestContextValue();
  console.log("dj",rValue);
  
  return <div className={classes.restaurants}>
    {/* { rValue && rValue.map((item)=>{
      return <RestaurantCard />
    })
    } */}
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />

  
  </div>
}