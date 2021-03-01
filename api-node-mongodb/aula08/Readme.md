<p align="center"><img src="../../assets/logo.png" width=200></p>
<h2 align="center">Curso básico de APIs com Nodejs+Express+Mongodb</h2>

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

## ℹ️ Sobre a aula

<h3>Refatoração do código para inclusão do status code de acordo com a resposta a ser enviada.</h3><br>

### 📚 Aula 08. Retornando status codes apropriados
<br>

#### 📌 Códigos:

- 200 - OK
- 201 - Created => quando é criado qualquer registro dentro do sistema
- 202 - Acceptd => requisição aceita, mas ainda não finalizado o processamento

<br>

- 400 - Bad request
- 401 - Unauthorized => AUTENTICAÇÃO, tem caráter temporário. 
- 403 - Forbidden => AUTORIZAÇÃO, tem caráter permanente.
- 404 - Not found

<br>

- 500 - Internal server error
- 501 - Not implemented - a API não suporta essa funcionalidade
- 503 - Service Unavailabe - a API executa essa operação, mas no momento está indisponível

#### 📌 Refatoração do código para enviar o `status code` correto
<br>

▶️ Será incluída em cada resposta o status code correpondente.
```js
return response.status().send()
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

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
