# Sistema de Login e Lista de Tarefas

Este é um exemplo de um sistema de login e uma lista de tarefas desenvolvido com HTML, CSS e JavaScript. O sistema consiste em duas páginas: `login.html` para autenticação de usuário e redirecionamento para a página de lista de tarefas, e `to-do.html` para gerenciar uma lista de afazeres.

## Instruções de Uso

### Página de Login (`login.html`)

A página de login permite que os usuários façam login em suas contas. Para acessar a página de lista de tarefas, siga as instruções abaixo:

1. Preencha os campos "Usuário" e "Senha" com as informações corretas. Como ainda não incrementei banco de dados nesse projeto, por padrão, o usuário e a senha são ambos "admin".
2. Clique no botão "Entrar" para fazer login.

Se as informações de login estiverem corretas, você será redirecionado para a página de lista de tarefas (`to-do.html`). Caso contrário, uma mensagem de erro será exibida.

### Página de Lista de Tarefas (`to-do.html`)

A página de lista de tarefas permite que você gerencie uma lista de afazeres. Como o foco é a página de login em si, algumas funções ainda não estão disponível. Você pode realizar as seguintes ações:

- Marcar tarefas como concluídas, clicando na caixa de seleção ao lado de cada tarefa.
- Editar uma tarefa, clicando no botão "Editar" ao lado da tarefa desejada. (Ainda não funcional)
- Excluir uma tarefa, clicando no botão "Excluir" ao lado da tarefa desejada. (Ainda não funcional)
- Adicionar novas tarefas, clicando no botão "Adicionar Item" no topo da lista. (Ainda não funcional)

## Estrutura de Pastas

O projeto está organizado da seguinte maneira:

* assets/ # Recursos como imagens, estilos CSS e scripts JavaScript.
   * css/ # Arquivos CSS para estilizar as páginas.
   * images/ # Imagens usadas nas páginas.
   * js/ # Scripts JavaScript utilizados nas páginas.
* login.html # Página de login.
* to-do.html # Página de lista de tarefas.
* README.md # Este arquivo de documentação.

## Detalhes de Implementação

### Estilos

Os estilos das páginas foram estilizados usando CSS personalizado e a biblioteca Bootstrap para criar uma interface agradável.

### Página de Login (`login.html`)

A página de login possui campos para inserção de nome de usuário e senha. A autenticação é realizada no arquivo JavaScript `script.js`, onde as informações são verificadas. O redirecionamento para a página de lista de tarefas é feito caso as credenciais sejam corretas.

### Página de Lista de Tarefas (`to-do.html`)

A página de lista de tarefas exibe uma lista de afazeres que podem ser marcados como concluídos, editados ou excluídos. A interação com a lista é possível graças ao JavaScript incluído no arquivo `script.js`.

## Créditos

Este projeto foi desenvolvido por [SamSantos](http://samsantos.com.br). :globe_with_meridians:
- :arrow_right: [Instagram](https://www.instagram.com/samuelanacletosantos/)
- :arrow_right: [LinkedIn](https://www.linkedin.com/in/samuel-santos-784b18177/)
- :arrow_right: [GitHub](https://github.com/SamuelASantos/)

---

Sinta-se à vontade para utilizar este projeto como ponto de partida para suas próprias implementações ou para aprendizado. Se tiver alguma dúvida ou sugestão de melhoria, não hesite em entrar em contato com o desenvolvedor, [SamSantos](http://samsantos.com.br).
