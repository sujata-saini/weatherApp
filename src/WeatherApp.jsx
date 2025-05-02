import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import {useState} from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeather]=useState(
        {
            city:"wonderland ",
            feelsLike :29.63,
            hummidity:26,
            temp:31.23,
            tempMax:31.23,
            tempMin:31.23,
            weather:"overcast clouds"  
        }
    )
    let updateInfo =(newinfo)=>{
setWeather(newinfo);
    }
    return(
        <div style={{textAlign:'center'}}>
            <h2>
                The Weather App 
            </h2>
            <SearchBox updateInfo={updateInfo}/>
      <InfoBox info ={weatherInfo}/>
        </div>
    )
}