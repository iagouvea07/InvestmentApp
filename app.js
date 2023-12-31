const express = require('express')
const dotenv = require('dotenv')
const db = require('./db/db.js')
const router = require('./routes/routes.js')

dotenv.config()
const app = express()

const PORT = process.env.PORT

app.use(express.json())

app.use("/", router.getRouter)
app.use("/", router.postRouter)
//app.use("/", router.putRouter)
//app.use("/", router.deleteRouter)


app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})