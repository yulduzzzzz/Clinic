import React from 'react'
import style from './SecSeven.module.css'
import sim from '../../../../assets/images/sim.png'
import ex from '../../../../assets/images/ex.png'
import pil from '../../../../assets/images/pil.png'
import { NavLink } from 'react-router-dom'
function SecSeven() {
  return (
    <div  className={style.SecSeven}>
<div className={style.big}>
<div className={style.box}>
                <h1  className={style.title} >Информация о компании</h1>
            </div>
         <div className={style.boxtwo}>
            <div className={style.line}></div>
           <div className={style.boxin}>
           <h3 className={style.tit} >О компании</h3>
           <button className={style.eximg} >
            <img src={ex} alt="" />
           </button>
           </div>
            <p  className={style.text} >Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.</p>
            <NavLink to='/' className={style.link}  >Подробнее
                <img src={sim} alt="" />
                </NavLink>
                <div className={style.lineone}></div>
               <div className={style.picbox}>
               <h1 className={style.tite} >Преимущества сотрудников</h1>
               <img src={pil} alt="" />
               </div>
               <div className={style.lineone}></div>
               <div className={style.picbox}>
               <h1 className={style.tite} >Достижения компании</h1>
               <img src={pil} alt="" />
               </div>
               <div className={style.lineone}></div>
               <div className={style.picbox}>
               <h1 className={style.tite} >Карьерный рост</h1>
               <img src={pil} alt="" />
               </div>
            
         </div>
</div>
    </div>
  )
}

export default SecSeven