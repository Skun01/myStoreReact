import Banner from '../../components/Banner/Banner.jsx';
import './Home.css'
import CardGrid from '../../components/CardGrid/CardGrid.jsx';
import TitleBar from '../../components/TitleBar/TitleBar.jsx';
import MyButton from '../../components/MyButton/MyButton.jsx';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading.jsx';
import { useOutletContext } from 'react-router-dom';
const BannerUrl = [
  './images/banner.jpg',
  './images/banner1.jpg',
  './images/banner2.jpg',
  './images/banner3.jpg'
]

const subBannerUrl = [
  './images/subBanner1.jpg',
  './images/subBanner2.jpg',
  './images/subBanner3.jpg',
]

function Home(){
  const [productsInfor, setProductsInfor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useOutletContext();
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
  context.setPage('')
  if(isLoading){
    return <Loading text="Loading..."/>
  }
  return(
    <div className="homeSection">
      <Banner images={BannerUrl}/>
      <TitleBar title="Top Products"/>
      <CardGrid products = {productsInfor} getTopProducts={true}/>
      <CardGrid images={subBannerUrl}/>
      <div className="footer">
        <img src="./images/Community.png" alt="" className="communityImg" />
        <div className="footerContent">
          <h2>Thank you for your purchase</h2>
          <p>My name is Thai Van Truong, And if you want to buy my product, please click the button below</p>
          <MyButton text="Buy Now" onClick={()=>{}}/>
        </div>
      </div>
    </div>
  )
}

export default Home;