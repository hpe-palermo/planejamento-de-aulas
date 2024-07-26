import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/cadastro' element={<Cadastro />}/>
      <Route path='/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
