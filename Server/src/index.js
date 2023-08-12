const http = requiere ('http')
const PORT = 3001
const data = requiere('../utils/data.js')

http.createServer((req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const {url} = req
    
    if (url==="/"){
        res.writeHead(200, {"Content-type": "text/plain"})
        return res.end("Esta funcionando ok")
    }

    if (url.include("/rick_and_morty/character")){
        const id = url.split("/").pop()
        const character = data.find(char => char.id === id)
        
        if (character){
            res.writeHead(200, {"Content-type": "aplication/json"})
            return res.end(JSON.stringify (character))
        } else {
            res.writeHead(404, {"Content-type": "aplication/json"})
            return res.end(JSON.stringify ({error: "Chatacter no found"}))
        }


    }

    res.writeHead(404, {"Content-type": "text/plain"})
    return res.end(`La direccion ${url} no existe`)
}) .listen(PORT, ()=> {
    console.log(`Servidor en puerto: ${PORT}`)
})