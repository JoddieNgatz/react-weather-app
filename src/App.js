import './App.css';
import './weather/weather'
//import Weather from './weather/weather';
import CardComponent from './components/card';
import React, { useEffect, useState } from "react";


function App() {
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [weatherData, setData]=useState([]);
useEffect(()=>{
    const fetchData = async () =>{
        
        navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
  console.log(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
  await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  .then(res => res.json())
      .then(result => {
        console.log(result);
        setData(result);
      }).catch((e)=>{
        console.log(e);
      });
    }
    fetchData()
    }, [lat, long]);

  return (
    <div className="App">
      <header className="App-header">
      {(typeof weatherData.main != 'undefined') ? (
        <CardComponent weatherData={weatherData}/>
      ): (
        <div>
          <p>Loading....</p>
        </div>
      )}
      </header>
    </div>
  );
}

export default App;
