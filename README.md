# FEJUCA API

## Descrição
A **FEJUCA API** é uma aplicação para alugar casas e reservar casas de outros usuários, semelhante ao conceito do Airbnb. A API foi desenvolvida utilizando Node.js e Express, com MongoDB como banco de dados, oferecendo um serviço de gerenciamento de reservas e listagem de imóveis.

## Tecnologias Utilizadas
- **JavaScript**
- **Node.js**
- **MongoDB** com **Mongoose**
- **Express**
- **CORS**
- **Yup** (validação de dados)
- **Path**

## Funcionalidades

### Reserves
- **POST** `/reserves` - Criar nova reserva
- **GET** `/reserves` - Listar reservas
- **DELETE** `/reserves/:id` - Cancelar reserva

### House
- **POST** `/houses` - Criar nova casa
- **GET** `/houses` - Listar todas as casas
- **PUT** `/houses/:id` - Atualizar informações da casa
- **DELETE** `/houses/:id` - Deletar casa

### Dashboard
- **GET** `/dashboard` - Mostrar casas do usuário logado

### Session
- **POST** `/sessions` - Criar sessão de usuário

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Jscanoni/FEJUCA_API.git





