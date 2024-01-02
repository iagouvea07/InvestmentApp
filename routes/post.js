const express = require('express')
const router = express.Router();
const db = require('../db/db.js');
const dotenv = require('dotenv')
const queries = require('../db/insert.js')

dotenv.config()

const handleDatabaseError = (err, res) => {
    console.error("Error inserting into the database:", err);
    return res.status(500).json({ error: `Error to resolve route` });
}

router.post("/", (req, res) => {
    res.status(200).json({response: "route home"})

})

const createRoute = (path, fields, query, getParams) => {
    router.post(path, (req, res) => {

        const params = getParams(req);
        db.query(query, params, (err, result) => {

            if(err) {
                return handleDatabaseError(err, res)
            }
            res.json({
                response: `${path.replace('/', '')} success!`,
                params: params
            })
        })
    })
}

createRoute("/stocks", ["ticker", "name"], queries.INSERT_STOCKS, (req) =>{
    return [req.body.ticker, 
            req.body.name];
});

createRoute("/users", ["name", "user", "email", "password", "valid_id"], queries.INSERT_USERS, (req) =>{
    return [req.body.name, 
            req.body.user, 
            req.body.email, 
            req.body.password, 
            req.body.valid_id];
});

createRoute("/dividends", ["stock_id", "value", "date", "user_id"], queries.INSERT_DIVIDENDS, (req) =>{
    return [req.body.stock_id, 
            req.body.value, 
            req.body.date, 
            req.body.user_id];
});

createRoute("/assets", ["stock_id", "amount", "user_id"], queries.INSERT_ASSETS, (req) =>{
    return [req.body.stock_id, 
            req.body.amount, 
            req.body.user_id];
});

createRoute("/sessions", ["token"], queries.INSERT_SESSIONS, (req) =>{
    return [req.body.token];
});

createRoute("/types", ["name"], queries.INSERT_TYPES, (req) =>{
    return [req.body.name];
});

module.exports = router;