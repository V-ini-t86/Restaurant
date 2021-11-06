import axios from "axios";
import { useEffect, useState } from "react";
import Restaurant from "./components/Restaurant/Restaurant";
import RestaurantContext from "./RestaurantContext";
import "./styles.css";

export default function App() {
  const [data,setData] = useState();

  useEffect(()=>{
    let url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';
    let options = {
      params: {
        latitude: '12.91285',
        longitude: '100.87808',
        limit: '30',
        currency: 'USD',
        distance: '2',
        open_now: 'false',
        lunit: 'km',
        lang: 'en_US'
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'd5ff8d0372msh3f41a457a317f09p19d8d4jsn027c71583900'
      }
    };
    axios.get(url,options).then((res)=>{
      setData(res.data.data)
    }).catch((err)=>console.log(err))
    
  },[])

  return (
    <RestaurantContext value={data}>
      <div className="App">
        <h1>Restaurant API</h1>  
        <Restaurant /> 
      </div>
    </RestaurantContext>
  );
}
