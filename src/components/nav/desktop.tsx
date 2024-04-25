import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { projectsData } from "../projects/projectsData";
import Icon from "@/assets/icons";
import { navLinks } from "./navData";

const Desktop = () => {
  return (
    <ul className="hidden justify-evenly gap-10 text-sky-950 md:flex">
      {navLinks.map(({ title, href }) => (
        <li key={title}>
          <a href={href}>{title}</a>
        </li>
      ))}
      <li className="text-sky-950">
        <div className="flex items-center">
          <a href="#projects">Projects</a>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Icon icon="chevronDown" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {projectsData.map(({ title, id }) => (
                <DropdownMenuItem key={id} asChild>
                  <a className="space-x-2" href={`#${id}`}>
                    <Icon icon="code" /> <span>{title}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </li>
    </ul>
  );
};

export default Desktop;
