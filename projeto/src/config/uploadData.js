const { db } = require('./Firebase');
const { collection, addDoc } = require('firebase/firestore');
const dadosOriginais = require('../data/teste.json'); // Usando require para importar o JSON

 
// Função para fazer o upload dos dados para uma coleção no Firestore
const uploadData = async () => {
  try {
    const collectionRef = collection(db, 'projetos'); // Cria referência para a coleção "projetos"
    for (const item of dadosOriginais) {
      await addDoc(collectionRef, item);
      console.log('Documento adicionado:', item);
    }
  } catch (error) {
    console.error('Erro ao fazer upload dos dados:', error);
  }
};

// Executa a função de upload de dados
uploadData();
