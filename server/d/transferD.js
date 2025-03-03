const ethers = require("ethers");

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const DEPLOYER_KEY = process.env.DEPLOYER_KEY;
const INFURA_URL = process.env.INFURA_URL;

const provider = new ethers.JsonRpcProvider(INFURA_URL);
const wallet = new ethers.Wallet(DEPLOYER_KEY, provider);


const main = async () => {
    const balance = await provider.getBalance(DEPLOYER_KEY)

    console.log(balance)
};

main()