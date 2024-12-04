import React from 'react'
import style from './SecFive.module.css'
import backone from '../../../../assets/images/backone.png'
import imgone from '../../../../assets/images/imgone.png'
import h from '../../../../assets/images/h.png'
import l from '../../../../assets/images/l.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function SecFive() {
  return (
<div className={style.SecFive} >
     <div className={style.boxtitle}>
        <h4 className={style.tit} >Наши клиенты</h4>
        <h1 className={style.title} >БОЛЕЕ 5000
УСПЕШНЫХ ПРОЕКТОВ </h1>
      </div>
<div className={style.d}>
<Swiper
        slidesPerView={5}
       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
     <SwiperSlide>
        <div className={style.boxbig}>
        <div className={style.box}>
<img src={imgone} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div>
        </SwiperSlide>
        <SwiperSlide>   <div className={style.boxbig}>
        <div className={style.box}>
<img src={backone} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div></SwiperSlide>
        <SwiperSlide> <div className={style.boxbig}>
        <div className={style.box}>
<img src={l} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div></SwiperSlide>
        <SwiperSlide> <div className={style.boxbig}>
        <div className={style.boxh}>
<img src={h} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div></SwiperSlide>
        <SwiperSlide>  <div className={style.boxbig}>
        <div className={style.box}>
<img src={l} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div></SwiperSlide>
      <SwiperSlide>  <div className={style.boxbig}>
        <div className={style.box}>
<img src={l} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div></SwiperSlide>
     <div className={style.o}></div>
      </Swiper>
</div>
{/* <div className={style.son}>
<div className={style.boxbig}>
        <div className={style.box}>
<img src={imgone} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div>
      <div className={style.boxbig}>
        <div className={style.box}>
<img src={backone} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div>
      <div className={style.boxbig}>
        <div className={style.box}>
<img src={l} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div>
      <div className={style.boxbig}>
        <div className={style.boxh}>
<img src={h} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div>
      <div className={style.boxbig}>
        <div className={style.box}>
<img src={l} alt=""  className={style.img}  />

        </div>
        <h3  className={style.text} >НМИЦ онкологии им. Н.Н. Блохина</h3>
      </div>

</div> */}
    </div>
  )
}

export default SecFive