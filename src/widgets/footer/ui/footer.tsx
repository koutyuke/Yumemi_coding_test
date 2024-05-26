import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { creatorSocialLink, resasApiUrl, resasAppSocialLink } from "@/shared/const/social-link";
import { BrandLogo } from "@/shared/ui/brand/logo/logo";
import { FigmaIcon } from "@/shared/ui/icons/figma";
import { GitHubIcon } from "@/shared/ui/icons/github";
import { Link } from "@/shared/ui/link/link";

type FooterProps = {
  className?: string;
};

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={twMerge(
        "flex w-svw flex-col gap-2 border-t border-t-sand-7 bg-sand-1 px-4 pb-4 pt-6 desktop:px-[max(4px_,_calc((100svw_-_1280px)_/_2))]",
        className,
      )}
    >
      <div className="grid h-56 grid-cols-12 grid-rows-2 gap-2 tablet:h-28 tablet:grid-rows-1">
        <section className="col-[1_/_13] flex flex-col items-center justify-center gap-4 tablet:col-[1_/_7]">
          <BrandLogo size="lg" align="center" />
          <div className="flex gap-2">
            <Link href={resasAppSocialLink.github} external aria-label="GitHub Repository Link">
              <GitHubIcon className="aspect-square h-4 fill-pure no-underline" />
            </Link>
            <Link href={resasAppSocialLink.figma} external aria-label="Figma Design Link">
              <FigmaIcon className="aspect-square h-4 stroke-pure no-underline " />
            </Link>
          </div>
        </section>
        <section className="col-[3_/_7] row-start-2 flex flex-col gap-y-2 pt-4 tablet:col-[8_/_10] tablet:row-start-1">
          <h3 className="text-lg font-bold">Creator</h3>
          <ul className="flex flex-col gap-y-2 pl-2 text-xs">
            <li>
              <Link href={creatorSocialLink.github} className="transition hover:text-sand-11">
                GitHub
              </Link>
            </li>
            <li>
              <Link href={creatorSocialLink.twitter} className="transition hover:text-sand-11">
                X(Twitter)
              </Link>
            </li>
          </ul>
        </section>
        <section className="col-[8_/_13] row-start-2 flex flex-col gap-y-2 pt-4 tablet:col-[10_/_12] tablet:row-start-1">
          <h3 className="text-lg font-bold">Resas API</h3>
          <ul className="flex flex-col gap-y-2 pl-2 text-xs">
            <li>
              <Link href={resasApiUrl.home} className="transition hover:text-sand-11">
                Home Page
              </Link>
            </li>
            <li>
              <Link href={resasApiUrl.api} className="transition hover:text-sand-11">
                API Reference
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <p className="text-center text-sm">&copy;koutyuke!!</p>
    </footer>
  );
};

export { Footer };
