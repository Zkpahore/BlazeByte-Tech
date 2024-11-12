import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './pages/About';
import Services from './Pages/Services'
import Portfolio from './Comps/Portfolio';
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import WebDevelopment from './Pages/WebDevelopment';
import SEOServices from './Pages/SEOServices';
import DigitalMarketing from './Pages/DigitalMarketing';
import CaseStudy from './Pages/CaseStudy';
import FaqPage from './Pages/Faq';
import SeoService from './Pages/SeoService';
import DigitalMarketingSolutions from './Pages/DigitalMarketingSolutions';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home />} />
    <Route path='/about' element={<About />} />

    <Route path='/services' element={<Services />} />
    <Route path='/services/web-development' element={< WebDevelopment />} />
    <Route path='/services/seo-services' element={<SEOServices />} />
    <Route path='/services/digital-marketing' element={<DigitalMarketing />} />
    <Route path='/services/E-commerce-Solutions' element={<DigitalMarketingSolutions />} />

    <Route path='/portfolio' element={<Portfolio />} />
    <Route path='/case-study/:id' element={<CaseStudy />} />

    <Route path='/blog' element={<Blog />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/faq' element={<FaqPage />} />
    <Route path='seo-services' element={<SeoService />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
