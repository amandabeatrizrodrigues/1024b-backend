import mysql, { type RowDataPacket, type ResultSetHeader } from 'mysql2/promise';
import express from 'express';

const app = express();
app.use(express.json());

interface IPessoa extends RowDataPacket {
    id: number;
    nome: string;
}

interface IProduto extends RowDataPacket {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    data_criacao: Date;
    data_modificacao: Date;
}

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'luademel',
});

function tratarErro(err: unknown, res: express.Response) {
    console.log(err);

    if (err instanceof Error && 'code' in err) {
        switch (err.code) {
            case 'ECONNREFUSED':
                return res.status(500).json({ mensagem: "Ligue o Laragon ou verifique conexão" });
            case 'ENOTFOUND':
                return res.status(500).json({ mensagem: "Host incorreto" });
            case 'ER_BAD_DB_ERROR':
                return res.status(500).json({ mensagem: "Banco de dados não existe" });
            case 'ER_ACCESS_DENIED_ERROR':
                return res.status(500).json({ mensagem: "Usuário/senha inválidos" });
            case 'ER_PARSE_ERROR':
                return res.status(500).json({ mensagem: "Erro na SQL" });
            case 'ER_NO_SUCH_TABLE':
                return res.status(500).json({ mensagem: "Tabela não existe" });
        }
    }

    return res.status(500).json({ mensagem: "Erro desconhecido" });
}

app.get("/pessoas", async (req, res) => {
    try {
        const [dados] = await connection.execute<IPessoa[]>(
            'SELECT * FROM pessoa'
        );
        res.json(dados);
    } catch (err) {
        tratarErro(err, res);
    }
});

app.post("/pessoas", async (req, res) => {
    const { id, nome } = req.body;

    if (!id || !nome) {
        return res.status(400).json({ mensagem: "Dados inválidos" });
    }

    try {
        const [result] = await connection.execute<ResultSetHeader>(
            'INSERT INTO pessoa (id, nome) VALUES (?, ?)',
            [id, nome]
        );

        if (result.affectedRows === 0) {
            return res.status(500).json({ mensagem: "Erro ao inserir" });
        }

        res.status(201).json({ mensagem: "Inserido com sucesso" });
    } catch (err) {
        tratarErro(err, res);
    }
});

app.post("/cadastro_produto", async (req, res) => {
    const { id, nome, categoria, preco, data_criacao, data_modificacao } = req.body;

    if (!id || !nome || !categoria || !preco || !data_criacao || !data_modificacao) {
        return res.status(400).json({ mensagem: "Dados inválidos" });
    }

    try {
        const [result] = await connection.execute<ResultSetHeader>(
            `INSERT INTO produto 
            (id, nome, categoria, preco, data_criacao, data_modificacao) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [id, nome, categoria, preco, data_criacao, data_modificacao]
        );

        if (result.affectedRows === 0) {
            return res.status(500).json({ mensagem: "Erro ao inserir" });
        }

        res.status(201).json({ mensagem: "Produto cadastrado" });
    } catch (err) {
        tratarErro(err, res);
    }
});

app.get("/listar_produtos", async (req, res) => {
    try {
        const [dados] = await connection.execute<IProduto[]>(
            'SELECT * FROM produto'
        );
        res.json(dados);
    } catch (err) {
        tratarErro(err, res);
    }
});

app.get("/listar_produtos_informatica", async (req, res) => {
    try {
        const [dados] = await connection.execute<IProduto[]>(
            'SELECT * FROM produto WHERE categoria = ?',
            ['informática']
        );
        res.json(dados);
    } catch (err) {
        tratarErro(err, res);
    }
});

app.get("/listar_produtos_caros", async (req, res) => {
    try {
        const [dados] = await connection.execute<IProduto[]>(
            'SELECT * FROM produto WHERE preco > ?',
            [100]
        );
        res.json(dados);
    } catch (err) {
        tratarErro(err, res);
    }
});
app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000 🚀");
});