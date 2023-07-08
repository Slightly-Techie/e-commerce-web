type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="py-2 placeholder:text-[#D9D9D9] border-b-2 w-full focus:outline-none placeholder:text-[12px] placeholder:leading-4 font-inter"
    />
  );
};

export default Input;
