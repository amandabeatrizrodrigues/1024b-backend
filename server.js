const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'luademel'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});


app.post('/cadastro_produto', (req, res) => {
    const { nome, categoria, preco } = req.body;

    const sql = `
        INSERT INTO produto (nome, categoria, preco, data_criacao, data_modificacao)
        VALUES (?, ?, ?, NOW(), NOW())
    `;

    db.query(sql, [nome, categoria, preco], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ mensagem: 'Produto cadastrado com sucesso!' });
    });
});

app.get('/listar_produtos', (req, res) => {
    db.query('SELECT * FROM produto', (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(result);
    });
});

app.get('/listar_produtos_informatica', (req, res) => {
    db.query(
        "SELECT * FROM produto WHERE categoria = 'informatica'",
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(result);
        }
    );
});

app.get('/listar_produtos_caros', (req, res) => {
    db.query(
        "SELECT * FROM produto WHERE preco > 100",
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(result);
        }
    );
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});