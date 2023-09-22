import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './style.css';
import Form from "./components/Form/Form";

const App = () => {
  const [current, setCurrent] = useState({});     //данные о погоде на текущую дату
  const [fiveDays, setFiveDays] = useState([]);   //данные о погоде на 5 дней
  const [date, setDate] = useState('');           //дата, данные которой выводятся внизу экрана
  const [isLight, setIsLight] = useState(false);  //переключение темы

  //источник: https://www.w3schools.com/jsref/met_geo_getcurrentposition.asp
  function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    //Получаем широту и долготу:
    // console.log("Latitude: " + position.coords.latitude +
    // "<br>Longitude: " + position.coords.longitude);

    //погода на текущую дату:
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b744d8f98f4e6a43ef758ad34071c501`)
      //.then((res) => console.log('axios=', res.data)) 
      //можно вывести data с помощью деструктуризации:  
      .then(({ data }) => setCurrent(data));

    //погода на 5 дней: 
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b744d8f98f4e6a43ef758ad34071c501`)
      .then(({ data }) => {
        setFiveDays(data.list);
        setDate(data.list[0].dt_txt.slice(0, 10))
      });
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <div className={`app ${isLight ? 'light' : ''}`}>
      {//проверка что геолокация подключена и current не {}
        (Object.keys(current).length !== 0 && Object.keys(date).length !== 0) ?
          <>
            <Header setCurrent={setCurrent} isLight={isLight} setIsLight={setIsLight}
              setFiveDays={setFiveDays} setDate={setDate} />
            <Main current={current} isLight={isLight} setIsLight={setIsLight}
              fiveDays={fiveDays} date={date} setDate={setDate} />
          </>
          : <div className="block-form">
            <Form setCurrent={setCurrent} setFiveDays={setFiveDays} setDate={setDate} />
          </div>
      }
    </div >
  );
}

export default App;
