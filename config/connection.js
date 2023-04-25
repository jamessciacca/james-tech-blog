//creating db connection and exporting it to the server.js file
const Sequelize = require('sequelize');
//using dotenv file for needed root and pass
require('dotenv').config();

//creating a variable for sequelize to hold data
let sequelize;

//conditional statement that checks if the connection is present other wise creates
//a local database
if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001
    }
  );
};

//exporting 
module.exports = sequelize;