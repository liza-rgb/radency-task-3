module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER || "root",
    "password": process.env.POSTGRES_PASSWORD || "root", 
    "database": process.env.POSTGRES_DB || "notes",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.POSTGRES_USER || "root",
    "password": process.env.POSTGRES_PASSWORD || "root", 
    "database": process.env.POSTGRES_DB || "notes",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRES_USER || "root",
    "password": process.env.POSTGRES_PASSWORD || "root", 
    "database": process.env.POSTGRES_DB || "notes",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
