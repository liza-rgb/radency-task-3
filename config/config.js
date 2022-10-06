module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER || "root",
    "password": process.env.POSTGRES_PASSWORD || "root", 
    "database": process.env.POSTGRES_DB || "notes",
    "host": process.env.PSQL_HOST || "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.POSTGRES_USER || "root",
    "password": process.env.POSTGRES_PASSWORD || "root", 
    "database": process.env.POSTGRES_DB || "notes",
    "host": process.env.PSQL_HOST || "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRES_USER || "root",
    "password": process.env.POSTGRES_PASSWORD || "root", 
    "database": process.env.POSTGRES_DB || "notes",
    "host": process.env.PSQL_HOST || "localhost",
    "dialect": "postgres"
  }
}
