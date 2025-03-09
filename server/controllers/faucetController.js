const Transfer = require("../models/transferModels")
const cosmosCheck = require("../domain/cosmos")

//@desc Check if Server is active
//@route GET /faucet
//@access public
const getFaucet = async (req, res) => {
    const transfers = await Transfer.find()
    console.log("Faucet ON")
    res.status(200).json(transfers);
};

//@desc Transfer Tokens
//@route POST /faucet
//@access public
const postFaucet = async (req, res) => {
    console.log(req.body);
    const { ETH_address, COSMOS_address } = req.body;

    if (!ETH_address || !COSMOS_address) {
        res.status(400);
        return res.status(403).json({ error: "Must contain ETH_address and COSMOS_address" });
    }

    const isDelegator = await cosmosCheck.checkIfCosmosDelegator(COSMOS_address);
    if (!isDelegator) {
        return res.status(403).json({ error: "Cosmos address is not a delegator" });
    }

    const sixHoursAgo = Date.now() - 6 * 60 * 60 * 1000; // 6 hours ago
    const startOfDay = new Date().setHours(0, 0, 0, 0); // Start of the current day
    console.log(sixHoursAgo, startOfDay)

    const todayTransfers = await Transfer.find({
        COSMOS: COSMOS_address,
        dateTime: { $gte: new Date(startOfDay) },
    });

    if (todayTransfers.length >= 3) {
        return res.status(429).json({ error: "Limit of 3 transfers per day reached for this Cosmos address" });
    }

    const recentClaim = todayTransfers.some((transfer) => transfer.dateTime.getTime() >= sixHoursAgo);
    if (recentClaim) {
        return res.status(429).json({ error: "A transfer has already been made for this Cosmos address in the last 6 hours" });
    }

    const new_transfer = await Transfer.create({ ETH: ETH_address, COSMOS: COSMOS_address });

    console.log("FaucetTokens Transferred")
    res.status(200).json(new_transfer);
};

module.exports = { getFaucet, postFaucet };