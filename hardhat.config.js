require("@nomicfoundation/hardhat-toolbox");

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/1j1SzbAz4C092GdpYgDb3QQ0MeFB8nDt",
      accounts: ["7a8721a2736356a6b2465994a786be4a3e7dfe95e22bbed42672aef94b9bb977"],
      chainId: 80001,
      gas: 'auto'
    }
  }
};
