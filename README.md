# Clone do Streaming Netflix - Utilizando a API do site Tmdb
![image](https://github.com/llcardos/Cloning-NETFLIX/assets/137669141/2a3ea781-d9a1-4573-9d9b-6e2e835dbf69)

# Retirando as informações da API utilizada

- (https://developer.themoviedb.org/reference/discover-movie) 
- (https://developer.themoviedb.org/reference/discover-tv)

  Ambos possuem uma aba de exemplos com todas as informações que poderam ser retiradas para realizar o pedido api afim de executar um determinado comando
- Gêneros dos filmes através de IDs
- Ano de lançamento
- Quantidade de temporadas
- Popularidade

# Importando os ícones de rolagem dos filmes
Entre no site (https://mui.com/material-ui/getting-started/) para ter acesso a documentação

Faça a instalação em seu cmd

```sh
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

Vá até o link (https://mui.com/material-ui/material-icons/?theme=Outlined) e procure por "NAVIGATE" em Search Icons...

Importe esses dois ícones em seu arquivo MovieRow.js

```sh
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined' //(esqueda)
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined' //(direita)
```
