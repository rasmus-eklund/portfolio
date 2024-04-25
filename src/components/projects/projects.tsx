import Icon, { IconType } from "@/assets/icons";
import { useState } from "react";
import { projectsData } from "./projectsData";

const Projects = () => {
  return (
    <section className="flex w-full flex-col items-center gap-10">
      <h1 className="text-2xl text-sky-950">Projects</h1>
      {projectsData.map((project) => (
        <Article key={project.title} {...project} />
      ))}
    </section>
  );
};

type ArticleProps = {
  title: string;
  href?: string;
  github: string;
  description: string;
  tech: string[];
};
const Article = ({ github, title, href, description, tech }: ArticleProps) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="flex w-full flex-col gap-2 rounded-b-lg rounded-t-xl bg-sky-400 drop-shadow-md">
      <header className="flex justify-between rounded-t-lg bg-sky-700 px-4 py-3 text-center text-xl font-semibold text-sky-100">
        <h1>{title}</h1>
        <button onClick={() => setOpen((p) => !p)}>
          <Icon icon={open ? "minus" : "plus"} />
        </button>
      </header>
      <p className="px-4 text-justify">{description.split(". ")[0]}.</p>
      <div
        className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ${open ? "grid-rows-[1fr]" : ""}`}
      >
        <div className="flex flex-col gap-2 overflow-hidden px-4">
          <p>{description.split(". ").slice(1).join(". ")}</p>
          <h2>Tech:</h2>
          <ul className="flex flex-wrap gap-2">
            {tech.map((i) => (
              <li className="bg-sky-500/40 px-2 py-1" key={title + i}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="flex items-center justify-between px-4 py-3">
        {href && <AnchorTitle href={href} icon="webpage" title="Visit page" />}
        <AnchorTitle href={github} icon="code" title="Source code" />
      </footer>
    </article>
  );
};

type AnchorTitleProps = { title: string; href: string; icon: IconType };
const AnchorTitle = ({ href, title, icon }: AnchorTitleProps) => (
  <a className="flex w-fit items-center gap-1" href={href} target="_blank">
    <span>{title}</span>
    <Icon icon={icon} />
  </a>
);
export default Projects;
