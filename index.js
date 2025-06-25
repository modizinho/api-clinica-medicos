import express from 'express';
import retornaContatos from './servico/servico.js';

const app = express();

app.get('/medicos', async (req, res) => {

    let medicos = await retornaContatos();

    res.json(medicos);

});

app.listen(8080, () => {

    const data = new Date();

    console.log("\nServidor iniciado em "+data+"\n");

});