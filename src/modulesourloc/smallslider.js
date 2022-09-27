import React from "react";
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './smallslider.css'
import byrantimage from '../pages/img/ssp.png'
export default function ImageSlider() {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (

    <div style={{ "marginTop": "15vh" }}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            position: 'relative',
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            position: 'relative',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={
          [
            {
              itemsToShow: 3,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 395, height: 220, background: '#ff80ed' }}>
          <img style={{ width: "100%" }} src={
            require('../pages/img/download (1).jfif')}                        
        />
        </div>
        <div style={{ width: 395, height: 220, background: '#065535' }}>
          <img style={{ width: "100%" }} src={
            require('../pages/img/download (2).jfif')}
             />
        </div>
        <div style={{ width: 395, height: 220, background: '#000000' }}>
          <img style={{ width: "100%" }} src={
            require('../pages/img/download (3).jfif')} />
        </div>
        <div style={{ width: 395, height: 220, background: '#133337' }}>
          <img style={{ width: "100%" }} src={
            require('../pages/img/download.jfif')} />
        </div>
        <div style={{ width: 395, height: 220, background: '#ffc0cb' }}>
          <img style={{ width: "100%" }} src={
            require('../pages/img/images.jfif')} />
        </div>
        <div style={{ width: 395, height: 220, background: '#ffffff' }}>
          <img style={{ width: "100%" }} src={
            require('../pages/img/images (1).jfif')} />
        </div>
        <div style={{ width: 395, height: 220, background: '#ffe4e1' }}>
          <img style={{ width: "100%" }} src={
            require('../pages/img/images (2).jfif')} />
        </div>
        <div style={{ width: 395, height: 220, background: '#008080' }}>
          <img style={{ width: "100%" }} src={
            require('../pages/img/ffdr2.png')} />
        </div>
      </ReactSimplyCarousel>
    </div>
  )
}