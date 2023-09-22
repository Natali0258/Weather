import css from './Header.module.css';
import Form from '../Form/Form';

const Header = ({ setCurrent, isLight, setIsLight, setFiveDays, setDate }) => {

   return (
      <header className={css.header}>
         <div className='container'>
            <nav className={css.wrapper}>
               <div className={css.logo}>
                  <div className={css.circle}></div>
                  <h1 className={css.title}>react weather</h1>
               </div>
               <div className={css.selectCity}>
                  <div className={`${css.drop} ${isLight ? css.light : ''}`} onClick={() => setIsLight(!isLight)}></div>
                  <Form setCurrent={setCurrent} isLight={isLight} setIsLight={setIsLight}
                     setFiveDays={setFiveDays} setDate={setDate} />
               </div>
            </nav>
         </div>


      </header>
   )
}
export default Header;