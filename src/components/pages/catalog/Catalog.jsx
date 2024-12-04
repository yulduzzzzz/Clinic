import React from 'react'
import style from './Catalog.module.css'
import imgone from '../../../../src/assets/fonts/imgone.png'
import imgtwo from '../../../../src/assets/fonts/imgtwo.png'
import imgthree from '../../../../src/assets/fonts/imgthree.png'
import imgfour from '../../../../src/assets/fonts/imgfour.png'
import imgfive from '../../../../src/assets/fonts/imgfive.png'
import imgsix from '../../../../src/assets/fonts/imgsix.png'
import imgseven from '../../../../src/assets/fonts/imgseven.png'
import imgeight from '../../../../src/assets/fonts/imgeight.png'
import imgnine from '../../../../src/assets/fonts/imgnine.png'
import imgten from '../../../../src/assets/fonts/imgten.png'
import imgoneone from '../../../../src/assets/images/imgoneone.png'
import imgtwotwo from '../../../../src/assets/images/imgtwotwo.png'
import imgthreethree from '../../../../src/assets/images/imgthreethree.png'
import imgfourfour from '../../../../src/assets/images/imgfourfour.png'
import imgfivefive from '../../../../src/assets/images/imgfivefive.png'
import imgsixsix from '../../../../src/assets/images/imgsixsix.png'
import imgsevsev from '../../../../src/assets/images/imgsevsev.png'
import oneimgg from '../../../../src/assets/fonts/oneimgg.png'
import twoimgg from '../../../../src/assets/fonts/twoimgg.png'
import imga from '../../../../src/assets/fonts/imga.png'

