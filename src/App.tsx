

import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/layout/Navbar'
import { ModeToggle } from './Component/mode-toggle'

function App() {


  return (
    <>
    
    <div className='flex'>
    <Navbar />
        <Outlet />
      <div className='ml-auto'>
        <ModeToggle/>
      </div>
    </div>

    </>
  )
}

export default App
