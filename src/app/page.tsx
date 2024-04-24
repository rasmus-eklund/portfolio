"use client";

import Bio from "@/components/bio/bio";
import Header from "@/components/header/header";
import Projects from "@/components/projects/projects";
import { Button } from "@/components/ui/button";
import useScrollPosition from "@/hooks/getScrollPosition";
import { scrollTo } from "@/lib/utils";
import { useRef } from "react";

const Home = () => {
  const main = useRef<HTMLElement>(null);
  const [scroll, setScroll] = useScrollPosition(main);

  return (
    <main
      ref={main}
      className="no-scrollbar relative flex max-w-5xl grow flex-col items-center gap-52 overflow-y-auto py-16 px-2"
    >
      <Header />
      <Bio />
      <Projects />

      <Button
        onClick={() => scrollTo(0, main, setScroll)}
        className={`fixed bottom-10 right-4 w-fit transition-opacity duration-300 ${
          scroll > 200 ? "opacity-100" : "hidden opacity-0"
        }`}
      >
        Back to the top
      </Button>
    </main>
  );
};

export default Home;
