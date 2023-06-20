const express = require("express")
const router = express.Router() 


const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Georgia de Lima', 
    Imagem: 'https://instagram.frec17-1.fna.fbcdn.net/v/t51.2885-15/353798290_295990532774682_4532523426700824974_n.webp?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.frec17-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=wbX4X_BXi5oAX-kAh5p&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEyNDk5OTE0MTQyNzMxNDMwMg%3D%3D.2-ccb7-5&oh=00_AfDcB-JasIgjtbMq4AWy7lR54ce4l6TLaFwWTXAB23c5pg&oe=648F2911&_nc_sid=640168',
    minibio: 'Aprendiz de desenvolvimento back-end'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)