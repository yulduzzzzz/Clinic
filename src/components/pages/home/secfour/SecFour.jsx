import React from 'react'
import style from './SecFour.module.css'
import { NavLink } from 'react-router-dom'
import build from '../../../../assets/fonts/build.png'
import heard from '../../../../assets/fonts/heard.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import camera from '../../../../assets/images/camera.jpg'

function SecFour() {
  return (
    <div  className={style.SecFour} >
   <div className="container">
 <div className={style.g}>
 <Swiper
        slidesPerView={3}
     
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
<div className={style.boxxxx}>
<SwiperSlide>   
   <div className={style.box}>
            <h1 className={style.title} >Каталог товаров</h1>
      <div className={style.boxlink}>
      <NavLink to='/' className={style.link} >
            Хиты продаж
            </NavLink>
      </div>
      <div className={style.boxlink}>
      <NavLink to='/' className={style.link} >
      Новинки
            </NavLink>
      </div>
      <div className={style.boxlink}>
      <NavLink to='/' className={style.link} >
      Акции
            </NavLink>
      </div>
            
        </div></SwiperSlide>
        <SwiperSlide>  <div className={style.boxone}>
            <div className={style.meni}>
                <button className={style.btn}  >
                <NavLink to='/' className={style.linknew} >Новинка</NavLink>
                </button>
                <div className={style.boximg}>
                    <img src={build} alt="" />
                    <img src={heard} alt="" />
                </div>
             
                
            </div>
          <div className={style.boxtitle}>
          <h1 className={style.tit}  >Анализатор мочи  MIND UA-66</h1>
            <p className={style.tex}  >Артикул: 213134</p>
            <p className={style.nal} >В наличии</p>
            <p  className={style.price} >300 000 руб.</p>
          </div>
            <button  className={style.btnone} >
                <NavLink to='/'  className={style.btntext}  >
                Добавить в корзину
                </NavLink>
                
            </button>
        </div></SwiperSlide>
        <SwiperSlide> <div className={style.boxone}>
            <div className={style.menione}>
                <button className={style.btn}  >
                <NavLink to='/' className={style.linknew} >Новинка</NavLink>
                </button>
                <div className={style.boximg}>
                    <img src={build} alt="" />
                    <img src={heard} alt="" />
                </div>
             
                
            </div>
          <div className={style.boxtitle}>
          <h1 className={style.tit}  >Анализатор мочи  MIND UA-66</h1>
            <p className={style.tex}  >Артикул: 213134</p>
            <p className={style.nal} >В наличии</p>
            <p  className={style.price} >300 000 руб.</p>
          </div>
            <button  className={style.btnone} >
                <NavLink to='/'  className={style.btntext}  >
                Добавить в корзину
                </NavLink>
                
            </button>
        </div></SwiperSlide>
        <SwiperSlide>     <div className={style.boxone}>
            <div className={style.menitwo}>
                <button className={style.btn}  >
                <NavLink to='/' className={style.linknew} >Новинка</NavLink>
                </button>
                <div className={style.boximg}>
                    <img src={build} alt="" />
                    <img src={heard} alt="" />
                  
                </div>
             
                
            </div>
          <div className={style.boxtitle}>
          <h1 className={style.tit}  >Анализатор мочи  MIND UA-66</h1>
            <p className={style.tex}  >Артикул: 213134</p>
            <p className={style.nal} >В наличии</p>
            <p  className={style.price} >300 000 руб.</p>
          </div>
            <button  className={style.btnone} >
                <NavLink to='/'  className={style.btntext}  >
                Добавить в корзину
                </NavLink>
                
            </button>
        </div></SwiperSlide>
        <SwiperSlide>     <div className={style.boxone}>
            <div className={style.meni}>
                <button className={style.btn}  >
                <NavLink to='/' className={style.linknew} >Новинка</NavLink>
                </button>
                <div className={style.boximg}>
                    <img src={build} alt="" />
                    <img src={heard} alt="" />
                </div>
             
                
            </div>
          <div className={style.boxtitle}>
          <h1 className={style.tit}  >Анализатор мочи  MIND UA-66</h1>
            <p className={style.tex}  >Артикул: 213134</p>
            <p className={style.nal} >В наличии</p>
            <p  className={style.price} >300 000 руб.</p>
          </div>
            <button  className={style.btnone} >
                <NavLink to='/'  className={style.btntext}  >
                Добавить в корзину
                </NavLink>
                
            </button>
        </div></SwiperSlide>
  
</div>
<div className={style.btnn}>
<button  className={style.b} >
  <a href="#" className={style.a} >Бесплатная консультация</a>
</button>
<button className={style.bb} >
  <a href="#" className={style.aa} >Все товары</a>
</button>
</div>
      </Swiper>
 </div>
   </div>
    

    </div>
    
  )
}

export default SecFour