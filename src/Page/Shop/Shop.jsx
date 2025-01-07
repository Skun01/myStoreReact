import './shop.css'
import SearchControl from '../../components/SearchControl/SearchControl';
import { useOutletContext } from 'react-router-dom';
function Shop(){
  const context = useOutletContext();
  context.setPage('shop')
  return(
    <div className="shopSection">
      <SearchControl/>
    </div>
  )
}

export default Shop;