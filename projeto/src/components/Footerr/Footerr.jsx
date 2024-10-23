import React from 'react'
import { Fot } from './Style'
import { Link } from 'react-router-dom'



function Footerr() {
  return (
    <Fot>
        <h2>Links Úteis</h2>

        
        <Link to="/" className='links'>Home</Link>
        <Link to="/" className='links'>Projetos</Link>
        <Link to="/sobrenos" className='links'>Sobre o Projeto</Link>
        <Link to="/login" className='links'>login</Link>

    
    </Fot>
  )
}

export default Footerr