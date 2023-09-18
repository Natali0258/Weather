import drop from '../../assets/icons/drop.png';
import css from './Header.module.css';
import Form from '../Form/Form';

const Header = ({ setCurrent }) => {

   return (
      <header className={css.header}>
         <div className='container'>
            <nav className={css.wrapper}>
               <div className={css.logo}>
                  <div className={css.circle}></div>
                  <h1 className={css.title}>react weather</h1>
               </div>
               <div className={css.selectCity}>
                  <img src={drop} alt="drop" className={css.drop} />
                  <Form />
               </div>
            </nav>
         </div>


      </header>
   )
}
export default Header;