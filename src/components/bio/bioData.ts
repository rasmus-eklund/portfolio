const edu: {
  title: string;
  place: string;
  years: { from: number; to: number };
}[] = [
  {
    title: "Python Developer",
    place: "Lexicon IT Proﬀs",
    years: { from: 2024, to: 2024 },
  },
  {
    title: "Fullstack JavaScript Developer",
    place: "</salt>",
    years: { from: 2023, to: 2023 },
  },
  {
    title: "Ph.D. Psychology",
    place: "Stockholm University",
    years: { from: 2016, to: 2019 },
  },
  {
    title: "M.Sc. Cognitive Neuroscience",
    place: "Maastricht University",
    years: { from: 2012, to: 2013 },
  },
  {
    title: "B.Sc. Cognitive Neuroscience",
    place: "Högskolan i Skövde",
    years: { from: 2009, to: 2012 },
  },
  {
    title: "Math and Computer Science",
    place: "Hultsfreds Gymnasium",
    years: { from: 2005, to: 2008 },
  },
];
const programmingLaguages = [
  "Typescript",
  "JavaScript",
  "Python",
  "Matlab",
  "R",
];
const tech = [
  "HTML",
  "Node.js",
  "Next.js",
  "React.js",
  "CSS",
  "Tailwind",
  "Express",
  "React Query",
  "NextAuth",
  "D3",
  "zod",
  "tRPC",
  "Prisma",
  "Drizzle",
  "Mongoose",
  "Jest",
  "Mocha",
  "Cypress",
  "React Testing Library",
  "web3",
  "Ethers.js",
  "viem",
  "hardhat",
  "Django",
  "Flask",
  "Numpy",
  "Pandas",
  "MNE",
  "Psychopy",
  "Git",
  "GitHub",
  "REST",
  "Docker",
  "Meilisearch",
];

const databases = [
  "Postgresql",
  "MongoDB",
  "Mysql",
  "sqlite",
  "Cosmos",
  "Supabase",
  "Fly.io",
];

export const bioData = { edu, programmingLaguages, tech, databases };
