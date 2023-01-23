import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './pages/Aboutus'
import EditOrder from './Profile/EditOrder';
import Orders from './Profile/Orders';
import UserProfile from './Profile/userProfile';
import NewItem from './modulesnande/new';
import EditProfile from './Profile/EditProfile';
import Cart from "./pages/Cart";
import CartsUser from './modulescart/cartuser';
import LocationsForm from './adminpanel/location_add';
import ProductForm from './adminpanel/addproducts';
import Connect from './pages/Connect';
import { isAuthenticated } from './backendjoin/auth';
import Login from "./pages/Login";
import ManageProductForm from './adminpanel/manageproductsform';
import DeleteProduct from './adminpanel/deleteproducts';
import Contactus from './pages/Contactus';
import NewEvents from "./pages/Newsevents"
import Error from './error/error';
import AddNews from './adminpanel/add_news';
import AdminPanel from './adminpanel/admin';
import Ourlocation from "./pages/Ourlocation"
import HomePage from './pages/Home';
import PrivateRoute from './moduleslogin/privateroute';
import EditOrderAdmin from './adminpanel/EditOrderAdmin';
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/AboutUs" element={<Aboutus />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/Cart" element={<CartsUser />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Connect" element={<Connect />} />
      <Route path="/Login/user/dashboard" element={<Cart />} />
      <Route path="/profile/:email" element={<UserProfile />} />
      <Route path="/Adding-News" element = {<AddNews />} />
      <Route path="/Adding-Locations" element={<LocationsForm/>} />
      <Route path="/News/:news" element={<NewItem/>} />
      <Route path="/Updating-Products/:productId" element={<ManageProductForm/>} />
      <Route path="/Updating-Products" element={<DeleteProduct />} />
      <Route path="/Adding-Products" element={<ProductForm/>} />
      <Route path ="/Login/admin/dashboard" element = {<AdminPanel />} />
      
      <Route element = {<PrivateRoute />}>
      <Route element = {<Login/>} path='/Login' />
      </Route>
      <Route path="/user/:User" element = {<UserProfile/>} />
      <Route path="/user/:User/orders" element = {<Orders/>} />
      <Route path="/user/:User/edit-profile" element = {<EditProfile/>} />
      <Route path="/user/:User/orders/order/:orderid" element = {<EditOrder/>} />
      <Route path="/Login/admin/dashboard/order/:orderid" element = {<EditOrderAdmin/>} />

      <Route path="/Ourlocation" element={<Ourlocation />} />
      <Route path="/Newsevents" element={<NewEvents />} />
    </Routes>
  </BrowserRouter>
);
