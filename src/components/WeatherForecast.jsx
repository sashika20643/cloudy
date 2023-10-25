
import React, { useState } from "react";
import WeatherCard from "./Weathercard";

const WeatherForecast = ({ weatherData }) => {
  const [showMore, setShowMore] = useState(false);

  const renderWeatherCards = () => {
    weatherData=weatherData.list;
    if (!Array.isArray(weatherData)) {
      return null;
    }

  
    const uniqueDatesMap = new Map();


    weatherData.forEach((dayData) => {
    
      const date = dayData.dt_txt.split(' ')[0];

   
      if (!uniqueDatesMap.has(date)) {
        uniqueDatesMap.set(date, dayData);
      }
    });

    const uniqueWeatherData = Array.from(uniqueDatesMap.values());

  
    const cardsToDisplay = showMore ? uniqueWeatherData : uniqueWeatherData.slice(0, 3);

    return cardsToDisplay.map((dayData, index) => (
      <WeatherCard
        key={index}
        weatherId={dayData.weather[0].id}
        icon={dayData.weather[0].icon}
        Humidity={dayData.main.humidity}
        Wind={dayData.wind.speed}
        day={dayData.dt_txt} 
        temperature={dayData.main.temp} 
        description={dayData.weather[0].description} 
      />
    ));
  };

  return (
    <div>
   
      <div className="row">
      {weatherData?renderWeatherCards():"Loading"}
      </div>
      <button className="btn btn-primary mt-3" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default WeatherForecast;
