const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
  // Compile our contract and generate the necessary files we need to work with our contract. 
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  /* Hardhat is creating a local ethereum network for us, just for this contract, then after script completes,
    it'll destroy that local network. Everytime you run contract, fresh blockchain. It's like refreshing your
    local server every time so you always start from a clean slate to debug errors. 
  */
  const waveContract = await waveContractFactory.deploy();
  //   wait until contract is officially deployed to blockchain, constructor will run
  await waveContract.deployed();
  // once deployed, waveContract.address will basically give us address of deployed contract. 
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

waveCount = await waveContract.getTotalWaves();

};

const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();