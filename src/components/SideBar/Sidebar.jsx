import './sidebar.css'
import {House, LogIn, Store, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom';
function Sidebar({currentPage, cartNumber}){
  return(
    <div className="sideBar">
      <div className="shopHeader">
        <p className="shopName">Skun Shop</p>
        <img src="/images/spiderHead.jpg" alt="logo" className="shopLogo" />
      </div>
      <ul className="funcNav">
        <li className="funcLink">
          <Link to='login'><LogIn/>&nbsp;Log in</Link>
        </li>
        <li className={`funcLink ${currentPage === '' && 'active'}`}>
          <Link><House/>&nbsp;Home</Link>
        </li>
        <li className={`funcLink ${currentPage === 'shop' && 'active'}`}>
          <Link to='shop'><Store/>&nbsp;Shop</Link>
        </li>
        <li className={`funcLink ${currentPage === 'shoppingcart' && 'active'}`}>
          <Link to='shoppingcart'><ShoppingCart/>&nbsp;Cart <span className='cartNumber'>{cartNumber}</span></Link>
        </li>
      </ul>
      <ul className="supportNav">
        <li className="supportLink">
          Help
        </li>

        <li className="supportLink">
          Contact
        </li>
      </ul>

    </div>
  )
}

export default Sidebar;