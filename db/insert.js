const INSERT_USERS = `INSERT INTO users (name, user, email, password, valid_id)
                      VALUES (?, ?, ?, ?, ?);`

const INSERT_STOCKS = `INSERT INTO stocks (ticker, name) 
                       VALUES (?, ?);`

const INSERT_DIVIDENDS = `INSERT INTO dividends (stock_id, value, date, user_id)
                          VALUES (?, ?, ?, ?);`

const INSERT_ASSETS = `INSERT INTO assets (stock_id, amount, user_id)
                       VALUES (?, ?, ?);`

const INSERT_SESSIONS = `INSERT INTO sessions (token)
                         VALUES (?);`

const INSERT_TYPES = `INSERT INTO types (name)
                      VALUES (?);`

module.exports = {
                    INSERT_STOCKS, 
                    INSERT_USERS, 
                    INSERT_DIVIDENDS,
                    INSERT_ASSETS,
                    INSERT_SESSIONS,
                    INSERT_TYPES
}