# Projeto_Front_End

Grupo: Karaí

# Integrantes:

- Arthur Peixoto Schiller;
- Franc Wangcheng;
- Marcelle Lohane Gonçalves;
- Tiago Oliveira Macedo;
- Yuri Durra.

# Repositórios:

- Arthur Peixoto Schiller: https://github.com/Arthur-jpg/react-base-project;
- Franc Wangcheng: https://github.com/FRANCWANG/react-base-project;
- Marcelle Lohane Gonçalves: https://github.com/marcelleloha/react-base-project;
- Tiago Oliveira Macedo: https://github.com/tiagoprog/react-base-project;
- Yuri Durra: https://github.com/ydurra/react-base-project.
    
# Propósitos:

Disponibilizar um portifólio de projetos realizados 
por alunos do IBMEC para que futuros contratantes 
possam observa-los de forma atrativa.

# 5W2H:
- What (O quê):
Sistema para a exibição e visualização de projetos efetuados por alunos do ibmec.
- Why (Por quê):
Facilitar a visualização de projetos feitos por alunos do ibmec por futuros contratantes.
- Where (Onde):
O sistema será desenvolvido na web onde será possível acessar pelo telefone ou pelo computador.
- When (Quando):
O sistema será usado em situações futuras que o aluno deseje mostrar os seus projetos para um contratante ou quando um futuro aluno da faculdade IBMEC queira ver os exemplos de projetos que serão desenvolvidos no decorrer do curso.
- Who (Quem):
Futuros usuários, sendo eles: alunos do ibmec, contratantes, futuros alunos do ibmec e professores.
- How (Como):
Por meio da organização de um portifólio de projetos de alunos no IBMEC.
- How Much (Quanto):
O tempo e o esforço dedicados para o desenvolvimento do sistema.

# Requisitos funcionais:
- O sistema deve listar os projetos;
- O sistema deve ter um sistema de paginação para exibir todos os projetos dos alunos;
- Ao clicar no projeto o sistema deve fornecer o detalhamento do mesmo;
- O sistema deve possuir uma aba administrativa;
- O sistema deve permitir a busca de projetos com filtros;
- O sistema deve permitir a busca de projetos com uma barra de pesquisa;
- O sistema deve possuir um botão de limpar filtros;
- O sistema deve possuir a descrição dos projetos;
- O sistema deve possibilitar o administrador fazer alterações na descrição do projeto;
- O sistema deve autorizar somente o administrador a adicionar e fazer mudanças nos projetos e no portifólio;
- O sistema deve possuir o email dos integrantes do projeto;
- O sistema deve possuir a capacidade de mais de um idioma para possíveis usuários estrangeiros;
- Após retornar do acesso a um projeto o sistema deve retornar para a página que estava anteriormente;

# Requisitos não funcionais:
- O sistema deve possuir a identidade visual do IBMEC;
- O sistema deve ser responsivo para todos os tipos de aparelhos;
- O sistema será construído com um banco de dados não relacional como MongoDB.

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
- Ao clicar no projeto o sistema deve fornecer o detalhamento do mesmo;
    - O sistema vai oferecer o detalhamento do projeto por meio de abertura de uma nova página com mais detalhes do mesmo
- O sistema deve possuir uma aba administrativa;
    - Deve haver uma aba de login específica para o admiministrador para que ele consiga efeturar as suas funções
    - Esse login será feio por meio de credenciais específicas
    - O botão de login não terá fácil acesso, pois só o administrador precisa saber como e onde encontrá-lo. Exceto ele, nenhum usuário precisa efetuar o login
- O sistema deve permitir a busca de projetos com filtros;
    - A busca de projetos por meio de filtros funcionará por meio de filtros de seleção no banco de dados que vão retornar os projetos que atentem aos requisitos do filtro
- O sistema deve permitir a busca de projetos com uma barra de pesquisa;




