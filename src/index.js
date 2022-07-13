import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/categories/Home';
import Tourism from './components/categories/Tourism';
import Fitness from './components/categories/Fitness';
import Technology from './components/categories/Technology';
import Bollywood from './components/categories/Bollywood';
import Food from './components/categories/Food';
import Logo from './components/Logo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Logo/>
      <App/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/category/tourism' element={<Tourism/>}></Route>
        <Route path='/category/fitness' element={<Fitness/>}></Route>
        <Route path='/category/technology' element={<Technology/>}></Route>
        <Route path='/category/bollywood' element={<Bollywood/>}></Route>
        <Route path='/category/food' element={<Food/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
