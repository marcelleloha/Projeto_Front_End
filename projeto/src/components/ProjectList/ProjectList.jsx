// src/components/ProjectList.js

import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';

const ProjectList = ({ projetos, onDelete }) => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Unidade</th>
              <th>Período</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {projetos.map((projeto) => (
              <ProjectItem
                key={projeto.id}
                projeto={projeto}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ProjectList;