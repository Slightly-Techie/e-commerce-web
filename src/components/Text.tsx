import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { TextSize } from "../types";
import { TextSizeStyles } from "../lib/styles";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: TextSize;
};

const Text = ({ className, size = TextSize.small, ...props }: TextProps) => {
  return (
    <p className={cn(TextSizeStyles[size], className)} {...props}>
      {props.children}
    </p>
  );
};

export default Text;
