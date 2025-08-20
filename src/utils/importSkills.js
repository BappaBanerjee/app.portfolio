// src/utils/importSkills.js
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const skillsImages = importAll(
  require.context("../assets/skills", false, /\.(png|jpe?g|svg)$/)
);

const customOrder = [
  "JS",
  "TS",
  "NodeJs",
  "MongoDB",
  "Postgresql",
  "Rust",
  "Solidity",
  "Ethereum",
  "Hardhat",
  "Foundry",
  "Remix",
  "Postman",
  "Swagger",
  "Git",
  "GitHub",
];

export const skillsList = customOrder.map((skillName) => ({
  name: skillName,
  img:
    skillsImages[`${skillName}.png`]?.default ||
    skillsImages[`${skillName}.png`],
}));
