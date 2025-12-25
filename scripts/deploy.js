import hre from "hardhat";

async function main() {
  console.log("Dang bat dau deploy...");

  const ZombieFactory = await hre.ethers.getContractFactory("ZombieFactory");

  const zombie = await ZombieFactory.deploy();
   
  await zombie.waitForDeployment();

  console.log("Thanh cong! ZombieFactory da duoc deploy tai dia chi:", zombie.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});