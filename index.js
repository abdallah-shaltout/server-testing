const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");

app.get("/", function (req, res) {
    res.send(`<h1>Hello ${req.header("x-forwarded-for")}</h1>`);
});
app.use("/auth", authRouter);

app.listen(process.env.PORT || 3000, async () => {
    await mongoose.connect(process.env.DATABASE_LINK, { useNewUrlParser: true });
    mongoose.set("strictQuery", true);
});
