require('dotenv').config()

module.exports= 
{
    "development": {
        "username": process.env.DB_PROD_USERNAME,
        "password": process.env.DB_PROD_PASSWORD,
        "database": process.env.DB_PROD_DATABASE,
        "host": process.env.DB_PROD_HOST,
        "dialect": "postgres"
    },
    "test": {
        "username": "eidaprwz",
        "password": "null",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": process.env.DB_PROD_USERNAME,
        "password": process.env.DB_PROD_PASSWORD,
        "database": process.env.DB_PROD_DATABASE,
        "host": process.env.DB_PROD_HOST,
        "dialect": "postgres",
        "dialectOptions":{
            ssl: {
                rejectUnauthorize: false
            }
        }
    }
}