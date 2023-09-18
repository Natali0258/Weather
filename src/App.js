import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './style.css';

const App = () => {
  const [current, setCurrent] = useState({});

  //источник: https://www.w3schools.com/jsref/met_geo_getcurrentposition.asp
  function getLocation() {
    if (navigator.geolocation) {     //проверка на подключение кп к геолокации
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    //Получаем широту и долготу:
    // console.log("Latitude: " + position.coords.latitude +
    // "<br>Longitude: " + position.coords.longitude);

    //По данным (по широте и долготе) определяем город:
    //источник: https://openweathermap.org/current
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} 
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b744d8f98f4e6a43ef758ad34071c501`)
    //   .then(res => res.json())
    //   .then(res => console.log('fetch=', res))

    //метод get() можно не писать, он исользуется в axios по-молчанию
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b744d8f98f4e6a43ef758ad34071c501`)
      //.then((res) => console.log('axios=', res.data)) 
      //можно вывести data с помощью деструктуризации:  
      .then(({ data }) => setCurrent(data))
  }

  useEffect(() => {
    getLocation()
  }, [])
  console.log('current=', current)
  return (
    <div>
      <Header setCurrent={setCurrent} />
      <Main current={current} />
    </div>
  );
}

export default App;
