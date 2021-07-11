<h3>
  WebApp para estagiários apontarem hora de trabalho. (Back-End)
</h3>
<p>Projeto desenvolvido para o processo seletivo de Dev React na Sólides Tecnologia.</p>

<p >
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-detalhes-da-solução-proposta">Detalhes da solução proposta</a>
</p>

<p>
Demo da aplicação rodando no
<a href="https://www.heroku.com/home" target="_blank">Heroku</a>:
<p>
  <a href="https://solides-desafio-back.herokuapp.com/" target="_blank">
    https://solides-desafio-back.herokuapp.com/
    </p>
  </a>
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [express](https://expressjs.com/)
- [date-fns](https://date-fns.org/)
- [dotenv](https://github.com/motdotla/dotenv)
- [jsonwebtoken](https://jwt.io/)
- [mongoose](https://mongoosejs.com/)
- [yup](https://github.com/jquense/yup)

O Banco de dados utilizado para aplicação foi o MongoDB, usando a DBAAs MongoDB Atlas.

## :information_source: Como usar

Para clonar e executar esta aplicação, você precisará do [Git](https://git-scm.com), [Node.js v10.16][nodejs] ou superior + [Yarn v1.13][yarn] ou superior instalado no seu computador. Na sua linha de comando:

```bash

# Clone o repositório
$ git clone https://github.com/heberleonard2/desafio-solides-back

# Vá para o repositório
$ cd desafio-solides-back

# Instale as dependências
$ yarn install

# Rode o app
$ yarn dev
```

### Info

O Front-end da aplicação se encontra <a href="https://github.com/heberleonard2/desafio-solides-front">nesse link</a>.

## :information_source: Detalhes da solução proposta

### Descrição Geral

Back-end de um WebApp para estagiários apontarem hora de trabalho.

- SessionController -> Responsável pela autenticação dos usuários usando token JWT.

- UserController -> Responsável pela criação dos usuários

- WorkTimeController -> Responsável pela criação, listagem e remoção dos apontamentos.

---

Made by Héber Leonard :wave: [Get in touch!](https://www.linkedin.com/in/heber-leonard/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
