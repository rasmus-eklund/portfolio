import { useState, type ReactNode } from "react";
import { bioData } from "./bioData";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Bio = () => {
  return (
    <section className="flex w-full flex-col gap-10 md:gap-20">
      <article className="flex flex-col items-center">
        <h1 className="text-center text-2xl text-sky-950">About me</h1>
        <p>
          Good day, I&apos;m{" "}
          <strong className="font-semibold">Rasmus Eklund</strong>, a former
          researcher in Psychology and now Fullstack Webdeveloper.
        </p>
      </article>
      <div className="flex flex-col gap-10 md:flex-row md:gap-20">
        <Article title="Skills">
          <h3 className="font-bold">Programming languages</h3>
          <Expandable items={bioData.programmingLaguages} />
          <h3 className="font-bold">Tech</h3>
          <Expandable items={bioData.tech} />
        </Article>
        <Article title="Education">
          <ul>
            {bioData.edu.map((item) => (
              <li key={item} className="flex items-center gap-1">
                <EducationIcon className="size-6" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Article>
      </div>
    </section>
  );
};

const Article = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <article className="flex flex-col rounded-b-lg rounded-t-xl bg-sky-200/20">
    <h2 className="rounded-t-lg bg-sky-400 py-1 pl-5 text-xl text-sky-950">
      {title}
    </h2>
    <div className="space-y-2 p-2">{children}</div>
  </article>
);

const Expandable = ({ items }: { items: string[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <li
          className={cn(
            `flex h-8 items-center bg-sky-300 px-2 py-1 transition-all duration-300 ${!open && i > 3 ? "hidden" : ""}`,
          )}
          key={item}
        >
          {item}
        </li>
      ))}
      <Button
        className="h-8"
        variant="ghost"
        onClick={() => setOpen((p) => !p)}
      >
        {open ? "show less" : "show more"}
      </Button>
    </ul>
  );
};

const EducationIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  </svg>
);

export default Bio;
