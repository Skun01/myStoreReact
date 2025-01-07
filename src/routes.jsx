import Auth from "./Page/Auth/Auth";
import Login from "./Page/Auth/Login";
import Register from "./Page/Auth/Register";
import App from "./App";
import ProductDetail from "./Page/ProductDetail/ProductDetail";
import Home from './Page/Home/Home'
import Shop from "./Page/Shop/Shop";
import ShoppingCart from "./Page/ShoppingCard/ShoppingCart.jsx";

const routes = [
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'productDetail/:id', element: <ProductDetail/>},
      {path: 'shop', element: <Shop/>},
      {path: 'shoppingcart', element: <ShoppingCart/>}
    ]
  },
  {
    path:'login',
    element: <Auth/>,
    children: [
      {index: true, element: <Login/>},
      {path: 'register', element: <Register/>}
    ]
  },
]

export default routes