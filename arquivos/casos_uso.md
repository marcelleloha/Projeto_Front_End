# Casos de Uso
- Visualizar listagem dos projetos;
    - Atores: Alunos, professores, contratantes, usuários gerais.
    - Pré-condição:
        - Entrar no sistema pelo site do ibmec.
    - Fluxo principal:
        - Usuário na página principal
        - Usuário usa o scroll do mouse ou o touch do telefone para ver os projetos abaixo
        - Usuário não achou o projeto que desejava, ele vai usar o sistema de paginação para ver mais 20 projetos
    - Pós-condição:
        - Usuário conseguir achar o projeto desejado e acessar o mesmo.
- Ver descrição de projetos;
    - Atores: Alunos, professores, contratantes, usuários gerais.
    - Pré-condição:
        - Entrar na sistema pelo site do ibmec.
    - Fluxo principal:
        - Usuário clica no elemento que terá o nome e a imagem do projeto.
        - Usuário acessa a página do projeto
        - Usuário lê a descrição detalhada do projeto
    - Pós-condição:
        - O sistema irá abrir uma nova página para que o usuário consiga visualizar mais detalhes sobre o projeto em questão.
- Administrador logado;
    - Atores: Administrador
    - Pré-condição:
        - ter inserido os dados de login (email e senha) do administrador
    - Fluxo principal:
        - Adiministrador entra no link ou no botão dedicado para o login do  mesmo 
        - Administrador insere os dados de acesso na página de login
        - Administrador clica no botão de login
    - Pós-condição:
        - O sistema irá abrir uma nova página que irá conter as opções adicionar projeto, editar projetos e deletear projetos.
- Editar projetos;
    - Atores: administrador
    - Pré-condição:
        - O administrador deve estar logado e deverá ter clicado no botão editar projetos na páginas opções.
    - Fluxo principal:
        - O adiministrador clica no botão para acessar a parte de gerenciamento de projetos
        - O adiministrador acessa o projeto que deseja editar
        - O adiministrador clica no botão de editar o projeto
        - O adiministrador edita as informações do projeto podendo ser título, descrição, imagem e tecnologia usada
    - Pós-condição:
        - O sistema irá atualizar o projeto selecionado pelo administrador na visualização do usuário.  
- Adicionar projetos;
    - Atores: Administrador
    - Pré-condição:
        - O admnistrador deve estar logado e deverá ter clicado no botão adicionar projetos na páginas de opções.
    - Fluxo Principal:
        - O adiministrador está logado na página de admin
        - O adiministrador clica no botão de adicionar projeto
        - O adiministrador preenche as informações para adicionar projetos
        - O projeto é adicionado
    - Pós-condição: O sistema atualizará a lista de projetos e adicionará um novo projeto para visualização do usuário.
- Deletar projetos;
    - Atores: Administrador
    - Pré-condição:
        - O administrador clica no botão de deletar projeto para abrir a página da lista de projetos já cadastrados e remove o projeto do sistema depois concordar com a confirmar a remoção do projeto.
    - Fluxo Principal
        - O adiministrador está logado na página de admin
        - O adiministrador clica no botão de deletar projeto
        - O adiministrador confirma que quer deletar um projeto
        - O projeto é deletado
   - Pós-condição:
       - O projeto é removido da listagem de projetos para a visualização do usuário.
- Filtrar pesquisa;
    - Atores: Usuários Gerais, Alunos, Professores e Contratantes
    - Pré-condição:
      -  Clicar no botão de filtros.
    - Fluxo Principal:
        - O usuário está na página principal da plataforma
        - O usuário clica no botão de filtro
        - O usuário clica na opção de filtro que deseja
        - O conteúdo é filtradoo
    - Pós-condição:
        -  O sistema limitará a lista de projetos de acordo com o filtro escolhido pelo usuário.
- Pesquisar projetos;
    - Atores: Professores, Contratantes, Usuários Gerais e Professores
    - Pré-condição:
        - Acessar a barra pesquisa na página inicial
    - Fluxo principal:
        - O usuário clica na barra de pesquisa
        - O Usuário digita a palavra chave
        - O Usuário confirma a pesquisa
    - Pós-condição:
        - O sistema irá exibir para o usuário tudo que contém os dados da busca.   
- Entrar na parte administrativa.
    - Atores: Administradores
    - Pré-condição:
        - Entrar no link de administrador ou clicar no botão de login.
    - Fluxo principal:
        - O administrador entra clica no botão de login no footer
        - O administrador vai inserir os dados de login
        - O administrador clica no botão de login
    - Pós-condição:
        -  O sistema abrirá a página de login
