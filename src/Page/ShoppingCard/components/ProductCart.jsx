import './ProductCart.css'
import { useEffect, useState } from "react"
import { Trash2 } from "lucide-react"
import { addToCarts, getCartsList } from '../../../Session';
function ProductCart({product, number, handleDeleteCartBtn, setSubTotal}){
  const [productNumber, setProductNumber] = useState(number);
  const [totalPrice, setTotalPrice] = useState(number * product.price)
  useEffect(()=>{
    addToCarts(product, +productNumber)
    let tmp = 0;
    getCartsList().forEach(element=>{
      console.log(element)
      tmp += element.number * element.productDetail.price
    })
    setSubTotal(tmp);
  }, [productNumber])
  function handleControlProductNumber(type){
    if(type === 'decrease' && +productNumber !== 1){
      setProductNumber(+productNumber - 1);
      setTotalPrice((+productNumber - 1)*product.price)
    }else if(type === 'increase'){
      setProductNumber(+productNumber + 1)
      setTotalPrice((+productNumber + 1)*product.price)
    }
  }
  function handleOnChangeProductNumber(e){
    setProductNumber(e.target.value);
  }
  return(
    <div className="productCart">
      <div className="cartProduct">
        <div className="productCartImg">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="productCartDetail">
          <div className="cartInfor">
            <p className="productTitle">{product.title}</p>
            <p className="productPrice">Total: {totalPrice}</p>
          </div>
          <div className="controlProductNumber">
              <button className="editProductNumber" onClick={()=>handleControlProductNumber('decrease')}>-</button>
              <input type="text" onChange={handleOnChangeProductNumber} value={productNumber} className="productNumber" />
              <button className="editProductNumber" onClick={()=>handleControlProductNumber('increase')}>+</button>
            </div>
        </div>
      </div>
      <div className="deleteCartItemWrapper" onClick={handleDeleteCartBtn}>
          <Trash2 className="deleteCartItem" color={'white'} size={30}/>
        </div>
    </div>
  )
}
export default ProductCart