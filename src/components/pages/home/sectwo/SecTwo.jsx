import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import style from './SecTwo.module.css'
import imgoneone from '../../../../assets/images/imgoneone.png'
import imgtwo from '../../../../assets/images/imgtwo.png'
import imgthree from '../../../../assets/images/imgthree.png'
function SecTwo() {
  return (
    <div className={style.SecTwo} >
<div className="container">
<h1 className={style.title}  >Комплексное оснащение кабинетов</h1>
<Swiper
        slidesPerView={3}
  
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
    <div className={style.box}>
    

        <SwiperSlide>

        <div className={style.boxone}>
<img src={imgoneone} alt=""  className={style.imgone}  /> <br />
<a href="#"  className={style.link} >Экспресс лаборатория</a>
    </div>
        </SwiperSlide>

        <SwiperSlide>

        <div className={style.boxone}>
<img src={imgtwo} alt=""  className={style.imgone}  /> <br />
<a href="#"  className={style.link} >Лазерная терапия</a>
    </div>
            

        </SwiperSlide>
        <SwiperSlide>
        <div className={style.boxone}>
<img src={imgthree } alt=""  className={style.imgone}  /> <br />
<a href="#"  className={style.link} >Операционный блок</a>
    </div>
        </SwiperSlide>
        <SwiperSlide>  
             <div className={style.boxone}>
<img src={imgoneone} alt=""  className={style.imgone}  /> <br />
<a href="#"  className={style.link} >Экспресс лаборатория</a>
    </div>
            
        </SwiperSlide>
    </div>
    <div className={style.btnbox}>
            <button  className={style.btn} >
                <a href="#" className={style.link} >Бесплатная консультация</a>
            </button>
            <button className={style.btnone}  >
                <a href="#" className={style.linkk} >Рассчитать стоимость</a>
            </button>
        </div>
      
      </Swiper>

</div>
    </div>
  )
}

export default SecTwo