import brandimg from '../../../../src/assets/fonts/brandimg.png'
import brandone from '../../../../src/assets/fonts/brandone.png'
import brandtwo from '../../../../src/assets/fonts/brandtwo.png'
import newone from '../../../../src/assets/fonts/newone.png'
import newtwo from '../../../../src/assets/fonts/newtwo.png'
import newthree from '../../../../src/assets/fonts/newthree.png'
import imgend from '../../../../src/assets/fonts/imgend.png'
import endd from '../../../../src/assets/fonts/endd.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Catalog() {
  return (
    <div className={style.Catalog} >
      <div className="container">
   
        
<div className={style.son}>
<select  className={style.sel} >
  <option value="">Главная</option>

 </select>
<a href="#" className={style.link} >Каталог</a>
</div>
<div className={style.big}>
  <div className={style.selbig}>
    <h1  className={style.tit} >Направления</h1>
    <div className={style.line}></div>
    <select className={style.sl}>
      <option value="">Реанимация</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Хирургия</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Офтальмология</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Лабораторная диагностика</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Акушерство и Гинекология</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Гистология</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Косметология</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Оториноларингология</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Рентгенология и томография</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Стерилизация</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Физиотерапия и реабилитация</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Функциональная диагностика</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Эндоскопия</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Новинки</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Распродажи</option>
  

    </select>
    <select className={style.sl}>
      <option value="">Кабинеты под ключ</option>
  

    </select>

    
  </div>
  <div className={style.bigone}>
    <div className={style.onebox}>
  <img src={imgone} className={style.img} alt="" />
  
    </div>
    <a href="#" className={style.linkko} >Ветеринарное оборудование</a>
   
    <div className={style.bigtwo}>
    <div className={style.twobox}>
  <img src={imgtwo} className={style.img} alt="" />
    </div>
    <a href="#" className={style.linkkk} >Физиотерапевтическое оборудование</a>
  </div>
  </div>
  <div className={style.bigone}>
    <div className={style.onebox}>
  <img src={imgthree} className={style.img} alt="" />
    </div>
    <a href="#" className={style.linkk} >Анестезиология</a>
    <div className={style.bigtwo}>
    <div className={style.twobox}>
  <img src={imgfour} className={style.img} alt="" />
    </div>
    <a href="#" className={style.linkkkk} >Стоматологическое оборудование</a>
  </div>
  </div>
<div className={style.bigthree}>
  <div className={style.threebox}>
   <img src={imgfive} className={style.imgfi}  alt="" />
  </div>
  <a href="#" className={style.linkkk} >Хирургические инструменты</a>

</div>
  

  
</div>
<div className={style.bigson}>
  <div className={style.boxmid}>
  
 
  </div>
  <div className={style.bigmidone}>
    <div className={style.boxmidtwo}>
      <img src={imgsix} className={style.imgs} alt="" />
    </div>
    <a href="#"  className={style.li} >Проктологическое оборудование</a>
  </div>
  <div className={style.bigmidtwo}>
    <div className={style.boxmidthree}>
      <img src={imgseven} className={style.imgse} alt="" />
    </div>
    <a href="#"  className={style.l} >Оборудование для медицинской метрологии</a>
    <div className={style.bigmidfour}>
      <div className={style.boxmidfive}>
       <img src={imgeight} alt="" />
      </div>
      <a href="#" className={style.ll} >Оборудование для радиационной терапии</a>
    </div>
  </div>
  <div className={style.bigmidsix}>
    <div className={style.boxmidsix}>
      <img src={imgnine} className={style.imm} alt="" />
    </div>
    <a href="#" className={style.ll} >Оборудование для мониторинга пациента</a>
<div className={style.bigi}>
<div className={style.boxmidsev}>
      <img src={imgten} className={style.i}  alt="" />
    </div>
    <a href="#" className={style.lll}  >Педиатрическое оборудование</a>
</div>
  </div>
</div>
<h1 className={style.kom} >Комплексное оснащение кабинетов</h1>
<Swiper
        slidesPerView={3}
    
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
<div className={style.bn}>
<SwiperSlide><div className={style.boxs}>
  <div className={style.boxm}>
 <img src={imgoneone} className={style.imgo} alt="" />
<h2 className={style.k} >Экспресс лаборатория</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className={style.boxs}>
  <div className={style.boxm}>
 <img src={imgtwotwo} className={style.imgo} alt="" />
<h2 className={style.k} >Лазерная терапия</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className={style.boxs}>
  <div className={style.boxm}>
 <img src={imgthreethree} className={style.imgo} alt="" />
<h2 className={style.k} >Операционный блок</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className={style.boxs}>
  <div className={style.boxm}>
 <img src={imgoneone} className={style.imgo} alt="" />
<h2 className={style.k} >Экспресс лаборатория</h2>
  </div>

</div>
<div className={style.u}></div>
</SwiperSlide>
</div>
<div className={style.btnbox}>
            <button  className={style.btn} >
                <a href="#" className={style.link} >Бесплатная консультация</a>
            </button>
            <button className={style.btnone}  >
                <a href="#" className={style.linkkone} >Рассчитать стоимость</a>
            </button>
        </div>


       
      </Swiper>

<h1 className={style.p} >Почему выбирают нас?</h1>
<div className={style.boxz}>
  <div className={style.boxa}>
<img src={imgfourfour}  className={style.q} alt="" />
<a href="#" className={style.lk}>Быстрая  доставка</a>
  </div>
  <div className={style.boxa}>
<img src={imgfivefive}  className={style.q} alt="" />
<a href="#" className={style.lk}>Весь товар сертифицирован</a>
  </div>
  <div className={style.boxa}>
<img src={imgsixsix}  className={style.qq} alt="" />
<a href="#" className={style.lk}>Гибкая система скидок</a>
  </div>
  <div className={style.boxa}>
<img src={imgsevsev}  className={style.qq} alt="" />
<a href="#" className={style.lk}>Быстрая  доставка</a>
  </div>
</div>
<div className={style.boxcat}>
<Swiper
        slidesPerView={4}
  
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <div className={style.boxtwov}>
    <h1 className={style.kone} >Каталог товаров</h1>
    <ul className={style.itv}>
      <li className={style.liv} >
        <a href="#" className={style.lia} >
        Хиты продаж
        </a>
      </li>
      <li className={style.liv} >
        <a href="#" className={style.lia} >
        Новинки
        </a>
      </li>
      <li className={style.liv} >
        <a href="#" className={style.lia} >
        Акции
        </a>
      </li>
      <li className={style.liv} >
        <a href="#" className={style.liaa} >
        Ранее смотрели
        </a>
      </li>
    </ul>
  </div></SwiperSlide>
        <SwiperSlide>  <div className={style.boxthreev}>
    <div className={style.v}>
     <div className={style.n}>
     <button className={style.bt} >Новинка</button>
     <div className={style.pk}>
<img src={oneimgg} alt="" />
<img src={twoimgg} alt="" />
     </div>
     </div>
     <img src={imga} className={style.o} alt="" />
    </div>
<div className={style.ww}>
<h1 className={style.w} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.g} >300 000 руб.</h4>
<button className={style.btnl} >Добавить в корзину</button>
</div>
  </div></SwiperSlide>
        <SwiperSlide>  <div className={style.boxthreev}>
    <div className={style.v}>
     <div className={style.n}>
     <button className={style.bt} >Новинка</button>
     <div className={style.pk}>
