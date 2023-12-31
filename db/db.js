const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config()

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_SCHEMA
})

module.exports = db