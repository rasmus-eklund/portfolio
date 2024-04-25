"use client";

import Bio from "@/components/bio/bio";
import Header from "@/components/header/header";
import Projects from "@/components/projects/projects";
import { Button } from "@/components/ui/button";
import useScrollPosition from "@/hooks/getScrollPosition";
import { scrollTo } from "@/lib/utils";
import { useRef, useState } from "react";

const Home = () => {
  const main = useRef<HTMLElement>(null);
  const [scroll, setScroll] = useScrollPosition(main);

  return (
    <main
      ref={main}
      className="no-scrollbar relative flex w-full max-w-5xl grow flex-col items-center gap-6 overflow-y-auto px-2 py-16 md:gap-16"
    >
      <Header />
      <Separator />
      <Bio />
      <Separator />
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

const Separator = () => (
  <div className="h-[1px] w-full shrink-0 bg-sky-950/40" />
);
export default Home;
