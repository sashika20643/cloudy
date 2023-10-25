
import Navbar from "../components/Navbar";
import Todaydata from "../components/Todaydata";
import React, { useState, useEffect  } from "react";
import WeatherForecast from "../components/WeatherForecast"; // Import the WeatherForecast component




const Dashboard = () => {
  const[currentdata,setcurrentdata]=useState(null);
  const[weatherdata,setweatherdata]=useState(null);
  const[latitude,setLatitude]=useState("");
  const[longitude,setLongitude]=useState("");

  const searchWeather = async (lat = 6.9319, lon = 79.8478) => {
    try {
      const apiKey = '1015b879cc0813273d6970d1d2f3d0ac'; // Replace with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data.city.name);

      // Extract the first item from the forecast data (assuming it's the current weather)
      const currentWeather = data.list[0];

      setcurrentdata(currentWeather);
      setweatherdata(data);
     

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    
    
  };
  useEffect(() => {
    searchWeather();
    
  }, []);
  useEffect(() => {
    // This useEffect runs whenever currentdata is updated
    if (currentdata) {
      const temperature = currentdata.main.temp;
      console.log('Temperature:', temperature);
    }
  }, [currentdata])
  const handleSubmit=(e)=>{
    e.preventDefault();
      searchWeather(latitude,longitude);
  
   
  }

  // Render the Dashboard content
  return (
    <div className="p-2"  style={{backgroundColor:"#0b121e"}}>
       <Navbar/>
      <div className="container d-flex justify-content-center align-items-center " style={{minHeight:"80vh"}}>
      <div className="row mt-3">
        {/* First Column */}
        <div className="col-12 col-lg-8 ">
  
 
          <div>
         <div className="row mb-3">
      <div className="col">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="container rounded p-3 text-white" style={{ backgroundColor: "#202b3c" }}>
            <div className="row">
              <div className="col">
                <label htmlFor="latitude" className="form-label">
                  Latitude:
                </label>
                <input type="text" className="form-control" id="latitude" value={latitude} onChange={(e)=>{setLatitude(e.target.value)}} placeholder="Enter latitude" required />
              </div>
              <div className="col">
                <label htmlFor="longitude" className="form-label">
                  Longitude:
                </label>
                <input type="text" className="form-control" id="longitude" value={longitude} onChange={(e)=>setLongitude(e.target.value)} placeholder="Enter longitude" required />
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <WeatherForecast weatherData={weatherdata} />
        </div>

        {/* Second Column */}
        <div className="col-12 col-lg-4  ">
          
           <Todaydata currentdata={currentdata} city={weatherdata && weatherdata.city ? weatherdata.city.name:"Loading"}/> 
        </div>
      </div>
    </div>

      
      {/* Your Dashboard content goes here */}
     

    </div>
  );
};

export default Dashboard;
