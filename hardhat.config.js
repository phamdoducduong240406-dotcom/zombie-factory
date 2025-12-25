import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

// Chỉ cần lấy mỗi Key ví thôi
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

export default {
  solidity: "0.8.24",
  networks: {
    bscTestnet: {
      // Dán trực tiếp link Public Node vào đây cho chắc ăn
      url: "https://bsc-testnet.publicnode.com", 
      chainId: 97,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};