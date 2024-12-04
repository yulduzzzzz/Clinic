import React from 'react'
import style from './stock.module.css'
import stockimg from '../../../../src/assets/fonts/stockimg.png'
import Add from '../../../../src/assets/fonts/Add.png'
import stocktwo from '../../../../src/assets/fonts/stocktwo.png'
import stockone from '../../../../src/assets/fonts/stockone.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import menuimg from '../../../../src/assets/fonts/menuimg.png'
import menuimgone from '../../../../src/assets/fonts/menuimgone.png'
import menuimgtwo from '../../../../src/assets/fonts/menuimgtwo.png'
import camera from '../../../../src/assets/images/camera.jpg'
import addone from '../../../../src/assets/fonts/addone.png'
import start from '../../../../src/assets/fonts/start.png'
import star from '../../../../src/assets/fonts/star.png'

function stock() {
    
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className +  '">' + (index + 1) + '</span>';
        },
      };

  return (
    <div className={style.stock} >
        <div className="container">
           <div className={style.box}>
            <select className={style.sel}>
                <option value="">Главная</option>
            </select>
            <ul>
                <li className={style.list} >
                <a href="#" className={style.link} >Акции</a>
                </li>
            </ul>
           </div>
           <div className={style.big}>
            <div className={style.onebox}>
                <ul>
                    <li className={style.listone} >
                        <a href="#" className={style.linkone} >Категории</a>
                    </li>
                    <div className={style.line}></div>
                </ul>
                <select className={style.selone}>
                    <option value="">Группы товаров</option>
                </select>
                <select className={style.selone}>
                    <option value="">Мониторы</option>
                </select>
                <select className={style.selone}>
                    <option value="">Лампы</option>
                </select>
                <select className={style.selone}>
                    <option value="">Кровати</option>
                </select>
                <select className={style.selone}>
                    <option value="">Рентгены</option>
                </select>

            </div>
            <div className={style.boxtwo}>
                <div className={style.twoinside}>
                    <div className={style.up}>
                        <button className={style.btn}  >-30%</button>
                        <img src={Add} alt="" />
                    </div>
<img src={stockimg} className={style.img} alt="" />
                </div>
            <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
            </div>
       <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stocktwo} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
       <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stockone} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
    
           </div>
           <div className={style.bigtwo}>
            <div className={style.boxtwotwo}>

            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stocktwo} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
       <div className={style.boxtwo}>
                <div className={style.twoinside}>
                    <div className={style.up}>
                        <button className={style.btn}  >-30%</button>
                        <img src={Add} alt="" />
                    </div>
<img src={stockimg} className={style.img} alt="" />
                </div>
            <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stockone} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
           </div>
 <div className={style.boo}>
 <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
   <SwiperSlide>    <div className={style.bigtwo}>
            <div className={style.boxtwotwo}>

            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stocktwo} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
       <div className={style.boxtwo}>
                <div className={style.twoinside}>
                    <div className={style.up}>
                        <button className={style.btn}  >-30%</button>
                        <img src={Add} alt="" />
                    </div>
<img src={stockimg} className={style.img} alt="" />
                </div>
            <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stockone} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
           </div></SwiperSlide>
        <SwiperSlide>    <div className={style.bigtwo}>
            <div className={style.boxtwotwo}>

            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stocktwo} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
       <div className={style.boxtwo}>
                <div className={style.twoinside}>
                    <div className={style.up}>
                        <button className={style.btn}  >-30%</button>
                        <img src={Add} alt="" />
                    </div>
<img src={stockimg} className={style.img} alt="" />
                </div>
            <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stockone} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
           </div></SwiperSlide>
        <SwiperSlide>    <div className={style.bigtwo}>
            <div className={style.boxtwotwo}>

            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stocktwo} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
       <div className={style.boxtwo}>
                <div className={style.twoinside}>
                    <div className={style.up}>
                        <button className={style.btn}  >-30%</button>
                        <img src={Add} alt="" />
                    </div>
<img src={stockimg} className={style.img} alt="" />
                </div>
            <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stockone} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
           </div></SwiperSlide>
        <SwiperSlide>    <div className={style.bigtwo}>
            <div className={style.boxtwotwo}>

            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stocktwo} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
       <div className={style.boxtwo}>
                <div className={style.twoinside}>
                    <div className={style.up}>
                        <button className={style.btn}  >-30%</button>
                        <img src={Add} alt="" />
                    </div>
<img src={stockimg} className={style.img} alt="" />
                </div>
            <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stockone} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
           </div></SwiperSlide>
        <SwiperSlide>    <div className={style.bigtwo}>
            <div className={style.boxtwotwo}>

            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stocktwo} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
       <div className={style.boxtwo}>
                <div className={style.twoinside}>
                    <div className={style.up}>
                        <button className={style.btn}  >-30%</button>
                        <img src={Add} alt="" />
                    </div>
<img src={stockimg} className={style.img} alt="" />
                </div>
            <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stockone} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
           </div></SwiperSlide>
        <SwiperSlide>    
            <div className={style.bigtwo}>
         
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stocktwo} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
       </div>
       <div className={style.boxtwo}>
                <div className={style.twoinside}>
                    <div className={style.up}>
                        <button className={style.btn}  >-30%</button>
                        <img src={Add} alt="" />
                    </div>
