import React from 'react'
import style from './FootForm.module.css'
import mess from '../../../../assets/images/mess.png'
import backend from '../../../../assets/images/backend.png'
function FootFoorm() {


  return (
    <div className={style.FootForm}  >
<div className={style.box}>
<div className={style.boxin}>
  <img src={mess} alt="" />
</div>
<div className={style.boxinn}>
  <h1 className={style.tit} >Подпишитесь и будьте в курсе!</h1>
<a href="#" className={style.link} >
Акции, скидки, распродажи ждут!
</a>
<div className={style.inpbox}>
  <input type="text" placeholder='Введите email' className={style.inp}  />
 
  <button className={style.btn} type='button'   >Подписаться</button>
</div>
<div className={style.ch}>
  <input type="checkbox" className={style.che}  />
   <p className={style.p} > Я даю согласие на обработку своих персональных данных.</p>
</div>
</div>
 

</div>
    </div>
  )
}

export default FootFoorm