# GEMINI-CHATBOT-npm inti

Backend de um mini chatbot utilizando Node.js, Express e integração com a API Gemini da Google.


# Tecnologias Utilizadas

- Node.js
- Express
- Gemini API
- Dotenv
- Cors



# Funcionalidades

- Integração com a API Gemini
- Recebimento de mensagens via API REST
- Respostas geradas por IA
- Estrutura organizada em camadas
- Tratamento de erros
- Uso de variáveis de ambiente


# Instalação

Clone o repositório:

```bash
git clone https://github.com/EdsonBenedetto/API-AI---GEMINE-e-NODE-.git
```

Entre na pasta do projeto:

```bash
cd GEMINI-CHATBOT
```

Instale as dependências:

```bash
npm install
```

---

# Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
GEMINI_API_KEY=sua_chave_aqui
```

---

# Como Executar o Projeto

Inicie o servidor:

```bash
node server.js
```

Servidor rodando em:

```text
http://localhost:3000
```

---

# Endpoint Principal

## POST `/chat`

Endpoint responsável por enviar mensagens para a IA.

---


---

# Fluxo da Aplicação

```text
Cliente
   ↓
Rota (/chat)
   ↓
Controller
   ↓
Service
   ↓
Gemini API
   ↓
Resposta
```

---

# Conceitos Aplicados

- API REST
- Arquitetura em camadas
- Controllers
- Services
- Rotas Express
- Integração com IA
- Variáveis de ambiente
- Async/Await
- Tratamento de erros

