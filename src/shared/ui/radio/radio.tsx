import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

type RadioProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

const Radio: FC<RadioProps> = ({ id, className, label, ...other }) => {
  return (
    <div
      className={twMerge(
        "flex h-10 items-center gap-2 rounded-md px-3 transition has-[:checked]:bg-indigo-4",
        className,
      )}
    >
      <input
        type="radio"
        className="relative size-4 cursor-pointer rounded-full bg-sand-4 outline outline-2 outline-sand-7 before:absolute before:left-1/2 before:top-1/2 before:size-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-indigo-7 before:opacity-0 before:transition checked:bg-indigo-4 checked:outline-indigo-7 checked:before:opacity-100"
        id={id}
        {...other}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export { Radio };
