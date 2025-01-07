import './SearchControl.css'
import {Search, Rows3, LayoutGrid, FilterX } from 'lucide-react'
import Dropdown from '../Dropdown/Dropdown';
import CardGrid from '../CardGrid/CardGrid';
import { useEffect, useState } from 'react';
import Loading from '../../Page/Loading/Loading';

const sorts = [{name: 'A-Z'}, {name: 'Z-A'}, {name: 'Lowest(Price)'}, {name: 'Highest(Price)'}]
function SearchControl(){
  const [productsFound, setProductsFound] = useState(0)
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([])
  const [layout, setLayout] = useState('grid')
  const [searchingKey, setSearchingKey] = useState('')
  const [categoryKey, setCategoryKey] = useState('')
  const [sort, setSort] = useState('')
  const [isDefaultDropdown, setIsDefaultDropdown] = useState(true)

  useEffect(()=>{
    const fetchProducts = fetch(`https://dummyjson.com/products/search?q=${searchingKey}`)
                            .then(response=>response.json())
    const fetchCategories = fetch('https://dummyjson.com/products/categories')
                            .then(response=>response.json())
    Promise.all([fetchProducts, fetchCategories])
      .then(([productsData, categoriesData])=>{
        let productsList = null;
        if(categoryKey !== ''){
          productsList = productsData.products.filter(product=>product["category"] === categoryKey)
          setIsDefaultDropdown(false)
        }else productsList = productsData.products
        if(sort !== ''){
          productsList = mySorting(productsList, sort)
          setIsDefaultDropdown(false)
        }
        setProducts(productsList)
        setCategories(categoriesData)
        setProductsFound(productsList.length)
      })
      .catch(error=>alert(error))
      .finally(()=>setIsLoading(false))
  }, [searchingKey, categoryKey, sort])

  if(isLoading){
    return <Loading text="Loading..."/>
  }
  // sorting
  
  function handleChangeLayout(type){
    if(layout !== type){
      setLayout(type)
    }
  }
  function handlePressEnter(e){
    if(e.key === 'Enter'){
      setSearchingKey(e.target.value)
    }
  }

  function handleFilterClick(){
    if(sort !== '') setSort('')
    if(categoryKey !== '') setCategoryKey('')
    setIsDefaultDropdown(true)
  }
  return(
    <>
      <div className="searchControlWrapper">
        <div className="searchControl">
          <div className="changeLayout">
            <Rows3 color={layout === 'stack' ? '#7fffd4' : 'white'} className='layoutBtn' 
                    onClick={()=>handleChangeLayout('stack')}/>
            <LayoutGrid color={layout === 'grid' ? '#7fffd4' : 'white'} className='layoutBtn'
                          onClick={()=>handleChangeLayout('grid')}/>
          </div>
          <div className="searchBar">
            <div className="searchIcon"><Search/></div>
            <input type="text" className='searchInput' onKeyDown={handlePressEnter}>
            </input>
          </div>
          <div className="cancelFilter">
            <FilterX color={'white'} onClick={handleFilterClick}/>
            </div>
          <Dropdown getOption={setCategoryKey} list = {categories} title={'All'} isDefaultDropdown={isDefaultDropdown}/>
          <Dropdown getOption={setSort}  list = {sorts} title={'sort'} isDefaultDropdown={isDefaultDropdown}/>
        </div>
        <div className="searchNotif">
          {productsFound} products found
        </div>
      </div>
      <div className="shopList">
        {productsFound === 0 ? <div className='notFound'>Products not found</div> :<CardGrid products={products} layout={layout}/>}
      </div>
    </>
  )
}

function mySorting(products, sort){
  if(sort !== ''){
    let sortingProducts = null;
    switch(sort){
      case 'A-Z':
        sortingProducts = products.sort((a,b)=> a.title > b.title ? 1 : -1)
        break;
      case 'Z-A':
        sortingProducts = products.sort((a,b)=> a.title < b.title ? 1 : -1)
        break;
      case 'Lowest(Price)':
        sortingProducts = products.sort((b,a)=> b.price - a.price)
        break;
      case 'Highest(Price)':
        sortingProducts = products.sort((b,a)=> a.price - b.price)
        break;
    }
    return sortingProducts;
  }
}

export default SearchControl;