import { Moon } from "lucide-react";
import { FC } from "react";
import { IconProps } from "../type";

const MoonIcon: FC<IconProps> = ({ className, size = 24, color = "currentColor", strokeWidth = 2 }) => (
  <Moon className={className} size={size} color={color} strokeWidth={strokeWidth} />
);

export { MoonIcon };
