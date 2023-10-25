import React, { useState, useEffect  } from "react";
import WeatherIcon from "./WeatherIcon";

const Todaydata =({ currentdata,city })=>{

    
    if (!currentdata) {
      return <div className="text-white">Loading...</div>;
    }

return (
    <div className="text-white">

    {currentdata && currentdata.main && (
      <div>
        <WeatherIcon weatherId={currentdata.weather[0].id} city={city} temp={currentdata.main.temp-273.15} disc={currentdata.weather[0].description}/>
        <table className="datatable" style={{backgroundColor:"#0b121e"}}>
            <tbody>
            <tr>
                <td>
                Temperature   
                </td>
                <td>
                {currentdata.main.temp} K
                </td>
             
            </tr>
            <tr>
            <td>
                Humidity
                </td>
                <td>
                {currentdata.main.humidity}%
                </td>
            </tr>
            <tr>
            <td>
            Wind Speed
                </td>
                <td>
                {currentdata.wind.speed} m/s
                </td>
            </tr>
            <tr>
            <td>
            Description
                </td>
                <td>
                {currentdata.weather[0].description}
                </td>
            </tr>
            </tbody>
        </table>
      
      </div>
    )}
  </div>
)

    
}
export default Todaydata;