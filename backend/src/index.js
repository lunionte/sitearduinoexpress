const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar o diretório "public" para servir arquivos estáticos (CSS, imagens, fontes)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota sobre
app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'sobre.html'));
});

app.get('/vantagens', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'vantagens.html'));
});

app.get('/somos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'somos.html'));
});
// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
