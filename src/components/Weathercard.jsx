import React from "react";


const WeatherCard = ({ day, temperature, description,weatherId ,icon,Humidity,Wind}) => {
  temperature=temperature-273.15;
  temperature=Math.round(temperature * 100) / 100

  return (
    <div className="col-6 col-md-4 col-lg-3 mb-3 text-white">
      <div className="card text-white" style={{backgroundColor:"#202b3c"}}>
        <div className="card-body">
          <div className="d-flex">

        
          <h5 className="card-title">{day}</h5>
          <img src={`http://openweathermap.org/img/wn/${icon}.png`}   />
          </div>
          <p className="card-text" style={{color: "rgba(242, 240, 240, 0.6)"}}>{description}</p>
          <table className="datatables">
            <tbody>
              <tr>
<td>Temp:</td>
<td>{temperature} C</td>
              </tr>
              <tr>
<td>Humidity:</td>
<td> {Humidity} %</td>
              </tr>
              <tr>
<td>Wind:</td>
<td>{Wind} ms<sup>-1</sup></td>
              </tr>
            </tbody>
          </table>

          
          
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;