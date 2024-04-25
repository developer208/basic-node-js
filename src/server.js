import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Server Is Up On Port 8080"
    });
})

app.listen(8080, () => {
    console.log("server is listening on Port 8080");
})