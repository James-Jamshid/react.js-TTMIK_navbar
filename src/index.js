import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LevelTest from './components/LevelTest';
import Learning from './components/Learning';
import Pricing from './components/Pricing';
import Courses from './components/Courses';
import Bookstore from './components/Bookstore';
import SignIn from './components/SignIn';
import Support from './components/Support';
import Cart from './components/Cart';
import Bell from './components/Bell';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
   <Route path='/' element={<App/>}> </Route>
   <Route path='/LevelTest' element={<LevelTest/>}> </Route>
   <Route path='/Learing' element={<Learning/>}> </Route>
   <Route path='/Pricing' element={<Pricing/>}> </Route>
   <Route path='/Courses' element={<Courses/>}> </Route>
   <Route path='/Bookstore' element={<Bookstore/>}> </Route>
   <Route path='/SignIn' element={<SignIn/>}> </Route>
   <Route path='/Support' element={<Support/>}> </Route>
   <Route path='/Cart' element={<Cart/>}> </Route>
   <Route path='/Bell' element={<Bell/>}> </Route>
   
 </Routes>
 </BrowserRouter>
);


