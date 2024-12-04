import React from 'react'
import style from './Eight.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import backman from '../../../../assets/images/backman.png'
import man from '../../../../assets/images/man.png'
import mann from '../../../../assets/images/mann.png'
function Eight() {
  return (
    <div className={style.Eight} >
        <div className="container">

<OwlCarousel className={style.OwlCarousel}  items={3} margin={5} nav={true} 
autoplay={true} 
autoplayTimeout={5000}
loop={true} >
<div className={style.boxtit}>
<h1 className={style.tit} >Новости компании</h1>
</div>
<div className={style.box}>
<img src={backman} alt="" />
<div className={style.boxtext}>
<p className={style.date} >07.11.2022</p>
<h4 className={style.title} >Название новости</h4>
<p className={style.text} >Допускает внедрение поэтапного и развития общества.</p>
</div>
</div>
<div className={style.box}>
<img src={man} alt="" />
<div className={style.boxtext}>
<p className={style.date} >07.11.2022</p>
<h4 className={style.title} >Название новости</h4>
<p className={style.text} >Допускает внедрение поэтапного и развития общества.</p>
</div>
</div>
<div className={style.box}>
<img src={mann} alt="" />
<div className={style.boxtext}>
<p className={style.date} >07.11.2022</p>
<h4 className={style.title} >Название новости</h4>
<p className={style.text} >Допускает внедрение поэтапного и развития общества.</p>
</div>
</div>

</OwlCarousel>
        </div>
    </div>
  )
}

export default Eight