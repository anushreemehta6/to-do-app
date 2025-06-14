import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import './componets/navbar.css'
import Task from './componets/Task'

function App() {
  

  return (
    <>
    <div className="box ">
      <Navbar/>
    <Task/>
    </div>
    
    </>
  )
}

export default App
