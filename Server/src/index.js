const http = requiere ('http')
const PORT = 3001
const getCharById = requiere ('../Controllers/getCharById')

http.createServer((req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const {url} = req
    console.log(`Recibi una request de: ${url}`)

    if (url.includes("/rick_and_morty/character")){
        const id = Number (url.split("/").pop())
        getCharById(res, id)
    }else{
        res.writeHead(404, {"Content-type": "application/json"})
        return res.end(JSON.stringify({error: "Character not found"}))
    }

}) .listen(PORT, 'localhost', ()=> {
    console.log(`Servidor corriendo en puerto: ${PORT}`)
})