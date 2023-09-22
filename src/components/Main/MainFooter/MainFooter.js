import css from './MainFooter.module.css';

const MainFooter = ({ fiveDays, date, setDate, isLight }) => {
   const { MainFooter, title, listDate, itemDate, row, card, cardTitle, cardImg, cardTempMax, cardTempMin, description, itemDateActive, light } = css;

   return (
      <section className={MainFooter}>
         <h2 className={title}>На 5 дней</h2>
         <ul className={listDate}>
            {[...new Set(fiveDays.map(item => item.dt_txt.slice(0, 10)))]
               .map(elem => (
                  <li key={elem}
                     className={`${itemDate} ${isLight ? light : ''} ${elem === date ? itemDateActive : ''}`}
                     onClick={() => setDate(elem)}
                  >{elem}</li>)
               )
            }
         </ul>

         <div className={`${row} ${isLight ? light : ''}`}>
            {fiveDays.filter(item => item.dt_txt.includes(date))
               .map(item => (
                  <div key={item.dt_txt} className={`${card} ${isLight ? light : ''}`} >
                     <h3 className={cardTitle}>{item.dt_txt.slice(11, 16)}</h3>
                     <img className={cardImg} src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" />
                     <p className={cardTempMax}>{(item.main.temp - 273.15).toFixed()}°</p>
                     <p className={cardTempMin}>{(item.main.temp_min - 273.15).toFixed()}°</p>
                     <p className={description}>{item.weather[0].description}</p>
                  </div>
               ))
            }
         </div>

      </section >
   )
}
export default MainFooter;