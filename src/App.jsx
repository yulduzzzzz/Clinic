import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/navbar/Navbar'
import Footer from './components/layouts/footer/Footer'
import Home from './components/pages/home/Home'
import Catalog from './components/pages/catalog/Catalog'
import Manufacturer from './components/pages/manufacturer/Manufacturer'
import Turnkey from './components/pages/turnkey/Turnkey'
import Services from './components/pages/services/Services'
import Stock from './components/pages/stock/stock'
import  Contact from './components/pages/contact/Contact'
import Buy from './components/pages/buy/Buy'


function App() {
  return (
    <div className='wrapper'>
   
<BrowserRouter>

<Navbar/>

<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/Catalog' element={<Catalog />}></Route>
  <Route path='/Manufacturer' element={<Manufacturer />}></Route>
  <Route path='/Turnkey' element={<Turnkey />}></Route>
  <Route path='/Services' element={<Services />}></Route>
  <Route path='/Stock' element={<Stock />}></Route>
  <Route path='/Contact' element={<Contact />}></Route>
  <Route path='/Buy' element={<Buy />}></Route>
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  )
}

export default App