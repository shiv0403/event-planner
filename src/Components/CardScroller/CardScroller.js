import React, {useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination } from 'swiper'
import 'swiper/swiper-bundle.css';
import Card from '../Card/Card';
import './CardScroller.css'

SwiperCore.use([Navigation,Pagination])
function CardScroller() {
    const imagesNo = [1,2,3,4,5];

    const slides = [];
    const abortConst = new AbortController();
    const [noOfSlides, setNoOfSlides] = useState(1.3);
    const handleNoofSlides = (screenWidth) => {
        if (screenWidth >= 350 && screenWidth <= 560){
            setNoOfSlides(1.3);
        }else if(screenWidth > 560 && screenWidth <= 650){
            setNoOfSlides(1.5);
        }else if(screenWidth > 650 && screenWidth <=720){
            setNoOfSlides(1.85);
        }else if(screenWidth > 720 && screenWidth <= 800){
            setNoOfSlides(2);
        }else if(screenWidth > 800 && screenWidth <=900){
            setNoOfSlides(2.2);
        }else if(screenWidth > 900 && screenWidth <=1100){
            setNoOfSlides(1.85)
        }else if(screenWidth > 1100 && screenWidth <=1300){
            setNoOfSlides(2.4);
        }else if(screenWidth > 1300 && screenWidth <=1450){
            setNoOfSlides(3);
        }else if(screenWidth > 1450 && screenWidth <=1500){
            setNoOfSlides(3.5);
        }else if (screenWidth > 1500 && screenWidth <=1600){
            setNoOfSlides(3.7);
        }else if (screenWidth > 1600){
            setNoOfSlides(4);
        }
    }
   
    window.addEventListener('resize',() => handleNoofSlides(window.innerWidth))
    

    for (let i =0;i<5;i++){
        slides.push(
            <SwiperSlide key={i}><Card key={i} imgNo={imagesNo[Math.floor(Math.random() * imagesNo.length)]} /></SwiperSlide>
        )
    }
    useEffect(() => {
        handleNoofSlides(window.innerWidth,{signal : abortConst.signal});
        return () => {
            abortConst.abort();
        };
    }, [])

    return (
        <div>
            <Swiper
      slidesPerView={noOfSlides}
    >
        {slides}
    </Swiper>
        </div>
    )
}

export default CardScroller
