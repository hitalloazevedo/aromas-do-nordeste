
# Aromas do nordeste (Frontend)

Minha família possui raízes nordestinas, e essa foi a motivação para este projeto, e nada melhor que as tipíca culinária do nordeste brasileiro. 

O projeto consiste numa aplicação web para um restaurante, onde o principal objetivo é gerar uma identidade online, além da aprensentação do estabelecimento, a aplicação conta com um cardapio online.

Veja a aplicação em <b> deploy </b>: [Aromas do nordeste](https://hitalloazevedo.github.io/aromas-do-nordeste-frontend/) (por conta da hospedagem da api, o loading do cardapio pode levar até 50 segundos)


## Tecnologias e técnicas utilizadas

- ReactJs
- Css
- Axios
- Api's
- Html
- Vite
- Roteamento
- Responsividade com media queries

## Features

- Site responsivo (mobile até desktop).
- Apresentação do restaurante.
- Página de cardápio (renderizada dinamicamente).
- Dashboard onde é possível gerenciar os pratos cadastrados (disponível localmente).
  - Criar novo prato. 
  - Alterar um prato existente.
  - Deletar um prato.
- Integração com web service que fornece os dados.

## Utilizando o projeto localmente
#### Para utilizar a aplicação localmente é necessário configurar o web-service (api)
[Configurar o web-service](https://github.com/hitalloazevedo/aromas-do-nordeste-backend)

#

Clonar o projeto

```bash
  git clone https://github.com/hitalloazevedo/aromas-do-nordeste-frontend
```

Abrindo o repositório

```bash
  cd aromas-do-nordeste-frontend
```

Instalando as dependências

```bash
  npm install
```

Iniciando o projeto

```bash
  npm run dev
```
Após executar ele ira gerar uma url parecida com esta: ```http://localhost:<port>/aromas-do-nordeste-frontend``` basta acessar com ```ctrl + click``` ou abrir no navegador.


## Variavéis de ambiente
 
Para rodar localmente crie um arquivo `.env` adicione as variáveis:

- `VITE_API_URL` o valor dela deve ser a url do seu webservice local [Configurar web service](https://github.com/hitalloazevedo/aromas-do-nordeste-backend)

Para utilizar o dashboard, crie o arquivo `.env.development` e adicione a variável:

- `VITE_ENVIRONMENT` com o valor `"dev"`


## Referências de cores

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| white | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff |
| translucid white | ![#ffffff50](https://via.placeholder.com/10/ffffff50?text=+) #ffffff50 |
| dark brown | ![#3A2F12](https://via.placeholder.com/10/3A2F12?text=+) #3A2F12 |
| translucid brown | ![#906749be](https://via.placeholder.com/10/906749be?text=+) #906749be |
| light brown | ![#C69862](https://via.placeholder.com/10/C69862?text=+) #C69862 |
| brown | ![#906749](https://via.placeholder.com/10/906749?text=+) #906749 |
| black | ![#000](https://via.placeholder.com/10/000?text=+) #000 |


## Screenshots
### Mobile
![App Screenshot](https://i.pinimg.com/736x/9f/1c/ec/9f1cec1c62455b8a1e1f3f6aaaccc72b.jpg)

![App Screenshot](https://i.pinimg.com/736x/7c/78/b1/7c78b1622d932d41b8e71e0d80909bb1.jpg)

![App Screenshot](https://i.pinimg.com/736x/ad/44/84/ad4484d9c3256841f0dbdaaf10eabb89.jpg)

### Desktop

![App Screenshot](https://i.pinimg.com/736x/8e/30/16/8e30163de75c0c28211626eb7e9bc171.jpg)

![App Screenshot](https://i.pinimg.com/736x/9b/0e/56/9b0e5692068d870897cc896e00b5d4e9.jpg)

![App Screenshot](https://i.pinimg.com/736x/d6/eb/2e/d6eb2eec4ebcbc2d7fdcf530b84fd769.jpg)

![App Screenshot](https://i.pinimg.com/736x/a0/18/b3/a018b30e848a241141d1e75efef1932e.jpg)

## Autor

- [@Hitallo Azevedo](https://github.com/hitalloazevedo)

