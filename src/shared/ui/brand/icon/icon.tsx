import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type ImageProps = {
  size: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const BrandIcon: FC<ImageProps> = ({ className, size }) => {
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96,
  };
  return (
    <Image
      src="/icon.jpeg"
      alt="Brand Icon Image at RESAS App"
      priority
      width={sizeMap[size]}
      height={sizeMap[size]}
      className={twMerge("aspect-square rounded-full", className)}
    />
  );
};

export { BrandIcon };
