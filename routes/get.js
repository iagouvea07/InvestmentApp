const express = require('express')
const router = express.Router();
const db = require('../db/db.js');
const dotenv = require('dotenv')

dotenv.config()

router.get("/", (req, res) => {
    res.status(200).json({response: "route home"})

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
    res.status(200).json({response: "route sessions"})

})

module.exports = router;