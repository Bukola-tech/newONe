import { ethers } from 'hardhat';

async function main() {
  const token = await ethers.deployContract('Web3CXI');

  await token.waitForDeployment();

  console.log('Web3CXI Contract Deployed at ' + token.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0xC7a14237ED47a60Cc7c9004f4225A60A25Ae61F9