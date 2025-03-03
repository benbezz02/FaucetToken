const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/faucet", require("./routes/faucetRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})