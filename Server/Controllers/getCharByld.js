const axios = requiere("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const successHandler = (response, res) => {
    const {id, name, gender, species, origin, image, status} = response.data
    const character = {id, name, gender, species, origin, image, status}
        
        res.writeHead(200, {"Content-type":"application/json"})
        res.end(JSON.stringify(character))
}

const errorHandler = (error, res)=> {
    res.writeHead(500, {"Content-type":"text/plain"})
    res.end("Sucedió el siguiente error: "+error.message)
}

const getChairById = (res, id) => {
    
    axios = (`${URL}/${id}`)
    .then (response => successHandler (response, res))
    .catch(error => errorHandler(error, res))
}

module.exports = getChairById