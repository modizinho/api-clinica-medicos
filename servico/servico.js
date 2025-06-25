import pool from './conexao.js';

async function retornaContatos() {
    
    const conexao = await pool.getConnection();

    const contatos_tb = await conexao.query('SELECT id, nome, telefone, email, descricao FROM contatos');
    const contatos = contatos_tb[0];

    conexao.release();

    return contatos;

};

export default retornaContatos;