import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0xC7a14237ED47a60Cc7c9004f4225A60A25Ae61F9";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x812120ce911B64c1A9f0C8F55b2d75EEA2008d3E";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction
    const withdrawAmount = ethers.parseUnits("50", 15);
    const withdrawTx = await saveERC20.withdraw(withdrawAmount);

    console.log(withdrawTx);

    withdrawTx.wait();

    const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();

    console.log("Contract balance after withdrawal", contractBalanceAfterWithdrawal);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