<img src={oneimgg} alt="" />
<img src={twoimgg} alt="" />
     </div>
     </div>
     <img src={imga} className={style.o} alt="" />
    </div>
<div className={style.ww}>
<h1 className={style.w} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.g} >300 000 руб.</h4>
<button className={style.btnl} >Добавить в корзину</button>
</div>
  </div></SwiperSlide>
        <SwiperSlide>  <div className={style.boxthreev}>
    <div className={style.v}>
     <div className={style.n}>
     <button className={style.bt} >Новинка</button>
     <div className={style.pk}>
<img src={oneimgg} alt="" />
<img src={twoimgg} alt="" />
     </div>
     </div>
     <img src={imga} className={style.o} alt="" />
    </div>
<div className={style.ww}>
<h1 className={style.w} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.g} >300 000 руб.</h4>
<button className={style.btnl} >Добавить в корзину</button>
</div>
  </div></SwiperSlide>
        <SwiperSlide>  <div className={style.boxthreev}>
    <div className={style.v}>
     <div className={style.n}>
     <button className={style.bt} >Новинка</button>
     <div className={style.pk}>
<img src={oneimgg} alt="" />
<img src={twoimgg} alt="" />
     </div>
     </div>
     <img src={imga} className={style.o} alt="" />
    </div>
<div className={style.ww}>
<h1 className={style.w} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.g} >300 000 руб.</h4>
<button className={style.btnl} >Добавить в корзину</button>
</div>
  </div></SwiperSlide>
<div className={style.r}></div>
<div className={style.bbt}>

</div>
      </Swiper>
</div>

<div className={style.boxcat}>
  
<Swiper
        slidesPerView={4}
       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>  <div className={style.boxtitbrand}>
    <h1 className={style.titbrand}  >Бренды</h1>
    <ul className={style.itbrand} >
      <li className={style.librand} >
        <a href="#" className={style.linkbrand} >Эксклюзивные поставщики</a>
      </li>
    </ul>
  </div></SwiperSlide>
        <SwiperSlide>  <div className={style.boxbrandone}>
    <div className={style.brandins}>
<img src={brandimg}  className={style.imgbra} alt="" />
    </div>
    <h4 className={style.tibran} >НМИЦ онкологии им. Н.Н. Блохина</h4>
  </div></SwiperSlide>
        <SwiperSlide> <div className={style.boxbrandone}>
    <div className={style.brandinsone}>
<img src={brandone}  className={style.imgbra} alt="" />
    </div>
    <h4 className={style.tibran} >НМИЦ онкологии им. Н.Н. Блохина</h4>
  </div></SwiperSlide>
        <SwiperSlide> <div className={style.boxbrandone}>
    <div className={style.brandinstwo}>
