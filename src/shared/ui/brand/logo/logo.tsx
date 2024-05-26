import { FC } from "react";
import { tv } from "tailwind-variants";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  taglineHidden?: boolean;
  align?: "left" | "center" | "right";
};

const variants = tv({
  base: "font-bold",
  variants: {
    title: {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
    },
    tagline: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
});

const BrandLogo: FC<BrandLogoProps> = ({ size = "md", taglineHidden = false, align = "left" }) => {
  return (
    <hgroup className="flex w-fit flex-col text-sand-12">
      <h1
        className={variants({
          title: size,
          align,
        })}
      >
        RESAS App
      </h1>
      {!taglineHidden && <h2 className={variants({ tagline: size, align })}>都道府県人口推移グラフ</h2>}
    </hgroup>
  );
};

export { BrandLogo };
