import React from 'react'
import style from './Contact.module.css'
import lac from '../../../../src/assets/fonts/lac.png'
import time from '../../../../src/assets/fonts/time.png'
import call from '../../../../src/assets/fonts/call.png'
import mass from '../../../../src/assets/fonts/mass.png' 
import w from '../../../../src/assets/fonts/w.png'
import t from '../../../../src/assets/fonts/t.png'
import v from '../../../../src/assets/fonts/v.png'
import { YMaps, Map, SearchControl, FullscreenControl } from 'react-yandex-map';

function Contact() {
  return (
    <div className={style.Contact} >
        <div className="container">
         <div className={style.box}>
            <select  className={style.sel} >
                <option value="">Главная</option>
            </select>
            <ul>
                <li className={style.list} >
                    <a href="#" className={style.link} >Контакты</a>
                </li>
            </ul>
         </div>
         <h1 className={style.title} >Контакты</h1>
         <div className={style.big}>
            <div className={style.boxone}>
                <h1 className={style.tit} >ООО Глобал Медикал Трейд</h1>
                <div className={style.inbox}>
                    <img src={lac} alt="" className={style.img}  />
                    <div className={style.in}>
                    <h5  className={style.text} >Юридический адрес:</h5>
                    <h2 className={style.titone} >Россия, г. Москва, ул. Докукина, 8, стр. 2</h2>
                    </div>
                   
                </div>
                <div className={style.inbox}>
                    <img src={lac} alt="" className={style.img}  />
                    <div className={style.in}>
                    <h5  className={style.text} >Фактический адрес:</h5>
                    <h2 className={style.titone} >Россия, г. Москва, ул. Докукина, 8, стр. 2</h2>
                    </div>
                   
                </div>
                <div className={style.inbox}>
                    <img src={time} alt="" className={style.img}  />
                    <div className={style.in}>
                    <h5  className={style.text} >Режим работы:</h5>
                    <h2 className={style.titonee} >Пн-Пт с 09:00-19:00 Сб-Вс - выходной</h2>
                    </div>
                   
                </div>
                <h1 className={style.call} >Звоните. Звонки по России бесплатны: </h1>
                <div className={style.intwo}>
                    <img src={call} alt="" />
                    <h4 className={style.cant} >Телефоны:</h4>
                </div>
                <div className={style.canbox}>
                    <p className={style.price} >8-800-000-00-00</p>
                    <p className={style.price} >+7-000-000-00-00</p>
                    <p className={style.price} >+7-495-000-00-00</p>
                </div>
                <div className={style.inthree}>
                    <img src={mass} alt="" />
                    <h4 className={style.write} >Пишите: </h4>
                </div>
                <h2 className={style.mail} >info@mail.ru</h2>
                <div className={style.bigbig}>
                    <div className={style.infour}>
                        <h1 className={style.rek} >Реквизиты: </h1>
                        <div className={style.boxinbig}>
<div className={style.boxinn}>
    <h1 className={style.titinn} >ИНН</h1>
    <h1 className={style.num} >9717039181</h1>
</div>
<div className={style.inntwo}>
    <h1 className={style.org} >ОГРН</h1>
    <h1 className={style.number} >1167746796986</h1>
</div>
                        </div>
                    </div>
                    <div className={style.infive}>
                        <h1 className={style.we} >Мы в соцсетях</h1>
                        <div className={style.boximg}>
                            <img src={w} alt="" />
                            <img src={t} alt="" />
                            <img src={v} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.boxone}>
                <h1 className={style.tit} >Бесплатная консультация</h1>
         <p  className={style.textone} >Оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
</p>
<input type="text"   placeholder='Ваше имя' className={style.input}  />
<input type="text"   placeholder='Ваш телефон' className={style.input}  />
<input type="text"   placeholder='Ваш email' className={style.input}  />
<input type="text"   placeholder='Ваш вопрос' className={style.inputone}  />

<div className={style.btnbox}>
    <button className={style.btn} >Отправить</button>
    <p className={style.textend} >Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях Политики конфиденциальности.</p>
</div>
            </div>
         </div>
         <YMaps>
    <Map   width={1100} height={500}  defaultState={{
    center: [41.326219, 69.326916],
    zoom: 9,
    controls: []
  }}>
      <FullscreenControl />
      <SearchControl options={{
      float: 'right'
    }} />
    </Map>
  </YMaps>

        </div>
    </div>
  )
}

export default Contact