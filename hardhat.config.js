require("@nomiclabs/hardhat-waffle");
<<<<<<< HEAD
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
=======

>>>>>>> 6fdf5fe41bed59651dda4281f0e72702998ae16a
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "",
<<<<<<< HEAD
      accounts: [''],
=======
      accounts: [""],
>>>>>>> 6fdf5fe41bed59651dda4281f0e72702998ae16a
    },
  },
};

