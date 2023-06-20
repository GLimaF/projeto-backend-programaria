const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Georgia de Lima',
        Imagem: 'https://instagram.frec17-1.fna.fbcdn.net/v/t51.2885-15/353798290_295990532774682_4532523426700824974_n.webp?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.frec17-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=wbX4X_BXi5oAX-kAh5p&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEyNDk5OTE0MTQyNzMxNDMwMg%3D%3D.2-ccb7-5&oh=00_AfDcB-JasIgjtbMq4AWy7lR54ce4l6TLaFwWTXAB23c5pg&oe=648F2911&_nc_sid=640168',
        minibio: 'Aprendiz de desenvolvimento back-end'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://s2.glbimg.com/T6zyjkPbcUUa1hlFB2riwRW48yo=/0x0:607x607/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/d/X/TxAivVQTao3ekIdBzVAg/2021-10-05-programaria-iana-chan.jpg',
        minibio: 'Fundadora da PrograMaria'
    }, 
    {
        nome: 'Nina da hora',
        imagem: 'https://ogimg.infoglobo.com.br/in/24599691-04f-26c/FT1086A/89162800_El-Nina-da-Hora.jpg',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)