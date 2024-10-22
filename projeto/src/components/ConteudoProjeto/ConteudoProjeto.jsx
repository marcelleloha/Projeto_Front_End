import React from 'react';

function ConteudoProjeto({ titulo, imagem, texto }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <img src={imagem} alt={titulo} />
      <p>{texto}</p>
    </div>
  );
}

export default ConteudoProjeto;



