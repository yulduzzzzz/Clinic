import React from 'react'
import style from './Navbar.module.css'
import burger from '../../../../src/assets/icons/burger.svg'
import map from '../../../../src/assets/icons/map.svg'
import ser from '../../../../src/assets/images/ser.png'

import logo from '../../../../src/assets/icons/logo.svg'
import her from '../../../../src/assets/images/her.png'
import ka from '../../../../src/assets/images/ka.png'
import pers from '../../../../src/assets/images/pers.png'
import build from '../../../../src/assets/images/build.jpg'
import imgbuild from '../../../../src/assets/fonts/imgbuild.png'


import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
<div className={style.navbar}>
    
<div className="container">

         <div className={style.navbarup}>
            <ul className={style.itemup}>
                <li className={style.liup} > 
                <a href="#" className={style.atekup} >О компании</a> </li>
                <li className={style.liup} > 
                <a href="#" className={style.atekup} >Доставка</a> </li>
                <li className={style.liup} > 
                <a href="#" className={style.atekup} >Оплата</a> </li>
                <li className={style.liup} > 
                <a href="#" className={style.atekup} >Гарантии</a> </li>
                <li className={style.liup} > 
                <a href="#" className={style.atekup} >Блог</a> </li>

            </ul>
           <div className={style.up}>
           <a href="#"  className={style.mapup}  >info@mail.ru</a>
            <a href="#"  className={style.adresup}  >г. Москва, ул. Московская, д. 35</a>
           </div>
         </div>
         <div className={style.line}></div>
         <div className={style.bignav}>
         <NavLink to='/'>
            <img src={logo} alt="" />
         </NavLink>
         <div className={style.inselbox}>
           <select className={style.select}>
            <option value=""  disabled  >Все категории</option>
            <option value="">Популярные категории</option>
            <option value="">Комплексное оснащение кабинетов</option>
            <option value="">Почему выбирают нас?</option>
            <option value="">Каталог товаров</option>
           </select>
         
         </div>
         <div className={style.boxinput}>
         <input type="text"  placeholder='Поиск'  className={style.input}  />
           <button className={style.btnsearch}>
            <img src={ser}  className={style.herr}   alt="" />
           </button>
         </div>
         <p className={style.clock}  >Пн-Пт с 09:00-19:00 
Сб-Вс - выходной</p>
<NavLink to='/'  className={style.link}  >
    <img src={pers} alt=""  className={style.herr}  />
    Войти
</NavLink>
<NavLink to='/'  className={style.link}  >
    <img src={her} alt=""  className={style.herr} />
    Избранное
</NavLink>
<NavLink to='/'  className={style.link}  >
    <img src={imgbuild} alt="" />
    Сравнить
</NavLink>
<NavLink to='/'  className={style.link}  >
    <img src={ka} alt=""   className={style.herr}  />
    Корзина
</NavLink>


         </div>
<div className={style.linethree}></div>
         <div className={style.navbox}>
            <div className={style.boxitem}>
                <img src={burger} alt="" />
                <ul className={style.item} >
                    <li className={style.list} >
                        <NavLink to='/Catalog'  className={style.a}  >
                        Каталог
                        </NavLink>
                        
                    </li>
                    <li className={style.list} >
                        <NavLink to='/Manufacturer' className={style.a}   >
                        Производители
                        </NavLink>
                        
                    </li>
                    <li className={style.list} >
                        <NavLink to='/Turnkey'   className={style.a}   >
                        Кабинеты под ключ
                        </NavLink>
                        
                    </li>
                    <li className={style.list} >
                        <NavLink to='/Services'   className={style.a}  >
                        Услуги
                        </NavLink>
                        
                    </li>
                    <li className={style.list} >
                        <NavLink to='/Stock'   className={style.a}  >
                        Акции
                        </NavLink>
                        
                    </li>
                    <li className={style.list} >
                        <NavLink to='/Buy'   className={style.a}  >
                        Покупателям
                        </NavLink>
                        
                    </li>
                    <li className={style.list} >
                        <NavLink to='/Contact'  className={style.a}  >
                        Контакты
                        </NavLink>
                        
                    </li>
                </ul>
            </div>
            <div className={style.boxright}>
                <NavLink to='/'  className={style.titmap}  >Москва
                <img src={map} alt="" />
                </NavLink>
                <button className={style.btnup}>+7(495)000-00-00</button>
                <button className={style.btnupone}>Заказать звонок</button>
            </div>
         </div>
         <div className={style.lineoneone}></div>
    </div>
</div>
   
  )
}

export default Navbar