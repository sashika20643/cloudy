import React from 'react';
import Thunderstorm from '../../public/Images/weatherIco/Thunderstorm.png'
import Atmosphere from '../../public/Images/weatherIco/Atmosphere.png'
import Clouds from '../../public/Images/weatherIco/Clouds.png'
import Clear from '../../public/Images/weatherIco/Clear.png'
import Drizzle from '../../public/Images/weatherIco/Drizzle.png'
import Rain from '../../public/Images/weatherIco/Rain.png'
import Snow from '../../public/Images/weatherIco/Snow.png'

const SmallweatherIcon = ({ weatherId }) => {
   

  const getIconUrl = (id) => {
    // Extract the first digit from the weather ID
    const firstDigit = id.toString()[0];

    // Map the first digit to a specific image or category
    const iconMapping = {
      '2': Thunderstorm , // Group 2xx: Thunderstorm
      '3': Drizzle,       // Group 3xx: Drizzle
      '5': Rain,          // Group 5xx: Rain
      '6': Snow,          // Group 6xx: Snow
      '7': Atmosphere,
     
      // Add more mappings as needed
    };

    const iconCode = iconMapping[firstDigit];
    if (iconCode) {
      // Assuming your weather icons are in the public folder
      return iconCode;
    }
    else if(id==800){
        return Clear;
    }
    else{
        return Clouds;
    }


  };

  const iconUrl = getIconUrl(weatherId);

  return (

    <img src={iconUrl} alt={`Weather Icon for ${weatherId}`} className='w-25' />
  
 );
};

export default SmallweatherIcon;
