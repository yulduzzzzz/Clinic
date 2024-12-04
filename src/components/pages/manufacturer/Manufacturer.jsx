import React from 'react'
import style from './Manufacturer.module.css'
import img from '../../../../src/assets/fonts/img.png'
import build from '../../../../src/assets/images/build.jpg'
import heard from '../../../../src/assets/fonts/heard.png'
import imgg from '../../../../src/assets/fonts/imgg.png'
import start from '../../../../src/assets/fonts/start.png'
import star from '../../../../src/assets/fonts/star.png'
import menuimg from '../../../../src/assets/fonts/menuimg.png'
import menuimgone from '../../../../src/assets/fonts/menuimgone.png'
import menuimgtwo from '../../../../src/assets/fonts/menuimgtwo.png'
import manimgoneee from '../../../../src/assets/fonts/manimgoneee.png'
import manutwo from '../../../../src/assets/fonts/manutwo.png'
import manuthree from '../../../../src/assets/fonts/manuthree.png'
import brone from '../../../../src/assets/fonts/brone.png'
import brtwo from '../../../../src/assets/fonts/brtwo.png'
import brthree from '../../../../src/assets/fonts/brthree.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom'

function Manufacturer() {
  return (
    <div className={style.Manufacturer} >
        <div className="container">
<div className={style.up}>
    <select className={style.sel} >
        <option value="">Главная</option>
    </select>
    <select className={style.sel} >
        <option value="">Каталог</option>
    </select>
    <select className={style.sel} >
        <option value="">Лабораторное оборудование</option>
    </select>
<h4 className={style.tit} >Анализатор мочи MINDRAY UA-66</h4>
</div>
<div className={style.mid}>
    <div className={style.one}>
<div className={style.boxx}>
<button className={style.btn} >Новинка</button>
<div className={style.boximg}>
<img src={build} alt="" />
    <img src={heard} alt="" />
</div>
</div>

        <img src={img} className={style.im} alt="" />
        <div className={style.boxin}>
    <div className={style.in}>
    <img src={imgg}  className={style.imgone}  alt="" />
    </div>
       <div className={style.inn}>
       <img src={imgg} className={style.imgtwo} alt="" />
       </div>
       <div className={style.inn}>
       <img src={imgg} className={style.imgtwo} alt="" />
       </div>
        </div>
    
    </div>
    <div className={style.two}>
        <h1 className={style.title} >Анализатор мочи  MIND UA-66</h1>
        <div className={style.pic}>
            <img src={start} className={style.imggg} alt="" />
            <img src={start}  className={style.imggg} alt="" />
            <img src={start}  className={style.imggg} alt="" />
            <img src={start}  className={style.imggg} alt="" />
            <img src={star}  className={style.imggg} alt="" />
            <p  className={style.price} > 4.0</p>
        </div>
        <p className={style.text} >Категория: Лабораторное оборудование</p>
        <p className={style.text} >Производитель: Lorem</p>
        <p className={style.text} >Артикул: 213134</p>
        <p className={style.text} >В наличии</p>
        <h1 className={style.pr} >300 000 руб.</h1>

      <div className={style.biggg}>
      <div className={style.boxplus}>
       
       <span className={style.minus} >-</span>
          <p  className={style.oneone} >1</p>
            <span className={style.plus}  >+</span>
        </div>
        <div className={style.btbtn}>
            <button type='text '  className={style.btntext} >Задать вопрос</button>
            <button type='text '  className={style.btntextone} >Добавить в корзину</button>
        </div>
      </div>
        <div className={style.btnbox}>
            <button></button>
        </div>
        <div className={style.line}></div>
        <h4 className={style.titi} >О товаре</h4>
        <p className={style.textp} >Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма    в науке будут функционально разнесены.</p>
    </div>
  
</div>
<div className={style.three}>
        <div className={style.opisaniya}>
          <ul className={style.ul} >
            <li className={style.li} >
                <a href="#" className={style.link}  >Описание оборудования</a>
            </li>
            <li className={style.li} >
                <a href="#" className={style.linka}  >Характеристики и документы</a>
            </li>
            <li className={style.li} >
                <a href="#" className={style.link}  >Услуги и сервис</a>
            </li>
            <li className={style.li} >
                <a href="#" className={style.link}  >Оптовым покупателям</a>
            </li>
            <li className={style.li} >
                <a href="#" className={style.link}  >Отзывы  4</a>
            </li>
            
          </ul>
        </div>
        <div className={style.inside}>
            <div className={style.innnn}>
                <h2 className={style.t} >Технические характеристики</h2>
           <div className={style.boone}>
           <div className={style.boxbigbox}>
                  <div className={style.boxresult}>
                    <p className={style.all} >Вес оборудования   .  .  .  .  .  .  .  .  .  .  .</p>
                    <h4 className={style.pri} >90 кг</h4>
                  </div>
                  <div className={style.resone}>
                    <p className={style.onetit} >Детектор   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . </p>
                    <h4 className={style.prione} >CsI - на основе аморфного кремния</h4>
                  </div>
                  <div className={style.restwo}>
                    <p className={style.twotit} >Время сканирования   .  .  .  .  .  .  .  .  .</p>
                    <h4 className={style.prtwo} >PAN стандарт - 12 сек</h4>
                  </div>
                  <div className={style.resthree}>
                    <p className={style.twotit} >Размер фокусного пятна   .  .  .  .  .  .</p>
                    <h4 className={style.prtwo} >0.6</h4>
                  </div>
                  <div className={style.resfour}>
                    <p className={style.twotit} >Динамический диапазон   .  .  .  .  .  .</p>
                    <h4 className={style.prtwo} >16 бит (65 536 градации серого)</h4>
                  </div>

                </div>
                <div className={style.boxoo}>
                    
                    <div className={style.boxright}>
                        <p className={style.r} >Рабочее напряжение   .  .  .  .  .  .  .  .  .</p>
                        <h4 className={style.cl} >90 кг</h4>
                    </div>
                    <div className={style.boxrightone}>
                        <p className={style.r} >Максимальный ток  .  .  .  .  .  .  .  .  .  .  .</p>
                        <h4 className={style.cl} >CsI - на основе аморфного кремния</h4>
                    </div>
                    <div className={style.boxright}>
                        <p className={style.r} >Гарантия   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .</p>
                        <h4 className={style.cl} >PAN стандарт - 12 сек</h4>
                    </div>
                </div>
           </div>
             
            </div>
          
        </div>
<div className={style.boxitem}>
<ul className={style.itemone} >
        <li className={style.lione} >
            <a href="#" className={style.aa} >Новинки</a>
        </li>
        <li className={style.lione} >
            <a href="#" className={style.aa} >Получить прайс</a>
        </li>
        <li className={style.lione} >
            <a href="#" className={style.aa} >Условия доставки</a>
        </li>
        <li className={style.lione} >
            <a href="#" className={style.aa} >Способы оплаты</a>
        </li>
     </ul>
</div>
        </div>



<div className={style.min}>
    
<Swiper
        slidesPerView={4}
  
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className={style.oneswip}>
    <h1 className={style.titswip} >Каталог товаров</h1>
<ul className={style.it} >
    <li className={style.il} >
        <a href="#" className={style.aaaa} >Ранее смотрели</a>
    </li>
    <li className={style.il} >
        <a href="#" className={style.aaa} >Покупают с товаром</a>
    </li>
    <li className={style.il} >
        <a href="#" className={style.aaa} >Аналоги</a>
    </li>
</ul>
    
 </div></SwiperSlide>
        <SwiperSlide> <div className={style.twoswip}>
    <div className={style.boxswip} >
        <div className={style.ig}>
            <button className={style.btnn} >Новинка</button>
            <div className={style.bimg}>
                <img src={build} alt="" />
                <img src={heard} alt="" />
            </div>
           
        </div>
        <img src={img} className={style.igg} alt="" />
    </div>
  <div className={style.boxti}>
  <h1 className={style.titone} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.ar} >Артикул: 213134</p>
<p className={style.ar} >В наличии</p>
<p className={style.prp} >300 000 руб.</p>
<button className={style.btnonee}  >Добавить в корзину</button>
  </div>
 </div></SwiperSlide>
        <SwiperSlide> <div className={style.twoswip}>
    <div className={style.boxswip} >
        <div className={style.ig}>
            <button className={style.btnn} >Новинка</button>
            <div className={style.bimg}>
                <img src={build} alt="" />
                <img src={heard} alt="" />
            </div>
           
        </div>
        <img src={img} className={style.igg} alt="" />
    </div>
  <div className={style.boxti}>
  <h1 className={style.titone} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.ar} >Артикул: 213134</p>
