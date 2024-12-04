import React from 'react'
import style from './Turnkey.module.css'
import imgturr from '../../../assets/fonts/imgturr.png'
import imgcom from '../../../../src/assets/fonts/imgcom.png'
import man from '../../../../src/assets/fonts/man.png'
import women from '../../../../src/assets/fonts/women.png'
import mantwo from '../../../../src/assets/fonts/mantwo.png'
import imgblue from '../../../../src/assets/fonts/imgblue.png'
import imgbluetwo from '../../../../src/assets/fonts/imgbluetwo.png'
import imgbluethree from '../../../../src/assets/fonts/imgbluethree.png'
import imgbluefour from '../../../../src/assets/fonts/imgbluefour.png'
import imgserft from '../../../../src/assets/fonts/imgserft.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Turnkey() {
  return (
    <div className={style.Turnkey} >
        <div className="container">
      <div className={style.boxsel}>
      <select className={style.sel}>
                <option value="">Главная</option>
        
            </select>
            <ul className={style.item} >
                <li className={style.li} >
                    <a href="#" className={style.link} >О компании</a>
                </li>
            </ul>
          
      </div>
      <img src={imgturr} className={style.img}  alt="" />
      <div className={style.boxtit}>
        <h1 className={style.tit}>Глобал медикал трейд</h1>
        <div className={style.boxtitt}>
        <p className={style.text} >Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник.</p>
     <p className={style.textone} >Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать специалистам всю необходимую помощь в деле поставок медицинского оборудования. Наш каталог включает передовое оборудование от лучших производителей России, Европы, Азии и США.</p>
      </div>
      </div>
   
 
      <div className={style.boxgreen}>
<div className="">
<img src={imgcom} className={style.imgcomm}  alt="" />
</div>
<div className={style.bim}>
    <h1 className={style.titi} >Наши партнёры</h1>
    <p className={style.tone} >Нашими партнёрами являются наиболее серьёзные игроки на мировом рынке профильного оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество, добиться лучших цен для государственных учреждений здравоохранения, медицинских центров, лабораторий, а также ветеринарных клиник и кабинетов. Купить нужную вам технику по оптимальным ценам, выбрать подходящую модель устройства в рамках бюджета в нашей компании окажется намного проще. Мы поддерживаем скидки и особые предложения для наших партнёров, предлагаем оформление аппаратов в лизинг и готовы предоставить системы в рассрочку на выгодных условиях.</p>
</div>
</div>

<div className={style.owl}>
<OwlCarousel className={style.OwlCarousel}  items={2} margin={10} nav={true} 
autoplay={true} 
autoplayTimeout={5000}
loop={true}   >
<div className={style.boxwhite}>
    <div className="">
        <h1 className={style.tione} >Опытные сотрудники из производственных компаний</h1>
        <p className={style.textonee} >Наши сотрудники имеют огромный опыт работы в сложных условиях, в том числе в разгар пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны.</p>
    </div>
</div>
<div className={style.boxwhitetwo}>
    <div className={style.boxone}>
    <img src={man} className={style.inimg} alt="" />
 <div className={style.b}>
 <h2 className={style.textonet} >Константин Константинопольский</h2>
    <p className={style.onep} >Основатель компании</p>
 </div>
    </div>
  <div className="">
  <img src={women}  className={style.imgwom} alt="" /> <br />
    <img src={mantwo}   className={style.imgwom}  alt="" />
  </div>

</div>
<div className={style.boxwhite}>
    <div className="">
        <h1 className={style.tione} >Опытные сотрудники из производственных компаний</h1>
        <p className={style.textonee} >Наши сотрудники имеют огромный опыт работы в сложных условиях, в том числе в разгар пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны.</p>
    </div>
</div>
<div className={style.boxwhitetwo}>
    <div className={style.boxone}>
    <img src={man} className={style.inimg} alt="" />
 <div className={style.b}>
 <h2 className={style.textonet} >Константин Константинопольский</h2>
    <p className={style.onep} >Основатель компании</p>
 </div>
    </div>
  <div className="">
  <img src={women}  className={style.imgwom} alt="" /> <br />
    <img src={mantwo}   className={style.imgwom}  alt="" />
  </div>

</div>
</OwlCarousel>

</div>






















<div className={style.boxblue}>
    <div className={style.boxbl}>
        <h4 className={style.tit}  >Наши клиенты</h4>
        <h1 className={style.tionee} >БОЛЕЕ  5000
УСПЕШНЫХ ПРОЕКТОВ</h1>
    </div>



<div className={style.blueee}>




    
<div className={style.bluetwo}>
    <div className={style.bluethree}>
        <img src={imgbluefour} className={style.blueone} alt="" />
    </div>
    <h4 className={style.bluetit} >НМИЦ онкологии им. Н.Н. Блохина</h4>
</div>
<div className={style.bluetwo}>
    <div className={style.bluethree}>
        <img src={imgblue} className={style.blueone} alt="" />
    </div>
    <h4 className={style.bluetit} >НМИЦ онкологии им. Н.Н. Блохина</h4>
</div>
<div className={style.bluetwo}>
    <div className={style.bluethree}>
        <img src={imgbluetwo} className={style.blueone} alt="" />
    </div>
    <h4 className={style.bluetit} >НМИЦ онкологии им. Н.Н. Блохина</h4>
</div>

<div className={style.bluetwo}>
    <div className={style.bluethree}>
        <img src={imgbluethree} className={style.blueone} alt="" />
    </div>
    <h4 className={style.bluetit} >НМИЦ онкологии им. Н.Н. Блохина</h4>
</div>



</div>

</div>




<div className={style.carsul}>
    
<OwlCarousel className={style.OwlCarousel}  
items={5} 
margin={10} 
nav={true} 
autoplay={true} 
autoplayTimeout={5000}
loop={true}>
   
<div className={style.sertfone}>
        <h1 className={style.titsertf} >Сертификаты на продукцию</h1>
    </div>
    <div className={style.sertwo}>
        <img src={imgserft} alt="" />
    </div>
    <div className={style.sertwo}>
        <img src={imgserft} alt="" />
    </div>
    <div className={style.sertwo}>
        <img src={imgserft} alt="" />
    </div>
    <div className={style.sertwo}>
        <img src={imgserft} alt="" />
    </div>
    <div className={style.sertwo}>
        <img src={imgserft} alt="" />
    </div>
    <div className={style.sertwo}>
        <img src={imgserft} alt="" />
    </div>
</OwlCarousel>

</div>
       
        </div>
      

    </div>
  )
}

export default Turnkey