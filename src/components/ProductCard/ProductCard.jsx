import './ProductCard.css'

function ProductCard({product, order, handleCardClick, layout}){
  if(layout === 'stack'){
    return(
      <div className="stackProductCard" onClick={handleCardClick}>
        {order && <div className="order">{order}</div>}
        <img className='stackCardImg' src={product.thumbnail} alt={product.title}/>
        <div className="stackCardDesc">
          <p className="stackCardTitle">{product.title}</p>
          <p className="cardPrice">Price: {product.price}</p>
          <p className="stackCardDescript">{product.description}</p>
        </div>
        <img src="/images/spiderHead.jpg" alt="" className='productMyLogo'/>
      </div>
    )
  }
  return(
    <div className="productCard" onClick={handleCardClick}>
      {order && <div className="order">{order}</div>}
      <img className='cardImg' src={product.thumbnail} alt={product.title}/>
      <div className="cardDesc">
        <p className="cardTitle">{product.title}</p>
        <p className="cardPrice">Price: {product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard;