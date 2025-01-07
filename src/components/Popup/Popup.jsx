
import './Popup.css'
import {X} from 'lucide-react'

function Popup({text, isDisplay, set}){
  if(isDisplay){
    setTimeout(()=>{
      set(false);
    }, 3000);
  }
  function handleClosePopup(){
    set(false);
  }
  return(
    <div className="popup" style={{'transform': `translateX(${isDisplay ? '0' : '200%'})`}}>
      {text}
      <X className='closePopUp' color='white' size={18} onClick={handleClosePopup}/>
    </div>
  )
}

export default Popup;