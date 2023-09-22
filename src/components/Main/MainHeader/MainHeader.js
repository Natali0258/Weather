import css from './MainHeader.module.css';

const MainHeader = ({ current, isLight }) => {

   const addZero = (num) => {
      if (num < 10) return `0${num}`
      else return num
   }

   let cityTime = () => {
      let d = new Date(),
         utc = d.getTime() + (d.getTimezoneOffset() * 60000),
         nd = new Date(utc + (1000 * current.timezone)),
         hours = addZero(nd.getHours()),
         minutes = addZero(nd.getMinutes());
      return `${hours}:${minutes}`
   }

   return (
      <section className={css.mainHeader}>

         <div className={`${css.left} ${isLight ? css.light : ''}`}>
            <div className={css.leftTop}>
               <div className={css.leftTopLeft}>
                  <p className={css.deg}>{(current.main.temp - 273.15).toFixed()}°</p>
                  <p className={css.today}>Today</p>
               </div>
               {/*Иконки брать здесь: https://openweathermap.org/weather-conditions*/}
               <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`} alt="icon weather" />
            </div>
            <p className={css.infotext}>Time : {cityTime()}</p>
            {
               current.name.includes('Gorod')
                  ? <p className={css.infotext}>City : {current.name.slice(6)}</p>
                  : <p className={css.infotext}>City : {current.name}</p>
            }
         </div>


         <div className={`${css.right} ${isLight ? css.light : ''}`}>
            <div className={css.elem}>
               <div className={css.imageTemp}></div>
               <p className={css.title}>Temperature</p>
               <p className={css.description}>{(current.main.temp - 273.15).toFixed()}° feels like {(current.main.feels_like - 273.15).toFixed()}°</p>
            </div>

            <div className={css.elem}>
               <div className={css.imagePres}></div>
               <p className={css.title}>Pressure</p>
               <p className={css.description}>{(current.main.pressure * 0.7501).toFixed()} mmHg</p>
            </div>

            <div className={css.elem}>
               <div className={css.imagePrec}></div>
               <p className={css.title}>Precipitation</p>
               <p className={css.description}>{current.weather[0].description}</p>
            </div >

            <div className={css.elem}>
               <div className={css.imageWind}></div>
               <p className={css.title}>Wind</p>
               <p className={css.description}>{current.wind.speed} m/s</p>
            </div>
            <div className={`${css.imageCloud} ${isLight ? css.light : ''}`}></div>
         </div >

      </section >
   )
}
export default MainHeader;