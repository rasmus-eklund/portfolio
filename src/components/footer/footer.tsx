const footer = () => {
  return (
    <footer className="sticky bottom-0 flex w-full items-center justify-between rounded-t-md border-t border-t-sky-950/50 bg-sky-400 px-2 py-1 font-bold">
      <span className="text-sky-950">&copy; Rasmus Eklund</span>
      <div className="flex items-center gap-2">
        <a
          className="text-sky-950"
          href="https://www.linkedin.com/in/rasmus-eklund/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="text-sky-950"
          href="https://github.com/rasmus-eklund"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default footer;
