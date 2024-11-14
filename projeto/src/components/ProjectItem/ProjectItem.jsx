
import React from 'react';

const ProjectItem = ({ projeto, onDelete }) => {
  return (
    <tr>
      <td>{projeto.titulo}</td>
      <td>{projeto.unidade}</td>
      <td>{projeto.periodo}</td>
      <td>
        <button onClick={() => alert(`Editando: ${projeto.id}`)}>Editar</button>
        <button onClick={() => onDelete(projeto.id)}>Deletar</button>
      </td>
    </tr>
  );
};

export default ProjectItem;
