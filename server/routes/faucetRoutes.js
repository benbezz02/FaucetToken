const express = require('express');
const router = express.Router();
const { getFaucet, postFaucet } = require("../controllers/faucetController")

router.route('/').get(getFaucet);

router.route('/').post(postFaucet);

module.exports = router;