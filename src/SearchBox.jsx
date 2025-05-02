import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
export default function SearchBox({updateInfo}){
  let [city,setCity]=useState("");

  let [err,setErr]=useState(false);
  const API_url="https://pro.openweathermap.org/data/2.5/weather";
  const API_key="e040f3449ae15faeabfb7e88833ed933";
  
  
  let weatherInfo =async()=>{
    try{
    let response= await fetch(`${API_url}?q=${city}&appid=${API_key}&units=metric`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);

    let result ={
      city:city,
      temp:jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,   
     tempMax:jsonResponse.main.temp_max,
     hummidity:jsonResponse.main.humidity,
     feelsLike:jsonResponse.main.feels_like,
     weather:jsonResponse.weather[0].description,

    };
    console.log(result);
    return result ;
  }
      catch(err){
        throw err;
  }
  };

    let handleChange =(evt)=>{
  setCity(evt.target.value);
  ;
  }

  
  let handleSubmit =async(evt)=>{
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
     let newinfo = await weatherInfo();
     updateInfo(newinfo);
  }
  catch(err){
    setErr(true);
    setTimeout(() => {
      setErr("");
    }, 3000);
  }
    };
    return (
        <div className="searchme">
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined"required  value={city}  onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">
        Search
      </Button>
      {err && <p style={{color:"red"}}>No such place exists!</p>
      
      }
     
            </form>
        </div>
    );
}

