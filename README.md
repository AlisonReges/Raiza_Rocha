# 🌷 Raiza Rocha

Site institucional desenvolvido para **Raiza Rocha**, com foco em consultoria de amamentação, serviços, mentoria, ebooks e contato.

O projeto foi desenvolvido utilizando **React + Vite** e está publicado através do **GitHub Pages**.

🔗 **Site:**
https://alisonreges.github.io/Raiza_Rocha/

---

## ✨ Sobre o projeto

O site apresenta os principais serviços e conteúdos da Raiza Rocha, incluindo:

* 🍼 Consultoria de amamentação
* 💆‍♀️ Serviços e acompanhamentos
* 🎓 Mentoria profissional
* 📚 Ebooks
* 📱 Integração com redes sociais
* 📩 Formulário e informações de contato
* 🏠 Página inicial institucional

O projeto foi desenvolvido pensando em **responsividade**, organização dos componentes e facilidade de manutenção.

---

## 🚀 Tecnologias

O projeto utiliza as seguintes tecnologias:

| Tecnologia          | Utilização                          |
| ------------------- | ----------------------------------- |
| ⚛️ **React**        | Desenvolvimento da interface        |
| ⚡ **Vite**          | Ambiente de desenvolvimento e build |
| 🧭 **React Router** | Gerenciamento das rotas             |
| 🎨 **React Icons**  | Ícones da interface                 |
| 🌐 **GitHub Pages** | Hospedagem do projeto               |
| 📦 **gh-pages**     | Deploy para o GitHub Pages          |

---

## 📁 Estrutura do projeto

Uma estrutura simplificada do projeto:

```text
Raiza_Rocha/
├── public/
│   └── images/
│       ├── hero.jpg
│       ├── about.jpg
│       ├── Services/
│       │   ├── Consultoria-Amamentacao.jpg
│       │   └── Laserterapia.jpg
│       └── ebooks/
│           ├── como_continuar_a_amamentacao_ao_volta_ao_trabalho.png
│           ├── guia_de_amamentacao_para_maes_de_primeira_viagem.png
│           └── rotina_do_sono_do_bebe.png
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── css/
│   ├── assets/
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# 💻 Desenvolvimento local

## 1. Clone o repositório

```bash
git clone https://github.com/AlisonReges/Raiza_Rocha.git
```

Entre na pasta do projeto:

```bash
cd Raiza_Rocha
```

---

## 2. Instale as dependências

```bash
npm install
```

---

## 3. Execute o projeto

```bash
npm run dev
```

O Vite exibirá no terminal o endereço para acessar o projeto.

Normalmente:

```text
http://localhost:5173/Raiza_Rocha/
```

> 💡 O endereço pode variar dependendo da configuração local do Vite.

---

# 🏗️ Build de produção

Para gerar uma versão de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta:

```text
dist/
```

A estrutura será semelhante a:

```text
dist/
├── assets/
├── images/
└── index.html
```

---

# 🌐 GitHub Pages

O projeto está configurado para ser publicado no **GitHub Pages** através da branch:

```text
gh-pages
```

### 🔗 Endereço publicado

https://alisonreges.github.io/Raiza_Rocha/

---

# ⚙️ Configuração do Vite

Como o projeto está hospedado dentro do repositório `Raiza_Rocha`, o Vite utiliza o seguinte `base`:

```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: "/Raiza_Rocha/"
})
```

### ⚠️ Por que o `base` é importante?

O projeto não está hospedado diretamente na raiz do domínio.

O endereço é:

```text
https://alisonreges.github.io/Raiza_Rocha/
```

Por isso, o Vite precisa saber que os arquivos da aplicação devem ser carregados a partir de:

```text
/Raiza_Rocha/
```

Isso evita problemas com:

* CSS
* JavaScript
* imagens
* assets
* rotas

---

# 🧭 React Router

O projeto utiliza `react-router-dom`.

Como o site está hospedado dentro de um subdiretório no GitHub Pages, o `BrowserRouter` utiliza o `basename`:

```jsx
<BrowserRouter basename="/Raiza_Rocha">
```

Isso permite que as rotas sejam interpretadas corretamente.

Por exemplo:

```text
/Raiza_Rocha/
/Raiza_Rocha/contatos
/Raiza_Rocha/servicos
/Raiza_Rocha/mentoria
```

---

# 🖼️ Imagens

As imagens públicas do projeto ficam dentro de:

```text
public/images/
```

Como o projeto utiliza o GitHub Pages com o caminho:

```text
/Raiza_Rocha/
```

é importante considerar o `BASE_URL` fornecido pelo Vite.

## Forma recomendada

```jsx
<img
  src={`${import.meta.env.BASE_URL}images/hero.jpg`}
  alt="Raiza Rocha"
