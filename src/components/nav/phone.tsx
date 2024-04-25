import Icon from "@/assets/icons";
import { projectsData } from "../projects/projectsData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "../ui/dropdown-menu";
import { navLinks } from "./navData";

const Phone = () => {
  return (
    <div className="flex md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icon icon="hamburger" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Portfolio</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {navLinks.map(({ title, href, icon }) => (
              <DropdownMenuItem key={title} asChild>
                <a className="space-x-2" href={href}>
                  <Icon icon={icon} />
                  <span>{title}</span>
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="space-x-2">
                <Icon icon="webpage" /> <span>Projects</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {projectsData.map(({ title, id }) => (
                    <DropdownMenuItem key={id} asChild>
                      <a className="space-x-2" href={`#${id}`}>
                        <Icon icon="code" /> <span>{title}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Phone;
