import './weather.css';
//import React, { useEffect, useState } from "react";


function Weather({weatherData}) {
// const [lat, setLat] = useState([]);
// const [long, setLong] = useState([]);
// const [weatherData, setData]=useState([]);
// useEffect(()=>{
//     const fetchData = async () =>{
        
//         navigator.geolocation.getCurrentPosition(function(position) {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//       });
  
//       console.log("Latitude is:", lat)
//       console.log("Longitude is:", long)
//       await fetch(`${process.env.API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.API_KEY}`)
//       .then(res => res.json())
//       .then(result => {
//         setData(result)
//         console.log(result);
//       });
//     }
//     fetchData()
//     }, [lat, long]);

  return (
    <div className="Weather">
      <header className="Weather-header">
<card weatherData={weatherData}/>
      </header>
    </div>
  );
}

export default Weather;
