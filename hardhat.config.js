require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/TBtLpG6Vj7vHhjsxUc_nOmMxmTlUrETr",
      accounts: ["ca855269e40af8d5bdbf59da9a1da7ccf4ea0dcd682f975cf6359f8743bc2615"],
    },
  },
};

