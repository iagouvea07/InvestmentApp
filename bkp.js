/*router.post("/stocks", (req, res) => {

    const value = {
        ticker: req.body.ticker,
        name: req.body.name
    }

    db.query(queries.INSERT_STOCKS, [value.ticker, value.name], (err, result) => {

        if (err) {handleDatabaseError(err, res)}
        
        res.status(200).json({
            response: "Stock added successfully",
            ticker: value.ticker,
            name: value.name
        })
    })
})

router.post("/users", (req, res) => {
    const value = {
        name: req.body.name, 
        user: req.body.user, 
        email: req.body.email, 
        password: req.body.password, 
        valid_id: req.body.valid_id
    }

    db.query(queries.INSERT_STOCKS, [value.ticker, value.name], (err, result) => {

        if (err) {handleDatabaseError(err, res)}
        
        res.status(200).json({
            response: "User added successfully",
            ticker: value.ticker,
            name: value.name
        })
    })
})





*/