<p className={style.ar} >В наличии</p>
<p className={style.prp} >300 000 руб.</p>
<button className={style.btnonee}  >Добавить в корзину</button>
  </div>
 </div></SwiperSlide>
        <SwiperSlide> <div className={style.twoswip}>
    <div className={style.boxswip} >
        <div className={style.ig}>
            <button className={style.btnn} >Новинка</button>
            <div className={style.bimg}>
                <img src={build} alt="" />
                <img src={heard} alt="" />
            </div>
           
        </div>
        <img src={img} className={style.igg} alt="" />
    </div>
  <div className={style.boxti}>
  <h1 className={style.titone} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.ar} >Артикул: 213134</p>
<p className={style.ar} >В наличии</p>
<p className={style.prp} >300 000 руб.</p>
<button className={style.btnonee}  >Добавить в корзину</button>
  </div>
 </div></SwiperSlide>
        <SwiperSlide> <div className={style.twoswip}>
    <div className={style.boxswip} >
        <div className={style.ig}>
            <button className={style.btnn} >Новинка</button>
            <div className={style.bimg}>
                <img src={build} alt="" />
                <img src={heard} alt="" />
            </div>
           
        </div>
        <img src={img} className={style.igg} alt="" />
    </div>
  <div className={style.boxti}>
  <h1 className={style.titone} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.ar} >Артикул: 213134</p>
<p className={style.ar} >В наличии</p>
<p className={style.prp} >300 000 руб.</p>
<button className={style.btnonee}  >Добавить в корзину</button>
  </div>
 </div></SwiperSlide>


