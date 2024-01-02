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
    res.status(200).json({response: "route users"})

})

router.get("/stocks", (req, res) => {
    res.status(200).json({response: "route stocks"})

})

router.get("/dividends", (req, res) => {
    res.status(200).json({response: "route dividends"})

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

module.exports = router;