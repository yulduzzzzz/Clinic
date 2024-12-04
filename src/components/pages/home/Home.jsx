import React from 'react'
import style from './Home.module.css'
import Slide from './slide/Slide'
import SecOne from './secone/SecOne'
import SecTwo from './sectwo/SecTwo'
import SecThree from './secthree/SecThree'
import SecFour from './secfour/SecFour'
import SecFive from './secfive/SecFive'
import SecSix from './secsix/SecSix'
import SecSeven from './secseven/SecSeven'
import Eight from './eight/Eight' 
function Home() {
  return (
    <div   className={style.Home}>
<Slide/>
<SecOne/>
<SecTwo/>
<SecThree/>
<SecFour/>
<SecFive/>
<SecSix/>
<SecSeven/>
<Eight/>
    </div>
  )
}

export default Home