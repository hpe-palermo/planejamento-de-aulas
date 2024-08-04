import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Discipline from './Pages/Discipline';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {

  const [disciplines, setDisciplines] = useState([
    {
      name: 'Matemática',
      creditHours: 60,
      daysOfWeek: ['Monday', 'Wednesday', 'Friday'],
      contents: [
        'Linear Algebra',
        'Analytic Geometry',
        'Differential and Integral Calculus',
        'Statistics and Probability'
      ]
    },
    {
      name: 'Banco de Dados',
      creditHours: 45,
      daysOfWeek: ['Tuesday', 'Thursday'],
      contents: [
        'Data Modeling',
        'Advanced SQL',
        'Procedures and Functions',
        'Query Optimization'
      ]
    },
    {
      name: 'POO',
      creditHours: 30,
      daysOfWeek: ['Wednesday', 'Friday'],
      contents: [
        'Fundamentals of Object-Oriented Programming',
        'Classes and Objects',
        'Inheritance and Polymorphism',
        'Design Patterns'
      ]
    },
    {
      name: 'Django',
      creditHours: 40,
      daysOfWeek: ['Tuesday', 'Thursday'],
      contents: [
        'Introduction to Django',
        'Models and Migrations',
        'Views and Templates',
        'Authentication and Permissions'
      ]
    }
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home disciplines={disciplines} setDisciplines={setDisciplines} />}></Route>
          <Route path="/disciplines/:id" element={<Discipline disciplines={disciplines} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
