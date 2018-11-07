const express = require('express');
const path = require('path'); 
const app = express();

// Recebendo nossa rota de POSTS
const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/posts', posts);

// Pegar todos os outros pedidos de rotas e devolvê-los ao índice
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'scr/app/dashboard.html'));
});

const port = process.env.PORT || 4600;
app.listen(port, (req, res)=>{
    console.log(`RUNNING on port ${port}`);
});