import MainHeader from './MainHeader/MainHeader';

const Main = ({ current }) => {

   return (
      <section>
         <div className='container'>
            {
               // отрисовать компонент после загрузки данных с сервера
               //JSON.stringify(current) !== '{ }'
               Object.keys(current).length !== 0
                  ? <MainHeader current={current} />
                  : ''
            }
         </div>
      </section>
   )
}
export default Main;