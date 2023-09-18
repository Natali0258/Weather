import axios from 'axios';
import css from './Form.module.css';

const Form = ({ setCurrent }) => {

   const getWeatherUseCity = (e) => {
      e.preventDefault();
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=b744d8f98f4e6a43ef758ad34071c501`)
         .then(data => setCurrent(data))
         .catch(() => alert('Увы, такого города нет, попробуй заново.'));
   }

   return (
      <form className={css.form} onSubmit={getWeatherUseCity}>
         <input placeholder='write city...' type='search' required className={css.input} />
         <button type='submit' className={css.button}>Search</button>
      </form>
   )
}
export default Form;