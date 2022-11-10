import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './pages/Aboutus'
import Cart from "./pages/Cart";
import ProductForm from './adminpanel/addproducts';
import Connect from './pages/Connect';
import { isAuthenticated } from './backendjoin/auth';
import Login from "./pages/Login";
import Contactus from './pages/Contactus';
import NewEvents from "./pages/Newsevents"
import Error from './error/error';
import AdminPanel from './adminpanel/admin';
import Ourlocation from "./pages/Ourlocation"
import HomePage from './pages/Home';
import PrivateRoute from './moduleslogin/privateroute';

const root = ReactDOM.createRoot(document.getElementById('root'))
const usersindex = isAuthenticated();
console.log("",usersindex)
console.log("",typeof(usersindex))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/AboutUs" element={<Aboutus />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Connect" element={<Connect />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Adding-Products" element={<ProductForm/>} />
      <Route path ="Login/admin/dashboard" element = {<AdminPanel />} />
      <Route element = {<PrivateRoute />}>
      <Route element = {<Login/>} path='/Login' />
      {/* <Route element = {<Login/>} path='/' /> */}
      </Route>
      <Route path="/Ourlocation" element={<Ourlocation />} />
      <Route path="/Newsevents" element={<NewEvents />} />
    </Routes>
  </BrowserRouter>
);
