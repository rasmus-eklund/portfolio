export type Project = {
  title: string;
  github: string;
  href: string;
  description: string;
  tech: string[];
  id: string;
};
export const projectsData: Project[] = [
  {
    id: "matplan",
    title: "MatPlan",
    github: "https://github.com/rasmus-eklund/MatPlanT3",
    href: "https://matplan.dev",
    description:
      "MatPlan is a versatile recipe app in Swedish that goes beyond the traditional recipe management. It allows you to plan your meals for the week, create shopping lists, and optimize your grocery shopping. Whether you're a cooking enthusiast or just trying to simplify your meal planning, MatPlan has got you covered!",
    tech: [
      "Next.js",
      "React",
      "Tailwind",
      "Drizzle",
      "PostgreSQL",
      "Vercel",
      "Kinde",
      "Git+GitHub",
      "Supabase",
      "Meilisearch",
    ],
  },
  {
    id: "rica-banken",
    title: "RICA Banken",
    github: "https://github.com/rasmus-eklund/Budget",
    href: "https://pengar.vercel.app/",
    description:
      "At RICA Banken, you can upload your ICA Banken transactions using password encryption. You can upload transactions from multiple people and their respective accounts. The application will figure out transactions that are internal between the accounts. Keep track of you monthly income and expenses grouped by the categories you provide. Take a look at the demo page if you don't have data to upload.",
    tech: [
      "Next.js",
      "React",
      "Tailwind",
      "NextAuth",
      "Drizzle",
      "PostgreSQL",
      "Supabase",
      "Vercel",
      "Git+GitHub",
    ],
  },
  {
    id: "onchainbet",
    title: "OnChainBet",
    github: "https://github.com/rasmus-eklund/OnChainBet",
    href: "https://onchainbet.vercel.app/",
    description:
      "OnChainBet, an Ethereum-based betting application built with Solidity smart contracts. You can place bets on the Ethereum Sepolia testnet, offering both live and demo modes.",
    tech: [
      "Next.js",
      "React",
      "Tailwind",
      "hardhat",
      "web3.js",
      "ethers.js",
      "Vercel",
      "Git+GitHub",
    ],
  },
];
