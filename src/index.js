import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Aboutus from './pages/Aboutus'
import Menu from './menu';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NewEvents from "./pages/Newsevents"
import Ourlocation from "./pages/Ourlocation"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
    <Route path = "/AboutUs" element = {<Aboutus/>} />
    <Route path = "/" element = {<Menu/>} />
    <Route path = "/Cart" element = {<Cart/>} />
    <Route path = "/Login" element = {<Login/>} />
    <Route path = "/Ourlocation" element = {<Ourlocation/>} />
    <Route path = "/Newsevents" element = {<NewEvents/>} />
    </Routes>
  </BrowserRouter>
);
