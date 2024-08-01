import { Routes } from 'react-router'

import { Route } from 'react-router'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'

function App () {
  return (
    <div>
      <div className='bg-slate-900 '>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
