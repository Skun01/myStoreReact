import { useEffect, useRef } from 'react';
import './Dropdown.css'

function Dropdown({list, title, getOption, isDefaultDropdown}){
  const mySelection = useRef(null);
  function handleGetOption(e){
    getOption(e.target.value)
  }
  useEffect(()=>{
    if(isDefaultDropdown){
      mySelection.value = ''
    }
  },[isDefaultDropdown])
  return(
    <select className='myDropdown' onChange={handleGetOption} ref={mySelection}>
      <option value="" >{title}</option>
      {list.map((value, index)=><option key={index} value={value.slug}>{value.name}</option>)}
    </select>
  )
}

export default Dropdown;