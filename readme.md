# Proof of concept Typescript

### ao baixar o projeto com:
```
git clone https://github.com/CauaYves/POC-Typescript.git    
```
### execute o comando:
```
npm i
```
# rotas

## get "/ping"
#### retornará
```
pong
```
## get "/people"

#### retornará:
```
[
  {
    "id": 7,
    "first_name": "Cauã",
    "start_date": "2023-06-30T03:00:00.000Z",
    "surname": "Yves",
    "age": 16,
    "profession": "pedreiro"
  }
]
```

## post "/people"
### corpo da requisição:
```
{
  "name": "Cauã",
  "surname":"Yves",
  "age": 16,
  "profession": "student"
}
```
### retornará:
```
registro criado com sucesso
```
## delete "/people/:id"

### retornará:

```
registro deletado com sucesso
```

## put "/people/edit/:id"
### retornará um status code com base na operação

