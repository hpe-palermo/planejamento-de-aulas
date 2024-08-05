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

  const [tasks, setTasks] = useState([
    { task: 'Revisar Álgebra', discipline: 'Matemática', date: '2024-08-09', status: 'Concluído' },
    { task: 'Implementar Modelo Relacional', discipline: 'Banco de Dados', date: '2024-08-10', status: 'Pendente' },
    { task: 'Desenvolver Classe Abstrata', discipline: 'POO', date: '2024-08-11', status: 'Em Progresso' },
    { task: 'Configurar Autenticação', discipline: 'Django', date: '2024-08-12', status: 'Pendente' },
    { task: 'Resolver Exercícios de Cálculo', discipline: 'Matemática', date: '2024-08-13', status: 'Concluído' },
    { task: 'Otimizar Consultas SQL', discipline: 'Banco de Dados', date: '2024-08-14', status: 'Pendente' },
    { task: 'Implementar Herança e Polimorfismo', discipline: 'POO', date: '2024-08-15', status: 'Pendente' },
    { task: 'Desenvolver API com DRF', discipline: 'Django', date: '2024-08-16', status: 'Pendente' },
    { task: 'Estudar Geometria', discipline: 'Matemática', date: '2024-08-17', status: 'Concluído' },
    { task: 'Configurar Backup do Banco', discipline: 'Banco de Dados', date: '2024-08-18', status: 'Pendente' },
    { task: 'Aplicar Padrões de Design', discipline: 'POO', date: '2024-08-19', status: 'Em Progresso' },
    { task: 'Configurar Middleware', discipline: 'Django', date: '2024-08-20', status: 'Pendente' },
  ]);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [sidebarActive, setSidebarActive] = useState(false);
  const [modalDisciplineActive, setModalDisciplineActive] = useState(false);
  const [modalTasksActive, setModalTasksActive] = useState(false);

  const toggleModalTasks = () => {
    setModalTasksActive(!modalTasksActive);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home modalTasksActive={modalTasksActive} toggleModalTasks={toggleModalTasks} sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} modalDisciplineActive={modalDisciplineActive} disciplines={disciplines} setDisciplines={setDisciplines} tasks={tasks} setTasks={setTasks} />}></Route>
          <Route path="/disciplines/:id" element={<Discipline disciplines={disciplines} setDisciplines={setDisciplines} tasks={tasks} setTasks={setTasks} toggleModalTasks={toggleModalTasks} modalTasksActive={modalTasksActive} sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} modalDisciplineActive={modalDisciplineActive} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
