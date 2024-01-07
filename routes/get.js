const express = require('express')
const router = express.Router()
const db = require('../db/db.js')
const dotenv = require('dotenv')
const queries = require('../db/select.js')

dotenv.config()

router.get("/", (req, res) => {
    res.status(200).json({response: "home users"})

})

router.get("/users", (req, res) => {
    db.query(queries.SELECT_USERS, (err, result) => {
        res.status(200).json({
            response: "route users",
            params: result
        })
    })

})

router.get("/stocks", (req, res) => {
    res.status(200).json({response: "route stocks"})

})

router.get("/dividends", (req, res) => {
    db.query(queries.SELECT_DIVIDENDS, (err, result) => {
        res.status(200).json({
            response: "route users",
            params: result
        })
    })
})

router.get("/incomes", (req, res) => {
    db.query(queries.SELECT_INCOMES, (err, result) => {
        res.status(200).json({
            response: "route users",
            params: result
        })
    })
})

router.get("/assets", (req, res) => {
    res.status(200).json({response: "route assets"})

})

router.get("/sessions", (req, res) => {
    db.query(queries.SELECT_SESSIONS, (err, result) => {
        res.status(200).json({
            response: "route users",
            params: result
        })
    })
})

router.get('/auth', (req, res) => {
    db.query(queries.SELECT_AUTH, [req.body.user, req.body.password], (err, result) => {
            if(req.body.user && req.body.password){
                res.status(200).json({
                    response: "route users",
                    params: result
                })
            }
            else{
                console.log(req.body.password)
                res.status(400).json({
                    error: "authentication error"
                })
            }
    })
})

module.exports = router;