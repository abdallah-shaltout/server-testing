const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("<h1>auth route</h1>");
});

module.exports = router;