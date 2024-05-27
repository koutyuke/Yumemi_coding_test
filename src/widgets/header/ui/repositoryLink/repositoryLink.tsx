import { FC } from "react";
import { resasAppSocialLink } from "@/shared/const/social-link";
import { GitHubIcon } from "@/shared/ui/icons/github";
import { Link } from "@/shared/ui/link";

const RepositoryLink: FC = () => {
  const url = resasAppSocialLink.github;
  return (
    <Link
      external
      href={url}
      className="flex h-10 items-center gap-2 rounded-lg bg-[#000] px-2 no-underline outline outline-sand-7 transition-all hover:outline-sand-8"
    >
      <GitHubIcon className="aspect-square h-6 fill-[#fff]" />
      <span className="hidden text-lg font-bold text-[#fff] tablet:block">GitHub</span>
    </Link>
  );
};

export { RepositoryLink };
