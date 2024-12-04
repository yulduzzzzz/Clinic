import React from 'react'

import style from './Footer.module.css'
import strel from '../../../../src/assets/images/strel.png'
import logodown from '../../../../src/assets/icons/logodown.png'
import f from '../../../../src/assets/fonts/f.png'
import tel from '../../../../src/assets/fonts/tel.png'
import va from '../../../../src/assets/fonts/va.png'
import imgimgimg from '../../../../src/assets/images/imgimgimg.png'
import FootMap from './footmap/FootMap'
import FootForm from './footform/FootForm'


function Footer() {
  return (

<div className={style.Footer}>
  <FootMap/>
<FootForm/>
  
<div className={style.Foot} >

<div className={style.big}>
<div className={style.box}>
      <h3 className={style.tit} >Покупателям</h3>
      <div className={style.line}></div>
<div className={style.nav}>
<ul className={style.item} >
        <li className={style.li} >
        <a href="#" className={style.link}  >О компании</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Сертификаты</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Вакансии</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Гарантии</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Услуги</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Акции</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Доставка</a>
        </li>
       </ul>
       <ul className={style.item} >
        <li className={style.li} >
        <a href="#" className={style.link}  >Оплата</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Возврат</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >ФАК</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Лизинг</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Отзывы</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Блог</a>
        </li>
   
       </ul>
     
</div>

    </div>
    <div className={style.boxone}>
    <h3 className={style.titone}  >Каталог</h3>
    <div className={style.lineone}></div>
    <div className={style.navone}>
<ul className={style.item} >
        <li className={style.li} >
        <a href="#" className={style.link}  >Реанимация</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Хирургия</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Офтальмология</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Лабораторная диагностика</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Акушерство и Гинекология</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Гистология</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Косметология</a>
        </li>
       </ul>
       <ul className={style.item} >
        <li className={style.li} >
        <a href="#" className={style.link}  >Орториноларингология</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Рентгенология и томография</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Стрерилизация</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Физиотерапия и реабилитация</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Функциональная диагностика</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Эндоскопия</a>
        </li>
   
       </ul>
       <ul className={style.item} >
        <li className={style.li} >
        <a href="#" className={style.link}  >Новинки</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Распродажи</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Кабинеты под ключ</a>
        </li>
        <li className={style.li} >
        <a href="#" className={style.link}  >Скачать каталог</a>
        </li>
    
   
       </ul>
     
</div>

    </div>
    <div className={style.boxone}>
    <h3 className={style.titone}  >Контакты</h3>
    <div className={style.linetwo}></div>
    <div className={style.navtwo}>
<ul className={style.item} >
        <li className={style.lili} >
        <a href="#" className={style.link}  >Адрес:</a>
        </li>
    <p   className={style.p}>г. Москва, ул. Московская, д. 35</p>
        <li className={style.lili} >
        <a href="#" className={style.linkk}  >
        Карта проезда
        <img src={strel} className={style.img} alt="" />
        </a>
        </li>
        <p className={style.textp}  >График работы:
Пн-Пт с 09:00-19:00, 
Сб-Вс - выходной</p>
        <li className={style.lili} >
        <a href="#" className={style.link}  >+7 000-000-00-00</a>
        </li>
        <li className={style.lili} >
        <a href="#" className={style.link}  >+7 495-000-00-00</a>
        </li>
        <li className={style.lili} >
        <a href="#" className={style.link}  >8 800-000-00-00</a>
        </li>
        <li className={style.lili} >
        <a href="#" className={style.link}  >info@mail.ru</a>
        </li>
       </ul>
       
</div>

    </div>
</div>
<div className={style.linethree}></div>
<div className={style.bigone}>
  <div className={style.one}>
<a href="#">
  <img src={logodown} className={style.log} alt="" />
</a>
<h6 className={style.titdown} >ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</h6>
  </div>
  <div className={style.two}>
    <h6 className={style.ti} >Мы в соцсетях</h6>
    <div className={style.imgboxx}>
      <img src={f} alt="" />
      <img src={tel} alt="" />
      <img src={va} alt="" />
    </div>
  </div>
  <div className={style.three}>
    <ul className={style.ul} >
      <li className={style.li} >
        <a href="#" className={style.a} >Партнерская программа</a>
      </li>
      <li className={style.li} >
        <a href="#" className={style.a} >Оптовые продажи</a>
      </li>
      <li className={style.li} >
        <a href="#" className={style.a} >Реквизты</a>
      </li>
    </ul>
  </div>
  <div className={style.four}>
  <ul className={style.ul} >
      <li className={style.li} >
        <a href="#" className={style.a} >Политика конфиденциальности </a>
      </li>
      <li className={style.li} >
        <a href="#" className={style.a} >Условия соглашения</a>
      </li>
      <li className={style.li} >
        <a href="#" className={style.a} >Карта сайта</a>
      </li>
    </ul>
  </div>
  <div className={style.five}>
    <ul className={style.itemone} >
      <li className={style.lione} >
        <a href="#" className={style.linka} >Способы оплаты
     
        </a>
       
      </li>
    </ul>
    <img src={imgimgimg} alt="" />
    
  </div>
 
</div>
<div className={style.end}>
  <h2 className={style.tiend} >© 2022 Медоборудование Все права защищены</h2>
  <h6 className={style.textend} >Информация на данном сайте носит справочный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации</h6>
</div>
    </div>
 </div>
  )
}

export default Footer