/>
```

O `import.meta.env.BASE_URL` permite que o mesmo código funcione corretamente tanto no ambiente local quanto no GitHub Pages.

---

# 🛠️ Função auxiliar para imagens

Para evitar repetir:

```javascript
import.meta.env.BASE_URL
```

em vários componentes, pode ser criada uma função auxiliar.

Por exemplo:

```javascript
export function imagePath(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}
```

Depois, basta utilizar:

```jsx
<img
  src={imagePath("images/hero.jpg")}
  alt="Raiza Rocha"
/>
```

### 📌 Vantagem

Isso deixa os componentes mais limpos e facilita futuras alterações na estrutura do projeto.

---

# 📂 Estrutura das imagens

Exemplo da organização atual:

```text
public/
└── images/
    ├── hero.jpg
    ├── about.jpg
    │
    ├── Services/
    │   ├── Consultoria-Amamentacao.jpg
    │   └── Laserterapia.jpg
    │
    └── ebooks/
        ├── como_continuar_a_amamentacao_ao_volta_ao_trabalho.png
        ├── guia_de_amamentacao_para_maes_de_primeira_viagem.png
        └── rotina_do_sono_do_bebe.png
```

> 💡 Evite utilizar caminhos absolutos como `/images/hero.jpg` quando o projeto estiver sendo publicado em um subdiretório do GitHub Pages. Prefira `import.meta.env.BASE_URL`.

---

# 🚀 Deploy

O projeto utiliza o pacote `gh-pages` para realizar o deploy.

Para publicar uma nova versão:

```bash
npm run deploy
```

Esse comando executa o processo de publicação através do script configurado no `package.json`.

O fluxo é:

```text
npm run deploy
       │
       ▼
npm run build
       │
       ▼
   gera dist/
       │
       ▼
gh-pages -d dist
       │
       ▼
atualiza a branch gh-pages
       │
       ▼
GitHub Pages publica
```

---

# 🔄 Fluxo recomendado de atualização

Sempre que realizar alterações no projeto, siga este fluxo:

### 1. Teste localmente

```bash
npm run dev
```

Verifique se:

* As páginas estão funcionando
* As imagens estão carregando
* As rotas estão funcionando
* O layout está responsivo
* Não existem erros no console

---

### 2. Verifique o build

Antes de publicar:

```bash
npm run build
```

Se o build finalizar sem erros, prossiga para o commit.

---

### 3. Verifique as alterações

```bash
git status
```

---

### 4. Adicione os arquivos

```bash
git add .
```

---

### 5. Crie um commit

Utilize uma mensagem que descreva a alteração:

```bash
git commit -m "Descrição da alteração"
```

Exemplo:

```bash
git commit -m "Corrige carregamento das imagens"
```

---

### 6. Envie para o GitHub

```bash
git push origin main
```

---

### 7. Publique no GitHub Pages

```bash
npm run deploy
```

---

# 📋 Resumo rápido

Para uma alteração comum:

```bash
npm run dev

git status

git add .

git commit -m "Descrição da alteração"

git push origin main

npm run deploy
```

---

# 🧹 Cache do navegador

Após realizar um novo deploy, o navegador pode continuar exibindo arquivos antigos devido ao cache.

Caso isso aconteça, faça uma atualização forçada:

### Windows / Linux

```text
Ctrl + Shift + R
```

### Alternativa

Abra as ferramentas de desenvolvedor do navegador e faça um recarregamento forçado da página.

---

# 📦 Scripts disponíveis

Os principais scripts do projeto são:

| Comando          | Descrição                            |
| ---------------- | ------------------------------------ |
| `npm install`    | Instala as dependências              |
| `npm run dev`    | Inicia o ambiente de desenvolvimento |
| `npm run build`  | Gera o build de produção             |
| `npm run deploy` | Publica o projeto no GitHub Pages    |

---

# 🌷 Projeto

**Raiza Rocha — Consultoria de Amamentação**

Desenvolvido com ❤️ utilizando React + Vite.

🌐 **Site:**
https://alisonreges.github.io/Raiza_Rocha/

📦 **Repositório:**
https://github.com/AlisonReges/Raiza_Rocha
