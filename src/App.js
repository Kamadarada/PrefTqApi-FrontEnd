import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddAluno from './Alunos/AddAluno';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cadastroaluno" element={<AddAluno/>}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;