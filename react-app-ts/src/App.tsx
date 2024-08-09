import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';  
import PageDiscipline from './Pages/PageDiscipline';
import PageNotFound from './Pages/PageNotFound';
import PageInfoClass from './Pages/PageInfoClass';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/disciplines/:id" element={<PageDiscipline />}></Route>
        <Route path="/class/:id" element={<PageInfoClass />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
