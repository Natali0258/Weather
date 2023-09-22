import axios from 'axios';
import css from './Form.module.css';

const Form = ({ setCurrent, isLight, setFiveDays, setDate }) => {

   const getWeatherUseCity = (e) => {
      e.preventDefault();

      //погода на текущую дату:
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=b744d8f98f4e6a43ef758ad34071c501`)
         .then(({ data }) => setCurrent(data))
         .catch(() => alert('Увы, такого города нет, попробуй заново.'));

      //погода на 5 дней: 
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${e.target[0].value}&appid=b744d8f98f4e6a43ef758ad34071c501`)
         .then(({ data }) => {
            setFiveDays(data.list);
            setDate(data.list[0].dt_txt.slice(0, 10))
         })
         .catch(() => alert('Увы, такого города нет, попробуй заново.'));
      e.target.value = ''
   }

   return (
      <form className={css.form} onSubmit={getWeatherUseCity}>
         <input placeholder='write city...' type='search' required className={`${css.input} ${isLight ? css.light : ''}`} />
         <button type='submit' className={`${css.button} ${isLight ? css.light : ''}`}>Search</button>
      </form>
   )
}
export default Form;