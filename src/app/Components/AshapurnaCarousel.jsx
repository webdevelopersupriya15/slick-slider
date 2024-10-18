'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataAshapurnaList} from '../Data/DataList';


function AshapurnaCarousel() {
    const finalAshapurnaSlider=dataAshapurnaList.map((item,index)=>{
        return(

            <AshapurnaSlider details={item}  key={index} id="ashapurna" />
        )
        
   })
   let settings2 = {
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
    <div className='slider-container2' >
      <Slider {...settings2}>
       {
         finalAshapurnaSlider
        }
       </Slider>
    </div>
  )
}
function AshapurnaSlider({details}){
    return(
       <div className="slider-item">
        <img src={details.imgSrc} className="slider-image" alt="Slider" />
      </div>
    )
}

 

export default AshapurnaCarousel