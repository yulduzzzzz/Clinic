import React from 'react'
import style from './FootMap.module.css'
import { Map, Placemark,YMaps, FullscreenControl, ListBox, ListBoxItem} from 'react-yandex-map';
function FootMap() {
  return (
    <div className={style.FootMap} >
<div className={style.big}>
<YMaps  >
    <Map width={600} height={612} 
    defaultState={{
    center: [41.326219, 69.326916],
    zoom: 5
  }}>
      <Placemark geometry={[41.326219, 69.326916]} />
      <FullscreenControl />
      <ListBox data={{
      content: 'Select city'
    }}>
        <ListBoxItem data={{
        content: 'Uzbekistan'
      }} />
        <ListBoxItem data={{
        content: 'Toshkent'
      }} />
      </ListBox>
    </Map>
  </YMaps>
  <div className={style.in}>
   <div className={style.ins}>
   <h1 className={style.tit} >  Остались вопросы?</h1>
   <p className={style.text}>Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
</p>
<input type="text"  className={style.inpone}  placeholder='Ваше имя' />
<input type="text" className={style.inptwo}  placeholder='Ваш телефон' />
<input type="text"   className={style.inpthree} placeholder='Ваш email' />
<input type="text"  className={style.inpfour} placeholder='Ваш вопрос' />
   <div className={style.btnbox}>
    <button className={style.btn} >Отправить</button>
    <p className={style.btntext} >Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях Политики конфиденциальности.</p>
   </div>
   </div>
  </div>
</div>
    </div>
  )
}

export default FootMap