import './CardGrid.css';
import ProductCard from '../ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
function CardGrid({ products, layout, images, getTopProducts}) {
  const navigate = useNavigate();
  if(images){
    return(
      <div className="cardGrid">
        {images.map((image, index) => (
          <img className='subImageBanner' key={index} src={image} alt={`Image ${index}`}/>
        ))}
      </div>
    )
  }
  function handleCardClick(id){
    navigate(`/productDetail/${id}`)
  }
  let topProducts = null;
  if(getTopProducts){
    products.sort((a, b) => b.rating - a.rating);
    topProducts = products.slice(0, 6);
  }else{
    topProducts = products
  }

  return(
    <div className={layout === 'stack' ? 'stackCardGrid' : "cardGrid"}>
      {topProducts.map((product, index) => (
        <ProductCard key={product.id} 
                    handleCardClick={()=>handleCardClick(product.id)} 
                    product={product} 
                    order={getTopProducts ? index + 1 : null}
                    layout={layout}/>
      ))}
    </div>
  )
}

export default CardGrid;
