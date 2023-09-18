import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopHeader from './component/TopHeader';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Portfolio from './page/Portfolio';
import Blog from './page/Blog';
import WhatsAppButton from './component/WhatssAppButton';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <TopHeader />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/Blog' element={<Blog />} />
          </Routes>
        </div>
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
