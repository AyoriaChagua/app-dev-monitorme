import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <div className= 'h-screen  flex'>
      <AuthProvider>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
