import { IconType } from "@/assets/icons";

export type NavLinks = { href: string; title: string; icon: IconType };
export const navLinks: NavLinks[] = [
  { href: "#about-me", title: "About me", icon: "user" },
  { href: "#skills", title: "Skills", icon: "skill" },
  { href: "#education", title: "Education", icon: "education" },
];
