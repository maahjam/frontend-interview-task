import React, { ComponentProps } from "react";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ComponentProps<"button"> & ButtonProps> = ({
  title,
  className,
  ...rest
}) => (
  <button
    {...rest}
    className={`px-2 transition delay-100 ease-linear py-2 w-36 rounded-3xl shadow-md text-cyan-950  ${className}`}
  >
    {title}
  </button>
);

export default Button;
