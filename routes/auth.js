const router = require("express").Router();

router.get("/", (req, res) => {
    res.send(`<h1>auth route the env is ${process.env.USERNAME || "unknown"}</h1>`);
});

module.exports = router;
