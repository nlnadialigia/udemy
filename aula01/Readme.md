<p align="center"><img src="../assets/logo.png" width=200></p>
<h3 align="center">NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID</h3>
<h2 align="center">Configurando as dependências</h2>

---

<p align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/nlnadialigia/udemy" />

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/nlnadialigia/udemy"/>
   
  <a href="./license.md">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-informational"/>
  </a>
</p>

---

<p align="center">
  <a href="#-information_source-sobre-a-aula">Sobre</a> •
  <a href="#-open_file_folder-tópicos">Tópicos</a> • 
  <a href="#-woman_office_worker-autora">Autora</a> • 
  <a href="#-pencil-licença">Licença</a>
</p>
<br>

# ℹ️ Sobre o projeto 

Configuração do projeto ministrado no curso para padronização dos commits, código e testes.

<br>

# 📂 Tópicos

## 📌 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Modelo de commit a ser utilizado

- `<type>` e `<description>`

### Types utilizados

- `fix` - bug fix
- `feat` - feature nova
- `build`
- `chore` - adicionar nova configuração, setup, biblioteca
- `refactor`
- `test` - teste unitário

## 📌 [Commit Linter](https://www.npmjs.com/package/git-commit-msg-linter)

- Biblioteca que vai garantir o formato que foi definido
- Validar se o commit está sendo colocado nos padrões definidos

## 📌 [Typescritp](https://www.typescriptlang.org)

- Linguagem compilada
- Javascrip tipado
- Permite a utilização de funções que estão em teste no javascript
- Verificar o suporte ECMA X Node: [node green](https://node.green)

### Configuração arquivo `tsconfig.json`
```json
{
  "compilerOptions": {
    "outDir": "./dist", //onde os arquivos serão gerados
    "module": "CommonJS", //quando da geração do aquivo js será gerado na versão que os browsers entendem
    "target": "es2020", //qual versão será gerado o js
    "esModuleInterop": true, // conversão do commonjs
    "allowJs": true //arquivos de configuração no formato js
  }
}
```

## 📌 [Javascript Standard Style](https://standardjs.com)

- Padrão do javascript
- Para que o projeto funcione em Typescript será necessária a utilização do [eslint-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
```bash
yarn add -D eslint@7 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@4 eslint-config-standard-with-typescript
```
- Habilitar somente para esse workspace a extensão `eslint` do vscode.

### Configuração do arquivo `.eslintrc.json`

```json
{
  "extends": "standard-with-typescript",
  "parserOptions": {
    "project": "/tsconfig.json"
  }
}
```

## 📌 [Husk](https://www.npmjs.com/package/husky)

- Permite a definição de hooks para o git
- Será utilizado juntamente com a biblioteca [lint-staged](https://github.com/okonet/lint-staged), que permite sejam rodados scripts somente nos arquivos que estejam na `stage area` - arquivos que foram alterados e serão comitados.

### Configuração do arquivo `.huskyrc.json`

```json
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

### Configuração do arquivo `.lintstagedrc.json`

```json
{
  ".*ts": [
    "eslint 'src/**' --fix",
    "git add"
  ]
}
```

## 📌 [Jest](https://jestjs.io)

- Biblioteca de testes

- Instalar: `yarn add -D jest @types/jest ts-jest`

- Iniciar o jest: `jest --init`

### Configuração do arquivo `jest.config.js`
```js
export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};
```
<br>

# 👩‍💼 Autora

 <img style="border-radius: 50%;" src="../assets/picture.jpg" width="100px;" alt="Picture"/>
 <p><b>Nádia Ligia</b></p>

 [![Linkedin Badge](https://img.shields.io/badge/-nlnadialigia-blueviolet?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/)](https://www.linkedin.com/in/nlnadialigia/) 
[![Gmail Badge](https://img.shields.io/badge/-nlnadialigia@gmail.com-blueviolet?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com)](mailto:nlnadialigia@gmail.com)

<br>

# 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.
