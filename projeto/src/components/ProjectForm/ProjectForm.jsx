import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/Firebase';

const ProjectForm = ({ setShowForm }) => {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [imagem, setImagem] = useState('');
  const [tecnologias, setTecnologias] = useState('');
  const [unidade, setUnidade] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [data, setData] = useState('');
  const [dec, setDec] = useState('');
  const [paragrafo, setParagrafo] = useState('');
  const [integrantes, setIntegrantes] = useState([{ nome: '', email: '', curso: '', periodo: '' }]);
  const [professores, setProfessores] = useState([{ nome: '', email: '', curso: '', periodo: '' }]);

  const handleChangeIntegrante = (index, field, value) => {
    const updatedIntegrantes = [...integrantes];
    updatedIntegrantes[index][field] = value;
    setIntegrantes(updatedIntegrantes);
  };

  const handleAddIntegrante = () => {
    setIntegrantes([...integrantes, { nome: '', email: '', curso: '', periodo: '' }]);
  };

  const handleRemoveIntegrante = (index) => {
    const updatedIntegrantes = [...integrantes];
    updatedIntegrantes.splice(index, 1);
    setIntegrantes(updatedIntegrantes);
  };

  const handleChangeProfessor = (index, field, value) => {
    const updatedProfessores = [...professores];
    updatedProfessores[index][field] = value;
    setProfessores(updatedProfessores);
  };

  const handleAddProfessor = () => {
    setProfessores([...professores, { nome: '', email: '', curso: '', periodo: '' }]);
  };

  const handleRemoveProfessor = (index) => {
    const updatedProfessores = [...professores];
    updatedProfessores.splice(index, 1);
    setProfessores(updatedProfessores);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newProject = {
      titulo,
      texto,
      imagem,
      tecnologias,
      unidade,
      periodo,
      data,
      dec,
      paragrafo,
      integrantes,
      professores,
    };

    try {
      await addDoc(collection(db, 'projetos'), newProject);
      alert('Projeto adicionado com sucesso!');
      setShowForm(false); // Fecha o formulário após adicionar o projeto
    } catch (error) {
      console.error('Erro ao adicionar projeto:', error);
    }
  };

  // Função para cancelar o formulário
  const handleCancel = () => {
    setShowForm(false); // Fecha o formulário sem salvar nada
  };

  return (
    <div>
      <h2>Adicionar Projeto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        <textarea placeholder="Descrição" value={texto} onChange={(e) => setTexto(e.target.value)} required />
        <input type="text" placeholder="Imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} required />
        <input type="text" placeholder="Tecnologias" value={tecnologias} onChange={(e) => setTecnologias(e.target.value)} required />
        <input type="text" placeholder="Unidade" value={unidade} onChange={(e) => setUnidade(e.target.value)} required />
        <input type="text" placeholder="Período" value={periodo} onChange={(e) => setPeriodo(e.target.value)} required />
        <input type="text" placeholder="Data" value={data} onChange={(e) => setData(e.target.value)} required />
        <textarea placeholder="Descrição do Desenvolvimento" value={dec} onChange={(e) => setDec(e.target.value)} required />
        <textarea placeholder="Detalhes do Projeto" value={paragrafo} onChange={(e) => setParagrafo(e.target.value)} required />
        
        {/* Integrantes */}
        <h3>Integrantes</h3>
        {integrantes.map((integrante, index) => (
          <div key={index}>
            <input 
              type="text" 
              placeholder="Nome" 
              value={integrante.nome} 
              onChange={(e) => handleChangeIntegrante(index, 'nome', e.target.value)} 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={integrante.email} 
              onChange={(e) => handleChangeIntegrante(index, 'email', e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Curso" 
              value={integrante.curso} 
              onChange={(e) => handleChangeIntegrante(index, 'curso', e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Período" 
              value={integrante.periodo} 
              onChange={(e) => handleChangeIntegrante(index, 'periodo', e.target.value)} 
              required 
            />
            <button type="button" onClick={() => handleRemoveIntegrante(index)}>Remover Integrante</button>
          </div>
        ))}
        <button type="button" onClick={handleAddIntegrante}>Adicionar Integrante</button>

        {/* Professores */}
        <h3>Professores</h3>
        {professores.map((professor, index) => (
          <div key={index}>
            <input 
              type="text" 
              placeholder="Nome" 
              value={professor.nome} 
              onChange={(e) => handleChangeProfessor(index, 'nome', e.target.value)} 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={professor.email} 
              onChange={(e) => handleChangeProfessor(index, 'email', e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Curso" 
              value={professor.curso} 
              onChange={(e) => handleChangeProfessor(index, 'curso', e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Período" 
              value={professor.periodo} 
              onChange={(e) => handleChangeProfessor(index, 'periodo', e.target.value)} 
              required 
            />
            <button type="button" onClick={() => handleRemoveProfessor(index)}>Remover Professor</button>
          </div>
        ))}
        <button type="button" onClick={handleAddProfessor}>Adicionar Professor</button>

        <button type="submit">Adicionar Projeto</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default ProjectForm;
