import React from 'react'
import style from './Slide.module.css'
import sliimg from '../../../../assets/fonts/sliimg.png'

function Slide() {
  return (
    <div className={style.Slide} >
        <div className="container">
            <div className={style.box}>

<div className={style.boxtit}>
    <h1 className={style.tit} >Заголовок баннера в пару строк</h1>
   
    <p  className={style.text}  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
    <div className={style.btnbox}>
    <button className={style.btn} >
        <a href="#" className={style.link} >
        Запросить цену
        </a>
    </button>
    <button className={style.btnone} >
        <a href="#" className={style.linkone} >
        В каталог
        </a>
    </button>
</div>



</div>
<div className={style.inside}>
    <img src={sliimg} className={style.img} alt="" />
</div>



            </div>
        </div>
    </div>
  )
}

export default Slide