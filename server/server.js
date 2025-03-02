const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use("/faucet", require("./routes/faucetRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})