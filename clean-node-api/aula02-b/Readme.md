<p align="center"><img src="../../assets/logo.png" width=200></p>
<h3 align="center">NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID</h3>

---

<p align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/nlnadialigia/udemy?color=91091e" />

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/nlnadialigia/udemy?color=91091e"/>
   
  <a href="./license.md">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-informational?color=91091e"/>
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

# ℹ️ Sobre a aula

<h3>Utilizando Mocks de maneira correta e </h3>
<h3>Testando exceções e integrando com o EmailValidator</h3>
<br>

# 📂 Tópicos

## ℹ️ Definição
<br>

O termo `Mock Objects` é utilizado para descrever um caso especial de objetos que imitam objetos reais para teste. Os objetos de teste (chamados de test doubles, em inglês) dividem em três categorias principais: os `spies`, os `stubs` e os `mocks` propriamente ditos.

### 📌 Spy

Spy é uma denominação dada a um objeto que grava suas interações com outros objetos. Eles particularmente úteis para testar callbacks, visto que temos propriedades que assumem valores true, false e outros de acordo com a chamada.

### 📌 Stub

Um stub é uma evolução de um spy. Em suma, um stub é um objeto com um comportamento fixo e previsível.

Estes objetos são utilizados principalmente em dois casos:
- Evitar alguma interface desnecessária com alguma dependência;
- Alimentar o sistema com dados conhecidos. Então podemos forçar um determinado caminho.

## 📌 Mocks

Mocks são a evolução dos stubs, pois não substituem um único método, mas sim uma classe toda, mas somente implementa o método escolhido.

<br>

## 📂 signup.spec.ts
<br>

✔️ Mover a variável `sut` para que seja lida globalmente
```ts
const makeSut = (): SignUpController => {
  return new SignUpController()
}
```
<br>

✔️ Refatorar o teste para utilização do `makeSut`

💾 Comitar

<br>

✔️ **Validação do email**
- será feito fora do SignupController, para que possa ser utilizado sempre que necessário, sem duplicação de código

- passar todos os parâmetros para que a validação não caia em nenhum dos testes anteriores

- criar o erro `InvalidParams`

- como o SignupController não vai validar email, será necessário injetar uma dependência de alguém que saiba validar email => injetar no `makeSut` um `emailValidator`
```ts
const makeSut = (): SignUpController => {
  class EmailValidatorStub {
    isValid (email: string): boolean {
      return true
    }
  }
  const emailValidatorStub = new EmailValidatorStub()
  return new SignUpController(emailValidatorStub)
}
```
- na produção, criar uma intereface para o `emailValidator`, dentro da pasta `protocol` => `email-validator.ts`

<br>

## 📂 email-validator.ts

```ts
export interface EmailValidator {
  isValid: (email: string) => boolean
}
```

<br>

## 📂 signup.ts

✔️ Para a validação do teste é necessária a implementação da validação no modo produção.

```ts
export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
```

<br>

## 📂 signup.spec.ts

✔️ alterar a `makeSut` de modo a retornar individualmente a `sut` e `emailValidatorStub`. Para isso faz-se necessária a criação de uma interface com os tipos de sut: `SutTypes`
```ts
interface SutTypes {
  sut: SignUpController
  emailValidatorStub: EmailValidator
}
```
```ts
const makeSut = (): SutTypes => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  const emailValidatorStub = new EmailValidatorStub()
  const sut = new SignUpController(emailValidatorStub)
  return {
    sut,
    emailValidatorStub
  }
}
```

✔️ alterar a variável `sut` dos teste de forma descontruída `{ sut }` para que os testes voltem a funcionar.

✔️ incluir no teste de validação do email a variável `emailValidatorStub` e mocká-la como `false`

```ts
describe('SignUp Controller', () => {
  test('Should return 400 if an invalid email is provided', () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'invalid_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidParamError('email'))
  })
})
```

**Para manter as boas práticas, sempre mockar como true e alterar individualmente no teste**

💾 Comitar

<br>

## 📂 signup.spec.ts
✔️ Teste para verificar se o email está correto. O teste anterior somente testa se o email é valido e não se é o email correspondente.

```ts
test('Should call EmailValidator with correct email', () => {
  const { sut, emailValidatorStub } = makeSut()
  const isValidSpy = jest.spyOn(emailValidatorStub, 'isValid')
  const httpRequest = {
    body: {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
  }
  sut.handle(httpRequest)
  expect(isValidSpy).toHaveBeenCalledWith('any_email@email.com')
})
```
✔️ Para verificar, alterar o `IsValid` do `signup.ts` para qualquer email => o teste não passará.

💾 Comitar

## 📂 signup.spec.ts
✔️ teste para retornar caso haja algum erro interno do sistema =: status(500)
✔️ não poderá ser utilizada a variável `sut` porque está sempre criando um emailValidator como true e precisamos gerar uma instância que retorna uma exceção, ao invès de retornar true.
```ts
test('Should return 500 emailValidator throws', () => {
  class EmailValidatorStub implements EmailValidator {
    isValid(_email: string): boolean {
      throw new Error()
    }
  }
  const emailValidatorStub = new EmailValidatorStub()
  const sut = new SignUpController(emailValidatorStub)

  const httpRequest = {
    body: {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
  }
  const httpResponse = sut.handle(httpRequest)
  expect(httpResponse.statusCode).toBe(500)
  expect(httpResponse.body).toEqual(new ServerError())
})
```

### 📂 signup.ts
✔️ Será necessário validar o statusCode 500, utilizando o `try/catch`
```ts
handle(httpRequest: HttpRequest): HttpResponse {
  try {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)

    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }
}
```

💾 Comitar

## 📂 Refactor

📚 Criar `badRequest` na pasta **http-helpers** para o `statusCode: 500`
```ts
export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
```

📚 Aplicar no **signup.ts**
```ts
catch (error) {
  return serverError()
}
```

📚 Refatorar os protocols e errors, centralizando os imports no `index.ts`
```ts
import * from './<nome do arquivo>'
```

📚 Separar o `emailValidator` em factory
```ts
const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid(email: string): boolean {
      return true
    }
  }

  return new EmailValidatorStub()
}

const makeEmailValidatorWithError = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid(_email: string): boolean {
      throw new Error()
    }
  }

  return new EmailValidatorStub()
}
```
<br>

# 👩‍💼 Autora

<img style="border-radius: 50%;" src="../../assets/picture.jpg" width="100px;" alt="Picture"/>
<p><b>Nádia Ligia, desenvolvedora back-end em formação.</b></p>

<a href="https://www.linkedin.com/in/nlnadialigia/">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin -91091e?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/" />
</a>&nbsp;
<a href="mailto:nlnadialigia@gmail.com">
  <img alt="Email" src="https://img.shields.io/badge/-Email-91091e?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com" />
</a>&nbsp;
<a href="https://www.nlnadialigia.com">
  <img alt="Homepage" src="https://img.shields.io/badge/-Homepage-91091e" />
</a>

<br><br>

# 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.