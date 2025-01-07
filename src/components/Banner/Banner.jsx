import './Banner.css'
import PropTypes from 'prop-types';
import {ChevronRight, ChevronLeft} from 'lucide-react'
import { useState, useEffect } from 'react';

function Banner({images = []}){
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=>{
    const setIntervalId = setInterval(()=>{
      setCurrentIndex(pre=> pre == images.length - 1 ? 0 : pre + 1)
    }, 2500)
    return ()=>{
      clearInterval(setIntervalId);
    }
  }, [currentIndex])
  function handlePreSlide(){
    setCurrentIndex(pre=> pre === 0 ? images.length : pre - 1)
  }
  
  function handleNextSlide(){
    setCurrentIndex(pre=> pre === images.length - 1 ? 0 : pre + 1)
  }
  function handleDotClick(index){
    if(index !== currentIndex){
      setCurrentIndex(index);
    }
  }
  return(
    <div className="bannerContainer">
      <div className="sliderWrapper"
        style={{'transform' : `translateX(-${currentIndex*100}%)`}}>
        {images.map((url, i)=>(
          <div className='bannerSlider' key={url}>
            <img src={url} id={`slide-${i}`} className='slideImage'/>
          </div>
        ))}
      </div>
      <ChevronLeft onClick={handlePreSlide} size={40} className="slideBtn preSlideBtn"/>
      <ChevronRight onClick={handleNextSlide} size={40} className="slideBtn nextSlideBtn"/>
      <div className="sliderNav">
        {images.map((_, index)=>(
          <div  key={index} className={`indexNav ${index === currentIndex ? 'active' : ''}`}
                onClick={()=>handleDotClick(index)}>
          </div>
        ))}
      </div>
    </div>
  )
}

Banner.propTypes = {
  images: PropTypes.array.isRequired
}
export default Banner;