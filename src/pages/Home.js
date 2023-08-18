import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {BiTrash} from 'react-icons/bi'
import Swal from 'sweetalert2';
import './Home.css'

function Home() {

  const [alunos, setAluno] = useState([])

  useEffect(() => {
    loadAluno()
  })

  const loadAluno = async () => {
    const result = await axios.get("http://localhost:8080/aluno")
    setAluno(result.data)
  }



  return (
    
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nome</th>
              <th scope="col">Data de nascimento</th>
              <th scope="col">Rua</th>
              <th scope="col">Bairro</th>
              <th scope="col">Ações</th>
             
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {
              alunos.map((aluno, index) => (
                <tr>
                  <th scope="row" key={index}>{aluno.id}</th>
                  <td>{aluno.nome}</td>
                  <td>{aluno.datanascimento}</td>
                  <td>{aluno.endereco.rua}</td>
                  <td>{aluno.endereco.bairro}</td>
                  
                  <td>
                    <button className='btn btn-primary mx-2'>View</button>
                    <button className='btn btn-outline-primary mx-2'>Edit</button>
                    <button onClick={confirm} className='btn btn-danger mx-2' ><BiTrash/></button>
                    
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}




const confirm = () =>{
  Swal.fire({
    title: 'Tem certeza?',
    text: "você não poderá reverter esta ação!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d34',
    confirmButtonText: 'Sim, deletar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deletado!',
        'Registro deletado com sucesso.',
        'success'
      )
    }
  })
}  


export default Home;