import { cn } from "../../lib/utils";

type InputGroupProps = React.HTMLAttributes<HTMLDivElement>;

const InputGroup = ({ className, ...props }: InputGroupProps) => {
  return <div className={cn("space-y-1", className)}>{props.children}</div>;
};

export default InputGroup;
