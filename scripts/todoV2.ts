import { ethers, upgrades } from "hardhat";
async function main() {

  // Deploying upgrading......
  const TodoListV2 = await ethers.getContractFactory("TodoListV2");
  console.log("deploying implementation.......");
  
  const todolist = await upgrades.upgradeProxy("0x46761fc8Ed37851cd902327A3b3b35BB5F2EbF2a", TodoListV2);
  console.log("this is an address",todolist.address);
  
  await todolist.deployed();

}   

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


