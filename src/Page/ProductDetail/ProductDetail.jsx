import ProductSlider from "./components/ProductSlider";
import "./ProductDetail.css";
import Popup from "../../components/Popup/Popup";
import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { addToCarts } from "../../Session";

function ProductDetail(){
  const [displayPopup, setDisplayPopup] = useState(false);
  const {id} = useParams();
  const [productsInfor, setProductsInfor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useOutletContext()

  // get API
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
      .then(response=>response.json())
      .then(data=>{
        setProductsInfor(data.products);
      })
      .finally(()=>{
        setIsLoading(false);
      })
  }, [])
  if(isLoading){
    return <Loading text="Loading..."/>
  }
  const product = productsInfor.find(pd=> pd.id === +id);
  function handleAddToCard(){
    if(!displayPopup){
      setDisplayPopup(true);
    }
    addToCarts(product, 1)
    context.setCartNumber(prev=>prev + 1)
  }
  if(!product) return (<></>);
  return(
    <div className="productDetailSection">
      <div className="backgroundProductTheme"></div>
      <div className="productDetailContent">
        <ProductSlider images={product.images}/>
        <div className="productInformation">
          <div className="mainProductInfor">
            <p className="productTitle">{product.title}</p>
            <p className="productPrice">Price: {product.price}</p>
            {product.tags.map((value, index)=><div key={index} className="tagStyle">#{value}</div>)}
          </div>
          <div className="controlProduct">
            
            <button className="addToCardBtn" onClick={handleAddToCard}>Add to card</button>
          </div>
          <div className="moreProductInfor">
            <div className="inforBlock">
              <p className="inforTitle">Description</p>
              <p className="inforText">{product.description}</p>
            </div>
            <div className="inforBlock">
              <p className="inforTitle">Core Detail</p>
              <ul className="coreDetail">
                <li>Brand: {product.brand}</li>
                <li>Dimensions: {product.dimensions.width}X{product.dimensions.height}X{product.dimensions.depth}</li>
                <li>Rating: {product.rating}</li>
                <li>Category: {product.category}</li>
                <li>Warranty Information: {product.warrantyInformation}</li>
                <li>shippingInformation: {product.shippingInformation}</li>
              </ul>
            </div>
            <div className="inforBlock">
              <p className="inforTitle">Customer Reviews</p>
              <div className="reviewsList">
                {product.reviews.map((review, index) => (
                  <div key={index} className="reviewItem">
                    <div className="reviewHeader">
                      <div className="reviewerInfo">
                        <p className="reviewerName">{review.reviewerName}</p>
                        <p className="reviewDate">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                      <div className="rating">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="reviewComment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Popup text="Add to card complete!" isDisplay={displayPopup} set={setDisplayPopup}/>
      </div>
    </div>
  )
}

export default ProductDetail;