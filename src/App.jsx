import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Home from './components/pages/Home'
import Register from './components/pages/Register'

function App() {
  

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center'>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
