import { ethers, upgrades } from "hardhat";
// import { ethers } from "hardhat";

async function main() {
  // Deploying
  const TodoList = await ethers.getContractFactory("TodoList");
  console.log("deploying proxy, admin proxy, implementation contract.....");
  
  const todolist = await upgrades.deployProxy(TodoList, [0], {initializer: "store"});
  console.log("this is an address",todolist.address);
  
  await todolist.deployed();

  // Upgrading
  // const BoxV2 = await ethers.getContractFactory("BoxV2");
  // const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});