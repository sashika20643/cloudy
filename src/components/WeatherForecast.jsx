// WeatherForecast.jsx
import React, { useState } from "react";
import WeatherCard from "./Weathercard";

const WeatherForecast = ({ weatherData }) => {
  const [showMore, setShowMore] = useState(false);

  const renderWeatherCards = () => {
    weatherData=weatherData.list;
    if (!Array.isArray(weatherData)) {
      return null;
    }

    // Create a map to store the first entry for each unique date
    const uniqueDatesMap = new Map();

    // Iterate over each entry in weatherData
    weatherData.forEach((dayData) => {
      // Extract the date part from dt_txt (assuming dt_txt is a string in the format 'YYYY-MM-DD HH:mm:ss')
      const date = dayData.dt_txt.split(' ')[0];

      // If the date is not in the map, add it with the current dayData
      if (!uniqueDatesMap.has(date)) {
        uniqueDatesMap.set(date, dayData);
      }
    });

    // Convert the map values back to an array
    const uniqueWeatherData = Array.from(uniqueDatesMap.values());

    // Use slice if uniqueWeatherData is an array
    const cardsToDisplay = showMore ? uniqueWeatherData : uniqueWeatherData.slice(0, 3);

    return cardsToDisplay.map((dayData, index) => (
      <WeatherCard
        key={index}
        weatherId={dayData.weather[0].id}
        icon={dayData.weather[0].icon}
        Humidity={dayData.main.humidity}
        Wind={dayData.wind.speed}
        day={dayData.dt_txt} // Replace with the actual property in your weather data
        temperature={dayData.main.temp} // Replace with the actual property in your weather data
        description={dayData.weather[0].description} // Replace with the actual property in your weather data
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
