import React from 'react'
import style from './SecSix.module.css'
import middle from '../../../../assets/images/middle.png'
import middleone from '../../../../assets/images/middleone.png'
import middletwo from '../../../../assets/images/middletwo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function SecSix() {
  return (
    <div className={style.SecSix} >
 <div className={style.f}>
 <Swiper
        slidesPerView={5}
      
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>     <div className={style.box}>
          <h1  className={style.title} > Бренды</h1>
          <p className={style.text} >Эксклюзивные поставщики</p>
        </div></SwiperSlide>
        <SwiperSlide> <div className={style.boxx}>
 <div className={style.boxone}>
<div className={style.boxoneinside}>
  <img src={middle}   className={style.mid} alt="" />
 
</div>

<h1 className={style.tit} >НМИЦ онкологии им. Н.Н. Блохина</h1>
        </div>
 </div></SwiperSlide>
        <SwiperSlide> <div className={style.boxx}>
 <div className={style.boxone}>
<div className={style.boxoneinside}>
  <img src={middleone}   className={style.mid} alt="" />
 
</div>

<h1 className={style.tit} >НМИЦ онкологии им. Н.Н. Блохина</h1>
        </div>
 </div></SwiperSlide>
        <SwiperSlide><div className={style.boxx}>
 <div className={style.boxone}>
<div className={style.boxoneinside}>
  <img src={middletwo }   className={style.midd} alt="" />
 
</div>

<h1 className={style.tit} >НМИЦ онкологии им. Н.Н. Блохина</h1>
        </div>
 </div></SwiperSlide>
        <SwiperSlide> <div className={style.boxx}>
 <div className={style.boxone}>
<div className={style.boxoneinside}>
  <img src={middle}   className={style.mid} alt="" />
 
</div>

<h1 className={style.tit} >НМИЦ онкологии им. Н.Н. Блохина</h1>
        </div>
 </div></SwiperSlide>
      
       
        <SwiperSlide> <div className={style.boxx}>
 <div className={style.boxone}>
<div className={style.boxoneinside}>
  <img src={middle}   className={style.mid} alt="" />
 
</div>

<h1 className={style.tit} >НМИЦ онкологии им. Н.Н. Блохина</h1>
        </div>
 </div></SwiperSlide>
       <div className={style.b}></div>
      </Swiper>
 </div>
  
    </div>
  )
}

export default SecSix