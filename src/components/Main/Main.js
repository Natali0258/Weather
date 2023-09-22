import MainFooter from './MainFooter/MainFooter';
import MainHeader from './MainHeader/MainHeader';
import css from './Main.module.css';

const Main = ({ current, fiveDays, date, setDate, isLight, setIsLight }) => {

   return (
      <section className={css.main}>
         <div className='container'>
            <MainHeader current={current} isLight={isLight} setIsLight={setIsLight} />
            <MainFooter fiveDays={fiveDays} date={date} setDate={setDate} isLight={isLight} setIsLight={setIsLight} />
         </div>
      </section>
   )
}
export default Main;