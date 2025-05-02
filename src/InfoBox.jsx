import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css";
export default function InfoBox({info}){

    const Init_img="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let hot_url="https://i2-prod.examinerlive.co.uk/incoming/article10372520.ece/ALTERNATES/s1227b/JS75768352.jpg";
    let cold_url="https://images.unsplash.com/photo-1701618116724-a20e5317ab50?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rainy_url="https://kj1bcdn.b-cdn.net/media/34538/heavy-rain-monsoon.jpg";
    // let info={
    //     city:"Delhi",
    //     feelsLike :29.63,
    //     hummidity:26,
    //     temp:31.23,
    //     tempMax:31.23,
    //     tempMin:31.23,
    //     weather:"overcast clouds"  
    // }
    return( 
        <div className="InfoBox">
        {/* <h1>WeatherInfo</h1> */}
        <div className ="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.hummidity>80 ? rainy_url: info.temp>15 ? hot_url:cold_url}
        title="green iguana"
      />

      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.hummidity>80 ? <ThunderstormIcon/>: info.temp>15 ?<SunnyIcon/>:<AcUnitIcon/>}

        </Typography>
        <Typography variant="body2" component={"span"}>

         <p>Temprature: {info.temp}&deg;C</p>
         <p>MaxTemp: {info.tempMax}</p> 
         <p>MinTemp: {info.tempMin}</p>
         <p>FeelsLike: {info.feelsLike}</p>
         <p>Hummidity: {info.hummidity}</p>
         <p>The weather can be described as <i>{info.weather}</i> and feelsLike {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

        </div>
        </div>
    )
}