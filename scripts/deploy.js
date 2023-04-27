
const hre = require("hardhat");

async function main() {

  const Greeter = await hre.ethers.getContractFactory("IncrementDecrement");
  const greeter = await Greeter.deploy();

  await greeter.deployed();

  console.log(
    `Deployed at ${greeter.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
