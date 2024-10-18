'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataFlipkartList } from '../Data/DataList';

function FlipCarousel() {
  const finalFlipKartSlider=dataFlipkartList.map((item,index)=>{
        return(

            <FlipKartSlider details={item}  key={index} />
        )
        
   })
   let settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   }

  
  return (
    <div className='slider-container1'>
        <Slider {...settings1}>
      {
          finalFlipKartSlider
       }
       </Slider>
    </div>
  )
}
function FlipKartSlider({details}){
    return(
      <div className='w-full'>
          <img src={details.imgSrc} />
      </div>
    )
}
export default FlipCarousel
