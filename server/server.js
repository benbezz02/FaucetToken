const express = require("express");
const connectDb = require("./config/dbConnection");
const { callFaucet } = require("./domain/transfer");
const dotenv = require("dotenv").config();

const TEST_RECEIVER_KEY = process.env.TEST_RECEIVER_KEY;

//callFaucet(TEST_RECEIVER_KEY);
connectDb();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/faucet", require("./routes/faucetRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})