const express = require('express')
const server = express()
const PORT = 3001
const router = require('../Routes/index.js')


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

 server.use('/rickandmorty', router)


server.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`)
})




// http.createServer((req, res)=> {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     const {url} = req
//     console.log(`Recibi una request de: ${url}`)

//     if (url.includes("/rick_and_morty/character")){
//         const id = Number (url.split("/").pop())
//         getCharById(res, id)
//     }else{
//         res.writeHead(404, {"Content-type": "application/json"})
//         return res.end(JSON.stringify({error: "Character not found"}))
//     }

// }) .listen(PORT, 'localhost', ()=> {
//     console.log(`Servidor corriendo en puerto: ${PORT}`)
// })