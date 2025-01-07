
import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/SideBar/Sidebar'
import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('')
  const [cartNumber, setCartNumber] = useState(0)
  return(
    <div className="appContainer">
      <div className="sidebarContainer">
        <Sidebar currentPage={currentPage} cartNumber= {cartNumber}/>
      </div>
      <div className="mainContent">
        <Outlet context={{
          setPage: setCurrentPage,
          setCartNumber: setCartNumber,
        }}/>
      </div>
    </div>
  )
}

export default App
