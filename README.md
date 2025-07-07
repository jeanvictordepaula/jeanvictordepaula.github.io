# Traco Livre - Faz Sentido

> Site responsivo para visualização 3D e VR, feito com Vite Vanilla JS

Este projeto exibe um modelo Sketchfab em tela cheia, com logo, botão de VR e visual moderno. Inclui uma página especial para visualização em realidade virtual (VR), com máscara e carregamento customizado.

## Como rodar localmente

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

## Deploy

O site está publicado gratuitamente via [GitHub Pages](https://jeanvictordepaula.github.io/).

Para publicar alterações:
1. Rode `npm run build`
2. Copie o conteúdo da pasta `dist` para a raiz do repositório
3. Faça commit e push normalmente

## Customização
- Troque o modelo Sketchfab editando `src/main.js` (altere o link do iframe)
- Altere logo e favicon substituindo `logo.svg`
- Personalize estilos em `src/style.css`
- A página VR está em `public/vr.html`

## Tecnologias
- [Vite](https://vitejs.dev/) (vanilla)
- HTML, CSS, JavaScript

---
Mantenha o código limpo, responsivo e fácil de customizar.
