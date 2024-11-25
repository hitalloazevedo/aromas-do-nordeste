
# Aromas do nordeste (Backend)
API REST que fornece dados do cardápio para uma aplicação frontend de um restaurante fictício [(Aromas do nordeste)](https://hitalloazevedo.github.io/aromas-do-nordeste-frontend/).  
Projeto: [Aromas do nordeste frontend](https://github.com/hitalloazevedo/aromas-do-nordeste-frontend)

Os dados fornecidos são: id do prato, nome do prato, descrição do prato e url da imagem. 

## Tecnologias e técnicas utilizadas

- Nodejs
- Typescript
- Express
- Firebase (Firestore)
- Modularização
- MVC

## Features

- Inserir novo prato
- Alterar um prato existente
- Deletar um prato
- Retornar todos os pratos

## API Reference

#### Retornar todos os pratos

```http
  GET /api/cardapio
```
Retorno (sucesso)
```
  [
    {
      id: 1,
      plate_name: "prato1",
      plate_description: "descrição",
      image_url: "imagem1.png"
    },
    {
      id: 2,
      plate_name: "prato2",
      plate_description: "descrição",
      image_url: "imagem2.png"
    }, 
  ]
```
#### Inserir um novo prato

```http
  POST /api/cardapio
```
Requerido
```
{
  	  "plate_name": "Tapioca",
	  "plate_description": "Tapioca é um prato tipico do nordeste brasileiro",
	  "image_url": "https://imagem.png"
}
```
Retorno (sucesso)

`{
	"message": "created",
	"plate": {
		"id": 13,
		"plate_name": "Tapioca",
		"plate_description": "Tapioca é um prato tipico do nordeste brasileiro",
		"image_url": "https://imagem.png"
	}				
}`
#		
#### Editar prato existente
```http
  PATCH /api/cardapio/:id
```
Requerido
```
{
  	  "name": "novo_nome",
	  "description": "nova_descrição",
	  "imageUrl": "nova_url_imagem"
}
```
Retorno (sucesso)

`{
	"message": "updated",
	"plate": {
		"id": 10,
		"plate_name": "novo_nome",
		"plate_description": "nova_descricao",
		"image_uri": "nova_image_url"
	}
}`
#
#### Deletar prato
```http
  DELETE /api/cardapio/:id
```

Retorno (sucesso)

`{
	"message": "deleted",
	"plate": {
		"id": 9,
		"plate_name": "gato",
		"plate_description": "tortinha",
		"image_uri": "asdf"
	}
}`
#


