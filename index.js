const express = require("express");
const app = express();
const authRouter = require("./routes/auth");

app.get("/", function (req, res) {
    res.send(`<h1>Hello ${req.header("x-forwarded-for")}</h1>`);
});
app.use("/auth", authRouter);

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
