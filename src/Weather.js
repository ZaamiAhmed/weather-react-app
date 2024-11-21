import React,{useState} from "react";
// import { ColorRing} from 'react-loader-spinner';
import axios from "axios";

export default function Weather(){
let [city,setCity]=useState("");
let[temperature,setTemperature]=useState(null);

function updateCity(event) {
 setCity(event.target.value);

    
}
    function showTemp(event) {
        event.preventDefault();
        

        let apiKey = "701f06352d61835bc4fc894e7b084629";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then((Response) => {
        setTemperature(Math.round(Response.data.main.temp));
      });
    }

    return (
      <div>
        <h2>Weather App</h2>
        <form>
          <input type="text" placeholder="type a city" onChange={updateCity} />
          <button onClick={showTemp}>Search</button>
        </form>
        <p>
          The temperature of {city} is {temperature}°C
        </p>
      </div>
    );
     
}