import { useState } from "react";
function ProductSlider({images}){
  const [currentImageIndex, setCurrentIndex] = useState(0);
  function handleGalleryClick(index){
    if(index !== currentImageIndex){
      setCurrentIndex(index);
    }
  }
  return(
    <div className="productImages">
      <div className="mainImage">
        <div className="mainImageWrapper" style={{'transform': `translateX(-${currentImageIndex*100}%)`}}>
          {images.map((image,index)=>(
            <div key={index} className="mainImageSlider">
              <img src={image}/>
              </div>
            ))}
          </div>
      </div>
      <div className="gallery">
        {images.map((image, index)=>(
          <div key={index} className={`galleryImageWrapper ${index === currentImageIndex && 'active'}`}
                onClick={()=>handleGalleryClick(index)}>
            <img className="galleryImage" src={image} alt="galleryImage" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductSlider;