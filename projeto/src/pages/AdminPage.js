// src/components/AdminPage.js

import React, { useState, useEffect } from 'react';
import { db } from '../config/Firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import ProjectList from '../components/ProjectList/ProjectList';
import ProjectForm from '../components/ProjectForm/ProjectForm';

const AdminPage = () => {
    const [projetos, setProjetos] = useState([]);
    const [showForm, setShowForm] = useState(false);
  
    // Função para carregar os projetos do Firestore
    const fetchProjetos = async () => {
      try {
        const projetosCollection = collection(db, 'projetos');
        const projetosSnapshot = await getDocs(projetosCollection);
        const projetosList = projetosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjetos(projetosList);
      } catch (error) {
        console.error("Erro ao buscar projetos: ", error);
      }
    };
  
    // Função para deletar um projeto
    const handleDelete = async (id) => {
      try {
        const projetoDoc = doc(db, 'projetos', id);
        await deleteDoc(projetoDoc);
        fetchProjetos(); // Recarrega os projetos após exclusão
      } catch (error) {
        console.error("Erro ao deletar projeto: ", error);
      }
    };
  
    // Função para adicionar um novo projeto
    const handleAdd = async (newProjeto) => {
      try {
        await addDoc(collection(db, 'projetos'), newProjeto); // Adiciona o novo projeto ao Firestore
        fetchProjetos(); // Recarrega os projetos após adicionar um novo
        setShowForm(false); // Fecha o formulário
      } catch (error) {
        console.error("Erro ao adicionar projeto: ", error);
      }
    };
  
    useEffect(() => {
      fetchProjetos();
    }, []);
  
    return (
      <div>
        <button onClick={() => setShowForm(true)}>Adicionar Novo Projeto</button>
        {showForm && <ProjectForm onAdd={handleAdd} onClose={() => setShowForm(false)} />}
        <h2>Lista de Projetos</h2>
        <ProjectList projetos={projetos} onDelete={handleDelete} />
      </div>
    );
  };
  
  export default AdminPage;