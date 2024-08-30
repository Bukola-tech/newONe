import { ethers } from 'hardhat';

async function main() {
    const token = '0xC7a14237ED47a60Cc7c9004f4225A60A25Ae61F9';
  const save = await ethers.deployContract('SaveERC20', [token]);

  await save.waitForDeployment();

  console.log('Save Contract Deployed at ' + save.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x812120ce911B64c1A9f0C8F55b2d75EEA2008d3E