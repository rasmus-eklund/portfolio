import { useState, type ReactNode } from "react";
import { bioData } from "./bioData";
import { cn } from "@/lib/utils";
import Icon from "@/assets/icons";

const Bio = () => {
  return (
    <section className="flex w-full flex-col gap-10 text-sky-950 md:gap-20">
      <article
        className="flex scroll-mt-20 flex-col items-center gap-5 md:scroll-mt-0"
        id="about-me"
      >
        <h1 className="text-center text-2xl ">About me</h1>
        <p>
          {getGreeting()}, I&apos;m{" "}
          <strong className="font-semibold">Rasmus Eklund</strong>, a former
          researcher in Psychology and now Fullstack Web Developer.
        </p>
      </article>
      <div className="flex flex-col gap-10 md:flex-row md:gap-20">
        <Article title="Skills" id="skills">
          <h3 className="font-bold">Programming languages</h3>
          <Expandable items={bioData.programmingLaguages} />
          <h3 className="font-bold">Tech</h3>
          <Expandable items={bioData.tech} />
        </Article>
        <Article title="Education" id="education">
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            {bioData.edu.map((item) => (
              <li key={item.title} className="flex items-center gap-2">
                <Icon icon="education" className="self-start" />
                <div className="flex w-full flex-col">
                  <div className="flex justify-between">
                    <span className="font-semibold">{item.title}</span>
                    <div className="flex items-center gap-1">
                      {item.years.from === item.years.to ? (
                        <span>{item.years.from}</span>
                      ) : (
                        <>
                          <span>{item.years.from}</span>
                          <span>&ndash;</span>
                          <span>{item.years.to}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <span className="italic">{item.place}</span>
                </div>
              </li>
            ))}
          </ul>
        </Article>
      </div>
    </section>
  );
};

const Article = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <article
    id={id}
    className="flex scroll-mt-20 flex-col rounded-b-lg rounded-t-xl bg-sky-200/20 md:w-1/2 md:scroll-mt-0"
  >
    <h2 className="rounded-t-lg bg-sky-400 py-1 pl-5 text-xl">{title}</h2>
    <div className="space-y-2 p-2">{children}</div>
  </article>
);

const Expandable = ({ items }: { items: string[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <ul className="flex flex-wrap">
      {items.map((item, i) => (
        <li
          className={cn(
            `m-1 flex max-h-8 select-none items-center bg-sky-300 px-2 py-1 transition-all duration-1000 hover:bg-sky-400 ${!open && i > 2 ? "m-0 px-0 py-0 text-[0] opacity-0" : ""}`,
          )}
          key={item}
        >
          {item}
        </li>
      ))}
      <button
        className="m-1 bg-sky-300 transition-colors duration-300 hover:bg-sky-400"
        onClick={() => setOpen((p) => !p)}
      >
        <Icon icon={open ? "minus" : "plus"} className="size-8" />
      </button>
    </ul>
  );
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else if (hour >= 18 && hour < 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
};
export default Bio;
