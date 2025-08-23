import smartContractTracking from "../assets/projects/smartContractTracking.png";
import TradingPlatform from "../assets/projects/TradingPlatform.png";
export const projects = [
  {
    title: "Smart Contract Tracking System",
    subtitle: '"Blockchain Solution"',
    company: "Sixpep Technovations",
    points: [
      "Built a backend system in Node.js to track and manage 5+ blockchain smart contracts.",
      "Integrated ethers.js and MongoDB to process 1M+ transactions per month.",
      "Architected and implemented APIs for real-time contract interaction tracking, resulting in a 25% decrease in processing errors, thereby increasing operational accuracy and improving the overall contract lifecycle management.",
    ],
    image: smartContractTracking,
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "Crypto Trading Platform",
    subtitle: '"Web Application"',
    company: "Doodleblue Innovations",
    points: [
      "Led a 3-member backend team to develop APIs for a trading platform, to handle over 500K+ monthly transactions.",
      "Built a dynamic CMS API to manage team data and website content with real-time updates.",
      "Improved API performance by 30%, enhancing system scalability and response times.",
      "Implemented secure authentication and role-based access, strengthening platform security.",
    ],
    image: TradingPlatform,
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "ERC-20 Token with Staking (BSC Mainnet)",
    subtitle: '"DeFi Application"',
    company: "Sixpep Technovations",
    points: [
      "Architected and deployed an ERC-20 token with staking functionality on BSC, facilitating secure and efficient yield generation.",
      "Executed rigorous audits, achieving 100% vulnerability-free smart contracts and ensuring seamless contract execution.",
      "Used Solidity, Hardhat, and OpenZeppelin for secure and efficient smart contract development.",
    ],
    image: TradingPlatform,
    buttonText: "Learn more",
    buttonLink: "#",
  },
];
