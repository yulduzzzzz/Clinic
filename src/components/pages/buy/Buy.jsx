import React from 'react'
import style from './Buy.module.css'
import ser from '../../../../src/assets/fonts/ser.png'
function Buy() {
  return (
    <div className={style.Buy} >
        <div className="container">
          <div className={style.box}>
            <select  className={style.sel} >
                <option value="">Главная</option>
            </select>
            <ul>
                <li className={style.list} >
                    <a href="#" className={style.link} >Производители</a>
                </li>
            </ul>
          </div>
          <select  className={style.selone} >
                <option value="">Направления</option>
            </select>
            <div className={style.boxone}>
                <select className={style.seltwo}>
                    <option value="">Страны</option>
                </select>
                <div className={style.inbox}>
                <img src={ser}  className={style.serr} alt="" />
                    <input type="text" placeholder='Поиск по стране' className={style.input}  />
                   
                </div>
                <div className={style.boxtwo}>
                    <input type="checkbox"  className={style.check}  />
                    <p className={style.textone} >Австралия</p>
                </div>
                <div className={style.three}>
                    <input type="checkbox"   className={style.checkone}  />
                    <p className={style.texttwo} >Австрия</p>
                </div>
                <div className={style.three}>
                    <input type="checkbox"   className={style.checkone}  />
                    <p className={style.texttwo} >Беларусь</p>
                </div>
                <div className={style.three}>
                    <input type="checkbox"   className={style.checkone}  />
                    <p className={style.texttwo} >Бельгия</p>
                </div>
                <div className={style.three}>
                    <input type="checkbox"   className={style.checkone}  />
                    <p className={style.texttwo} >Великобритания</p>
                </div>
                <div className={style.three}>
                    <input type="checkbox"   className={style.checkone}  />
                    <p className={style.texttwo} >Германия</p>
                </div>

                <div className={style.three}>
                    <input type="checkbox"   className={style.checkone}  />
                    <p className={style.texttwo} >Израиль</p>
                </div>  
                 <div className={style.three}>
                    <input type="checkbox"   className={style.checkone}  />
                    <p className={style.texttwo} >Испания</p>
                </div>
                <div className={style.three}>
                    <input type="checkbox"   className={style.checkone}  />
                    <p className={style.texttwo} >Австралия</p>
                </div>  
                 <div className={style.three}>
                    <input type="checkbox"   className={style.checkone}  />
                    <p className={style.texttwo} >Австрия</p>
                </div>
                

            </div>
            <div className={style.btnbox}>
                <button type='text'  className={style.btn} >Сбросить</button>
                <button type='text'  className={style.btnone} >Показать</button>
            </div>
        </div>
    </div>
  )
}

export default Buy