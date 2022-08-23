import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import "@nomiclabs/hardhat-ethers";
require("dotenv").config({ path: ".env" });



const ALCHEMY_RINKEBY_API_KEY_URL = process.env.ALCHEMY_RINKEBY_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

const ALCHEMY_GOERLI_API_KEY_URL = process.env.ALCHEMY_GOERLI_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY_GOERLI = process.env.ACCOUNT_PRIVATE_KEY_GOERLI;

const ALCHEMY_ROSPTEN_API_KEY_URL = process.env.ALCHEMY_ROSPTEN_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY_ROSPTEN = process.env.ACCOUNT_PRIVATE_KEY_ROSPTEN;

 

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/06360c5fd19c4933beaec6232fd5c29d",
      }
    },
    rinkeby: {
      url: ALCHEMY_RINKEBY_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    goerli: {
      url: ALCHEMY_GOERLI_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY_GOERLI],
    },
    ropsten: {
      url: ALCHEMY_ROSPTEN_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY_ROSPTEN],
    }
    
  }
};


