# Boticario:
#### Teste: Desenvolvedor Front-end
Desenvolvido por [Getúlio Rafael Ferreira](https://gferreiraa.github.io/)

Front-end:

![React](https://img.shields.io/badge/React-16.13.1-blue)

Para este modelo de teste proposto, foi utilizado o React como biblioteca de desenvolvimento. No processo são abordados diversos conceitos que incluem ou não bibliotecas externas, um exemplo disso é a estrutura desenvolvida para a parte de autenticação de usuários que utiliza **Context API** e para a estrutura de cadastros usa-se o **Redux**.

A ideia foi buscar utilizar o minímo de recursos externos para compor a aplicação, deste modo toda parte de componetização é com [Styled Components](https://styled-components.com/) e [TailwindCSS](https://tailwindcss.com/) para recursos de suporte, como breakpoints. A UI foi desenvolvida com uma abordagem flat e princípios e conceitos básicos de Design UX.

### Recursos:

- Realização login para cadastro de novas compras tendo como retorno um valor para casback.
- Criação um novo cadastro junto a plataforma, informado dados básicos que usualmente são necessários neste modelo.
- Notificações de inclusão e remoção de novos produtos, permitindo um feedback dinâmmico ao usuário.
- Utilização de **API Rest Fake** com [Json-server](https://github.com/typicode/json-server), permitindo a inclusão e remoção de novas compras.

### Stack:

Para desenvolvimento foram utilizados: 
- React
- Redux
- React Router 
- Redux Thunk
- Styled Components
- Tailwind macro
- Sweet Alert 2
- React Transition Group
- Axios
- Json Server
- Moment
- Context API
- Git Flow

### Instalação:
Para instalar as dependências necessárias basta executar: 

```
yarn install
```

### Executando o projeto:
Para executar o projeto podemos inicialmente devemos iniciar nosso [Back-end](https://github.com/gferreiraa/boticario-test/blob/master/back-end/README.md), após isso executamos o comando para que a aplicação seja exibida em: http://localhost:3000/ 

```
yarn start
```

### Importante: 
Devemos navegar até a pasta raiz do nosso projeto Front-end e executar o comando abaixo para inicializar nossa **Fake Rest API**. Note que informamos a *porta 5000* aqui, pois por default o json-server executa na *porta 4000*, a qual estará rodando nosso Back-end. 

```
json-server db.json --watch --port 5000
```

## Documentação adicional:
- [React Redux](https://redux.js.org/basics/usage-with-react)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Styled Components](https://styled-components.com/)
- [Modelo Git Flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
