import mysql from 'mysql2/promise';
import express from 'express'

const app = express()
app.use(express.json())

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'aula1',
});

app.get("/pessoas", async (req, res) => {
    try {
        const [resultado] =
            await connection.execute(`SELECT * FROM pessoa`)
        console.log(resultado)
        return res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            return res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            return res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            return res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            return res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            return res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            return res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//listar

app.post("/pessoas", async (req, res) => {
    try {
        const { id, nome } = req.body

        if (!id || !nome)
            return res.status(400).json({ mensagem: "Erro: id ou nome inválidos!" })

        const [resultado] =
            await connection.execute(`INSERT INTO pessoa VALUES (?,?)`, [id, nome])

        console.log(resultado)
        return res.status(201).json({ mensagem: "Sucesso" })

    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            return res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            return res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            return res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            return res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            return res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            return res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//Inserir

app.post("/cadastro_produto", async (req, res) => {
    try {
        const { id, nome, categoria, preco, data_criacao, data_modificacao } = req.body

        if (!id || !nome || !categoria || !preco || !data_criacao || !data_modificacao)
            return res.status(400).json({
                mensagem: "Erro: dados inválidos!"
            })

        const [resultado] =
            await connection.execute(
                `INSERT INTO produto VALUES (?,?,?,?,?,?)`,
                [id, nome, categoria, preco, data_criacao, data_modificacao]
            )

        console.log(resultado)
        return res.status(201).json({ mensagem: "Sucesso" })

    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            return res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            return res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            return res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            return res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            return res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            return res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//Inserir

app.get("/listar_produtos", async (req, res) => {
    try {
        const [resultado] =
            await connection.execute(`SELECT * FROM produto`)
        console.log(resultado)
        return res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ mensagem: "Erro no servidor!" })
    }
})//listar

app.get("/listar_produtos_informatica", async (req, res) => {
    try {
        const [resultado] =
            await connection.execute(
                `SELECT * FROM produto WHERE categoria = ?`,
                ['informática']
            )
        console.log(resultado)
        return res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ mensagem: "Erro no servidor!" })
    }
})//listar

app.get("/listar_produtos_caros", async (req, res) => {
    try {
        const [resultado] =
            await connection.execute(
                `SELECT * FROM produto WHERE preco > ?`,
                [100]
            )
        console.log(resultado)
        return res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ mensagem: "Erro no servidor!" })
    }
})//listar

app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})