<img src={stockimg} className={style.img} alt="" />
                </div>
            <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
<button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button>
            </div>
            </div>
            <div className={style.boxthree}>
       <div className={style.threeinside}>
        <div className={style.upone}>
            <button className={style.btnone} >-30%</button>
            <img src={Add} alt="" />
        </div>
        <img src={stockone} className={style.imgtwo} alt="" />
       </div>
       <div className={style.insbox}>
                <h1 className={style.title} >Анализатор мочи 
MIND UA-66</h1>
<p className={style.art} >Артикул: 213134</p>
<p className={style.art} >В наличии</p>
<h4 className={style.price} >300 000 руб.</h4>
{/* <button className={style.btnthree} >
    <a href="#" className={style.linkthree} >Добавить в корзину</a>
</button> */}
            </div>
       </div>
           </div>
           
           </SwiperSlide>
      </Swiper>
 </div>

 <h1 className={style.tit} >Комплексное оснащение кабинетов</h1>

<div className={style.b}>
<OwlCarousel  className={style.OwlCarousel}  items={3} margin={10} nav={true} 
autoplay={true} 
autoplayTimeout={5000}
loop={true}>   

<div className={style.boxin}>
    <img src={menuimg} alt="" />
    <h1 className={style.titowl} >Экспресс лаборатория</h1>
</div>
<div className={style.boxin}>
    <img src={menuimgone} alt="" />
    <h1 className={style.titowl} >Лазерная терапия</h1>
</div>
<div className={style.boxin}>
    <img src={menuimgtwo} alt="" />
    <h1 className={style.titowl} >Операционный блок</h1>
</div>

<div className=""></div>

</OwlCarousel>

<div className={style.btnboxx}>
    <button className={style.btnfour}  >
        <a href="#" className={style.kinkkk} >Бесплатная консультация</a>
    </button>
    <button className={style.btnfou}  >
        <a href="#" className={style.kinkk} >Рассчитать стоимость</a>
    </button>
</div>
</div>




























<div className={style.boxfour}>
<h1 className={style.titend} >Технические характеристики</h1>
<div className={style.linerr}></div>



<div className={style.bigins}>
    <div className={style.insone}>
        <h4 className={style.titins} >Рейтинг</h4>

    </div>
    <div className={style.inbig}>
    <div className={style.startbox}>
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={star} alt="" />
            <p className={style.pricetit} >4.0</p>
        </div>
    </div>
    <div className={style.inbig}>
    <div className={style.startbox}>
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={star} alt="" />
            <p className={style.pricetit} >4.0</p>
        </div>
    </div>
    <div className={style.inbig}>
    <div className={style.startbox}>
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={star} alt="" />
            <p className={style.pricetit} >4.0</p>
        </div>
    </div>
</div>
<div className={style.linerr}></div>

<div className={style.biginstwo}>
    <div className={style.instwo}>
        <h4 className={style.titins} >Скорость работы</h4>
    </div>
    <div className={style.boxinstwo}>
        <h2 className={style.intext} >60 или 120 тестов в час</h2>
    </div>
    <div className={style.boxinstwo}>
        <h2 className={style.intext} >60 или 120 тестов в час</h2>
    </div>
    <div className={style.boxinstwo}>
        <h2 className={style.intext} >60 или 120 тестов в час</h2>
    </div>
</div>
<div className={style.linerr}></div>

<div className={style.biginsthree}>
    <div className={style.insthree}>
        <h4 className={style.titins} >Возможный диапазон длины волны</h4>
    </div>
    <div className={style.boxinsthree}>
        <h2 className={style.intext} >557, 620, 656 нм</h2>
    </div>
    <div className={style.boxinsthreee}>
        <h2 className={style.intext} >557, 620, 656 нм</h2>
    </div>
    <div className={style.boxinsthreeee}>
        <h2 className={style.intext} >557, 620, 656 нм</h2>
    </div>
</div>
<div className={style.linerr}></div>
<div className={style.biginsfour}>
    <div className={style.boxinsfour}>
        <h4 className={style.titins} >Тест-полоски</h4>
    </div>
    <div className={style.boxinfour}>
        <h2  className={style.intext} >   На 10 или 11 параметров</h2>
    </div>
    <div className={style.boxinfourfour}>
        <h2  className={style.intext} >   На 10 или 11 параметров</h2>
    </div>
    <div className={style.boxinfourr}>
        <h2  className={style.intext} >   На 10 или 11 параметров</h2>
    </div>
</div>
<div className={style.linerr}></div>
<div className={style.biginsfive}>
    <div className={style.boxinsfive}>
        <h4 className={style.titins} >Функция автоматической калибровки</h4>
    </div>
    <div className={style.boxinfives}>
        <h2 className={style.intext} >Есть</h2>
    </div>
    <div className={style.boxinfives}>
        <h2 className={style.intext} >Есть</h2>
    </div>
    <div className={style.boxinfives}>
        <h2 className={style.intext} >Есть</h2>
    </div>
</div>
<div className={style.linerr}></div>

<div className={style.btnbtnbtn}>
    <button className={style.btnn} >
        <a href="#" className={style.linklink} >
        Авторизироваться
        </a>
    </button>
    <button className={style.btnnn} >
        <a href="#" className={style.linklinkk} >
        В каталог
        </a>
    </button>
</div>






</div>





        </div>
    </div>
  )
}

export default stock