import { Sun } from "lucide-react";
import { FC } from "react";
import { IconProps } from "../type";

const SunIcon: FC<IconProps> = ({ className, size = 24, color = "currentColor", strokeWidth = 2 }) => (
  <Sun className={className} size={size} color={color} strokeWidth={strokeWidth} />
);

export { SunIcon };
