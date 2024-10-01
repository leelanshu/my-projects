import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' pt-4'>
       <Header/>
      <Navbar/> 
      {/* <SwipeCarousel/> */}
     </div>
    </>
  )
}

export default App
