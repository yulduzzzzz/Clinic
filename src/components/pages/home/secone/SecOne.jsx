import React from 'react'
import style from './SecOne.module.css'
import bag from '../../../../assets/images/bag.png'
import aparat from '../../../../assets/images/aparat.png'

import elec from '../../../../assets/images/elec.png'
import apar from '../../../../assets/images/apar.png'
import camera from '../../../../assets/images/camera.jpg'
import picone from '../../../../assets/images/picone.png'
import pic from '../../../../assets/images/pic.jpg'
import { NavLink } from 'react-router-dom'
function SecOne() {
  return (
    <div className={style.SecOne}>
  <div className="container">
    <div className={style.secbox}>
        <h1 className={style.titsec}>Популярные категории</h1>
        <button className={style.btn}  >Все категории</button>
    </div>
<div className={style.elec}>
<div className={style.boxbagg}>
<div className={style.boxpicture}>
<img src={bag}  className={style.bagimg} alt="" />
<a href="#"  className={style.bagtit} 
>Дерматологическое оборудование</a>
 
    </div>
    <div className={style.boxpicture}>
<img src={elec}  className={style.elecimg} alt="" />
<a href="#"  className={style.bagtit} 
>Ветеринарное оборудование</a>
    </div>
</div>
    <div className={style.aparat}>
        <img src={aparat} alt="" className={style.apartaimg}   />
        <a href="#" className={style.bagtit}  >Дерматологическое оборудование</a>
    </div>
    <div className={style.boxbagg}>
<div className={style.boxpicture}>
<img src={apar}  className={style.bagimgg} alt="" />
<a href="#"  className={style.bagtit} 
>Дерматологическое оборудование</a>
 
    </div>
    <div className={style.boxpicture}>
<img src={camera}  className={style.elecimg} alt="" />
<a href="#"  className={style.bagtit} 
>Ветеринарное оборудование</a>
    </div>
    
</div>

<div className={style.boxall}>
<div className={style.boxpicture}>
<img src={pic}  className={style.bagimgg} alt="" />
<a href="#"  className={style.bagtit} 
>Дерматологическое оборудование</a>
 
    </div>
    <div className={style.boxpicture}>
<img src={picone}  className={style.elecimg} alt="" />
<a href="#"  className={style.bagtit} 
>Ветеринарное оборудование</a>
    </div>
</div>
    
</div>
  </div>
    </div>
  )
}

export default SecOne