import React from 'react'
import style from './Services.module.css'
import serone from '../../../../src/assets/fonts/serone.png'
import sertwo from '../../../../src/assets/fonts/sertwo.png'
import serthree from '../../../../src/assets/fonts/serthree.png'
import serfour from '../../../../src/assets/fonts/serfour.png'
import imgslone from '../../../../src/assets/fonts/imgslone.png'
import imm from '../../../../src/assets/fonts/imm.png'
import blue from '../../../../src/assets/fonts/blue.png'
import largeimg from '../../../../src/assets/fonts/largeimg.png'
import larimgone from '../../../../src/assets/fonts/larimgone.png'
import larimgtwo from '../../../../src/assets/fonts/larimgtwo.png'
import larimgthree from '../../../../src/assets/fonts/larimgthree.png'
import larimgfour from '../../../../src/assets/fonts/larimgfour.png'
import larimgfive from '../../..//../src/assets/fonts/larimgfive.png'
import larimgsix from '../../../../src/assets/fonts/larimgsix.png'

import larimgseven from '../../../../src/assets/fonts/larimgseven.png'
import Button from '../../../../src/assets/fonts/Button.png'
import imgserff from '../../../../src/assets/fonts/imgserff.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Services() {
  return (
    <div className={style.Services} >
        <div className="container">
          <div className={style.box}>
            <select className={style.sel}>
                <option value="">Главная</option>
            </select>
            <ul className={style.item} >
                <li className={style.li} >
                    <a href="#" className={style.link} >Доставка</a>
                </li>
            </ul>
          </div>

          <h1 className={style.sertitle} >Услуги</h1>

          <div className={style.large}>
            <div className={style.largeone}>
<div className={style.larbox}>
<h1 className={style.lartit} >Апробация</h1>
                <p className={style.lartext} >Описание услуги</p>
            
                <p className={style.lartextone} >Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className={style.btnlar} >
    <a href="#"className={style.linklar}  >Заказать</a>
</button>

</div>
<img src={largeimg } className={style.larimg}  alt="" />
            </div>
            <div className={style.largeone}>
<div className={style.larbox}>
<h1 className={style.lartitt} >Помощь в подборе оборудования</h1>
                <p className={style.lartext} >Описание услуги</p>
            
                <p className={style.lartextone} >Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className={style.btnlar} >
    <a href="#"className={style.linklar}  >Заказать</a>
</button>

</div>
<img src={larimgone } className={style.larimg}  alt="" />
            </div>
           
          </div>
     

          <div className={style.large}>
            <div className={style.largeone}>
<div className={style.larbox}>
<h1 className={style.lartitt} >Помощь инженеров в настройке</h1>
                <p className={style.lartext} >Описание услуги</p>
            
                <p className={style.lartextone} >Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className={style.btnlar} >
    <a href="#"className={style.linklar}  >Заказать</a>
</button>

</div>
<img src={larimgtwo } className={style.larimg}  alt="" />
            </div>
            <div className={style.largeone}>
<div className={style.larbox}>
<h1 className={style.lartitt} >Пуско-наладочные работы</h1>
                <p className={style.lartext} >Описание услуги</p>
            
                <p className={style.lartextone} >Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className={style.btnlar} >
    <a href="#"className={style.linklar}  >Заказать</a>
</button>

</div>
<img src={larimgthree } className={style.larimg}  alt="" />
            </div>
           
          </div>
     
     
          <div className={style.large}>
            <div className={style.largeone}>
<div className={style.larbox}>
<h1 className={style.lartittt} >Обучение работе с оборудованием</h1>
                <p className={style.lartext} >Описание услуги</p>
            
                <p className={style.lartextone} >Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className={style.btnlar} >
    <a href="#"className={style.linklar}  >Заказать</a>
</button>

</div>
<img src={larimgfour} className={style.larimg}  alt="" />
            </div>
            <div className={style.largeone}>
<div className={style.larbox}>
<h1 className={style.lartitt} >Подменный аппарат</h1>
                <p className={style.lartext} >Описание услуги</p>
            
                <p className={style.lartextone} >Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className={style.btnlar} >
    <a href="#"className={style.linklar}  >Заказать</a>
</button>

</div>
<img src={larimgfive} className={style.larimg}  alt="" />
            </div>
           
          </div>
     
  
          <div className={style.large}>
            <div className={style.largeone}>
<div className={style.larbox}>
<h1 className={style.lartittt} >Работа с учебными центрами повышения квалификации медицинского персонала</h1>
                <p className={style.lartext} >Описание услуги</p>
            
                <p className={style.lartextone} >Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения.  </p>
<button className={style.btnlar} >
    <a href="#"className={style.linklar}  >Заказать</a>
</button>

</div>
<img src={larimgsix} className={style.larimg}  alt="" />
            </div>
            <div className={style.largeone}>
<div className={style.larbox}>
<h1 className={style.lartitt} >Организация обучения врачей на собственной территории</h1>
                <p className={style.lartext} >Описание услуги</p>
            
                <p className={style.lartextoner} >Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних. </p>
<button className={style.btnlar} >
    <a href="#"className={style.linklar}  >Заказать</a>
</button>

</div>
<img src={larimgseven} className={style.larimg}  alt="" />
            </div>
           
          </div>
     





<div className={style.largebig}>
    <div className={style.laroneee}>
        <h1 className={style.titlarone} >Цифры и факты</h1>
        <p className={style.textlaronee}  >Мы работаем на результат и продаём только качественную продукцию</p>
    </div>
    <div className="">
        <h1 className={style.price} >7 лет</h1>
    </div>
    <div className="">
        <p className={style.one} >на рынке</p>
    </div>
</div>

<div className={style.lineee}></div>
<div className={style.largebigone}>
    <div className={style.laroneee}>

    </div>
    <div className="">
        <h1 className={style.price} >964+</h1>
    </div>
    <div className="">
        <p className={style.one} >оригинальной продукции со всего мира</p>
    </div>
</div>

<div className={style.lineee}></div>
<div className={style.largebigone}>
    <div className={style.laroneee}>

    </div>
    <div className="">
        <h1 className={style.price} >23+</h1>
    </div>
    <div className="">
        <p className={style.one} >международных сертификатов качества</p>
    </div>
</div>

<div className={style.lineee}></div>
<div className={style.largebigonee}>
    <div className={style.laroneee}>

    </div>
    <div className="">
        <h1 className={style.price} >2452+</h1>
    </div>
    <div className="">
        <p className={style.one} >товаров всегда в наличии</p>
    </div>
</div>

<div className={style.lineee}></div>


<div className={style.midboxone}>
    <h1 className={style.titmid} > Вы сможете оставить заявку на услуги и скачать бланк для заполнения</h1>
    <div className={style.midins}>
        <div className={style.insone}>
            <h1 className={style.titinsonee} >Бланк для заполнения</h1>
            <img src={Button} alt="" />
        </div>
        <div className={style.insone}>
            <h1 className={style.titinsonee} >Бланк для заполнения</h1>
            <img src={Button} alt="" />
        </div>
  
    </div>
</div>
<div className={style.bt}>
    <button className={style.btt} >
        <a href="#" className={style.lllll}  >Оставить заявку</a>
    </button>
</div>




<OwlCarousel className={style.OwlCarousel}  items={4} margin={10} nav={true} 
autoplay={true} 
autoplayTimeout={5000}
loop={true}>
<h1 className={style.tisert} >Сертификаты на продукцию</h1>
<div className={style.boxbox}>
    <img src={imgserff }   className={style.imn} alt="" />
</div>
<div className={style.boxbox}>
    <img src={imgserff }   className={style.imn} alt="" />
</div>
<div className={style.boxbox}>
    <img src={imgserff }   className={style.imn} alt="" />
</div>
<div className={style.boxbox}>
    <img src={imgserff }   className={style.imn} alt="" />
</div>
<div className={style.boxbox}>
    <img src={imgserff }   className={style.imn} alt="" />
</div>
<div className={style.boxbox}>
    <img src={imgserff }   className={style.imn} alt="" />
</div>
<div className={style.boxbox}>
    <img src={imgserff }   className={style.imn} alt="" />
</div>


</OwlCarousel>



















          <h1 className={style.title} >Информация о доставке</h1>
          <div className={style.boxmap}>
    <div className={style.btnbox}>
    <button className={style.btn} >
                <a href="#" className={style.linktwo} >Пункт выдачи</a>
            </button>
    </div>
          </div>
          <div className={style.textbox}>
          <p  className={style.text} >Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник. </p>

          </div>
          <h1 className={style.textone} >С нами выгодно и удобно</h1>
          <div className={style.big}>
            <div className={style.boxone}>
<div className={style.boxo}>
<img src={serone} className={style.img}  alt="" />
<p className={style.texttwo} >Доставка по всей России</p>
</div>
            </div>
            <div className={style.boxone}>
<div className={style.boxo}>
<img src={sertwo} className={style.imgg}  alt="" />
<p className={style.texttwoo} >Собственный склад с продукцией</p>
</div>
            </div>
            <div className={style.boxone}>
<div className={style.boxo}>
<img src={serthree} className={style.imggg}  alt="" />
<p className={style.texttwooo} >Весь товар сертифицирован</p>
</div>
            </div>
            <div className={style.boxone}>
<div className={style.boxo}>
<img src={serfour} className={style.imgj}  alt="" />
<p className={style.texttwot} >Безопасные способы оплаты</p>
</div>
            </div>
          </div>
     <div className={style.boxbtnn}>
     <button className={style.btnone}  >
            <a href="#"  className={style.linkthree}>Проверить статус доставки</a>
          </button>
     </div>

        </div>

        <div className={style.boxbig}>
<div className={style.left}>
<h1 className={style.titleft} >Правила получения товара в пункте выдачи</h1>
<p className={style.teleft}  >Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов.</p>
</div>
<div className={style.right}>
  
    <h2 className={style.tex} >Подготовить документы</h2>
    <p className={style.titt}  >Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы</p>
    <div className={style.lineone}></div>
    <h2 className={style.texone} >Проверка упаковки</h2>
    <p  className={style.tetwo} >При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки</p>
    <div className={style.lineone}></div>
    <h2 className={style.tethree}>Проверка товара</h2>
<p className={style.t}  >Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары</p>
</div>



     </div>
     <div className={style.boxgreen}>
        <h1 className={style.tit} >Часто задоваемые вопросы</h1>
        <div className={style.boxins}>
            <div className={style.linefive}></div>
            <div className={style.l}>
            <h1 className={style.titin} >О компании</h1>
            <img src={imgslone} className={style.im} alt="" />
            </div>
            <p className={style.texin} >Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.</p>
       <ul>
        <li className= {style.litwo}>
            <a href="#"  className={style.linkk} >Подробнее</a>
        </li>
       </ul>
       <div className={style.linesix}></div>
    <div className={style.ll}>
    <h1 className={style.in} >Преимущества сотрудников</h1>
    <img src={imm} className={style.im} alt="" />
    </div>
       <div className={style.linesix}></div>
  <div className={style.ll}>
  <h1 className={style.in} >Достижения компании</h1>
       <img src={imm} className={style.im} alt="" />
  </div>
       <div className={style.linesix}></div>
     <div className={style.ll}>
     <h1 className={style.in} >Карьерный рост</h1>
       <img src={imm} className={style.im} alt="" />
     </div>
        </div>
     </div>
    
     {/* <div className={style.mapin}>
            <h1 className={style.maptit} >Вы сможете забрать оборудование самостоятельно из нашего офиса</h1>
            <div className={style.mmbox}>
                <h3 className={style.contit} >Контакты</h3>
                <ul className={style.itmap} >
                    <li className={style.limap} >
                        <a href="#" className={style.linmap} >+7 (000) 000-00-00</a>
                    </li>
                    <li className={style.limap} >
                        <a href="#" className={style.linmap} >info@mail.ru</a>
                    </li>
                </ul>
            </div>

            <div className={style.mmbox}>
                <h3 className={style.contit} >Режим работы</h3>
         <p className={style.pp} >пн-пт: 09:00-19:00 сб-вс: выходной</p>
            </div>
        </div>
     <div className={style.inn}>
     <div className={style.map}>
      <div className={style.mm}>
      <button className={style.btnmap} >
            <a href="#" className={style.lmap} >г. Москва, ул. Московская, д. 35</a>
        </button>
      </div>
      <div className={style.mmm}>
        <button className={style.btin} >
            <a href="#" className={style.inl} >Построить маршрут</a>
        </button>
      </div>
     </div>
     </div> */}
     <div className={style.blue}>
        <div className={style.boxblue}>
            <h1 className={style.titblue} >Документы, необходимые для получения груза</h1>
            <p className={style.bluetext} >По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами отгрузка не производится</p>
        </div>
        <div className={style.blueone}>
            <div className={style.line}></div>
            <div className={style.ins}>
                <h1 className={style.titblu} >Юридические лица</h1>
               <img src={ blue}  className={style.im} alt="" />
            </div>
            <div className={style.line}></div>
            <div className={style.ins}>
                <h1 className={style.titblu} >Индивидуальные предприниматели</h1>
               <img src={ blue}  className={style.im} alt="" />
            </div>
            <div className={style.line}></div>
            <div className={style.ins}>
                <h1 className={style.titblu} >Физические лица</h1>
               <img src={ blue}  className={style.im} alt="" />
            </div>
            <p className={style.bbl} >Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.</p>
        </div>
     </div>
     <div className={style.white}>
        <div className={style.whiteone}>
            <h1 className={style.whitetit} >Вам нужна консультация?</h1>
            <p className={style.whitetext} >Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</p>
        </div>
        <div className={style.inbox}>
            <input type="text"  placeholder='Ваше имя'  className={style.inp}  />
            <input type="text"  placeholder='Ваш телефон'  className={style.inp}  />
            <input type="text"  placeholder='Ваш email'  className={style.inp}  />
            <input type="text"  placeholder='Ваш вопрос'  className={style.input}  />
<div className={style.bbtt}>
    <button className={style.btnn} >Отправить</button>
    <p className={style.endtit} >Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях Политики конфиденциальности.</p>
</div>
        </div>
     </div>
    </div>
  )
}

export default Services