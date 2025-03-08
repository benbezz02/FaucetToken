const ethers = require("ethers");
require("dotenv").config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const INFURA_URL = process.env.SEPHOLIA_URL;
const DEPLOYER_KEY = process.env.DEPLOYER_KEY.startsWith("0x")
    ? process.env.DEPLOYER_KEY.slice(2)
    : process.env.DEPLOYER_KEY;

const ABI = [
    "function faucet(address recipient) public"
];

const callFaucet = async (recipientAddress) => {
    try {
        if (!ethers.isAddress(recipientAddress)) {
            throw new Error("Invalid Ethereum address.");
        }

        const provider = new ethers.JsonRpcProvider(INFURA_URL);
        console.log(DEPLOYER_KEY, provider)
        // Not able to connect to wallet
        const wallet = new ethers.Wallet(DEPLOYER_KEY, provider);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

        console.log(`Sending ${10} FTK to ${recipientAddress}...`);

        const tx = await contract.faucet(recipientAddress);

        console.log("Transaction sent. Hash:", tx.hash);

        await tx.wait();

        console.log("Transaction confirmed:", tx.hash);
        return tx.hash;
    } catch (error) {
        console.error("Error calling faucet function:", error);
        process.exit(1)
    }
};

module.exports = { callFaucet };