import React, { useState } from 'react'

function AddAluno() {

  const [aluno, setAluno] = useState({
    nome: "",
    datanascimento: "",
    portador: "",
    endereco: {
      rua: "",
      bairro: "",
      cidade: "",
      numero: ""
    }

  })

  const OnInputChange = (e) => {
    setAluno({aluno, [e.target.nome]: e.target.value })
  }


  const { nome, datanascimento, portador,endereco:{rua,bairro,cidade,numero}} = aluno
 

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Cadastro de aluno</h2>
          <div className='mb-3'>
            <label htmlFor='nome' className='form-label'>Nome</label>
            <input type={"text"} className='form-control' placeholder='Insira o nome do aluno' name="nome" value={nome} onChange={(e) => OnInputChange(e)} />
          </div>

          <div className='mb-3'>
            <label htmlFor='datanascimento' className='form-label'>Data de nascimento</label>
            <input type={"text"} className='form-control' placeholder='Insira data de nascimento' name="datanascimento" value={datanascimento} onChange={(e) => OnInputChange(e)} />
          </div>

          <div className='mb-3'>
            <label htmlFor='portador' className='form-label'>Deficiência</label>
            <input type={"text"} className='form-control' placeholder='Insira a deficiência do aluno' name="portador" value={portador} onChange={(e) => OnInputChange(e)} />
          </div>

          <div className='mb-3'>
            <label htmlFor='rua' className='form-label'>Rua</label>
            <input type={"text"} className='form-control' placeholder='Insira a rua' name="rua" value={rua} onChange={(e) => OnInputChange(e)} />
          </div>

          <div className='mb-3'>
            <label htmlFor='bairro' className='form-label'>Bairro</label>
            <input type={"text"} className='form-control' placeholder='Insira o bairro' name="bairro" value={bairro} onChange={(e) => OnInputChange(e)} />
          </div>

          <div className='mb-3'>
            <label htmlFor='cidade' className='form-label'>Cidade</label>
            <input type={"text"} className='form-control' placeholder='Insira a cidade' name="cidade" value={cidade} onChange={(e) => OnInputChange(e)} />
          </div>

          <div className='mb-3'>
            <label htmlFor='numero' className='form-label'>Número</label>
            <input type={"text"} className='form-control' placeholder='Insira o número' name="numero" value={numero} onChange={(e) => OnInputChange(e)} />
          </div>


          <button type='submit' className='btn btn-outline-primary'>Cadastrar</button>
          <button type='submit' className='btn btn-outline-danger mx-2'>Cancelar</button>


        </div>
      </div>

    </div>
  )
}


export default AddAluno;