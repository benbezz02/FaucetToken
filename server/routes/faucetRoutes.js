const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Faucet ON" })
});

router.route('/').post((req, res) => {
    res.status(200).send({ message: "FaucetTokens Transferred" })
});

module.exports = router;