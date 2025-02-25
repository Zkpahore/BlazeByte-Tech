import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/about/About';
import Services from './Pages/services/Services'
import Portfolio from './Pages/portfolio/Portfolio';
import Blog from './Pages/blog/Blog'
import Contact from './Pages/Contact'
import WebDevelopment from './Pages/services/WebDevelopment';
import SEOServices from './Pages/services/SEOServices';
import DigitalMarketing from './Pages/services/DigitalMarketing';
import CaseStudy from './Pages/portfolio/CaseStudy';
import FaqPage from './Pages/Faq';
import SeoService from './Pages/services/SeoService';
import DigitalMarketingSolutions from './Pages/services/DigitalMarketingSolutions';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />

    <Route path='/services' element={<Services />} />
    <Route path='/web-development' element={< WebDevelopment />} />
    <Route path='/seo-services' element={<SEOServices />} />
    <Route path='/E-commerce-Solutions' element={<DigitalMarketing />} />
    <Route path='/digital-marketing' element={<DigitalMarketingSolutions />} />

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
