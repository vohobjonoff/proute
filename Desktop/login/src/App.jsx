import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  const [login, setLogin] = useState(false);
  const [signedIn, setIsSignedIn] = useState(null);

  const signin = () => {
    setIsSignedIn(true)
  }

  const signOut = () => {
    setIsSignedIn(false);
  }


  return (
    <>
      <BrowserRouter>
        <Navbar login={login} setLogin={setLogin} />
        {login && <Login />}
        
        {signedIn ? (
          <div >
            <button  onClick={signOut}>
              Sign out
            </button>
          </div>
        ) : (
          <div >
            <button onClick={signin}>
              Sign in
            </button>
          </div>
        )}

        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={
            <ProtectedRoute signedIn={signedIn} >
              <Contact />
            </ProtectedRoute>
          } />
        
          <Route path='*' element={<Error />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