<div className={style.btnmanubox}>
<button className={style.btnmanu} >
    <a href="#" className={style.linkmanu} >В каталог</a>
</button>
</div>
     
      </Swiper>
</div>



<h1 className={style.titmanuone} >Комплексное оснащение кабинетов</h1>


<div className={style.bb}>
    
<Swiper
        slidesPerView={3}
      
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className={style.boxinmanu}>
<img src={menuimg}  className={style.imgmanuu} alt="" />
<a href="#" className={style.lmanu} >Экспресс лаборатория</a>
</div></SwiperSlide>
        <SwiperSlide><div className={style.boxinmanu}>
<img src={menuimgone}  className={style.imgmanuu} alt="" />
<a href="#" className={style.lmanu} >Экспресс лаборатория</a>
</div></SwiperSlide>
        <SwiperSlide><div className={style.boxinmanu}>
<img src={menuimgtwo}  className={style.imgmanuu} alt="" />
<a href="#" className={style.lmanu} >Экспресс лаборатория</a>
</div></SwiperSlide>
        <SwiperSlide><div className={style.boxinmanu}>
<img src={menuimg}  className={style.imgmanuu} alt="" />
<a href="#" className={style.lmanu} >Экспресс лаборатория</a>
</div></SwiperSlide>
 

 <div className={style.btnmanubox}>
    <button className={style.btnmanuu} >
        <a href="#" className={style.lmanuu} >Бесплатная консультация</a>
    </button>
    <button className={style.btnmanuuu} >
        <a href="#" className={style.lmanuuu} >Бесплатная консультация</a>
    </button>
 </div>
      </Swiper>
</div>



<div className={style.vv}>
    
<Swiper
        slidesPerView={4}
     
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className={style.mancatl}>
    <h1 className={style.mantitcat} >Популярные категории</h1>
</div></SwiperSlide>
        <SwiperSlide><div className={style.mantwobox}>
    <div className={style.maninsbox}>
        <img src={manimgoneee} className={style.immm} alt="" />
    </div>
   <ul>
    <li className={style.ln} >
    <a href="#" className={style.llinkk} >Оборудование для анастезиологии</a>
    </li>
   </ul>
</div></SwiperSlide>
        <SwiperSlide><div className={style.mantwobox}>
    <div className={style.maninsbox}>
        <img src={manutwo } className={style.immm} alt="" />
    </div>
   <ul>
    <li className={style.ln} >
    <a href="#" className={style.llinkk} >Оборудование для анастезиологии</a>
    </li>
   </ul>
</div>
</SwiperSlide>
        <SwiperSlide><div className={style.mantwobox}>
    <div className={style.maninsbox}>
        <img src={manuthree } className={style.immm} alt="" />
    </div>
   <ul>
    <li className={style.ln} >
    <a href="#" className={style.llinkk} >Оборудование для анастезиологии</a>
    </li>
   </ul>
</div>
</SwiperSlide>
<SwiperSlide><div className={style.mantwobox}>
    <div className={style.maninsbox}>
        <img src={manuthree } className={style.immm} alt="" />
    </div>
   <ul>
    <li className={style.ln} >
    <a href="#" className={style.llinkk} >Оборудование для анастезиологии</a>
    </li>
   </ul>
</div>
</SwiperSlide>
 <div className={style.btnboxboxxx}>
    <button className={style.btm} >
        <a href="#" className={style.btlink} >Все категории</a>
    </button>
 </div>
      </Swiper>

</div>






<div className={style.vvv}>
<Swiper
        slidesPerView={4}
       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className={style.vbbox}>
    <h1 className={style.titbran} >Бренды</h1>
    <ul>
        <li  className={style.llkk} >
            <a href="#" className={style.lkkink} >Эксклюзивные поставщики</a>
        </li>
    </ul>
</div>
</SwiperSlide>
        <SwiperSlide>
            
<div className={style.boxbra}>
    <div className={style.boxbrone}>
<img src={brone} className={style.brrone} alt="" />
    </div>
    <h4 className={style.tt} >НМИЦ онкологии им. Н.Н. Блохина</h4>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.boxbra}>
    <div className={style.boxbrone}>
<img src={brtwo} className={style.brroneee} alt="" />
    </div>
    <h4 className={style.tt} >НМИЦ онкологии им. Н.Н. Блохина</h4>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.boxbra}>
    <div className={style.boxbrone}>
<img src={brthree} className={style.brronee} alt="" />
    </div>
    <h4 className={style.tt} >НМИЦ онкологии им. Н.Н. Блохина</h4>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.boxbra}>
    <div className={style.boxbrone}>
<img src={brthree} className={style.brronee} alt="" />
    </div>
    <h4 className={style.tt} >НМИЦ онкологии им. Н.Н. Блохина</h4>
</div>
        </SwiperSlide>

<div className={style.btbox}>
    <button className={style.btser} >
        <a href="#" className={style.lser} >Сертификаты</a>
    </button>
</div>

      </Swiper>

</div>



        </div>
    </div>
  )
}

export default Manufacturer