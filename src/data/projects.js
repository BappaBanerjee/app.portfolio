import smartContractTracking from "../assets/projects/smartContractTracking.png";
import TradingPlatform from "../assets/projects/TradingPlatform.png";
export const projects = [
  {
    title: "Tracker",
    subtitle: '"Smart Contract"',
    description: `
      Developed a robust backend in Node.js to track and manage 5+ blockchain smart contracts. 
      Integrated ethers.js and MongoDB to handle over 1M transactions per month efficiently. 
      Designed and implemented APIs for real-time contract interaction tracking, reducing processing 
      errors by 25% and improving operational accuracy and contract lifecycle management.
      `,
    image: smartContractTracking,
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "platform",
    subtitle: '"Crypto Trading"',
    description: `Led a backend team of three in designing and building robust APIs for a
       high-traffic trading platform, capable of handling over 500K monthly transactions. 
       Developed a dynamic CMS to manage team data and website content with real-time updates, 
       improving operational efficiency. Optimized API performance by 30%, ensuring faster response 
       times and better scalability. Implemented secure authentication and role-based access controls, 
       reinforcing platform security and reliability.`,
    image: TradingPlatform,
    buttonText: "Learn more",
    buttonLink: "#",
  },
];
