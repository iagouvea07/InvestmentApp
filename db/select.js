const SELECT_SESSIONS = `SELECT * FROM sessions;`

const SELECT_INCOMES = `SELECT s.ticker, s.name, ROUND((a.amount * d.value), 2) AS total, DATE_FORMAT(d.date, '%d-%m-%Y') AS date  
                        FROM stocks s
                        INNER JOIN dividends d ON s.id = d.stock_id
                        INNER JOIN assets a ON s.id = a.stock_id;`

const SELECT_DIVIDENDS = `SELECT * FROM dividends;`

const SELECT_USERS = `SELECT * FROM users;`

const SELECT_AUTH = `SELECT * FROM users
                     WHERE user = ? AND password = ? AND valid_id = 1;`

module.exports = {
                    SELECT_SESSIONS,
                    SELECT_INCOMES,
                    SELECT_DIVIDENDS,
                    SELECT_USERS,
                    SELECT_AUTH
}