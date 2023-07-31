import { forwardRef } from "react";

type CheckboxProps = React.HTMLAttributes<HTMLInputElement> & {
  labelText: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ labelText, ...props }, ref) => {
    return (
      <label className="main">
        <input type="checkbox" {...props} ref={ref} />
        <span className="geekmark"></span>

        <span className="pl-4">{labelText}</span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