<img src={brandtwo}  className={style.imgbra} alt="" />
    </div>
    <h4 className={style.tibran} >НМИЦ онкологии им. Н.Н. Блохина</h4>
  </div></SwiperSlide>
        <SwiperSlide>  <div className={style.boxbrandone}>
    <div className={style.brandins}>
<img src={brandimg}  className={style.imgbra} alt="" />
    </div>
    <h4 className={style.tibran} >НМИЦ онкологии им. Н.Н. Блохина</h4>
  </div></SwiperSlide>
  
<div className={style.btnbrandbox}>
<button  className={style.btnbrand} >Сертификаты</button>
</div>
      </Swiper>

</div>

     <div className={style.boxcat}>
     <Swiper
        slidesPerView={4}
  
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>  <div className={style.newtit}>
     <h1 className={style.titnew} >Новости компании</h1>
        </div></SwiperSlide>
        <SwiperSlide>       <div className={style.newbox}>
          <div className={style.newins}>
<img src={newone} className={style.newimg}  alt="" />
          </div>
          <div className={style.newtext}>
            <p className={style.date} >07.11.2022</p>
            <h2 className={style.newt} >Название новости</h2>
            <ul  >
              <li className={style.linew} >
                <a href="#" className={style.linknew} >Допускает внедрение поэтапного и развития общества.</a>
              </li>
            </ul>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>        <div className={style.newbox}>
          <div className={style.newins}>
<img src={newtwo} className={style.newimg}  alt="" />
          </div>
          <div className={style.newtext}>
            <p className={style.date} >07.11.2022</p>
            <h2 className={style.newt} >Название новости</h2>
            <ul  >
              <li className={style.linew} >
                <a href="#" className={style.linknew} >Допускает внедрение поэтапного и развития общества.</a>
              </li>
            </ul>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>      <div className={style.newbox}>
          <div className={style.newins}>
<img src={newthree} className={style.newimg}  alt="" />
          </div>
          <div className={style.newtext}>
            <p className={style.date} >07.11.2022</p>
            <h2 className={style.newt} >Название новости</h2>
            <ul  >
              <li className={style.linew} >
                <a href="#" className={style.linknew} >Допускает внедрение поэтапного и развития общества.</a>
              </li>
            </ul>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>     <div className={style.newbox}>
          <div className={style.newins}>
<img src={newone} className={style.newimg}  alt="" />
          </div>
          <div className={style.newtext}>
            <p className={style.date} >07.11.2022</p>
            <h2 className={style.newt} >Название новости</h2>
            <ul  >
              <li className={style.linew} >
                <a href="#" className={style.linknew} >Допускает внедрение поэтапного и развития общества.</a>
              </li>
            </ul>
          </div>
        </div></SwiperSlide>
     
     <div className={style.newbtnbox}>
      <button className={style.btnnew} >
        <a href="#" className={style.linkbtnbew} >Все новости</a>
      </button>
     </div>


      </Swiper>

     </div>



      </div>


      <div className={style.endcatlog}>
<h1 className={style.titend} >Часто задоваемые вопросы</h1>
<div className={style.boxendend}>
  <div className={style.lineend}></div>
<div className={style.end}>
<div className={style.iend}>
<h1 className={style.endtext} >О компании</h1>
<img src={imgend} className={style.im} alt="" />
</div>

<p className={style.textendone} >Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.</p>
<a href="#" className={style.al} >Подробнее</a>
<div className={style.lineend}></div>
<div className={style.endendbox}>
  <a href="#" className={style.llend}  >Преимущества сотрудников</a>
  <img src={endd} alt="" />
</div>
<div className={style.lineendonee}></div>
<div className={style.endendboxx}>
  <a href="#" className={style.llend}  >Достижения компании</a>
  <img src={endd} alt="" />
</div>
<div className={style.lineendonee}></div>
<div className={style.endendboxx}>
  <a href="#" className={style.llend}  >Достижения компании</a>
  <img src={endd} alt="" />
</div>
</div>
</div>
</div>

    </div>
  )
}

export default Catalog