# Front-end Project

Este é um site multipage, elaborado como um projeto final da formação de Front-End Web Developer. Este site permite aos utilizadores explorar um pouco da História do clube, o seu Plantel actual, alguns dos seus Patrocinadores,Notícias e perceber um bocado do contexto do mesmo. O site foi criado com a intenção de mostrar as minhas habilidades, tendo noção do caminho a seguir para melhorar a experiência do utilizador e os meus proprios conhecimentos em Front-End.

## Referência

Apesar de ser um projeto único e feito do zero por mim, utilizei um video de Youtube para me inspirar, retirar ideias e o conceito para mim desconhecido, que foi trabalhar com tailwindCSS.

- (https://www.youtube.com/watch?v=_oO4Qi5aVZs)

## Dependências

"axios": "^1.5.1",
"formik": "^2.4.5",
"json-server": "^0.17.4",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.16.0",
"yup": "^1.3.2"

## Dev Dependencies

"@types/react": "^18.2.15",
"@types/react-dom": "^18.2.7",
"@vitejs/plugin-react": "^4.0.3",
"autoprefixer": "^10.4.16",
"eslint": "^8.45.0",
"eslint-plugin-react": "^7.32.2",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.3",
"postcss": "^8.4.30",
"tailwindcss": "^3.3.3",
"vite": "^4.4.5"

## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run server
  npm run dev
```

## Autores

- [@Francisco Dias ](https://github.com/FranciscoDias5)

## Documentação da API

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Chave da API

'fd824fd67750c2e6ef11bf63509eb6c0'

#### API utilizada

Neste projeto foi utilizada a openweathermap que é uma API freemium, no pacote free permite a chamada da API 60 vezes por minuto e 1 000 000 vezes por mes. Esta API em freeuse proporciona do tempo presente e do tempo nos ultimos 5 dias.

## Aprendizagem

Este projeto foi desafiante e permitiu-me não só descobrir um mundo novo, como também desenvolver os conhecimentos adquiridos durante a formação. Através dos problemas encontrados durante a realização do projeto, consegui identificar os meus pontos fracos, os pontos a melhorar e o caminho a seguir para o meu próprio desenvolvimento, enquanto Developer.

## Funcionalidades

- Multipage
- Toggle de temas entre os biomas disponiveis nas "destinations"
- Acesso a API de weather, permitindo perceber o tempo que se encontra no presente
- Sistema de criação, update e delete de posts
- Formulário utilizando formik
- Zoom de imagens
- Navbar e Footer com links
- Responsivo

## Pontos a Melhorar

A principal melhoria para o projeto é nos componentes da pagina "Squad", tendo como objectivo fazer uma Galeria de Imagens, cada vez que fizesse um onClick na imagem.
O acrescentar de pesquisa previamente feita para melhorar a informação dos posts, apresentando assim uma verdadeira homenagem ao tema que utilizei.
O melhorar do Style utilizado na minha page "News" e o acrescentar de imagens as mesmas.
Gostaria tambem de melhorar o Responsive para ficar mais coerente ao longo de todo o site.
