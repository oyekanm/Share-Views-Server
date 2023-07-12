module.exports = {
  
    "local": {
      "username": "root",
      "password": null,
      "database": "Viewsdb",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }, 
    "development": {
      "username": "root",
      "password": null,
      "database": "Viewsdb",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": process.env.DB_PASSWORD,
      "database": "Viewsdb",
      "host": process.env.DB_HOST,
      "dialect": "mysql"
    }
  
}
