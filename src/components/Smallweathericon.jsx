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
   
    const firstDigit = id.toString()[0];

    
    const iconMapping = {
      '2': Thunderstorm , 
      '3': Drizzle,       
      '5': Rain,          
      '6': Snow,          
      '7': Atmosphere,
     
   
    };

    const iconCode = iconMapping[firstDigit];
    if (iconCode) {
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
