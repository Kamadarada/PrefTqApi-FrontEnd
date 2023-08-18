import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand  " href="#">RGA - Registro geral do aluno</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <Link className='btn btn-outline-light' to="/cadastroaluno">Cadastrar aluno</Link>

  </div>
</nav>
  )
}


export default Navbar;