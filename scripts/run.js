const main = async () => {
<<<<<<< HEAD
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); //Compile our contract and generate the necessary fields to work with our contract under artifacts directory. 
  const waveContract = await waveContractFactory.deploy(); //Helper function that wil create local ethereum network then after destroyed. 
  await waveContract.deployed(); //await the promise for being deployed to be resolved. 
  console.log("Contract deployed to:", waveContract.address); //Console log out the contract address. Remember the consturctor in the contract will also deploy once it is complete.   
=======
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.01"),
  });
  await waveContract.deployed();
  console.log("Contract addy:", waveContract.address);
>>>>>>> 6fdf5fe41bed59651dda4281f0e72702998ae16a

  /*
   * Get Contract balance
   */
  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  /*
   * Send Wave
   */
  let waveTxn = await waveContract.wave("A message!");
  await waveTxn.wait();

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();