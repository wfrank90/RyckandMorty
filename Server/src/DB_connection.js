require('dotenv').config();
const { Sequelize } = require('sequelize');
const UserFunction = require("../models/User");
const FavoriteFunction = require("../models/Favorite");
const { DB_USER, DB_PASSWORD, DB_HOST, BDD} = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.


const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${BDD}`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
UserFunction(sequelize)
FavoriteFunction(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
