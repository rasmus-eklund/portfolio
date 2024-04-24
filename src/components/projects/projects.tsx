type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="flex flex-col items-center gap-10">
      <h1 className="text-2xl text-sky-950">Projects</h1>
      <Article
        title="MatPlan"
        github="https://github.com/rasmus-eklund/MatPlanT3"
        href="https://matplan.dev"
        description="MatPlan is a versatile recipe app in Swedish that goes beyond the traditional recipe management. It allows you to plan your meals for the week, create shopping lists, and optimize your grocery shopping. Whether you're a cooking enthusiast or just trying to simplify your meal planning, MatPlan has got you covered!"
      />
      <Article
        title="RICA Banken"
        github="https://github.com/rasmus-eklund/Budget"
        href="https://pengar.vercel.app/"
        description="At RICA Banken, you can upload your ICA Banken transactions using password encryption. You can upload transactions from multiple people and their respective accounts. The appliation will figure out transactions that are internal between the accounts. Keep track of you monthly income and expenses grouped by the categories you provide."
      />
    </section>
  );
};

type ArticleProps = {
  title: string;
  href?: string;
  github: string;
  description: string;
};
const Article = ({ github, title, href, description }: ArticleProps) => {
  const className = { icon: "size-6 bg-sky-500 rounded-full" };
  return (
    <article className="rounded-b-lg rounded-t-xl border-b border-sky-700 bg-sky-400 drop-shadow-md">
      <h1 className="rounded-t-lg bg-sky-700 py-3 text-center text-xl font-semibold text-sky-100">
        {title}
      </h1>
      <div className="flex flex-col gap-2 p-5">
        <p className="text-justify">{description}</p>
        {href && (
          <a href={href} className="flex w-fit items-center gap-1">
            <span>Visit page</span>
            <Webpage className={className.icon} />
          </a>
        )}
        <a className="flex w-fit items-center gap-2" href={github}>
          <span>Source code</span>
          <CodeIcon className={className.icon} />
        </a>
      </div>
    </article>
  );
};

const CodeIcon = ({ className }: { className?: string }) => (
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
      d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
    />
  </svg>
);

const Webpage = ({ className }: { className?: string }) => (
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
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

export default Projects;
