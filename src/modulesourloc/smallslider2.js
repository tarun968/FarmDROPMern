import React, { Component } from 'react'
import Slider from 'infinite-react-carousel';

export default function SimpleSlider () {
  return (
    <div style={{"marginTop":"15vh"}}>
    <Slider dots
    pauseOnHover={false}
    slidesToShow={1}
    >
    <div><img src={
                        require('../pages/img/Farmdrop-1.jpg')}
                        style={{ width: "100%", height: "42vh" }}
                        />
    </div>
    <div>
    <img src={
                        require('../pages/img/farmdrop1x1220.jpg')}
                        style={{ width: "100%", height: "42vh" }}
                        />
     </div>
    <div>
    <img src={
                        require('../pages/img/farmdrop.jpg')}
                        style={{ width: "100%", height: "42vh" }}
                        />
    </div>
    <div><img src={
                        require('../pages/img/Farmdrop-Header.jpg')}
                        style={{ width: "100%", height: "42vh" }}
                        />
    </div>
    <div><img src={
                        require('../pages/img/farm-produce-AdobeStock_261798735-c-adobe-stock.jpg')}
                        style={{ width: "100%", height: "42vh" }}
                        />
    </div>
  </Slider>
</div>
  )
}