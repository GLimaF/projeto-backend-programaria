const express = require("express") //aqui estou iniciando o express
const router = express.Router() //configuração da primeira parte da rota
const cors = require('cors') //traz o pacote cors para o projeto para consumir essa api no front-end
const conectaBancoDeDados = require('./bancoDeDados') //aqui o arquivo banco de dados é ligado ao projeto

conectaBancoDeDados() //aqui a função que conecta o banco de dados é chamada

const Mulher = require('./mulherModel')
const app = express() //inicia o app
app.use(express.json()) //libera o uso do json
app.use(cors()) //libera o uso do cors

const porta = 3333 // aqui a porta foi criada

//GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)
    }catch(erro){
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
            response.status(201).json(mulherCriada)
    } catch(erro){
        console.log(erro)
    }

}

//Patch
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome 
        }

        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
        
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }

        if (request.body.citacao) {
            mulherEncontrada = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)

    } catch(erro) {
        console.log(erro)
    }
}

//Delete
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ messagem: 'Mulher deletada com sucesso!'})

    } catch(erro) {
        console.log(erro)
    }
}

app.use(router.get('/mulheres', mostraMulheres)) //configuração da rota get /mulheres
app.use(router.post('/mulheres', criaMulher)) //configura a rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configuração da rota patch /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //configuração da rota Delete /mulheres/:id

//Porta
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta) //servidor ouvindo a porta