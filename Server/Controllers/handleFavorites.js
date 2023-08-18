let myFavorites = []

const favorito = (req, res) => {

myFavorites.push(req.body)
res.json(myFavorites)

}

const borrarFav = (req, res) => {
    const {id} = req.params
    const filtered = myFavorites.filter(fav => fav.id !== Number(id))
    myFavorites = filtered
    res.json(myFavorites)
}

module.exports = {
    favorito,
    borrarFav
}