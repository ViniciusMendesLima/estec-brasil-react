# 🖥️ Projeto WebSite - ESCTEC Brasil Móveis S.A.

## 🧾 Descrição do Projeto

A **ESCTEC Brasil Móveis S.A.** é uma empresa fictícia fabricante de móveis corporativos. Com base em uma pesquisa com clientes, surgiu a necessidade de um novo site com as seguintes funcionalidades:

- Visualização de produtos (mesas, cadeiras, armários, etc).
- Envio de pedidos por parte dos vendedores.
- Página de contato com formulário completo.
- Navegação estruturada com cabeçalho, rodapé e menus interativos.
- Validações de formulários via JavaScript.
- Estilização com CSS e layout responsivo.
---

## 🧩 Tecnologias Utilizadas

- **React** – Interface de usuário e componentes.
- **JavaScript** – Lógica de interação e validações.
- **Axios** – Requisições HTTP (se aplicável).
- **CSS** – Estilização e responsividade.
- **Vite** – Ferramenta de build e desenvolvimento.


## 📂 Estrutura do Site

- **Home**
- **A Empresa**
  - Missão
  - Visão
  - Valores
- **Produtos**
  - Mesas
  - Cadeiras
  - Diversos
- **Contato**
- **Pedidos**

## 📁 Estrutura de Diretórios
```bash
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── company/
│   │       ├── design/
│   │       └── products/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── SharedLayout.jsx
│   │   ├── Error.jsx
│   ├── data/
│   │   ├── CompanyAbout.jsx
│   │   ├── Products.jsx
│   │   └── Sellers.jsx
│   ├── forms/
│   │   ├── formContact.jsx
│   │   └── formOrder.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Chairs.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Miscellaneous.jsx
│   │   ├── Mission.jsx
│   │   ├── Orders.jsx
│   │   ├── Products.jsx
│   │   ├── Tables.jsx
│   │   ├── Values.jsx
│   │   ├── Vision.jsx
│   │   └── Routes.jsx
│   ├── styles/
│   │   ├── all.css
│   │   ├── variables.css
│   │   ├── footer.css
│   │   ├── form.css
│   │   ├── navbar.css
│   │   └── sharedLayout.css
│   ├── utils/
│   │   ├── SearchImages.jsx
│   │   └── SearchProducts.jsx
│   ├── validations/
│   │   └── (funções de validação)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── eslint.config.js
└── README.md
```

---

## 🧩 Funcionalidades Implementadas

- Página institucional: Sobre, Missão, Visão, Valores.
- Catálogo de produtos: Mesas, Cadeiras, Diversos.
- Formulário de contato com validação (nome, email, telefone, etc).
- Formulário de pedidos com seleção de vendedor e produtos.
- Validações com JavaScript (e-mail, CNPJ, campos obrigatórios).
- Cálculo automático de totais por produto e pedido completo.
- Mensagem dinâmica de saudação no cabeçalho com base no horário.
- Menu com submenus dropdown para navegação.
- Layout reutilizável com componentes (Navbar, Footer, SharedLayout).

---

## 📑 Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
2. Instale as dependências (se aplicável):

```bash
npm install
```
3. Inicie o projeto localmente com Vite:
```bash
npm run dev
```

## 📝 Observações

Este projeto foi realizado para fins acadêmicos e demonstra organização modular, boas práticas de React e validação de formulários.

