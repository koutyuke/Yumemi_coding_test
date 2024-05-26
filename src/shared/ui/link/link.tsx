import NextLink, { LinkProps as NextLinkProps } from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type LinkProps = NextLinkProps & {
  children: ReactNode;
  external?: false;
  className?: string;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  external: true;
};

const Link = ({ children, className, ...props }: LinkProps | AnchorProps) =>
  props.external ? (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge("underline underline-offset-2", className)}
    >
      {children}
    </a>
  ) : (
    <NextLink {...props} className={twMerge("underline underline-offset-2", className)}>
      {children}
    </NextLink>
  );

export { Link };
