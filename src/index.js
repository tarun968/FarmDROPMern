import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Aboutus from './pages/Aboutus'
import Cart from "./pages/Cart";
import Connect from './pages/Connect';
import Login from "./pages/Login";
import Contactus from './pages/Contactus';
import NewEvents from "./pages/Newsevents"
import Ourlocation from "./pages/Ourlocation"
import HomePage from './pages/Home';
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
    <Route path = "/AboutUs" element = {<Aboutus/>} />
    <Route path = "/" element = {<HomePage/>} />
    <Route path ="/Contactus" element =  {<Contactus />}/>
    <Route path ="/Connect" element =  {<Connect />}/>
    <Route path = "/Cart" element = {<Cart/>} />
    <Route path = "/Login" element = {<Login/>} />
    <Route path = "/Ourlocation" element = {<Ourlocation/>} />
    <Route path = "/Newsevents" element = {<NewEvents/>} />
    </Routes>
  </BrowserRouter>
);
