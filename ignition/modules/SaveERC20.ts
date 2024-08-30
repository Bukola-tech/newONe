import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x32f1e0e19ad13fe3ff1799012a88bc33b765ef5c";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
// SaveERC20 : 
