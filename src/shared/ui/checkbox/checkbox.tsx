import { ComponentPropsWithoutRef, FC } from "react";

type CheckboxProps = Omit<ComponentPropsWithoutRef<"input">, "type" | "onChange"> & {
  label: string;
  onChecked?: () => void;
  onUnchecked?: () => void;
};

const Checkbox: FC<CheckboxProps> = ({ id, className, label, onChecked, onUnchecked, ...other }) => {
  return (
    <div className="flex h-10 items-center gap-2 rounded-md px-3 transition has-[:checked]:bg-indigo-4">
      <input
        type="checkbox"
        className="relative size-4 cursor-pointer rounded-sm bg-sand-4 outline outline-2 outline-sand-7 before:absolute before:left-1/2 before:top-1/2  before:size-2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-indigo-7 before:opacity-0 checked:bg-indigo-4 checked:outline-indigo-7 checked:before:opacity-100"
        id={id}
        onChange={event => {
          if (event.currentTarget.checked) {
            onChecked?.();
          } else {
            onUnchecked?.();
          }
        }}
        {...other}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export { Checkbox };
