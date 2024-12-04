import React from 'react'
import style from './SecThree.module.css'
import imgfour from '../../../../assets/images/imgfour.jpg'
import imgfive from '../../../../assets/images/imgfive.png'
import imgsix from '../../../../assets/images/imgsix.png'
import imgseven from '../../../../assets/images/imgseven.png'
import mol from '../../../../assets/images/mol.png'

function SecThree() {
  return (
    <div className={style.SecThree} >
  <div className="container">
  <h1  className={style.title} >Почему выбирают нас?</h1>
   <div className={style.boxbig}>
   <div className={style.box}>
          <img src={mol}  className={style.imgmol} alt="" />
         <p className={style.text}  >Быстрая  доставка</p>
        </div>
        <div className={style.box}>
          <img src={imgfive}  className={style.imgfive} alt="" />
         <p className={style.textone}  >Весь товар сертифицирован</p>
        </div>
        <div className={style.box}>
          <img src={imgsix}  className={style.imgsix} alt="" />
         <p className={style.textone}  >Гибкая система скидок</p>
        </div>
        <div className={style.box}>
          <img src={imgseven}  className={style.img} alt="" />
         <p className={style.text}  >Лет на рынке</p>
        </div>
   </div>
  </div>
    </div>
  )
}

export default SecThree