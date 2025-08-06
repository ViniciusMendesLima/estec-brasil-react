# 🖥️ Projeto WebSite - ESCTEC Brasil Móveis S.A.

## 🧾 Descrição do Projeto

A **ESCTEC Brasil Móveis S.A.** é uma empresa fictícia fabricante de móveis corporativos. Com base em uma pesquisa com clientes, surgiu a necessidade de um novo site com as seguintes funcionalidades:

- Visualização de produtos (mesas, cadeiras, armários, etc).
- Envio de pedidos por parte dos vendedores.
- Página de contato com formulário completo.
- Navegação estruturada com cabeçalho, rodapé e menus interativos.
- Validações de formulários via JavaScript.
- Estilização com CSS e layout responsivo.

## 🧩 Tecnologias Utilizadas

- React
- Axios
- JavaScript
- Organização modular com `components`, `pages`, `utils` e `forms`


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
├── src/
│ ├── assets/
│ │ └── images/
│ │ ├── company/
│ │ ├── design/
│ │ └── products/
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Footer.jsx
│ │ │ ├── Navbar.jsx
│ │ │ └── SharedLayout.jsx
│ │ ├── Error.jsx
│ ├── data/
│ │ ├── CompanyAbout.jsx
│ │ ├── Products.jsx
│ │ └── Sellers.jsx
│ ├── forms/
│ │ ├── formContact.jsx
│ │ └── formOrder.jsx
│ ├── hooks/
│ │ └── (hooks personalizados, se houver)
│ ├── pages/
│ │ ├── About.jsx
│ │ ├── Chairs.jsx
│ │ ├── Contact.jsx
│ │ ├── Home.jsx
│ │ ├── Miscellaneous.jsx
│ │ ├── Mission.jsx
│ │ ├── Orders.jsx
│ │ ├── Products.jsx
│ │ ├── Tables.jsx
│ │ ├── Values.jsx
│ │ ├── Vision.jsx
│ │ └── Routes.jsx
│ ├── styles/
│ │ ├── all.css
│ │ ├── variables.css
│ │ ├── footer.css
│ │ ├── form.css
│ │ ├── navbar.css
│ │ └── sharedLayout.css
│ ├── utils/
│ │ ├── SearchImages.jsx
│ │ └── SearchProducts.jsx
│ ├── validations/
│ │ └── (funções de validação em JS)
│ ├── citiesMeta.jsx
│ ├── productsItens.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
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

Este projeto foi realizado para fins acadêmicos.

