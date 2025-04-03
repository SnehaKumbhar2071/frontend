import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/Landing/LandingPage'
import Home from './Pages/Donor_Dashboard/Donor_Dashboard'
import RequestPage from './Pages/RequestPage/RequestPage'
import Cart from './Pages/Cart/Cart'
import Donor_Dashboard from './Pages/Donor_Dashboard/Donor_Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <LandingPage/>  */}
   {/* <Home/> */}
   {/* <RequestPage/> */}
   {/* <Booklisst/> */}
   {/* <Cart/> */}
   <Donor_Dashboard/>

   </>
  )
}

export default App
