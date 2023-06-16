import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  color?: "yellow" | "green";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, color = "green", ...props }: ButtonProps) => {
  return (
    <>
      <button className={`btn btn--${color}`} {...props}>
        {text}
      </button>
    </>
  );
};

export default Button;
