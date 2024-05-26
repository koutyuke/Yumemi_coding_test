/* eslint-disable react/require-default-props */
import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  loading?: boolean;
  elevation?: "none" | "sm" | "md" | "lg";
  color?: "gray" | "blue" | "red" | "green" | "yellow";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

const buttonVariants = tv({
  base: "p-[0.5em] outline outline-1 transition-all",
  variants: {
    color: {
      gray: "bg-sand-3 text-sand-11 outline-sand-7 hover:bg-sand-4 hover:outline-sand-8",
      red: "bg-tomato-3 text-tomato-11 outline-tomato-7 hover:bg-tomato-4 hover:outline-tomato-8",
      blue: "bg-sky-3 text-sky-11 outline-sky-7 hover:bg-sky-4 hover:outline-sky-8",
      green: "bg-green-3 text-green-11 outline-green-7 hover:bg-green-4 hover:outline-green-8",
      yellow: "bg-yellow-3 text-yellow-11 outline-yellow-7 hover:bg-yellow-4 hover:outline-yellow-8",
    },
    elevation: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    size: {
      sm: "rounded-lg text-sm",
      md: "rounded-lg text-base",
      lg: "rounded-lg text-lg",
    },
    disabled: {
      true: "pointer-events-none cursor-not-allowed opacity-50",
    },
    loading: {
      true: "pointer-events-none cursor-progress opacity-50",
    },
  },
});

const Button: FC<ButtonProps> = ({
  children,
  className,
  size = "md",
  elevation = "none",
  color = "gray",
  disabled = false,
  loading = false,
  ...other
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        buttonVariants({
          color,
          elevation,
          size,
          disabled,
          loading,
        }),
        className,
      )}
      {...other}
    >
      {children}
    </button>
  );
};

export { Button };
