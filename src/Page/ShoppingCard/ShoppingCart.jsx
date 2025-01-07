import { useOutletContext } from 'react-router-dom'
import './ShoppingCart.css'
import { getCartsList, deleteCartItem } from '../../Session';
import ProductCart from './components/ProductCart';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Popup from '../../components/Popup/Popup';
function ShoppingCart(){
  const [displayPopup, setDisplayPopup] = useState(false);
  const [carts, setCarts] = useState(getCartsList())
  const [subTotal, setSubTotal] = useState(0)
  const context = useOutletContext();
  useEffect(()=>{
    context.setCartNumber(carts.length)
  }, [carts])
  context.setPage('shoppingcart');
  function handleDeleteCartBtn(record){
    deleteCartItem(record.productDetail.id)
    setCarts([...getCartsList()])
    setSubTotal(subTotal - record.productDetail.price* record.number);
  }

  function handleCheckout(){
    if(!displayPopup && subTotal !== 0){
      setDisplayPopup(true);
    }
  }
  return(
    <div className="shoppingCart">
      <Popup text="Checkout successfully!" isDisplay={displayPopup} set={setDisplayPopup}/>
      <div className="shoppingCartTitle">YOUR CARD</div>
      <div className="cartList">
        {carts.map((record)=><ProductCart key={record.productDetail.id} 
                                          product={record.productDetail} 
                                          number={record.number}
                                          setSubTotal={setSubTotal} 
                                          handleDeleteCartBtn={()=>handleDeleteCartBtn(record)}/>)}
      </div>
      <div className="totalAmount">
        <div className="subTotal">
          <span>Subtotal:</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="checkOutBtn" onClick={handleCheckout}>
          CHECKOUT  <ArrowRight/>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart