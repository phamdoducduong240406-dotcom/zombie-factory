import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"; // Lệnh này giúp đọc file .env

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const BSC_TESTNET_URL = process.env.BSC_TESTNET_URL || "";

export default {
  solidity: "0.8.24",
  networks: {
    // Cấu hình mạng BSC Testnet
    bscTestnet: {
      url: BSC_TESTNET_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 97,
    },
    // Mạng nội bộ (Local) mặc định không cần cấu hình thêm
    hardhat: {
    },
  },
};