import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { ThemeToggle } from "@/features/theme/ui";
import { BrandIcon } from "@/shared/ui/brand/icon";
import { BrandLogo } from "@/shared/ui/brand/logo";
import { Link } from "@/shared/ui/link/link";
import { RepositoryLink } from "./repositoryLink";

type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={twMerge(
        "flex h-16 w-svw items-center justify-between border-b border-b-sand-7 px-4 shadow-lg backdrop-blur-sm desktop:px-[max(4px_,_calc((100svw_-_1280px)_/_2))]",
        className,
      )}
    >
      <Link className="flex items-center gap-2 no-underline" href="/" aria-label="Home Page">
        <BrandIcon size="md" />
        <BrandLogo size="sm" />
      </Link>
      <div className="flex gap-2">
        <ThemeToggle />
        <RepositoryLink />
      </div>
    </header>
  );
};

export { Header };
