# Descrição dos requisitos funcionais
- O sistema deve listar os projetos;
    - O sistema deve apresentar uma listagem infinita de projetos por meio de paginação
    - O sistema deve agrupar a exibição dos projetos em colunas
        - 1 coluna em dispositivos móveis
        - 4 colunas em tablets
        - 6 colunas em telas de até 1200px
        - 8 colunas em telas maiores
- O sistema deve ter um sistema de paginação para exibir todos os projetos dos alunos;
    - O sitema deve apresentar a listagem infinita por meio de páginação agrupando 20 projetos por página
    - O sistema deve possuir o menu de paginação no final do grupo de 20 projetos
    - O menu de paginação terá o número de páginas necessárias para todos os projetos serem exibidos
- Ao clicar no projeto o sistema deve fornecer o detalhamento do mesmo / O sistema deve possuir a descrição dos projetos;
    - O elemento que representa o projeto em seu estado de exibição na página principal será clicável, como um botão
    - O sistema vai oferecer o detalhamento do projeto por meio de abertura de uma nova página com mais detalhes do mesmo após o cliente clicar no elemento do projeto
- O sistema deve possuir uma aba administrativa;
    - Deve haver uma aba de login específica para o admiministrador para que ele consiga efeturar as suas funções
    - Esse login será feio por meio de credenciais específicas
    - O botão de login não terá fácil acesso, pois só o administrador precisa saber como e onde encontrá-lo. Exceto ele, nenhum usuário precisa efetuar o login
    - O botão de login levará para uma página de login separada para que essa direcione o administrador para a página de gerenciamento do portifólio
- O sistema deve permitir a busca de projetos com filtros;
    - A busca de projetos funcionará por meio de filtros de seleção no banco de dados que vão retornar os projetos que atentem aos requisitos do filtro
    - Os filtros de seleção estarão localizados no inicio da página, para que o usuário tenha fácil acesso a essa ferramenta
    - As seleções serão feitas por
        - Filtro de tecnologia utilizada
        - Filtro para o curso que realizou o projeto
        - Filtro de Área do projeto
- O sistema deve permitir a busca de projetos com uma barra de pesquisa;
    - A busca de projetos funcionará por meio de uma barra de pesquisa onde será possível pesquiar por qualquer palavra chave que pode incluir na descrição, título, área ou tecnologia do projeto
    - Essa barra de pesquisa será localizada na parte inicial da página principal para que o cliente tenha fácil acesso à funcionalidade
- O sistema deve possuir um botão de limpar filtros;
    - O botao de limpar filtros será localizado ao lado do seletor de filtros, para que seja fácil para o cliente reiniciar a busca pelo projeto procurado
- O sistema deve possibilitar o administrador fazer alterações na descrição do projeto;
    - Na aba de administração, ao lado de todo projeto terá um botão de editar onde será possível ser direncionado à uma página para editar o projeto em questão
    - Dentro da página de edição do projeto, será possível alterar/adicionar imagens, descrição, nome dos integrantes, email dos integrantes e título do projeto
- O sistema deve autorizar somente o administrador a adicionar e fazer mudanças nos projetos e no portifólio;
    - O administrador e somente ele será liberado para acessar a página de edição dos projetos e do portifólio. Com o login/acesso único só ele terá acesso à essa página
- O sistema deve possuir o email dos integrantes do projeto;
    - Embaixo da descrição do projeto terá os emails dos integrantes que realizaram o projeto, para contato do possível contratante
- O sistema deve possuir a capacidade de mais de um idioma para possíveis usuários estrangeiros;
    - Por meio de um seletor de idioma no navbar do sistema o usuário conseguirá alterar o idioma da página

# Descrição dos requisitos não funcionais
- O sistema deve possuir a identidade visual do IBMEC;
    - O sistema deve possuir uma ambientação de cores baseadas nas cores do IBMEC
        - Cores a utilizar: Azul, amarelo, cinza e branco
- O sistema deve ser responsivo para todos os tipos de aparelhos;
    - O sistema deve funcionar em aparelhos mobiles e computadores
- O sistema será construído com um banco de dados não relacional como MongoDB.
    - Será utilizado um banco de dados não relacional por ele nos permitir mais flexibilidade na manipulação de dados, diferente do convencional
- O sistema possuirá opção de tradução do português para o inglês.
    - O sistema deve possuir a funcionalidade de mudação da linguagem para facilitar a visualização por possíveis estrangeiros
- O sistema deve exibir os projetos em ordem cronológica (do projeto mais novo publicado ao mais antigo) na página principal.
    - O sistema deve apresentar uma ordem cronológica de forma a facilitar a visualização de projetos mais recentes