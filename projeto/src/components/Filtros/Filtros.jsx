import React from 'react'
import { Container, Container2 } from './Style'
import Select from 'react-select'
import { FaSearch } from 'react-icons/fa'

const options1 = [
  {value: 'React', label: 'React'},
  {value: 'Node', label: 'Node'},
  {value: 'TailwindCss', label: 'TailwindCss'},
  {value: 'Mongoose', label: 'Mongoose'},

]
const options2 = [
  {value: 'Rio-Barra', label: 'Rio-Barra'},
  {value: 'Rio-Centro', label: 'Rio-Centro'},
  {value: 'Belo Horizonte', label: 'Belo Horizonte'},
  {value: 'São Paulo', label: 'São Paulo'},
  {value: 'Brasilia', label: 'Brasilia'},

]
const options3 = [


]
const options4 = [
  {value: '2022.1', label: '2022.1'},
  {value: '2022.2', label: '2022.2'},
  {value: '2023.1', label: '2023.1'},
  {value: '2023.2', label: '2023.2'},
  {value: '2024.1', label: '2024.1'},
  {value: '2024.2', label: '2024.2'},

]


function Filtros() {
  return (
    <>
    <Container>
      <Select options={options1} placeholder='Tecnologia' className='select'/>
      <Select options={options2} placeholder='Unidade' className='select'/>
      <Select options={options3} placeholder='Data' className='select'/>
      <Select options={options4} placeholder='Período' className='select'/>
    </Container>
    <Container2>
      <div id='parteBaixo'>
        <h1>Projetos</h1>
        <div id='inputWraper'>
          <FaSearch id='iconeDePesquisa'/>
          <input placeholder='Pesquise Aqui'/>
          
        </div>
      </div>
    
    </Container2>
    </>
  )
}

export default Filtros